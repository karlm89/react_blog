import PostCard from './PostCard'

const posts = [
  {
    id:1,
    title: 'Post 1',
    body: ''
  },
  {
    id:2,
    title: 'Post 2',
    body: 'body text'
  }
]
const Posts = () => {
  return (
    <div className="container mt-3 d-flex"> { 
        posts.map((post) => (
          <PostCard key={post.id} post={post}/>
      ))}
    </div>
  )
}

export default Posts