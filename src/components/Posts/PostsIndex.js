import PostCard from './PostCard'

const PostsIndex = ({ posts }) => {
	return (
		<div className='mt-5 pb-5 d-flex flex-row flex-wrap justify-content-center align-items-center"'>
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</div>
	)
}

export default PostsIndex
