import React from 'react'
import barIcon from '../../svgs/barIcon.svg'
import bell from '../../svgs/bell.svg'
import './styles.css'

const Title = () => {
  
	return(
		<div className="header-title">
			<div className="title-section">
				<img src={barIcon} className="title-icon" alt='icon' />
				<p className='title-text'>People Insights</p>
			</div>

			<div className="profile-section">
				<img src={bell} alt='bell icon' className='bell-icon' />
			</div>
		</div>
	)
}

export default Title