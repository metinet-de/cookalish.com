import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../componets/container'
import PostBody from '../../componets/post-body'
import PostHeader from '../../componets/post-header'
import Layout from '../../componets/layout'
import {getAllPostsWithSlug, getPostAndMorePosts} from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import PostTitle from "../../componets/post-title";
import {APP_PROJECT_NAME} from "../../lib/constants";
import Hero from "../../componets/Hero";
import {useColorMode} from "theme-ui";
import {Box} from "rebass";

export default function Post({post, morePosts, preview}) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404}/>
    }
    const [colorMode, setColorMode] = useColorMode()
    return (
        <Layout preview={preview}>
            <Container>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
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

                                <header sx={{
                                    width: '100%',
                                    flex: '1 1 auto',
                                    padding: '1rem'
                                }}><span sx={{cursor: 'pointer'}}
                                         onClick={() => setColorMode(colorMode === 'default' ? 'light' : 'default')}>
                                        {colorMode === 'light' ? 'Make it dark! 🌜' : 'Rise the sun! 🌞'}
                                    </span></header>

                                <main sx={{
                                    width: '100%',
                                    flex: '1 1 auto',
                                }}>
                                    <div sx={{
                                        maxWidth: 768,
                                        mx: 'auto',
                                        px: 3,
                                    }}>
                                        <PostHeader
                                            title={post.title}
                                            date={post.created_at}
                                            author={post.metadata.author}
                                        />

                                        {/*<Box sx={{background: 'green'}} width={['100%', '50%', '25%']}>hello</Box>*/}

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
                                </main>
                            </div>
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export async function getStaticProps({params, preview = null}) {
    const data = await getPostAndMorePosts(params.slug, preview)
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

export async function getStaticPaths() {
    const allPosts = (await getAllPostsWithSlug()) || []
    return {
        paths: allPosts.map((post) => `/posts/${post.slug}`),
        fallback: true,
    }
}
