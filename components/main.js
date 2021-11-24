/** @jsxImportSource theme-ui */

export default function Main({children}) {
    return <main sx={{
        width: '100%',
        flex: '1 1 auto',
        alignSelf: 'center',
        maxWidth: 768,
        mx: 'auto',
        px: 3,
    }}>{children}</main>;
}
