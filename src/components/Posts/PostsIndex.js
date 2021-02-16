import {useEffect, useState} from 'react'
import axios from 'axios'

import PostCard from './elements/PostCard'

const PostsIndex = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <h1>Our Posts</h1>
      <div className='mt-2 pb-5 d-flex flex-row flex-wrap justify-content-center align-items-center"'>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default PostsIndex
