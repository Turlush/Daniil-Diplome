import { useEffect, useState } from "react"
import Link from "next/link"

const Comps = () => {
    
    const [posts, setPosts] = useState([])

    const getData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {console.log(json)
        setPosts(json)
        })
    }

    useEffect(() => {
        getData()
    })
    
    return <>
        <ul>
            {!!posts && posts.map(post => {
                return <li key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                        <a>
                            {post.title}
                        </a>
                    </Link>
                </li>
            })}
        </ul>
    </>
}

export default Comps