import '../../styles/globals.css'
import Router from "next/router";
import withGA from "next-ga";
import {ThemeProvider} from "theme-ui";
import theme from "../utils/theme";

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default withGA("UA-xxxxxxxxx-1", Router)(MyApp);
