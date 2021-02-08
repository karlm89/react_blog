import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import PostsIndex from './components/Posts/PostsIndex'
import PostsShow from './components/Posts/PostsShow'

import AuthorsIndex from './components/Authors/AuthorsIndex'
import AuthorsShow from './components/Authors/AuthorsShow'

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <div style={ contentContainer }>
          <Route path="/" exact component={ PostsIndex } />
          <Route path="/posts/:postID" component={ PostsShow } />
          <Route path="/authors" exact component={ AuthorsIndex } />
          <Route path="/authors/:authorID" exact component={ AuthorsShow } />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const contentContainer = {
  paddingBottom:'80px',
  marginTop:'56px'
}

export default App;