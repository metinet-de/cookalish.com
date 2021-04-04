/** @jsxImportSource theme-ui */

import Footer from './footer'
import Meta from './meta'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

export default function Layout({preview, children}) {
    return (<div sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    }}><Meta/>
        {children}
        <Footer/>
    </div>)
}
