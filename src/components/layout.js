import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children ,pathname}) => {
  const [contactFlag, setContactFlag] = useState(false);
  const [mailFlag, setMailFlag] = useState(false);
  const [chatFlag, setChatFlag] = useState(false);

  const contactFlagTrueFalse = () => setContactFlag(!contactFlag);
  const mailFlagTrueFalse = () => setMailFlag(!mailFlag);
  const chatFlagTrueFalse = () => setChatFlag(!chatFlag);
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} pathname={pathname}/>
      <main>{children}</main>
      <div className="drawer-container">
        <div className="drawer-toggle" id="toggle" onClick={() => setContactFlag({contactFlag: !true})}>
          <i className="fas fa-phone"></i>
        </div>
        <div className="drawer-toggle" onClick={() => setMailFlag({mailFlag: !mailFlag})}>
          <i className="fas fa-envelope-open-text"></i>
        </div>
        <div className="drawer-toggle" onClick={() => setChatFlag({chatFlag: !chatFlag})}>
          <i className="fas fa-comment-alt"></i>
        </div>
      </div>
      {contactFlag && 
        <div className="drawer-field" id="navigation" >
          <div className="hide text-right" onClick={contactFlagTrueFalse}>
            <i className="fas fa-times"></i>
          </div>
          <div className="contact-feild"> 
            <i className="far fa-user-circle"></i>
            <h4> Direct call to our consultant</h4>
            <p>
              Project Inquiry:<Link to="tel:91204142330">91204142330</Link>
            </p>
            <p>
              Head Office: <Link to="tel:912041442333">912041442333</Link>
            </p>
            <p>
              Fax Number: <Link to="tel:912041442333">912026353333</Link>
            </p>
          </div>
        </div>
      }
      {mailFlag && 
      <div className="drawer-field" id="navigation" >
        <div className="hide text-right" onClick={mailFlagTrueFalse}>
          <i className="fas fa-times"></i>
        </div>
        <div className="mail">
        <h4 className="text-center mb-3"> BramhaCorp Enquiry</h4>
          <form name="customer" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <div className="contact-form-bg" id="customer">
                <div className="container">
                  <div className="form-row">
                    <div className="col-sm-12 form-group  ">
                        <input type="text" className="form-control" id="name" placeholder="Your Name*" name="name" autoComplete="false" required/>
                    </div>
                    <div className="col-sm-12 form-group  ">
                      <input type="text" className="form-control" id="email" placeholder="Your Email*" autoComplete="false" name="email" required/>
                    </div>
                    <div className="col-sm-12 form-group  ">
                      <input type="number" className="form-control" id="phone-number" placeholder="Your Phone Number*" name="phone-number" required/>
                    </div>
                    <div className="col-sm-12 form-group  ">
                      <input type="number" className="form-control" id="budget" placeholder="Budget" name="budget" required/>
                    </div>
                    <div className="col-sm-12 form-group  ">
                      <input type="text" className="form-control" id="city" placeholder="City" name="city" required/>
                    </div>
                    <div className="form-group col-md-12">
                      <textarea className="form-control" rows="5" id="message" placeholder="Additional Message" name="message" required></textarea>
                    </div>
                  </div>
                  <div className="sumbit text-center mt-sm-0 mt-4">
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
            <h4> Live chat with our consultant</h4>
            <p className="text-center">Coming Soon...</p>
        </div>
      </div>
      }
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
