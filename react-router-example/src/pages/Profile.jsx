import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Profile = () => {
	const loggedInUser = useAuth()
	const navigate = useNavigate()

	const handleLogout = () => {
		loggedInUser.logout()
		navigate('/')
	}

	return(
		<div className="page">
			<h1>Profile Page</h1>
			<p>Welcome {loggedInUser.user}</p>

			<div>
				<button onClick={handleLogout}>Logout</button>
			</div>
		</div>
	)
}

export default Profile