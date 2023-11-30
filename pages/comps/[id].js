'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const Comp = () => {

    const router = useRouter()
    const id = router.query.id
    console.log("id posta", id)    
    console.log("router", router)

    const [post, setPost] = useState({})

    const getData = async () => {
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
        getData()
    }, [])

    return <>
        {post.id}
        {post.title}
        {post.body}
    </>
}

export default Comp