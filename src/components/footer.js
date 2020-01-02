import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/css/custom.css';
import '../styles/scss/main.scss';
const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="footer-menu">
            <ul className="d-flex list-unstyled justify-content-center bottom-border flex-wrap ">
              <li className="nav-item  ">
                <Link to="/"> Real Estate</Link>
              </li>
              <li className="nav-item ">
                <Link to="/"> Blog</Link>
              </li>
              <li className="nav-item ">
                <Link to="/"> Channel Partner</Link>
              </li>
              <li className="nav-item ">
                <Link to="/"> Career</Link>
              </li>
              <li className="nav-item ">
                <Link to="/"> Site Map</Link>
              </li>
              <li className="nav-item ">
                <Link className=" " to="/">Privacy Policy</Link>
              </li>
              <li className="nav-item ">
                <Link to="/">Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-12">
          <div className="footer-social-icon">
            <ul className="d-flex list-unstyled justify-content-center">
              <li className="background-circle">
                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
              </li>
              <li className="background-circle">
                <Link to="/"><i className="fab fa-twitter"></i></Link>
              </li>
              <li className="background-circle">
                <Link to="/"><i className="fab fa-instagram"></i></Link>
              </li>
              <li className="background-circle" >
                <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
              </li>
              <li className="background-circle" >
                <Link to="/"><i className="fas fa-caret-right"></i></Link>
              </li>
            </ul>
          </div>
          <div className="text-center text-white copyright">
            <p className="m-0"><Link to="/">Bramhacorp Ltd</Link> ©2019. All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>

)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Footer
