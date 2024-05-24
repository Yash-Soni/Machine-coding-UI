import { useState } from "react"
import './styles.css'

const DarkMode = () => {
  let darkMode = localStorage.getItem('darkMode')
	const body = document.body
	const darkModeOn = 'darkModeOn'
	const darkModeOff = 'darkModeOff'
	
	if(localStorage) {
		darkMode = localStorage.getItem('darkMode') === 'true'
	}
	
	if(darkMode) {
		body.classList.add(darkMode ? darkModeOn : darkModeOff)
	} else {
		body.classList.add(darkModeOff)
	}
	const [isDarkMode, setIsDarkMode] = useState(darkMode)

	const toggleMode = () => {
		if(darkMode) {
			body.classList.replace(darkModeOn, darkModeOff)
			localStorage.setItem('darkMode', 'false')
			darkMode = false
		} else {
			body.classList.replace(darkModeOff, darkModeOn)
			localStorage.setItem('darkMode', 'true')
			darkMode = true
		}
		setIsDarkMode(darkMode)
	}
	console.log(darkMode, isDarkMode);

  return (
    <div>
			<button className="darkModeButton" onClick={() => toggleMode()}>
				{isDarkMode ? '🌞' : '🌚'}
			</button>
		</div>
  )
}

export default DarkMode