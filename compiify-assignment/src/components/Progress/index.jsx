import React, {useState} from 'react'
import './progressStyle.css'
import Stats from './Stats';
import Alerts from './Alerts';
import CycleCompletion from './CycleCompletion';
import BudgetFunc from './Budget';
import Dropdowns from './Dropdowns';
import MultiTabs from './MultiTabs';

const Progress = () => {
    
	return (
		<>
			<MultiTabs />
			<Dropdowns />
			<div className="progress">
				<div className="vertical">
					<CycleCompletion />
					<BudgetFunc />
				</div>

				<Stats />
				<Alerts />
			</div>
		</>
	)
}

export default Progress