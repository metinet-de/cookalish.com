/** @jsxImportSource theme-ui */

import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import {useColorMode} from "theme-ui";

export default function ColorToggle({preview, children}) {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <span sx={{cursor: 'pointer'}}
              onClick={() => setColorMode(colorMode === 'default' ? 'light' : 'default')}>
                                        {colorMode === 'light' ? 'Make it dark! 🌜' : 'Rise the sun! 🌞'}
                                   </span>
    )
}
