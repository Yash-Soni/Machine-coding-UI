import React, {useState} from 'react'
import './progressStyle.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import settings from '../../svgs/settings.svg'

const Dropdowns = () => {
  const [selectedCycleOption, setSelectedCycleOption] = useState('');
  const [selectedOrgOption, setSelectedOrgOption] = useState('');
  
	const handleCycleChange = (event) => {
    setSelectedCycleOption(event.target.value);
  };

	const handleOrgChange = (event) => {
    setSelectedOrgOption(event.target.value);
  };
    
	return (
		<div className="progress-header-dropdowns">
			<div className='cycle-dropdown'>
				<Select
					value={selectedCycleOption}
					onChange={handleCycleChange}
					displayEmpty
					fullWidth
				>
					<MenuItem value="" disabled>
						Select an option
					</MenuItem>
					<MenuItem value="option1">Comp Cycle Spring 2024</MenuItem>
					<MenuItem value="option2">Comp Cycle Spring 2023</MenuItem>
					<MenuItem value="option3">Comp Cycle Spring 2022</MenuItem>
				</Select>
			</div>
			<div className='org-dropdown'>
				<Select
					value={selectedOrgOption}
					onChange={handleOrgChange}
					displayEmpty
					fullWidth
				>
					<MenuItem value="" disabled>
						Select an Org
					</MenuItem>
					<MenuItem value="option1">Entire Org</MenuItem>
					<MenuItem value="option2">Finance Org</MenuItem>
					<MenuItem value="option3">Engineering Org</MenuItem>
				</Select>
			</div>
		</div>
	)
}

export default Dropdowns