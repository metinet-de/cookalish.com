import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cookalish</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Cookalish</h1>
                <p className={styles.description}>
                    <div className={styles.bigImage}>
                        <Image
                            src="/recipes/potato-kartoffel-tomato.jpg"
                            width={300}
                            height={400}
                        />
                    </div>
                </p>

                <div className={styles.grid}>
                    <div className={styles.recipe}>
                        Wash small round potatoes with skin well, if necessary cut them into small pieces. Put them in
                        the
                        oven together with a lot of olive oil, season well with rosemary, salt and pepper. Stir well.
                        Put
                        into the oven at 250°. Bake until potatoes are lightly browned. Cut 1 red onion into small
                        pieces
                        and put it into the dish with strained tomatoes. Add maybe 1 half glass of water and mix well.
                        Then
                        put it in the oven again and let it braise for about 30 minutes. Observe that it does not burn.
                        Easy. Done.
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    )
}
