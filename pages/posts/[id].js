import React, { useEffect , useState } from 'react'
import { useRouter } from 'next/router'
import apiService from '../../services/apiService'

/* export default () => {
    const router = useRouter();
    const id = router.query.id
    const [post , setPost] = useState(null)

    useEffect(() => {
        if (Object.keys(router.query).length > 0) {
            console.log(id)
            fetchData(id)
        }
    }, [router.query]);

    const fetchData = async (id) => {
        const data = await apiService('TEST GET', `https://jsonplaceholder.typicode.com/posts?id=${id}`)

        setPost(data[0]) 

    }

    return (
        <>
            <h1>Post detail</h1>
            {post &&<p>Post id  : {post.id}</p>}
            {post &&<p>Post title  : {post.title}</p>}
        </>
    )
} */


export async function getStaticPaths() {
    const posts = await apiService('TEST GET', 'https://jsonplaceholder.typicode.com/posts')
  
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() }
    }))
  
    // fallback: false means pages that don’t have the
    // correct id will 404.
    return { paths, fallback: false }
  }
  
  // params will contain the id for each generated page.
  export async function getStaticProps({ params }) {
    const post =  await apiService('TEST GET', `https://jsonplaceholder.typicode.com/posts?id=${params.id}`)
    return {
      props: {
        post: post[0]
      }
    }
  }

  export default ({post}) => {
  
    

    return (
        <>
            <h1>Post detail</h1>
            {post &&<p>Post id  : {post.id}</p>}
            {post &&<p>Post title  : {post.title}</p>}
        </>
    )
} 