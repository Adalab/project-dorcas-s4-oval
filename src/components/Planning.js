import React from 'react';
import '../styles/Planning.css';

class Planning extends React.Component {

	render () {

		return (

			<section className="section__planning">

				<div className="container-fluid h-100">
					<div class="row h-100">
						<div class="col column__planning--graphic">
							<div className="container__planning--graphic orange"></div>
							<div className="container__planning--graphic yellow"></div>
						</div>
					    <div class="col column__planning--graphic">
							<div className="container__planning--graphic green"></div>
							<div className="container__planning--graphic yellow"></div>
						</div>
					    <div class="col column__planning--graphic">
							<div className="container__planning--graphic green"></div>
							<div className="container__planning--graphic orange"></div>

						</div>
				    </div>


				</div>

			</section>

		);
	}

}

export default Planning;
