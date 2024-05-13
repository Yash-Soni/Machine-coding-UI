import React from "react";
import { useNavigate } from "react-router-dom"
// import OrderSummary from "./order-summary";

const Home = () => {
  const navigate = useNavigate()
	return(
		<div className="page">
			<h1>Home</h1>
			<p>Welcome to Home Page</p>

			<button onClick={() => navigate('order-summary')}>Place Order</button>
		</div>
	)
}

export default Home