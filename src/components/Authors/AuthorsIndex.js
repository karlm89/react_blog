import { useEffect, useState } from 'react'
import { Link  } from 'react-router-dom'

const AuthorsIndex = () => {
	const [authors, setAuthors] = useState([])

	useEffect(() => {
		const getAuthors = async () => {
			const authorsFromJPH = await fetchAuthors()
			setAuthors(authorsFromJPH)
		}
		getAuthors()
	})

	const fetchAuthors = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/users')
		const data = await res.json()
		return data
	}

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