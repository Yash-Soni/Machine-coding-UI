import { useNavigate } from "react-router-dom"

const OrderSummary = () => {
  const navigate = useNavigate()

	return(
		<div className="page">
			<h1>ORDER Confirmed!!</h1>

			<button onClick={() => navigate(-1)}>Back to Home</button>
		</div>
	)
}

export default OrderSummary