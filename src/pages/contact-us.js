import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image';
import Footer from '../components/footer';
import SEO from '../components/seo';

class Contacts extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        customer: true,
        channel: false,
        constructors: false,
        career: false
      };
    }
    optionSelect = (e) =>{
      this.setState({visible:!this.state.visible})
      console.log("e.target.value",e.target.value);
      if(e.target.value === 'customer'){
        this.setState({ customer : true, channel : false, constructors : false ,  career : false })
      }
      else if(e.target.value === 'channel'){
        this.setState({ channel : true, customer : false, constructors : false ,  career : false })
      }
      else if(e.target.value === 'constructors'){
        this.setState({ constructors : true, channel : false, customer : false,  career : false  })
      }
      else if(e.target.value === 'career'){
        this.setState({ career : true , constructors : false, channel : false, customer : false })
      }
    }
  render(){
    const contactData = this.props.data.prismicCompanyDetails.data;
    return(
      <Layout>
        <SEO title="Contacts"/>
        <section className="contact-section">
          <div className="contact-page-image">
            <Img fluid={contactData.banner.localFile.childImageSharp.fluid} alt="" width="100%"/>
          </div>
          <section className="page-heading-section container container-sm-fluid bg-color">
            <div className="contact-us-title padding-block-60">
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
                          <address className="text mt-0  mb-0" key={value}>{item.contact_address.text}</address>
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
                          <p className=" mb-0 mt-0 " key={value}> <a href={`mailto:${item.email_add.text}`}> {item.email_add.text} </a> </p>
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
                        <p className=" mb-0 mt-0 " key={value}>{item.title1.text}{" "}  <a href={`tel:${item.number}`}>{item.number} </a></p>
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
                                <select name="I am :" className="form-control" onChange={(e) => this.optionSelect(e)}>
                                    <option value="customer">Customer</option>
                                    <option value="channel">Channel Partner</option>
                                    <option value="constructors">Constructors & Suppliers</option>
                                    <option value="career">Career</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {
                      this.state.customer && 
                    <div className="contact-form-bg pt-4 pb-4 pt-sm-5 pb-sm-5" id="customer">
                      <div className="container">
                        <div className="form-row">
                        <input type="hidden" name="form-name" value="customer" />
                          <div className="col-sm-6 form-group  ">
                              <input type="text" className="form-control" id="name" placeholder="Your Name*" name="name" autoComplete="false" required/>
                          </div>
                         
                          <div className="col-sm-6 form-group  ">
                              <input type="text" className="form-control" id="email" placeholder="Your Email*" autoComplete="false" name="email" required/>
                          </div>
                          <div className="col-sm-6 form-group  ">
                              <input type="number" className="form-control" id="phone-number" placeholder="Your Phone Number*" name="phone-number" required/>
                          </div>
                          <div className="col-sm-6 form-group ">
                            <select className="form-control" id="aboutus" placeholder="Budget" name="aboutus" required >
                              <option>Project Intrested</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div> 

                          <div className="col-sm-6 form-group  ">
                              <input type="number" className="form-control" id="budget" placeholder="Budget" name="budget" required/>
                          </div>
                          <div className="col-sm-6 form-group  ">
                              <input type="text" className="form-control" id="city" placeholder="City" name="city" required/>
                          </div>
                          <div className="col-sm-12 form-group ">
                            <select className="form-control" id="aboutus" placeholder="source" name="aboutus" required >
                              <option>source</option>
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
                          <button type="submit" className="btn-secondary">Submit</button>
                        </div>  
                      </div> 
                    </div>
                    }
                    {
                      this.state.channel && 
                    <div className="contact-form-bg pt-4 pb-4 pt-sm-5 pb-sm-5" id="channel-partner">
                      <div className="container">
                        <div className="form-row">
                        <input type="hidden" name="form-name" value="customer" />
                          <div className="col-sm-6 form-group  ">
                              <input type="text" className="form-control" id="name" placeholder="Individual Name*" name="name" autoComplete="false" required/>
                          </div>
                         
                          <div className="col-sm-6 form-group  ">
                              <input type="text" className="form-control" id="email" placeholder="Your Email*" autoComplete="false" name="email" required/>
                          </div>
                          <div className="col-sm-6 form-group  ">
                              <input type="number" className="form-control" id="phone-number" placeholder="Your Phone Number*" name="phone-number" required/>
                          </div>
                          <div className="col-sm-6 form-group ">
                            <select className="form-control" id="aboutus" placeholder="Budget" name="aboutus" required >
                              <option>RERA Registration Number</option>
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
                          <button type="submit" className="btn-secondary">Submit</button>
                        </div>  
                      </div> 
                    </div>
                    }
                    {
                      this.state.constructors &&
                    <div className="contact-form-bg pt-4 pb-4 pt-sm-5 pb-sm-5" id="constructors">
                      <div className="container">
                        <div className="form-row">
                        <input type="hidden" name="form-name" value="constructors" />
                        <div className="col-sm-6 form-group  ">
                              <input type="text" className="form-control" id="name" placeholder="Company*" name="name" autoComplete="false" required/>
                          </div>
                          <div className="col-sm-6 form-group  ">
                              <input type="text" className="form-control" id="name" placeholder="Your Name*" name="name" autoComplete="false" required/>
                          </div>
                         
                          <div className="col-sm-6 form-group  ">
                              <input type="text" className="form-control" id="email" placeholder="Your Email*" autoComplete="false" name="email" required/>
                          </div>
                          <div className="col-sm-6 form-group  ">
                              <input type="number" className="form-control" id="phone-number" placeholder="Your Phone Number*" name="phone-number" required/>
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
 
                    }
                   {
                      this.state.career &&
                      <div className="contact-form-bg pt-4 pb-4 pt-sm-5 pb-sm-5" id="career">
                      <div className="container">
                        <div className="form-row">
                        <input type="hidden" name="form-name" value="career" />
                          <div className="col-sm-6 form-group  ">
                              <input type="text" className="form-control" id="name" placeholder="Your Name*" name="name" autoComplete="false" required/>
                          </div>
                         
                          <div className="col-sm-6 form-group  ">
                              <input type="text" className="form-control" id="email" placeholder="Your Email*" autoComplete="false" name="email" required/>
                          </div>
                          <div className="col-sm-6 form-group  ">
                              <input type="number" className="form-control" id="phone-number" placeholder="Your Phone Number*" name="phone-number" required/>
                          </div>

                          <div className="col-sm-6 form-group  ">
                              <input type="text" className="form-control" id="city" placeholder="City" name="city" required/>
                          </div> 
                          <div className="form-group file-area">
                            <input type="file" name="" id="" required="required" multiple="multiple" className="h-100"/>
                              <div className="file-dummy resume-upload">
                                <div className="default">Resume Upload (PDF/DOC)*</div>
                              </div>
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
 
                    }
            </form>
            </section>
            <section className="locate-us"> 
              <div className="container">
                <h3 className="text-center text-uppercase mb-4 section-title ">Locate Us</h3>
                <div className="map-image map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15131.933349805166!2d73.8796209!3d18.5296551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10c8d7103151a095!2sBRAMHACORP%20LTD.!5e0!3m2!1sen!2sin!4v1578749393535!5m2!1sen!2sin" style={{width:"100%", height:"450px", frameborder:"0", border:"0", allowfullscreen:""}}></iframe>
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
        localFile {
            childImageSharp {
              fluid(maxWidth: 1150) {
                ...GatsbyImageSharpFluid
              }
            }
        }
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