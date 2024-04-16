import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { Typography } from '@mui/material';
import download from '../../svgs/download.svg';
import more from '../../svgs/more.svg';
import './styles.css'

const gradientColors = [
	{ offset: '0%', color: '#16DBCC' },
	{ offset: '100%', color: '#E6FBF9' }
];

// background: linear-gradient(180deg, #FF751A 0%, #16DBCC 36%),
// linear-gradient(180deg, #FF751A 0%, #16DBCC 36%);

const gradient = (
	<linearGradientDef
		id="gradient"
		x1="0%"
		y1="0%"
		x2="0%"
		y2="100%"
		colors={gradientColors}
	/>
);

const BudgetGraph = () => {

	const dataPoints = ['$ 300K', '$ 325K', '$ 400K', '$ 375K', '$ 275K', '$ 250K', '$ 475K', '$ 280K', '$ 400K', '$ 375K'];
	const xLabels = [
		'Business Dev', 
		'Ecosystem',
		'Engineering', 
		'Finance & Operation', 
		'Legal & Policy', 
		'Marketing', 
		'People', 
		'Product', 
		'Mobile', 
		'Education'
	];

	const dataNumericValues = dataPoints.map(point => {
    const numericValue = parseInt(point.replace(/\$/g, '').replace(/K/g, '') * 1000);
    return numericValue;
  });

	const yAxisTicks = ['0', '$ 100K', '$ 200K', '$ 300K', '$ 400K', '$ 500K']
  
	return (
		<div className="budget-graph">
			<Typography className='budget-title'>Budget Impact</Typography>
			<div className="graph">
				<div className="header">
					<Typography className='budget-header-title'>Budget Spend by Department</Typography>
					<div>
						<img className='download-icon' src={download} alt='download icon' />
						<img src={more} alt='more icon' />
					</div>
				</div>
				<Typography className='spending-title'>Total Spend: $1,127,550.00</Typography>
				<BarChart
					yAxisTicks={yAxisTicks}
					width={1480}
					height={500}
					series={[
						{ data: dataNumericValues }
					]}
					xAxis={[{ data: xLabels, scaleType: 'band' }]}
					// color={(series, index) => `url(#gradient)`} // Use the gradient color
					extraDefs={gradient} // Include the gradient definition
					grid={{horizontal: true}}
				/>
			</div>
		</div>
	)
}

export default BudgetGraph