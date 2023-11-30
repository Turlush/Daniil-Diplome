import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const Comp = () => {

    const router = useRouter()
    const {id} = router.query
    console.log("id posta", id)
    const [post, setPost] = useState({})

    const getData = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(json => {console.log(json)
        setPost(json)
        })
    }

    useEffect(() => {
        if (!id) {
            return
        }
        getData(id)
    }, [])

    return <>
        {post.id}
        {post.title}
        {post.body}
    </>
}

export default Comp