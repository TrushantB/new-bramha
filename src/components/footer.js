import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/css/custom.css';
const Footer = ({ siteTitle }) => (
    <footer>
    <div className="container"> 
      <div className="row">
        <div className="col-md-12"> 
          <div className="footer-menu mt-5">
            <ul className="d-flex list-unstyled justify-content-center bottom-border flex-wrap ">
              <li className="nav-item mb-4 ">
                <Link to='/'> Real Estate</Link>
              </li>
              <li className="nav-item mb-4">
                <Link  to='/'> Blog</Link>
              </li>
              <li className="nav-item mb-4">
                <Link to='/'> channel Partner</Link>
              </li>
              <li className="nav-item mb-4">
                <Link to='/'> Career</Link>
              </li>
              <li className="nav-item mb-4">
                <Link to='/'> Site map</Link>
              </li>
              <li className="nav-item mb-4">
                <Link className=" " to='/'>Private Privacy</Link>
              </li>
              <li className="nav-item mb-4">
                <Link to='/'>Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-12">
          <div className="footer-social-icon mb-5">
            <ul className="d-flex list-unstyled justify-content-center ">
              <li className="background-circle">
                <Link to='/'><i className="fab fa-facebook-f"></i></Link>
              </li>
              <li className="background-circle">
                <Link to='/'><i className="fab fa-twitter"></i></Link>
              </li>
              <li className="background-circle">
                <Link to='/'><i className="fab fa-instagram"></i></Link>
              </li >
              <li className="background-circle" >
                <Link to='/'><i className="fab fa-linkedin-in"></i></Link>
              </li>
              <li className="background-circle" >
                <Link to='/'><i className="fas fa-caret-right"></i></Link>
              </li>
            </ul>        
          </div>
          <div className="text-center text-white copyright">
            <p><Link to='/'>Bramhacorp Ltd</Link> ©2019. All reserved.</p>
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
