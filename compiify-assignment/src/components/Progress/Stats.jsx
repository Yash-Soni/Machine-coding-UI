import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton } from '@mui/material';
import more from '../../svgs/more.svg'
import StatsNumbers from './StatsNumbers';
import './progressStyle.css'

const Stats = () => {
  const cardData = [
		{header: 'Compa Ratio Change', numbers: [0.96, 1.08], arrow: 'up', comment: '12.5% higher'}, 
		{header: 'Average Increase', numbers: [4.3], arrow: 'up', comment: '10% higher than 2023'}, 
		{header: 'Promotion Rate', numbers: [10.83], arrow: 'down', comment: '3% lower than last cycle'}, 
		{header: 'Promotion Increase', numbers: [10.70], arrow: 'up', comment: '10% higher than 2023'}, 
	]

	return (
		<Card className='stats-card'>
			<CardHeader 
				title="Stats" 
				actions={
					<IconButton aria-label='more options icon'>
						<img src={more} alt='more options' />
					</IconButton>
				}
			/>
			<CardContent>
				<StatsNumbers cardData={cardData} />
			</CardContent>

		</Card>
	)
}

export default Stats