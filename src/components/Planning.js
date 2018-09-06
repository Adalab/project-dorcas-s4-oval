import React from 'react';
import '../styles/Planning.css';
import ChartLabel from './ChartLabel';
import ChartCard from './ChartCard';
import ChartUserCard from './ChartUserCard';
import ChartUserLabel from './ChartUserLabel';
import OptionsDynamic from './OptionsDynamic';
import ChartDynamic from './ChartDynamic';

class Planning extends React.Component {

	render () {

		return (

			<section className="section__planning">

				<div className="container-fluid h-100">
					<div class="row h-100">
						<div class="col column__planning--chart">
							<div className="container__planning--chart">
								<ChartLabel />
							</div>
							<div className="container__planning--chart">
								<ChartUserLabel />
							</div>
						</div>
					    <div class="col column__planning--chart">
							<div className="container__planning--chart">
								<ChartCard />
							</div>
							<div className="container__planning--chart">
								<OptionsDynamic />
							</div>
						</div>
					    <div class="col column__planning--chart">
							<div className="container__planning--chart">
								<ChartUserCard />
							</div>
							<div className="container__planning--chart">
								<ChartDynamic />
							</div>

						</div>
				    </div>


				</div>

			</section>

		);
	}

}

export default Planning;
