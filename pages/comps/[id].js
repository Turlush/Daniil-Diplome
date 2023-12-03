import {useEffect, useState} from "react"
import {useRouter} from "next/router"

const Comp = () => {

    const router = useRouter()
    const {id} = router.query
    console.log("router", router)
    const [post, setPost] = useState(null)

    const getData = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }

    useEffect(() => {
        if (!id) {
            return
        }
        getData(id)

    }, [id])

    return <>
        <h3>POST: {post?.id}</h3>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
    </>
}
export default Comp