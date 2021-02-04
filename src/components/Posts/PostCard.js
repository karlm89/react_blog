import { Link  } from 'react-router-dom'

const PostCard = ({ post }) => {
  return (
    <div className="mt-3 col-3 mx-3" style={ fixedWidth }>
      <div className="card rounded-3">

        <img src={`https://picsum.photos/id/${post.id}/320/200`} className="card-img-top" alt='featured img'/>
        <div className="card-header">
          <h5 className="card-title mt-2">
            <Link to={`/post`}>{ post.title }</Link>
          </h5>
        </div>

        <div key={ post.id } className="card-body">
          <p className="card-text">
            { post.body.length > 50 ? post.body.substring(0,50) : post.body }
          </p>
        </div>

      </div>
    </div>
  )
}

const fixedWidth = {
  width: '320px'
}

export default PostCard
