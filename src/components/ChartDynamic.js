import React from 'react';
import '../styles/ChartDynamic.css';
import bars3 from '../images/bars-3.jpeg';

class ChartDynamic extends React.Component {

	render () {

		return (
			<div className="graphic__container">
					<img src={bars3} alt="img" className="ChartDynami__img"/>
			</div>
		);
	}

}

export default ChartDynamic;
