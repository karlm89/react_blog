import React from 'react'

const PostCard = ({post}) => {
  return (
    <div className="mt-3 col-3 mx-3">
      <div className="card rounded-3">
      <img src="https://chuckanddons.com/media/wysiwyg/cat_blog.JPG" className="card-img-top" alt=""/>
      <div key={post.id} className="card-body">
          <p className="card-title">{post.title}</p>
          <p className="card-text">{post.title}</p>
      </div>
      </div>
    </div>
  )
}

export default PostCard
