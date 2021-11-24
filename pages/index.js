/** @jsx jsx */
/** @jsxRuntime classic */
// noinspection ES6UnusedImports
import {Box, Flex, jsx, Themed} from 'theme-ui'
//
import Head from 'next/head'
import Layout from '@/components/layout'
import Header from "@/components/header";
import Main from "@/components/main";
import HeroPost from "@/components/hero-post";
import MoreStories from "@/components/more-stories";

import {getAllPostsForHome, getPage} from "@/lib/api";

/**
 * @param {string} posts[].thumbnail
 * @returns {JSX.Element}
 * @constructor
 */
function Index({allPosts, page}) {

    const morePosts = allPosts.slice(1)
    return (
        <Layout>
            <Head>
                <title>Cookalish</title>
            </Head>
            <Header/>
            <Main>

                {page && <Box as="article" sx={{
                    backgroundColor: '#222',
                    marginBottom: '1rem',
                    borderRadius: '7px',
                    padding: '0 1rem 1rem',
                    overflow: 'hidden'
                }}>
                    <h1>{page.title}</h1>

                    <div>{page.metadata?.content}</div>
                </Box>}

                {allPosts.slice(0, 5).map((heroPost) => <HeroPost
                    id={heroPost.id}
                    key={heroPost.id}
                    coverImage={heroPost.metadata?.hero?.imgix_url}
                    title={heroPost.title}
                    link={'/posts/' + heroPost.slug}
                    excerpt={heroPost.metadata?.description}
                />)}

                {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
            </Main>
        </Layout>
    )
}

export async function getStaticProps({preview}) {

    const page = (await getPage('6068bbc64f3f5e0007179405', preview)) || null;

    const allPosts = (await getAllPostsForHome(preview)) || []
    return {
        props: {
            allPosts,
            page
        },
    }
}

export default Index
