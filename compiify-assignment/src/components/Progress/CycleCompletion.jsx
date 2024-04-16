import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { Box, Typography } from '@mui/material';
import './progressStyle.css'

const CycleCompletion = () => {
  
	return (
		<div className="cycle-completion">
			<div className="title">
				<Typography className='card-title'>Cycle Completion</Typography>
			</div>
			<div className="progressDetails">
					<Typography className='progressPercent'>25%</Typography>
					<LinearProgress 
						id='progressbar' 
						variant='determinate'
						value={25} 
					/>
			</div>
		</div>
	)
}

export default CycleCompletion