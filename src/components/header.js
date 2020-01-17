import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/css/custom.css';
import '../styles/scss/main.scss';
import img1 from '../images/logo.png';
import $ from 'jquery';
const Header = ({ siteTitle ,pathname}) => {
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
      <li className={`nav-item ${pathname=='/' ? 'active':''}`}>
        <Link className="nav-link" to="/" onClick={classHandle}>Home</Link>
      </li>
      <li className={`nav-item dropdown border-0 ${pathname=='/about-us' || pathname=='/management-team' ? 'active':''}`} >
        <Link className="nav-link dropdown-toggle" to="/about-us" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          About Us
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/about-us"  onClick={classHandle}>Our Legacy</Link>
          <Link className="dropdown-item" to='/management-team'  onClick={classHandle}>Management Team</Link>
        </div>
      </li>
      <li className={`nav-item dropdown ${pathname=='/residential' || pathname=='/commercial' || pathname=='/hospitality' || pathname=='/leisure-club' ? 'active':''}`}>
        <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our Verticals
        </Link>
        <div className="dropdown-menu  border-0" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to='/residential' onClick={classHandle}>Residential</Link>
          <Link className="dropdown-item" to='/commercial' onClick={classHandle}>Commercial</Link>
          <Link className="dropdown-item" to='/hospitality' onClick={classHandle}>Hospitality</Link>
          <Link className="dropdown-item" to='/leisure-club' onClick={classHandle}>Leisure</Link>
        </div>
      </li>
      <li className={`nav-item ${pathname=='/partners' ? 'active':''}`}>
        <Link className="nav-link" to="/partners" onClick={classHandle}>Partners</Link>
      </li>
      <li className={`nav-item ${pathname=='/knoweldge-hub' ? 'active':''}`}>
        <Link className="nav-link" to="/knoweldge-hub" onClick={classHandle}>Knoweldge Hub</Link>
      </li>
      {/* <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to='/knoweldge-hub' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Knoweldge Hub
        </Link>
        <div className="dropdown-menu border-0" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to='/knoweldge-hub' onClick={classHandle}>Inner</Link>
        </div>
      </li> */}
      <li className={`nav-item ${pathname=='/careers' ? 'active':''}`}>
        <Link className="nav-link" to="/careers" onClick={classHandle}>Careers</Link>
      </li>
      <li className={`nav-item ${pathname=='/media-and-events' ? 'active':''}`}>
        <Link className="nav-link" to="/media-and-events" onClick={classHandle}>Media & Events</Link>
      </li>
      <li className={`nav-item ${pathname=='/contact-us' ? 'active':''}`}>
        <Link className="nav-link" to="/contact-us" onClick={classHandle}>Contact Us</Link>
      </li>
    </ul>
    <div className="nav-footer text-center py-2 w-100">
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
