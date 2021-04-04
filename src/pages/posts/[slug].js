/** @jsxImportSource theme-ui */

import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import {getAllPostsWithSlug, getPost} from '@/lib/api'

import {Box} from "rebass";
import Head from 'next/head'
import {APP_PROJECT_NAME} from "@/lib/constants";

import Main from '../../components/main'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import markdownToHtml from '../../lib/markdownToHtml'
import Hero from "../../components/Hero";
import Loader from "../../components/loader";

export default function Post({post, morePosts, preview}) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404}/>
    }
    return (
        <Layout preview={preview}>
            <Main>
                {router.isFallback ? (<Loader/>) : (
                    <article>
                        <Head>
                            <title>
                                {post.title} | {APP_PROJECT_NAME}
                            </title>
                            <meta
                                property="og:image"
                                content={post.metadata.hero}
                            />
                        </Head>

                        <div sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: '100vH',
                        }}>
                            <PostHeader
                                title={post.title}
                                date={post.created_at}
                                author={post.metadata.author}
                            />

                            <Box p={3} width={['100%', '50%']}>
                                <Hero image={post.metadata.hero}/>
                            </Box>

                            <Box p={3} width={['100%', '50%']}>
                                <h2>🍲 Ingredients</h2>
                                <PostBody content={post.ingredients}/>
                            </Box>

                            <h2>👨‍🍳 Preparation</h2>
                            <PostBody content={post.preparation}/>
                        </div>
                    </article>
                )}
            </Main>
        </Layout>
    )
}

export async function getStaticPaths() {
    const allPosts = (await getAllPostsWithSlug()) || []
    return {
        paths: allPosts.map((post) => `/posts/${post.slug}`),
        fallback: true,
    }
}

export async function getStaticProps({params, preview = null}) {
    const data = await getPost(params.slug)
    const ingredients = await markdownToHtml(data.post?.metadata?.incredients || '');
    const preparation = await markdownToHtml(data.post?.metadata?.preparation || '');
    return {
        props: {
            preview,
            post: {
                ...data.post,
                ingredients,
                preparation,
            },
            morePosts: data.morePosts || [],
        },
    }
}
