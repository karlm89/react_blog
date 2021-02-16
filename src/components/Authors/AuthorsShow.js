import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const AuthorShow = ({match}) => {
  const [user, setUser] = useState({
    company: '',
    data: '',
    address: '',
  })
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${match.params.authorID}`)
      .then((res) => {
        setUser({
          company: res.data.company,
          data: res.data,
          address: res.data.address,
        })
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${match.params.authorID}`)
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [match.params.authorID])

  return (
    <div className='container'>
      <h1>{user.name}</h1>
      <h3>About {user.data.name}</h3>
      <p>username : {user.data.username}</p>
      <p>
        email : <a href={`mailto:${user.data.email}`}>{user.data.email}</a>
      </p>
      <p>
        phone : <a href={`tel:${user.data.phone}`}>{user.data.phone}</a>
      </p>
      <p>Address:</p>
      <p className='ms-4'>
        {user.address.street}
        <br></br>
        {user.address.suite}
        <br></br>
        {user.address.city}
        <span className='ms-1'>{user.address.zipcode}</span>
      </p>
      <p>
        website : <a href={`https://${user.data.website}`}>https://{user.data.website}</a>
      </p>
      <p>company : {user.company.name}</p>

      <h3>Posts from {user.data.name}</h3>
      {posts.map((post) => (
        <div key={post.id} className='d-flex col-3'>
          <Link to={`/posts/${post.id}`} params={{postID: post.id}}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default AuthorShow
