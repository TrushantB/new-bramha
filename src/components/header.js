import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/css/custom.css';
import img1 from '../styles/images/logo.png';
const Header = ({ siteTitle }) => (
  <header className="header">
    <nav className="navbar navbar-light container" >
      <a className="navbar-brand" href="#">
        <img src={img1} alt="BramhaCorp Logo" className="logo-img"/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item dropdown border-0">
            <Link className="nav-link dropdown-toggle" to="/about-us" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              About Us 
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/about-us">Our Legacy</Link>
              <a className="dropdown-item" href="#">Management Team</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Our Verticals
            </a>
            <div className="dropdown-menu  border-0" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Residencial</a>
              <a className="dropdown-item" href="#">Commercial</a>
              <a className="dropdown-item" href="#">Hospitality</a>
              <a className="dropdown-item" href="#">Leisure</a>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/partners">Partners</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Our Verticals
            </a>
            <div className="dropdown-menu border-0" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Inner</a>
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
      </div>
    </nav>
  </header>
  // <header>
  //   <div>
  //     <h6 style={{ margin: 10, padding:50, marginLeft:"35%" }}>
  //       <Link style={{paddingRight: 10}} to="/">HOME </Link>
  //       <Link style={{paddingRight: 10}} to="/about-us"> ABOUT US</Link>
  //       <Link style={{paddingRight: 10}} to="/our-verticals"> OUR VERTICALS</Link>
  //       <Link style={{paddingRight: 10}} to="/partners"> PARTNERS</Link>
  //       <Link style={{paddingRight: 10}} to="/knoweldge-hub">KNOWELDGE HUB</Link>
  //       <Link style={{paddingRight: 10}} to="/careers">CAREERS</Link>
  //       <Link style={{paddingRight: 10}} to="/media-and-events">MEDIA & EVENTS</Link>
  //       <Link style={{paddingRight: 10}} to="/contacts">CONTACT</Link>
  //     </h6>
  //   </div>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
