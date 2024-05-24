import { useEffect, useState } from "react"
import './styles.css'

const AutoComplete = () => {
	const [data, setData] = useState()
	const [searchText, setSearchText] = useState('')

	const fetchData = async () => {
		const res = await fetch(`https://www.google.co.in/complete/search?client=firefox&q=${searchText}`)
		const json = await res.json()

		console.log('json: ', json[1]);
		setData(json[1])
	}

	useEffect(() => {
		let interval = setTimeout(() => {
			fetchData()
		}, 500)

		return () => {
			clearTimeout(interval)
		}
	}, [searchText])

	// const handleClick = () => {

	// }

  return (
    <div className='autocomplete'>
        Search Here: 
        <input type='text' className="inputBox" value={searchText} onChange={e => setSearchText(e.target.value)} />
				<ul className="suggestionList">
					{data?.map(item => (
						<li key={item} className="listItem">{item}</li>
					))}
				</ul>
    </div>
  )
}

export default AutoComplete