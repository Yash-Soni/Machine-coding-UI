import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  
	return(
		<>
			<div className="page">
				<h1>Products</h1>
					<input type="text" placeholder="Search for Products" />
			</div>
			<nav>
				<Link to="featured">Featured</Link>
				<Link to="new">New</Link>
			</nav>
			<Outlet />
		</>
	)
}

export default Products