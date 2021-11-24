import '@/styles/globals.css'
import {ThemeProvider} from "theme-ui";
import theme from "../utils/theme";
// import {useEffect} from "react";

export default function MyApp({Component, pageProps}) {
    // useEffect(() => {
    //     if ("serviceWorker" in navigator) {
    //         window.addEventListener("load", () => {
    //             navigator.serviceWorker
    //                 .register("/sw.js")
    //                 .then(
    //                     registration => {
    //                         console.log("Service Worker registration successful with scope: ", registration.scope);
    //                     },
    //                     err => {
    //                         console.log("Service Worker registration failed: ", err);
    //                     }
    //                 );
    //         });
    //     }
    // }, [])
    //
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
