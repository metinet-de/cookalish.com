/** @jsx jsx */
/** @jsxRuntime classic */
// noinspection ES6UnusedImports
import {Box, Flex, jsx, Themed} from 'theme-ui'

import Head from 'next/head'
import Layout from '@/components/layout'
import Header from "@/components/header";
import Main from "@/components/main";
import {getPage} from "@/lib/api";

/**
 * @param page
 * @returns {JSX.Element}
 * @constructor
 */
export default function About({page}) {
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
            </Main>
        </Layout>
    )
}

export async function getStaticProps({preview}) {
    const page = (await getPage('6068c7fc24f00200079fcc26', preview)) || null;
    return {
        props: {
            page
        },
    }
}
