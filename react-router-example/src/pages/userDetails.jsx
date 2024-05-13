import { useParams } from "react-router-dom"

const UserDetails = () => {
	const params = useParams()

	return(
		<div className="page">
			<h1>User Details for User {params.userId}</h1>
			<p>Details about the user</p>
		</div>
	)
}

export default UserDetails