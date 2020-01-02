import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import Footer from '../components/footer';

class Contacts extends React.Component {
  render(){
    const contactData = this.props.data.prismicCompanyDetails.data;
    console.log('ccontact data from contact page', contactData);
    return(
      <Layout>
        <section className="contact-section">
          <div className="contact-page-image">
            <img src={contactData.banner.url} alt="" width="100%"/>
          </div>
          <section className="page-heading-section container container-sm-fluid bg-color">
            <div className="padding-block-60">
              <h2 className="page-heading"> {contactData.contactus.text}</h2> 
            </div>
            <div className="row mr-0">
              <div className="col-12">
                <div className="main-paragraph">
                  <p className=" m-0">
                    {contactData.description.text}
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="contact-details">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="postal-address mb-5 mb-md-0">
                    <div className="d-md-flex align-items-center mb-10">
                      <h3 className=" section-title mb-md-0 text-center text-capitalize"> <i className="fas fa-map-marker-alt mr-0 mr-md-1"></i> Postal Address </h3>          
                    </div>
                    {
                      contactData.address.map((item,value)=>{
                        return(
                          <address className="text mt-3 mt-md-0 mb-0" key={value}>{item.contact_address.text}</address>
                        )
                      })
                    }
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="email-address mb-5 mb-md-0">
                    <div className="d-md-flex align-items-baseline mb-10">
                      <h3 className=" section-title mb-md-0 text-center text-capitalize"><i className="fas fa-envelope-open-text mr-0 mr-md-1"></i> Email Address
                      </h3>          
                    </div>
                    {
                      contactData.email_address.map((item,value)=>{
                        return(
                          <p className=" mb-0 mt-3 mt-md-0" key={value}> <a href={`mailto:${item.email_add.text}`}> {item.email_add.text} </a> </p>
                        )
                      })
                    }
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="contact-info mb-5 mb-md-0">
                    <div className="d-md-flex align-items-baseline mb-10">  
                      <h3 className=" section-title mb-md-0 text-center text-capitalize"> <i className="fas fa-phone-volume mr-0 mr-md-1"></i>Contact Info
                      </h3>          
                    </div>
                    {
                      contactData.contact_info.map((item,value)=>{
                      return(
                        // <p key={value} className="description mb-0">{item.title1.text}{" "}{item.number}</p>
                        <p className=" mb-0 mt-3 mt-md-0" key={value}>{item.title1.text}{" "}  <a href={`tel:${item.number}`}>{item.number} </a></p>
                      )
                    })
                    }
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="contact-form">
            <div className="container"> 
                <h3 className="text-center text-uppercase section-title">Enquiry Now</h3>
            </div>
                <form name="customer" method="post" data-netlify="true" data-netlify-honeypot="bot-field"> 
                    <div className="form-bg-color ">
                        <div className="container">
                            <div className="d-flex customer justify-content-center align-items-baseline">
                                <label className=" text-white mb-0 font-weight-light">I am A</label>
                                <select name="I am :" className="form-control">
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
                          <div className="col-sm-6 form-group  ">
                              <input type="text" className="form-control" id="name" placeholder="Your Name*" name="name" required/>
                          </div>
                          <div className="col-sm-6 form-group  ">
                              <input type="" className="form-control" id="phone-number" placeholder="Your Phone Number*" name="phone-number" required/>
                          </div>
                          <div className="col-sm-6 form-group  ">
                              <input type="text" className="form-control" id="email" placeholder="Your Email*" name="email" required/>
                          </div>
                          <div className="col-sm-6 form-group  ">
                              <input type="" className="form-control" id="city" placeholder="City" name="city" required/>
                          </div>
                          <div className="col-sm-6 form-group  ">
                              <input type="text" className="form-control" id="budget" placeholder="Budget" name="budget" required/>
                          </div>
                          <div className="col-sm-6 form-group ">
                            <select className="form-control" id="aboutus" placeholder="Budget" name="aboutus" required >
                              <option>Where did you hear about us?</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>  
                          <div className="form-group col-md-12">
                            <textarea className="form-control" rows="5" id="message" placeholder="Additional Message" name="message" required></textarea>
                          </div>
                        </div>
                        <div className="sumbit text-center mt-sm-0 mt-4">
                          <button type="submit" className="btn-secondary btn">Download Brochure</button>
                        </div>  
                      </div> 
                    </div>
                </form>
            </section>
            <section className="locate-us"> 
              <div className="container">
                <h3 className="text-center text-uppercase mb-4 section-title ">Locate Us</h3>
                <div className="map-image">
                  <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9979896405875!2d73.87803231420851!3d18.52899298740413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c056fa4d8413%3A0xe2b3bd637ed792be!2sResidency%20Club!5e0!3m2!1sen!2sin!4v1576302776373!5m2!1sen!2sin" style={{width:"100%", height:"450px", frameborder:"0", border:"0", allowfullscreen:""}}></iframe>
                </div>
              </div>
            </section>
          </section>  
        <Footer/>
      </Layout>
    )
  }
}

export default Contacts;

export const contactPage = graphql`{
  prismicCompanyDetails {
    data {
      title {
        text
      }
      description {
        text
      }
      banner {
        url
      }
      contactus {
        text
      }
      address {
        contact_address {
          text
        }
        location {
          latitude
          longitude
        }
      }
      email {
        text
      }
      email_address {
        email1 {
          text
        }
        email_add {
          text
        }
      }
      contact_info {
        title1 {
          text
        }
        number
      }
    }
  }
}`