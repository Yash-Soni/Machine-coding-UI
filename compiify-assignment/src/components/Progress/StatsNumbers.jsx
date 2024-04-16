import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ArrowRight from '../../svgs/ArrowRight.svg'
import ArrowDown from '../../svgs/ArrowDown.svg'
import ArrowUp from '../../svgs/ArrowUp.svg'
import './progressStyle.css'

function StatsNumbers({cardData}) {
  return (
		<div className='stats-numbers' style={{ display: 'flex', flexDirection: 'column' }}>
			{
				cardData && cardData.map((data, index) => (
					<div key={index}>
						<div style={{ marginBottom: 8 }}>
							<Typography variant="subtitle1" gutterBottom>
								{data.header}
							</Typography>
							<div className="stats-entry">
								<Typography className='stats-data' variant="body1">		
									{data.numbers.length > 1 ? (
										<>
											{data.numbers[0]}
											<img src={ArrowRight} alt="arrow right" />
											{data.numbers[1]}
										</>
									) : (
										`${data.numbers[0]}%`
									)}
								</Typography>
								<div className="stats-comment">
									{data.arrow === 'up' ? 
									<img src={ArrowUp} alt='arrow up' /> : <img src={ArrowDown} alt='arrow down' /> }
									<Typography className="stats-text" variant='body1'>
										{data.comment}
									</Typography>
								
								</div>
								
							</div>
						</div>
						{index !== (cardData.length-1) &&
							<Divider flexItem variant="middle" />
						}
					</div>
					
				))
			}
		</div>
  );
}

export default StatsNumbers