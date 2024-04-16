import React from 'react'
import barIcon from '../../svgs/barIcon.svg'
import gift from '../../svgs/gift.svg'
import refresh from '../../svgs/refresh.svg'
import infoHexagon from '../../svgs/infoHexagon.svg'
import share from '../../svgs/share.svg'
import file from '../../svgs/file.svg'
import award from '../../svgs/award.svg'
import database from '../../svgs/database.svg';
import Asset from '../../svgs/Asset.png'
import Settings from '../../svgs/settings.svg'
import LifeBoy from '../../svgs/lifeBoy.svg'

import './styles.css'

const SidebarItems = () => {

  return (
		<div className="sidenav-bar">
			<div className="top-icons">
				<img className="sidenav-image" src={Asset} alt='stride icon' />

				<img className="nav-icons" src={barIcon} alt="bar icon" />
				<img className="nav-icons" src={share} alt="share icon" />
				<img className="nav-icons" src={barIcon} alt="bar icon" />
				<img className="nav-icons" src={gift} alt="gift icon" />
				<img className="nav-icons" src={refresh} alt="refresh icon" />
				<img className="nav-icons" src={file} alt="file icon" />
				<img className="nav-icons" src={award} alt="award icon" />
				<img className="nav-icons" src={infoHexagon} alt="info icon" />
				<img className="nav-icons" src={database} alt="database icon" />
			</div>
			<div className="bottom-icons">
				<img className="nav-icons" src={LifeBoy} alt="settings icon" />
				<img className="nav-icons" src={Settings} alt="settings icon" />
			</div>
		</div>
	)
}

export default SidebarItems