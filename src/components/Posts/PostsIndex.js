import { useEffect, useState } from 'react'

import PostCard from './elements/PostCard'

const PostsIndex = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const getPosts = async () => {
			const postsFromJPH = await fetchPosts()
			setPosts(postsFromJPH)
		}
		getPosts()
	}, [])

	const fetchPosts = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data = await res.json()
		return data
	}

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
