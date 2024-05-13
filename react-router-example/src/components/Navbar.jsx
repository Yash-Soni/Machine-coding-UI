import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../pages/auth";

const Navbar = () => {
	const auth = useAuth()
  return (
		<nav className="primary-nav">
			<div>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/blog">Blog</NavLink>
				<NavLink to="/products">Products</NavLink>
				<NavLink to="users">Users</NavLink>
				<NavLink to="profile">Profile</NavLink>
				{!auth.user && 
					<NavLink to="login">Login</NavLink>
				}

			</div>
		</nav>
	)
}

export default Navbar