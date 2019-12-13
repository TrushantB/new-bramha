import React from 'react'
import Layout from '../components/layout'

import contactImage from '../styles/images/contact-page.jpg'
import mapImage from '../styles/images/map.jpg'

class Contacts extends React.Component {
  render(){
    return(
      <Layout>
        <section className="contact-section">
          <div className="contact-page-image">
            <img src={contactImage} alt="" width="100%"/>
          </div>
          <div className="contact-heading mb-5 mt-0 mt-sm-5" >
            <div className="container container-sm-fluid">
              <div className="title mb-4 mb-sm-5"> 
                <h2>Contact Us</h2>
              </div>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            </div>
          </div>
          <section className="contact-details">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="postal-address">
                    <div className="sub-heading ">
                      <i className="fas fa-map-marker-alt"></i>
                      <h3 className="ml-2">Postal Address</h3>          
                    </div>
                    <hr/>
                    <p className="description">Recendacy Club 3, Quuen Gardern Road, Pune India. 411030</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="email-address">
                    <div className="sub-heading ">
                      <i className="fas fa-envelope-open-text"></i>
                      <h3 className="ml-2">Email Address</h3>          
                    </div>
                    <hr/>
                    <p className="description mb-0">presale@bramhacorp.in</p>
                    <p className="description mt-0">crp@bramhacorm.in</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-info">
                    <div className="sub-heading ">
                      <i className="fas fa-phone-volume"></i>
                      <h3 className="ml-2">Contact Info</h3>          
                    </div>
                    <hr/>
                    <p className="description mb-0">Project Inquiry: +9120200300</p>
                    <p className="description m-0">Head Office: +9120200300</p>
                    <p className="description mt-0">Fax Number: +9120200300</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="contact-form">
            <div className="container"> 
                <h3 className="text-center text-uppercase mb-4 ">Enquiry Now</h3>
            </div>
            <form name="customer" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <div className="bg-color ">
                <div className="container">
                  <div className="d-flex customer justify-content-center align-items-center">
                    <label className="mr-3 text-white mb-0">I Am A</label>
                    <select className="form-control">
                      <option>Customer</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="contact-form-bg pt-4 pb-4 pt-sm-5 pb-sm-5">
                <div className="container">
                  <div className="form-row">
                   <input type="hidden" name="form-name" value="customer" />
                    <div className="col-md-6 form-group  ">
                        <input type="text" className="form-control" id="email" placeholder="Your Name*" name="email" required/>
                    </div>
                    <div className="col-md-6 form-group  ">
                        <input type="" className="form-control" placeholder="Your Phone Number*" name="pswd" required/>
                    </div>
                    <div className="col-md-6 form-group  ">
                        <input type="text" className="form-control" id="email" placeholder="Your Email*" name="email" required/>
                    </div>
                    <div className="col-md-6 form-group  ">
                        <input type="" className="form-control" placeholder="City" name="pswd" required/>
                    </div>
                    <div className="col-md-6 form-group  ">
                        <input type="text" className="form-control" id="email" placeholder="Budget" name="email" required/>
                    </div>
                    <div className="col-md-6 form-group ">
                      <select className="form-control" placeholder="Budget" required >
                        <option>Where did you here about us?</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>  
                    <div className="form-group col-md-12">
                      <textarea className="form-control" rows="5" id="comment" placeholder="Additional Message" required></textarea>
                    </div>
                  </div>
                  <div className="sumbit text-center mt-sm-0 mt-4">
                    <button type="submit" className="btn text-white">Submit</button>
                  </div>  
                </div> 
              </div>
            </form>
          </section>
          <section className="locate-us"> 
            <div className="container">
              <h3 className="text-center text-uppercase mb-4 ">Locate Us</h3>
              <div className="map-image">
                <img src={mapImage} alt="" width="100%"/>
              </div>
            </div>
          </section>
        </section>  
      </Layout>
    )
  }
}

export default Contacts;