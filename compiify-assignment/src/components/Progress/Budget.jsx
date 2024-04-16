import React from 'react'
import './progressStyle.css'
import { Typography } from '@mui/material';
import more from '../../svgs/more.svg';
import Budget from '../../svgs/graphSpiral.png'
import greenDot from '../../svgs/greenDot.svg'
import blackDot from '../../svgs/blackDot.svg'
import purpleDot from '../../svgs/purpleDot.svg'

const BudgetFunc = () => {
  

	return (
		<div className='budget-distribution'>
			<div className="budget-title">
				<Typography className='card-title' variant='title'>2023 Budget</Typography>
				<div>
					<img src={more} alt='more icon' />
				</div>
			</div>
			<div className="budget-main-content">
				<div>
					<img src={Budget} alt='Budget image' />
				</div>
				<div className='budget-details'>
					<Typography>
						<img src={purpleDot} alt='purple dot' />
						Salary 80%
					</Typography>

					<Typography>
						<img src={blackDot} alt='black dot' />
						Bonus 57%
					</Typography>

					<Typography>
						<img src={greenDot} alt='green dot' />
						Equity 75%
					</Typography>

				</div>
			</div>

		</div>
	)
}

export default BudgetFunc