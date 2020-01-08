import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/css/custom.css';
import '../styles/scss/main.scss';
import img1 from '../styles/images/logo.png';
const Header = ({ siteTitle }) => {
  let body = document.getElementsByTagName('body')[0];
return(
  <nav className="navbar navbar-light container" >
  <Link className="navbar-brand" to='/' onClick={() => body.classList.toggle('nav-open')}>
        <img src={img1} alt="BramhaCorp Logo" className="logo-img" />
      </Link>
  <a  className="nav-trigger" id="toggle" onClick={() => body.classList.toggle('nav-open')}>
Menu <span></span>
</a>
<nav className="nav-container" id="navigation">
<Link className="navbar-brand" to='/'>
  <img src={img1} alt="BramhaCorp Logo" className="logo-img" />
</Link>
<ul className="nav navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/" onClick={() => body.classList.toggle('nav-open')} >Home</Link>
          </li>
          <li className="nav-item dropdown border-0">
            <Link className="nav-link dropdown-toggle" to="/about-us" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              About Us
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/about-us" onClick={() => body.classList.toggle('nav-open')}>Our Legacy</Link>
              <Link className="dropdown-item" to='/management-team' onClick={() => body.classList.toggle('nav-open')}>Management Team</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Our Verticals
            </Link>
            <div className="dropdown-menu  border-0" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to='/residential' onClick={() => body.classList.toggle('nav-open')} >Residencial</Link>
              <Link className="dropdown-item" to='/commercial' onClick={() => body.classList.toggle('nav-open')}>Commercial</Link>
              <Link className="dropdown-item" to='/hospitality' onClick={() => body.classList.toggle('nav-open')}>Hospitality</Link>
              <Link className="dropdown-item" to='/leisure-club' onClick={() => body.classList.toggle('nav-open')}>Leisure</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/partners" onClick={() => body.classList.toggle('nav-open')}>Partners</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to='/knoweldge-hub' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Knoweldge Hub
            </Link>
            <div className="dropdown-menu border-0" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to='/knoweldge-hub' onClick={() => body.classList.toggle('nav-open')}>Inner</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/careers" onClick={() => body.classList.toggle('nav-open')}>Careers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/media-and-events" onClick={() => body.classList.toggle('nav-open')}>Media & Events</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts" onClick={() => body.classList.toggle('nav-open')}>Contact Us</Link>
          </li>
</ul>
</nav>
<div className="overlay"></div>
</nav>
)


  // <header className="header">
  //   <nav className="navbar navbar-light container" >
  //     <Link className="navbar-brand" to='/'>
  //       <img src={img1} alt="BramhaCorp Logo" className="logo-img" />
  //     </Link>
  //     <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  //     <span className="my-1 mx-2 close"><i className="fas fa-times"></i></span>
  //      <span className="navbar-toggler-icon"></span>
  //       {/* <span className="sr-only">Toggle navigation</span>
  //       <div className="icon-bar">
  //         <div></div>
  //       </div> */}
  //     </button>
  //     <div className="collapse navbar-collapse p-0" id="navbarNav">
  //       <div className="d-flex justify-content-center bg-white py-2 w-100">
  //         <Link className="navbar-brand text-center" to='/'>
  //           <img src={img1} alt="BramhaCorp Logo" className="logo-img" />
  //         </Link>
  //       </div>
  //       <ul className="navbar-nav pt-5">
          // <li className="nav-item active">
          //   <Link className="nav-link" to="/">Home</Link>
          // </li>
          // <li className="nav-item dropdown border-0">
          //   <Link className="nav-link dropdown-toggle" to="/about-us" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          //     About Us
          //   </Link>
          //   <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          //     <Link className="dropdown-item" to="/about-us">Our Legacy</Link>
          //     <Link className="dropdown-item" to='/management-team'>Management Team</Link>
          //   </div>
          // </li>
          // <li className="nav-item dropdown">
          //   <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          //     Our Verticals
          //   </Link>
          //   <div className="dropdown-menu  border-0" aria-labelledby="navbarDropdown">
          //     <Link className="dropdown-item" to='/residential'>Residencial</Link>
          //     <Link className="dropdown-item" to='/commercial'>Commercial</Link>
          //     <Link className="dropdown-item" to='/hospitality'>Hospitality</Link>
          //     <Link className="dropdown-item" to='/leisure-club'>Leisure</Link>
          //   </div>
          // </li>
          // <li className="nav-item">
          //   <Link className="nav-link" to="/partners">Partners</Link>
          // </li>
          // <li className="nav-item dropdown">
          //   <Link className="nav-link dropdown-toggle" to='/knoweldge-hub' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          //     Knoweldge Hub
          //   </Link>
          //   <div className="dropdown-menu border-0" aria-labelledby="navbarDropdown">
          //     <Link className="dropdown-item" to='/knoweldge-hub'>Inner</Link>
          //   </div>
          // </li>
          // <li className="nav-item">
          //   <Link className="nav-link" to="/careers">Careers</Link>
          // </li>
          // <li className="nav-item">
          //   <Link className="nav-link" to="/media-and-events">Media & Events</Link>
          // </li>
          // <li className="nav-item">
          //   <Link className="nav-link" to="/contacts">Contact Us</Link>
          // </li>
  //       </ul>
  //       <div className="nav-footer text-center py-2 bg-white w-100">
  //         <small> BramhaCorp Ltd @2020. All rights reserved.</small>
  //       </div>
  //     </div>
  //   </nav>
  // </header>
// )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
