import { Link } from "gatsby"
import React from "react"
import '../styles/css/custom.css';
import '../styles/scss/main.scss';
import $ from 'jquery';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";


const Footer = ({ siteTitle }) => {
  return(
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="footer-menu">
            <ul className="d-flex list-unstyled justify-content-center bottom-border flex-wrap ">
              <li className="nav-item  ">
                <Link to="/real-estate"> Real Estate</Link>
              </li>
              <li className="nav-item ">
                <Link to="/blog"> Blog</Link>
              </li>
              <li className="nav-item ">
                <Link to="/partners"> Channel Partners</Link>
              </li>
              <li className="nav-item ">
                <Link to="/careers"> Careers</Link>
              </li>
              <li className="nav-item ">
                <Link to="/site-map"> Site Map</Link>
              </li>
              <li className="nav-item ">
                <Link className=" " to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="nav-item ">
                <Link to="/disclaimer">Disclaimer</Link>
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
            <p className="m-0"><Link to="/">BramhaCorp Ltd</Link> &copy; {new Date().getFullYear()}. All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
   <ScrollUpButton ContainerClassName="back-to-top" />
  </footer>


)
  }

export default Footer
