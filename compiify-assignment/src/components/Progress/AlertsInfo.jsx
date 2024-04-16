import React from 'react';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import './progressStyle.css'

function AlertsInfo({alertsData}) {
  return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{
				alertsData && alertsData.map((data, index) => (
					<div className='alert-box' key={index}>
						<div style={{ marginBottom: 8 }}>
							<div className="alerts-header">
								<IconButton>
									<img src={data.icon} alt='icon' />
								</IconButton>
								<Typography className={data.warn ? 'red-fonts' : ''} variant="subtitle1">
									{data.header}
								</Typography>
								<Typography className='subheader' variant="subtitle1">		
									{data.subHead}
								</Typography>
							</div>
							<div className='alert-body'>
								<Typography className={data.anotherIcon ? 'red-fonts' : ''} variant='body1'>
									{data.anotherIcon && 
										<img src={data.anotherIcon} alt='icon' />}
									 {data.body}
								</Typography>
							</div>
						</div>
							<Button variant='contained' className='alert-button'
								style={{ 
									backgroundColor: '#A8FDF4',
									color: '#130051',
									height: '30px',
									margin: '20px'
								 }}
								>
								View Details
							</Button>
					</div>
					
				))
			}
		</div>
  );
}

export default AlertsInfo