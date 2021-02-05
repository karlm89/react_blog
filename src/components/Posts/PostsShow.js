import React, { useEffect, useState } from 'react'

const PostsShow = ({match}) => {
	const [post, setPost] = useState([])

	useEffect(() => {
		const getPosts = async () => {
			const postFromJPH = await fetchPost()
			setPost(postFromJPH)
		}
		getPosts()
	})

	const fetchPost = async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.postID}`)
		const data = await res.json()
		return data
	}

	return (
		<>
			<h1 style={ postHeading }>{ post.title }</h1>
		</>
	)
}
const postHeading = {
	marginTop: '20px',
	textAlign: 'center',
}
export default PostsShow
