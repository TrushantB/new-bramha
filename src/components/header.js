import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/css/custom.css';
import '../styles/scss/main.scss';
import img1 from '../styles/images/logo.png';
const Header = ({ siteTitle }) => (
  <header className="header">
    <nav className="navbar navbar-light container" >
      <Link className="navbar-brand" to='/'>
        <img src={img1} alt="BramhaCorp Logo" className="logo-img" />
      </Link>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="sr-only">Toggle navigation</span>
        <div className="icon-bar">
          <div></div>
        </div>
      </button>
      <div className="collapse navbar-collapse p-0" id="navbarNav">
        <div className="d-flex justify-content-center bg-white py-2 w-100">
          <Link className="navbar-brand text-center" to='/'>
            <img src={img1} alt="BramhaCorp Logo" className="logo-img" />
          </Link>
        </div>
        <ul className="navbar-nav pt-5">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item dropdown border-0">
            <Link className="nav-link dropdown-toggle" to="/about-us" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              About Us
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/about-us">Our Legacy</Link>
              <Link className="dropdown-item" to='/management-team'>Management Team</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Our Verticals
            </Link>
            <div className="dropdown-menu  border-0" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to='/residential'>Residencial</Link>
              <Link className="dropdown-item" to='/'>Commercial</Link>
              <Link className="dropdown-item" to='/hospitality'>Hospitality</Link>
              <Link className="dropdown-item" to='/'>Leisure</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/partners">Partners</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to='/knoweldge-hub' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Knoweldge Hub
            </Link>
            <div className="dropdown-menu border-0" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to='/knoweldge-hub'>Inner</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/careers">Careers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/media-and-events">Media & Events</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts">Contact Us</Link>
          </li>
        </ul>
        <div className="nav-footer text-center py-2 bg-white w-100">
          <small> BramhaCorp Ltd @2020. All rights reserved.</small>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
