import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
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
          <div className="contact-heading mb-5 mt-0 mt-sm-5" >
            <div className="container container-sm-fluid">
              <div className="title mb-4 mb-sm-5"> 
                <h2>{contactData.contactus.text}</h2>
              </div>
              <p className="description">{contactData.description.text}</p>
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
                    {
                      contactData.address.map((item,value)=>{
                        return(
                          <p key={value} className="description">{item.contact_address.text}</p>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="email-address">
                    <div className="sub-heading ">
                      <i className="fas fa-envelope-open-text"></i>
                      <h3 className="ml-2">Email Address</h3>          
                    </div>
                    <hr/>
                    {
                      contactData.email_address.map((item,value)=>{
                        return(
                          <p key={value} className="description mb-0">{item.email_add.text}</p>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-info">
                    <div className="sub-heading ">
                      <i className="fas fa-phone-volume"></i>
                      <h3 className="ml-2">Contact Info</h3>          
                    </div>
                    <hr/>
                    {
                      contactData.contact_info.map((item,value)=>{
                      return(
                        <p key={value} className="description mb-0">{item.title1.text}{" "}{item.number}</p>
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
                <h3 className="text-center text-uppercase mb-4 ">Enquiry Now</h3>
            </div>
            <form name="customer" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <div className="bg-color ">
                <div className="container">
                  <div className="d-flex customer justify-content-center align-items-center">
                    <label className="mr-3 text-white mb-0">I Am A</label>
                    <select className="form-control">
                      <option name="customer">Customer</option>
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
                        <input type="text" className="form-control" id="name" placeholder="Your Name*" name="name" required/>
                    </div>
                    <div className="col-md-6 form-group  ">
                        <input type="" className="form-control" id="phone-number" placeholder="Your Phone Number*" name="phone-number" required/>
                    </div>
                    <div className="col-md-6 form-group  ">
                        <input type="text" className="form-control" id="email" placeholder="Your Email*" name="email" required/>
                    </div>
                    <div className="col-md-6 form-group  ">
                        <input type="" className="form-control" id="city" placeholder="City" name="city" required/>
                    </div>
                    <div className="col-md-6 form-group  ">
                        <input type="text" className="form-control" id="budget" placeholder="Budget" name="budget" required/>
                    </div>
                    <div className="col-md-6 form-group ">
                      <select className="form-control" id="aboutus" placeholder="Budget" name="aboutus" required >
                        <option>Where did you here about us?</option>
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
                    <button type="submit" className="btn text-white">Submit</button>
                  </div>  
                </div> 
              </div>
            </form>
          </section>
          <section className="locate-us"> 
          <div className="container">
        <h3 className="text-center text-uppercase mb-4 sub-title ">Locate Us</h3>
        <div className="map-image">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9979896405875!2d73.87803231420851!3d18.52899298740413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c056fa4d8413%3A0xe2b3bd637ed792be!2sResidency%20Club!5e0!3m2!1sen!2sin!4v1576302776373!5m2!1sen!2sin" style={{width:'100%', height:'450px', frameborder:'0', border:'0', allowfullscreen:''}}></iframe>
        </div>
    </div>
          </section>
        </section>  
        <Footer />
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