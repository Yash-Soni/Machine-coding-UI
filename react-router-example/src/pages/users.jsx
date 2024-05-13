import { Outlet, useSearchParams } from "react-router-dom"

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
	const showActiveUsers = searchParams.get('filter') === 'active'

	return(
		<div className="page">
			<h1>Users Page</h1>
			<ul>
				<li>User 1</li>
				<li>User 2</li>
				<li>User 3</li>
			</ul>
			<Outlet />
			<div>
				<button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
				<button onClick={() => setSearchParams({})}>Reset Filter</button>
				{showActiveUsers ? <h2>Showing Active Users</h2> : <h2>Showing All Users</h2>}
			</div>
		</div>
	)
}

export default Users