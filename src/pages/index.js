/** @jsxRuntime classic */
/** @jsx jsx */

import Head from 'next/head'
import {jsx, useColorMode} from 'theme-ui'
import {Image} from "rebass";

export default function Home() {

    const [colorMode, setColorMode] = useColorMode()
    return (
        <div>
            <Head>
                <title>Cookalish</title>
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
                }}>
                    <span sx={{cursor: 'pointer'}} onClick={() => {
                        setColorMode(colorMode === 'default' ? 'dark' : 'default')
                    }}>
                        {colorMode === 'default' ? 'Make it dark! 🌜' : 'Rise the sun! 🌞'}
                    </span>
                </header>

                <main
                    sx={{
                        width: '100%',
                        flex: '1 1 auto',
                    }}>

                    <div
                        sx={{
                            maxWidth: 768,
                            mx: 'auto',
                            px: 3,
                        }}>

                        <h1>🍅 Tomato Kartoffel Potato</h1>

                        <Image
                            src="/recipes/potato-kartoffel-tomato.jpg"
                            alt="A tin oven dish with baked potatoes in strained tomatoes, topped with fresh parsley"
                            sx={{
                                width: 300,
                                height: 400,
                                borderRadius: 5
                            }}
                        />

                        <h2>🍲 Ingredients</h2>

                        <ul>
                            <li>500 grams small Bio-Potatos</li>
                            <li>1 tin of strained tomatoes</li>
                            <li>Salt & Pepper (coarse, mill)</li>
                            <li>Rosemary (ground)</li>
                            <li>1 read Onion</li>
                            <li>Fresh parsley</li>
                        </ul>

                        <h2>👨‍🍳 Preparation</h2>

                        <p>Wash small round potatoes with skin well, if necessary cut them into small pieces.</p>
                        <p>Put them in the oven together with a lot of olive oil, season well with rosemary, salt and
                            pepper. Stir well.</p>
                        <p>Put into the oven at 250°. Bake until potatoes are lightly browned.</p>
                        <p>Cut 1 red onion into small pieces and put it into the dish with strained tomatoes. Add maybe
                            1 half glass of water and mix well.</p>
                        <p>Then put it in the oven again and let it braise for about 30 minutes. Observe that it does
                            not burn.</p>
                        <p>Chop one or two bunches of fresh, crushed parsley finely and sprinkle over the potatoes.</p>
                        <p>Easy. Done. </p>
                    </div>
                </main>
                <footer
                    sx={{
                        width: '100%',
                        padding: '1rem'
                    }}>
                   ❤ Made with a delicious love for the world! 🥙
                </footer>

            </div>
        </div>
    )
}
