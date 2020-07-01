import { Link } from "gatsby"
import PropTypes from "prop-types"
import React,{ useState } from "react"
import '../styles/css/custom.css';
import '../styles/scss/main.scss';
import img1 from '../images/logo.png';
import $ from 'jquery';
const Header = ({ siteTitle ,pathname,data}) => {
  const [contactFlag, setContactFlag] = useState(false);
  const contactFlagTrueFalse = () => setContactFlag(!contactFlag);
 
function classHandle() {
  $("body").removeClass("nav-open");
 }

return(
<header className="header">
  <nav className="navbar navbar-light container" >
  <Link className="navbar-brand" to='/'  >
    <img src={img1} alt="BramhaCorp Logo" className="logo-img" />
  </Link>
  <div className="header-icons-wrapper">
  <div className="whats-app-icon">
    <a href={data.whatsapp.url} target="_blank" className="d-flex align-items-center justify-content-center">
    <span className="icon-icons8-whatsapp">
      <span className="path1"></span>
      <span className="path2"></span>
      <span className="path3"></span>
      <span className="path4"></span>
      <span className="path5"></span>
    </span>
    </a>
  </div>
  <div className="drawer-toggle d-flex align-items-center"  onClick={() =>  setContactFlag(!contactFlag)}>
    <span className="icon-sticky_phone"></span>
  </div>
    <a className="nav-trigger" id="toggle" onClick={() => $("body").toggleClass("nav-open")}>
      Menu <span></span>
    </a>
  </div>
  {contactFlag &&
        <div className="drawer-field" id="navigation1" >
          <div className="hide text-right" onClick={contactFlagTrueFalse}>
            <i className="fas fa-times"></i>
          </div>
          {/* <div className="contact-feild">
            <i className="far fa-user-circle"></i>
            <h4 className="text-center mb-3 section-title">  Direct call to our consultant</h4>
            <p>
              Project Inquiry :<Link to="tel:91204142330"  className="link-text"> 91204142330</Link>
            </p>
            <p>
              Head Office : <Link to="tel:912041442333" className="link-text"> 912041442333</Link>
            </p>
            <p>
              Fax Number : <Link to="tel:912041442333"  className="link-text"> 912026353333</Link>
            </p>
          </div> */}
          <ul className="nav nav-tabs contact-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="true">
              <span className="icon-sticky_phone"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="mail-tab" data-toggle="tab" href="#mail" role="tab" aria-controls="mail" aria-selected="false">
              <span className="icon-sticky_form"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="chat-tab" data-toggle="tab" href="#chat" role="tab" aria-controls="chat" aria-selected="false">
                <span className="icon-sticky_chat"></span>
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div className="contact-feild">
                  <i className="far fa-user-circle"></i>
                  <h4 className="text-center mb-3 section-title">  Direct call to our consultant</h4>
                  {
                    data.contact_info && data.contact_info.map((item) => {
                      return (
                        <p>
                          {item.title1.text} : <a href={`tel:${item.number}`}  className="link-text"> {item.number}</a>
                        </p>
                      )
                    })
                  }
                  
                </div>
            </div>
            <div className="tab-pane fade" id="mail" role="tabpanel" aria-labelledby="mail-tab">
            <div className="mail">
              <h4 className="text-center mb-3 section-title mt-3"> BramhaCorp Enquiry</h4>
                <form name="customer" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="contact-form-bg" id="customer">
                      <div className="container">
                        <div className="form-row">
                          <div className="col-sm-12 form-group  ">
                              <input type="text"  id="name" placeholder="Your Name*" name="name" autoComplete="false" required/>
                          </div>
                          <div className="col-sm-12 form-group  ">
                            <input type="text"  id="email" placeholder="Your Email*" autoComplete="false" name="email" required/>
                          </div>
                          <div className="col-sm-12 form-group">
                            <select defaultValue="" className="w-100" id="" name="source" required >
                              <option value="" disabled>Budget</option>
                              <option >50 Lakh</option>
                              <option>50-80 Lakh</option>
                              <option> 80 Lakh-1Crore</option>
                              <option>1 Crore</option>
                            </select>
                          </div>
                          <div className="col-sm-12 form-group  ">
                            <input type="text"  id="city" placeholder="City" name="city" required/>
                          </div>
                          <div className="form-group col-md-12">
                            <textarea  rows="3" id="message" placeholder="Message" name="message" required></textarea>
                          </div>
                        </div>
                        <div className="sumbit text-center ">
                          <button type="submit" className="btn-secondary">Submit</button>
                        </div>
                      </div>
                    </div>
                </form>
              </div>
            </div>
            <div className="tab-pane fade" id="chat" role="tabpanel" aria-labelledby="chat-tab">
              <div className="chat-feild">
                  <i className="far fa-user-circle"></i>
                  <h4 className="text-center mb-3 section-title">Live chat with our consultant</h4>
                  <p className="text-center">Coming Soon...</p>
              </div>
            </div>
          </div>
        </div>
      }
      {/* {mailFlag &&
      <div className="drawer-field" id="navigation" >
        <div className="hide text-right" onClick={mailFlagTrueFalse}>
          <i className="fas fa-times"></i>
        </div>
        <div className="mail">
        <h4 className="text-center mb-3 section-title"> BramhaCorp Enquiry</h4>
          <form name="customer" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <div className="contact-form-bg" id="customer">
                <div className="container">
                  <div className="form-row">
                    <div className="col-sm-12 form-group  ">
                        <input type="text"  id="name" placeholder="Your Name*" name="name" autoComplete="false" required/>
                    </div>
                    <div className="col-sm-12 form-group  ">
                      <input type="text"  id="email" placeholder="Your Email*" autoComplete="false" name="email" required/>
                    </div>
                    <div className="col-sm-12 form-group  ">
                      <PhoneInput className="form-control" id="phone-number"  placeholder="Your Phone Number*" name="phone-number" required
                        value={value}
                        onChange={setValue}
                      />
                    </div>
                    <div className="col-sm-12 form-group">
                      <select defaultValue="" className="w-100" id="" name="source" required >
                        <option value="" disabled>Budget</option>
                        <option >50 Lakh</option>
                        <option>50-80 Lakh</option>
                        <option> 80 Lakh-1Crore</option>
                        <option>1 Crore</option>
                      </select>
                    </div>



                    <div className="col-sm-12 form-group  ">
                      <input type="text"  id="city" placeholder="City" name="city" required/>
                    </div>
                    <div className="form-group col-md-12">
                      <textarea  rows="3" id="message" placeholder="Message" name="message" required></textarea>
                    </div>
                  </div>
                  <div className="sumbit text-center ">
                    <button type="submit" className="btn-secondary">Submit</button>
                  </div>
                </div>
              </div>
          </form>
        </div>
      </div>
      }
      {chatFlag &&
      <div className="drawer-field" id="navigation" >
        <div className="hide text-right" onClick={chatFlagTrueFalse}>
          <i className="fas fa-times"></i>
        </div>
        <div className="chat-feild">
            <i className="far fa-user-circle"></i>
            <h4 className="text-center mb-3 section-title">Live chat with our consultant</h4>
            <p className="text-center">Coming Soon...</p>
        </div>
      </div>
      } */}
<nav className="nav-container pb-0" id="navigation">
  <ul className="nav navbar-nav">
      <li className={`nav-item ${pathname=='/' ? 'active':''}`}>
        <Link className="nav-link" to="/" onClick={classHandle}>Home</Link>
      </li>
      {/* <li className={`nav-item dropdown border-0 ${pathname=='/about-us' || pathname=='/management-team' ? 'active':''}`} >
        <Link className="nav-link d-inline-block w-100" to="/about-us" onClick={classHandle}>
          About Us
        </Link>
        <Link className="dropdown-toggle d-inline-block custom-toggle" to="/" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="caret"></span></Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {/* <Link className="dropdown-item" to="/about-us"  onClick={classHandle}>Our Legacy</Link> */}
          {/* <Link className={`dropdown-item ${pathname=='/management-team' ? 'active' : ''}`} to='/management-team'  onClick={classHandle}>Management Team</Link>
        </div>
      </li> */}
      <li className={`nav-item dropdown border-0 ${pathname=='/about-us' || pathname=='/management-team' ? 'active':''}`}>
            <Link className="nav-link dropdown-toggle" to="/about-us" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              About Us
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/about-us"  onClick={classHandle}>Our Legacy</Link>
              <Link className={`dropdown-item ${pathname=='/management-team' ? 'active' : ''}`} to='/management-team'  onClick={classHandle}>Management Team</Link>
            </div>
          </li>
          <li className={`nav-item dropdown ${pathname=='/residential' || pathname=='/commercial' || pathname=='/hospitality' || pathname=='/leisure-club' ? 'active':''}`}>
            <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Our Verticals
            </Link>
            <div className="dropdown-menu  border-0" aria-labelledby="navbarDropdown1">
              <Link className={`dropdown-item ${pathname=='/residential' ? 'active' : ''}`} to='/residential' onClick={classHandle}>Residential</Link>
              <Link className={`dropdown-item ${pathname=='/commercial' ? 'active' : ''}`} to='/commercial' onClick={classHandle}>Commercial</Link>
              <Link className={`dropdown-item ${pathname=='/hospitality' ? 'active' : ''}`} to='/hospitality' onClick={classHandle}>Hospitality</Link>
              <Link className={`dropdown-item ${pathname=='/leisure-club' ? 'active' : ''}`} to='/leisure-club' onClick={classHandle}>Leisure</Link>
            </div>
          </li>
      {/* <li className={`nav-item dropdown ${pathname=='/residential' || pathname=='/commercial' || pathname=='/hospitality' || pathname=='/leisure-club' ? 'active':''}`}>
        <Link className="nav-link d-inline-block w-100" to="/" onClick={onClick}>
          Our Verticals
        </Link>
        <Link className="dropdown-toggle d-inline-block custom-toggle" to="/" id="navbarDropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="caret"></span></Link>
        <div className="dropdown-menu  border-0" aria-labelledby="navbarDropdown1">
          <Link className={`dropdown-item ${pathname=='/residential' ? 'active' : ''}`} to='/residential' onClick={classHandle}>Residential</Link>
          <Link className={`dropdown-item ${pathname=='/commercial' ? 'active' : ''}`} to='/commercial' onClick={classHandle}>Commercial</Link>
          <Link className={`dropdown-item ${pathname=='/hospitality' ? 'active' : ''}`} to='/hospitality' onClick={classHandle}>Hospitality</Link>
          <Link className={`dropdown-item ${pathname=='/leisure-club' ? 'active' : ''}`} to='/leisure-club' onClick={classHandle}>Leisure</Link>
        </div>
      </li> */}
      <li className={`nav-item ${pathname=='/partners' ? 'active':''}`}>
        <Link className="nav-link" to="/partners" onClick={classHandle}>Partners</Link>
      </li>
      <li className={`nav-item ${pathname=='/awards&recognition' ? 'active':''}`}>
        <Link className="nav-link" to="/awards&recognition" onClick={classHandle}>Awards & Recognition</Link>
      </li>
      <li className={`nav-item ${pathname=='/knowledge-hub' ? 'active':''}`}>
        <Link className="nav-link" to="/knowledge-hub" onClick={classHandle}>Knowledge Hub</Link>
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
  <div className="overlay" onClick={() => $("body").toggleClass("nav-open")}></div>
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
