import React from "react";
import "../styles/Header.css";
import logo from "../images/logo-nfq.png";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__container-name">
          <div className="header__container-logo">
            <img src={logo} alt="" className="header__logo" />
          </div>
          <h1 className="titleApp">OVAL</h1>
        </div>
        <nav className="header__container-nav">
          <ul className="header__container-nav--listMenu">
            <li>
              <Link className="header__container-nav--link link" to="/">
                Planning
              </Link>
            </li>
            <li>
              <Link
                className="header__container-nav--link link"
                to="/satisfaction"
              >
                Satisfaction
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
