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
			<h1 className="titleApp">OVAL</h1>
		</header>

		);
	}

}

export default Header;
