import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import PostsIndex from './components/Posts/PostsIndex'
import PostsShow from './components/Posts/PostsShow'

function App() {
  
  const [ posts, setPosts ] = useState([])

  useEffect(()=> {
    const getPosts = async() => {
      const tasksFromJPH = await fetchPosts()
      setPosts(tasksFromJPH)
    }
    getPosts()
  })

  const fetchPosts = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
  }

  return (
    <Router>
      <div className="">
        <Header />
        <div style={ contentContainer }>
          <Route path="/" exact render={(props) => (
              <>
                <PostsIndex posts={ posts } postBodyText={ postBodyText } post/>
              </>
            )} 
          />
          <Route path="/posts/:postID" component={ PostsShow } />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const contentContainer = {
  marginBottom:'20px',
  marginTop:'60px'
}

function postBodyText() {
  console.log('postBodyText function used.')
}

export default App;