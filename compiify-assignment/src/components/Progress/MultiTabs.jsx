import React, {useState} from 'react'
import './progressStyle.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const MultiTabs = () => {
	const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	return (
		<div className="multi-tabs">
			<Tabs
				value={value}
				onChange={handleChange}
				aria-label="wrapped label tabs example"
			>
				<Tab value="one" label="Cycle Insights" />
				<Tab value="two" label="Organization Insights" />
			</Tabs>
		</div>
	)
}

export default MultiTabs