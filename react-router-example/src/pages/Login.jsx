import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./auth";

const Login = () => {
  const auth = useAuth()
	const [user, setUser] = useState()
	const navigate = useNavigate()

	const handleLogin = () => {
		auth.login(user)
		navigate('/profile', {replace: true})
	}

	return(
		<div className="page">
			<h1>Login Page</h1>
			<p>User name:</p>

			<div>
				<input type="text" placeholder="enter username" onChange={e => setUser(e.target.value)} />
				<button onClick={handleLogin}>Login</button>
			</div>
		</div>
	)
}

export default Login