/** @jsx jsx */
/** @jsxRuntime classic */
// noinspection ES6UnusedImports
import {jsx, useColorMode} from 'theme-ui'

import Cosmic from 'cosmicjs'
import Head from 'next/head'
import Container from './../componets/container'
import Layout from './../componets/layout'
import Intro from "../componets/intro";
import HeroPost from "../componets/hero-post";
import MoreStories from "../componets/more-stories";

function Index({posts}) {
    const heroPost = posts[0]
    const morePosts = posts.slice(1)
    return (
        <Layout>
            <Head>
                <title>Cookalish</title>
            </Head>
            <Container>
                <Intro/>
                {heroPost && (
                    <HeroPost title={heroPost.title} coverImage={heroPost.thumbnail} />
                )}
                {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
            </Container>
        </Layout>
    )
}


const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY

const bucket = Cosmic().bucket({
    slug: BUCKET_SLUG,
    read_key: READ_KEY,
})


// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    let url = 'https://api.cosmicjs.com/v1/' + process.env.COSMIC_BUCKET_SLUG + '?read_key=' + process.env.COSMIC_READ_KEY;
    const res = await fetch(url)
    const posts = (await res.json()).bucket?.objects
    return {
        props: {
            posts,
        },
    }
}

export default Index
