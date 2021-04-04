/** @jsxImportSource theme-ui */
import ColorToggle from "./color-toggle";
import {Flex, NavLink} from 'theme-ui'

export default function Header({children, title}) {
    return (
        <header sx={{
            width: '100%',
            alignSelf: 'center',
            maxWidth: 768,
            mx: 'auto',
            px: 3
        }}>
            <Flex sx={{justifyContent: 'space-between'}}>
                <nav>
                    <Flex as="ul" sx={{
                        padding: 0,
                        listStyle: 'none',
                        'li': {
                            padding: 0
                        }
                    }}>
                        <li>
                            <NavLink href="/" p={2}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/about" p={2}>
                                About
                            </NavLink>
                        </li>

                    </Flex>
                </nav>
                <div sx={{padding: '8px'}}>
                    <ColorToggle/>
                </div>
            </Flex>
            {children}
        </header>
    )
}
