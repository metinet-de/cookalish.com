import PostTitle from './post-title'

export default function PostHeader({title, coverImage, date, author}) {
    return (
        <>
            <PostTitle>{title}</PostTitle>
        </>
    )
}
