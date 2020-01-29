import { Link } from "gatsby"
import React from "react"
import '../styles/css/custom.css';
import '../styles/scss/main.scss';
import $ from 'jquery';

const Footer = ({ siteTitle }) => { 
  function scrollTo() {
    window.scrollTo(0, 0);

  }
  // $(document).ready(function(){
  //   $(window).scroll(function () {
  //       if ($(this).scrollTop() > 50) {
  //         $('#back-to-top').fadeIn();
  //       } else {
  //         $('#back-to-top').fadeOut();
  //       }
  //     });
  //     // scroll body to 0px on click
  //     $('#back-to-top').click(function () {
  //       $('body,html').animate({
  //         scrollTop: 0
  //       }, 400);
  //       return false;
  //     });
  // });
  return(
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
                <Link to="/"> Channel Partners</Link>
              </li>
              <li className="nav-item ">
                <Link to="/careers"> Careers</Link>
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
            <p className="m-0"><Link to="/">BramhaCorp Ltd</Link>&copy; {new Date().getFullYear()}. All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
    <a id="back-to-top"  className="btn btn-light btn-lg back-to-top" role="button" onClick={scrollTo}><i class="fas fa-chevron-up"></i></a>
  </footer>
  

)
  }

export default Footer
