import React from 'react';
import '../styles/Header.css';
import logo from '../images/logo-nfq.png';
import { Link } from 'react-router-dom';
class Header extends React.Component {

	render () {

		return (

		<header className="header">
			<div className="header__container">
				<img src={logo} alt="" className="header__logo"/>
			</div>
			<h1 className="titleApp">OVAL</h1>
				<nav className="header__container-nav">
					<ul className="header__container-nav--listMenu">
						<li><Link to='/planning'>Planning</Link></li>
						<li><Link to='/satisfaction'>Satisfaction</Link></li>
					</ul>
				</nav>
		</header>

		);
	}

}

export default Header;
