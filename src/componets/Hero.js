import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

export default function Hero({title, url}) {
    return (
        <img
            alt={title}
            data-sizes="auto"
            data-src={url}
            data-srcset="image1.jpg 300w, image2.jpg 600w, image3.jpg 900w"
            className="lazyload"
        />
    )
}
