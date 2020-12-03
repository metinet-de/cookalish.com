export default function HeroPost({
                                     title,
                                     coverImage,
                                     date,
                                     excerpt,
                                     author,
                                     slug,
                                 }) {
    return (
        <section>
            <h1>{title}</h1>
            <img width={100} src={coverImage}/>
        </section>
    )
}
