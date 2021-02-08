import React, { useEffect, useState } from 'react'
import { Link  } from 'react-router-dom'
import axios from 'axios'

const PostsShow = ({ match }) => {
	const [post, setPost] = useState([])
  const [user, setUser ] = useState([])
  const [comments, setComments ] = useState([])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${ match.params.postID }`)
      .then((res) => {
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

    axios.get(`https://jsonplaceholder.typicode.com/users/${ post.userId }`)
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${ post.id }`)
      .then((res) => {
        setComments(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [match.params.postID, post.id, post.userId])

	return (
    <>
      <img src={ `https://picsum.photos/id/${ match.params.postID }/1200/400` } className="col-12" alt='featured img'/>
      <div className='container-fluid'>
        <h1>{ post.title }</h1>
        <p>Written by : <Link to={`/authors/${user.id}`}>{ user.name }</Link></p>
        <p> { post.body }</p>
        <p className="section-heading">Join the Conversation</p>
        <ul className="list-group">
          { comments.map((comment) => (
            <div key={comment.id}>
              <li className="list-group-item col-12 my-1 rounded-3">
                <strong>{ comment.name }</strong>
                <p>{ comment.body }</p>
              </li>
            </div>
          ))}
        </ul>  
      </div>
    </>
	)
}

export default PostsShow
