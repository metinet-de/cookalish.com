export default function PostPreview({
                                        title,
                                        coverImage,
                                        date,
                                        excerpt,
                                        author,
                                        slug,
                                    }) {
    return (
        <div>
            <a href={'/posts/'+slug}>{title}</a>
        </div>
    )
}
