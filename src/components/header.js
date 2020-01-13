import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/css/custom.css';
import '../styles/scss/main.scss';
import img1 from '../images/logo.png';
import $ from 'jquery';
const Header = ({ siteTitle }) => {
function classHandle() {
  $("body").removeClass("nav-open");
 }
return(
<header className="header">
  <nav className="navbar navbar-light container" >
  <Link className="navbar-brand" to='/'  >
    <img src={img1} alt="BramhaCorp Logo" className="logo-img" />
  </Link>
  <a className="nav-trigger" id="toggle" onClick={() => $("body").toggleClass("nav-open")} >
Menu <span></span>
</a>
<nav className="nav-container pb-0" id="navigation">
  <ul className="nav navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/" onClick={classHandle}>Home</Link>
      </li>
      <li className="nav-item dropdown border-0">
        <Link className="nav-link dropdown-toggle" to="/about-us" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          About Us
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/about-us"  onClick={classHandle}>Our Legacy</Link>
          <Link className="dropdown-item" to='/management-team'  onClick={classHandle}>Management Team</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our Verticals
        </Link>
        <div className="dropdown-menu  border-0" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to='/residential' onClick={classHandle}>Residencial</Link>
          <Link className="dropdown-item" to='/commercial' onClick={classHandle}>Commercial</Link>
          <Link className="dropdown-item" to='/hospitality' onClick={classHandle}>Hospitality</Link>
          <Link className="dropdown-item" to='/leisure-club' onClick={classHandle}>Leisure</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/partners" onClick={classHandle}>Partners</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to='/knoweldge-hub' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Knoweldge Hub
        </Link>
        <div className="dropdown-menu border-0" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to='/knoweldge-hub' onClick={classHandle}>Inner</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/careers" onClick={classHandle}>Careers</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/media-and-events" onClick={classHandle}>Media & Events</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact-us" onClick={classHandle}>Contact Us</Link>
      </li>
    </ul>
    <div className="nav-footer text-center py-2 bg-white w-100">
      <small> BramhaCorp Ltd @2020. All rights reserved.</small>
    </div>
  </nav>
  <div className="overlay"></div>
</nav>
</header>
)
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
