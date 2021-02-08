import { useEffect, useState } from 'react'
import { Link  } from 'react-router-dom'
import axios from 'axios'

const AuthorsIndex = () => {
	const [authors, setAuthors] = useState([])

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => {
				setAuthors(res.data)
			})
      .catch((err) => {
        console.log(err)
      })
	})

	return (
		<div className="container">
			<h1>Our Authors</h1>
			{ authors.map((author) => (
        <div key={author.id} className="d-flex col-3">
          <Link to={`/authors/${author.id}`} params={{ authorID: author.id }}>{ author.name }</Link>
        </div>
			))}
		</div>
	)
}

export default AuthorsIndex