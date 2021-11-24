import Cosmic from 'cosmicjs'

const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY

const bucket = Cosmic().bucket({
    slug: BUCKET_SLUG,
    read_key: READ_KEY,
})

const is404 = (error) => /not found/i.test(error.message)
//
// export async function getPreviewPostBySlug(slug) {
//     const params = {
//         slug,
//         props: 'slug',
//         status: 'all',
//     }
//
//     try {
//         const data = await bucket.getObject(params)
//         return data.object
//     } catch (error) {
//         // Don't throw if an slug doesn't exist
//         if (is404(error)) return
//         throw error
//     }
// }
//
export async function getAllPostsWithSlug() {
    const params = {
        query: {
            type: 'recipes',
        },
        type: 'posts',
        props: 'slug',
    }
    const data = await bucket.getObjects(params)
    return data.objects
}

//
export async function getAllPostsForHome(preview) {
    const data = await bucket.getObjects({
        query: {
            type: 'recipes',
        },
        props: 'id,title,slug,metadata,created_at',
        sort: '-created_at',
        ...(preview && {status: 'all'}),
    })
    return data.objects
}

export async function getPage(id, preview) {
    try {
        const data = await bucket.getObject({
            id: id,
            props: 'id,title,slug,metadata,created_at,content',
            ...(preview && {status: 'all'}),
        })
        return data.object
    } catch (error) {
        if (is404(error)) return
        throw error
    }
}

export async function getPost(slug) {
    const data = await bucket.getObjects({
        query: {
            type: 'recipes',
            slug: slug,
        },
        props: 'id,title,slug,metadata,created_at'
    })
    return {
        post: data.objects[0],
    }
}
