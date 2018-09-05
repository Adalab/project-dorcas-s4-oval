import React from 'react';
import '../styles/Header.css';
import logo from '../images/logo-nfq.png';

class Header extends React.Component {

	render () {

		return (

		<header className="header">
			<div className="header__container">
				<img src={logo} alt="" className="header__logo"/>
			</div>
		</header>

		);
	}

}

export default Header;
