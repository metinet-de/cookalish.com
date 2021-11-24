import PostPreview from './post-preview'

export default function MoreStories({posts}) {
    return (
        <section>
            <h2>
                More Stories
            </h2>
            <div>
                {posts.map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        coverImage={post.metadata.cover_image}
                        date={post.created_at}
                        author={post.metadata.author}
                        slug={post.slug}
                        excerpt={post.metadata.excerpt}
                    />
                ))}
            </div>
        </section>
    )
}
