import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import PostsIndex from './components/Posts/PostsIndex'
import PostsShow from './components/Posts/PostsShow'

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <div style={ contentContainer }>
          <Route path="/" exact component={ PostsIndex } />
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

export default App;