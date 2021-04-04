import {Box, Flex} from 'theme-ui';

/** @jsxImportSource theme-ui */

export default function HeroPost({
                                     id,
                                     title,
                                     coverImage,
                                     date,
                                     excerpt,
                                     author,
                                     link,
                                 }) {
    return (
        <Flex as="section" sx={{
            backgroundColor: '#222',
            marginBottom: '1rem',
            borderRadius: '7px',
            overflow: 'hidden'
        }}><Box sx={{lineHeight: 0}}>
            <img src={coverImage} sx={{
                width: '180px',
                borderRadius: '3px'
            }}/>
        </Box>
            <Box sx={{marginLeft: '1rem', lineHeight: 1}}>
                <Box>
                    <h1><a href={link}>{title}</a></h1>
                    <p>{excerpt}</p>
                </Box>
            </Box>
        </Flex>
    )
}
