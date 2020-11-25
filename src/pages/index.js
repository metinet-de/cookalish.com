/** @jsxRuntime classic */
/** @jsx jsx */

import Head from 'next/head'
import {jsx, useColorMode} from 'theme-ui'

export default function Home() {

    const [colorMode, setColorMode] = useColorMode()
    return (
        <div>
            <Head>
                <title>Cookalish</title>
            </Head>

            <div></div>

        </div>
    )
}
