import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Flag from '../../svgs/Flag.svg'
import CheckSquare from '../../svgs/CheckSquare.svg'
import StackOverflow from '../../svgs/StackOverflow.svg'
import ArrowUpRed from '../../svgs/ArrowUpRed.svg'
import Body from '../../svgs/Body.svg'
import './progressStyle.css'
import AlertsInfo from './AlertsInfo';

const Alerts = () => {
  const alertsData = [
		{icon: Flag, header: '4 Flagged Employees', warn: true, subHead: '', body: 'Depts: Human Resources, Marketing', comment: '12.5% higher'}, 
		{icon: CheckSquare, header: 'John Montgomery', warn: false, subHead: 'Review Overdue', body: 'Marketing', comment: '10% higher than 2023'}, 
		{icon: StackOverflow, header: 'Engineering Department', warn: false, subHead: 'Over Budget', anotherIcon: ArrowUpRed, body: ' 17%', comment: '3% lower than last cycle'}, 
		{icon: StackOverflow, header: 'Marketing Department', warn: false, subHead: 'Over Budget', anotherIcon: ArrowUpRed, body: ' 31.1%', comment: '10% higher than 2023'}, 
	]

	return (
		<Card className='alerts-card'>
			<CardHeader 
				title="Alerts"
			/>
			<CardContent>
				<AlertsInfo alertsData={alertsData} />
				<div className="footer">
					<img src={Body} alt='body icon' />
					<img src={Body} alt='body icon' />

				</div>
			</CardContent>

		</Card>
	)
}

export default Alerts