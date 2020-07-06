import React from 'react'
import Layout from '../components/layout'
import { graphql, navigate } from 'gatsby'
import SEO from '../components/seo';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import '../firebase/config';
import * as firebase from 'firebase';
import FileUploader from "react-firebase-file-uploader";
import queryString from 'query-string';
import chevron_down from '../images/chevron_down.svg';
import Div100vh from 'react-div-100vh/lib/Div100vh';

class Contacts extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        customer: true,
        channel: false,
        constructors: false,
        career: false,
        LandOwner:false,
        value:"+91",
        avatar: "",
        avatarURL: "",
        url: '',
        utmSource: null,
        utmMedium: null,
        utmCampaign: null
      };
    }

  submitCustomer = (e) => {
    e.preventDefault();
    firebase
      .database()
      .ref("Customer")
      .push()
      .set({
        name: e.target.name.value,
        email: e.target.email.value,
        phoneNumber: e.target.phoneNumber.value,
        projectList: e.target.projectList.value,
        budget: e.target.budget.value,
        city: e.target.city.value,
        source: e.target.source.value,
        message: e.target.message.value,
        utmSource: e.target.utmSource.value,
        utmCampaign: e.target.utmCampaign.value,
        utmMedium: e.target.utmMedium.value,
        createdDt: new Date().toString()
      })
      this.setState({ value: '+91'});
      document.querySelector('.contactCustomer').reset();
      navigate('enquiry/customer/thank-you')
  }

  submitChannelPartner = (e) => {
    e.preventDefault();
    firebase
      .database()
      .ref("Channel Partner")
      .push()
      .set({
        name: e.target.name.value,
        email: e.target.email.value,
        phoneNumber: e.target.phoneNumber.value,
        rera: e.target.rera.value,
        message: e.target.message.value,
        utmSource: e.target.utmSource.value,
        utmCampaign: e.target.utmCampaign.value,
        utmMedium: e.target.utmMedium.value,
        createdDt: new Date().toString()
      })
      this.setState({ value: '+91'});
      document.querySelector('.contactChannel').reset();
      navigate('enquiry/channel-partner/thank-you')
  }

  submitConstructors = (e) => {
    e.preventDefault();
    firebase
      .database()
      .ref("Constructors")
      .push()
      .set({
        name: e.target.name.value,
        email: e.target.email.value,
        phoneNumber: e.target.phoneNumber.value,
        company: e.target.company.value,
        message: e.target.message.value,
        city: e.target.city.value,
        utmSource: e.target.utmSource.value,
        utmCampaign: e.target.utmCampaign.value,
        utmMedium: e.target.utmMedium.value,
        createdDt: new Date().toString()
      })
      this.setState({ value: '+91'});
      document.querySelector('.contactConstructors').reset();
      navigate('enquiry/constructor-suppliers/thank-you')
  }

  submitCareer = (e) => {
    e.preventDefault();
    firebase
      .database()
      .ref("Careers")
      .push()
      .set({
        name: e.target.name.value,
        email: e.target.email.value,
        phoneNumber: e.target.phoneNumber.value,
        jobTitle:'any',
        message: e.target.message.value,
        city: e.target.city.value,
        resumeUrl: this.state.url,
        utmSource: e.target.utmSource.value,
        utmCampaign: e.target.utmCampaign.value,
        utmMedium: e.target.utmMedium.value,
        createdDt: new Date().toString()
      })
      this.setState({avatar: ''});
      this.setState({ value: '+91'});
      document.querySelector('.contactCareer').reset();
      navigate('job-opening/thank-you')
  }

  submitLandOwner = (e) => {
    e.preventDefault();
    firebase
      .database()
      .ref("Land Owner")
      .push()
      .set({
        name: e.target.name.value,
        email: e.target.email.value,
        phoneNumber: e.target.phoneNumber.value,
        company: e.target.company.value,
        message: e.target.message.value,
        city: e.target.city.value,
        utmSource: e.target.utmSource.value,
        utmCampaign: e.target.utmCampaign.value,
        utmMedium: e.target.utmMedium.value,
        createdDt: new Date().toString()
      })
      this.setState({ value: '+91'});
      document.querySelector('.contactLandOwner').reset();
      navigate('enquiry/land-owner/thank-you')
  }

  optionSelect = (e) => {
    this.setState({visible:!this.state.visible})
    if(e.target.value === 'customer'){
      this.setState({ customer : true, channel : false, constructors : false ,  career : false , LandOwner : false })
    }
    else if(e.target.value === 'channel'){
      this.setState({ channel : true, customer : false, constructors : false ,  career : false , LandOwner : false })
    }
    else if(e.target.value === 'constructors'){
      this.setState({ constructors : true, channel : false, customer : false,  career : false, LandOwner : false   })
    }
    else if(e.target.value === 'career'){
      this.setState({ career : true , constructors : false, channel : false, customer : false, LandOwner : false  })
    }
    else if(e.target.value === 'LandOwner'){
      this.setState({ career : false , constructors : false, channel : false, customer : false , LandOwner : true  })
    }
  }

  scrollWin() {
    var offsetHeight = document.querySelector('.banner-section').offsetHeight;
    window.scrollBy({
      top: offsetHeight,
      behavior: 'smooth'
    });
  }

  handleUploadSuccess = filename => {
    this.setState({ avatar: filename });
    firebase
      .storage()
      .ref("Resume")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({ url: url})
      });
  };

  UNSAFE_componentWillMount() {
    const queryParams = queryString.parseUrl(this.props.location.search);
    this.setState({
      utmSource: queryParams && queryParams.query.utm_source,
      utmMedium: queryParams && queryParams.query.utm_medium,
      utmCampaign: queryParams && queryParams.query.utm_campaign
    });
  }

  render(){
    const contactData = this.props.data.prismicCompanyDetails.data;
    return(
      <Layout location="/" noHeader="true" pathname={this.props.location.pathname}>
        <SEO title={contactData.seo_title} description={contactData.seo_description}/>
        {/* <Footer socialMediaLinks={contactData.followus}/> */}
        <section className="contact-section">
          <Div100vh style={{ height: 'calc(100rvh - 57px)'}} className="contact-page-image banner-section mt-60" id="banner-section">
            <picture>
              <source media="(max-width: 581px)" srcSet={contactData.banner.Mobile.url}/>
              <img src={contactData.banner.url} alt="" width="100%" />
            </picture>
            <div className="scroll-downs" onClick={this.scrollWin}>
              <span>Scroll</span>
              <div className="mousey"><img src={chevron_down} /></div>
            </div>
            {/* <Img fluid={contactData.banner.localFile.childImageSharp.fluid} alt="" width="100%"/> */}
          </Div100vh>
          <section className="page-heading-section container container-sm-fluid bg-color">
            <div className="contact-us-title padding-block-60">
              <h2 className="page-heading"> {contactData.contactus.text}</h2>
            </div>
            <div className="row mr-0">
              <div className="col-12">
                <div className="main-paragraph">
                  <div className=" m-0" dangerouslySetInnerHTML={{__html:contactData.description.html }} />
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
                      contactData.address.map((item,value) => {
                        return(
                          <address className="text mt-0 pr-lg-5 mb-0" key={value}>{item.contact_address.text}</address>
                        )
                      })
                    }
                  </div>
                </div>
                    <div className="col-md-4">
                  {
                    contactData.email_address && 
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
                  }
                  </div>

                <div className="col-md-4">
                  <div className="contact-info mb-5 mb-md-0">
                    <div className="d-md-flex align-items-baseline mb-10">
                      <h3 className=" section-title mb-md-0 text-center text-capitalize"> <i className="fas fa-phone-volume mr-0 mr-md-2"></i>Contact Info
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
            <div>
              <form >
                  <div className="form-bg-color ">
                      <div className="container">
                          <div className="d-flex customer justify-content-center align-items-baseline">
                              <label className=" text-white mb-0 font-weight-light">I am A</label>
                              <select name="I am :" className="form-control rounded-0" onChange={(e) => this.optionSelect(e)}>
                                  <option value="customer">Customer</option>
                                  <option value="channel">Channel Partner</option>
                                  <option value="constructors">Contractors & Suppliers</option>
                                  <option value="career">I am a Job Seeker</option>
                                  <option value="LandOwner">Land Owner</option>
                              </select>
                          </div>
                      </div>
                  </div>
              </form>
              {
                this.state.customer &&
                <form className="contactCustomer" onSubmit={(e) => this.submitCustomer(e)} name="customer" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="contact-form-bg pt-4 pb-4 pt-sm-5 pb-sm-5" id="customer">
                    <div className="container">
                      <div className="form-row">
                        <input type="hidden" name="form-name" value="customer" />
                        <input type="hidden" id="utmSource" name="utmSource" value={this.state.utmSource} />
                        <input type="hidden" id="utmMedium" name="utmMedium" value={this.state.utmMedium} />
                        <input type="hidden" id="utmCampaign" name="utmCampaign" value={this.state.utmCampaign} />
                        <div className="col-sm-6 form-group  ">
                            <input type="text" className="form-control" id="name" placeholder="Your Name*" name="name" autoComplete="false" required/>
                        </div>

                        <div className="col-sm-6 form-group  ">
                            <input type="text" className="form-control" id="email" placeholder="Your Email*" autoComplete="false" name="email" required/>
                        </div>
                        <div className="col-sm-6 form-group  ">
                          <PhoneInput className="form-control" id="phoneNumber" maxLength="15" placeholder="Your Phone Number*" name="phone-number" required
                            value={this.state.value}
                            onChange={(e) => this.setState({value:e})}
                          />
                        </div>
                        <div className="col-sm-6 form-group ">
                          <select defaultValue="project" className="form-control rounded-0" id="projectList" placeholder="project-list" name="project-intrested" required >
                          <option value="project" disabled> Project List</option>
                            <option>The Collection</option>
                            <option>F-Residences</option>
                            <option>Waterbay</option>
                            <option>Vantage C</option>
                            <option>Boulevard Towers</option>
                            <option>Business Park</option>
                          </select>
                        </div>

                        <div className="col-sm-6 form-group ">
                          <select defaultValue="Budget" className="form-control rounded-0" id="budget" name="budget" required >
                            <option value="Budget" disabled>Budget</option>
                            <option>50 Lakh</option>
                            <option>50-80 Lakh</option>
                            <option>80 Lakh-1 Crore</option>
                            <option>1 Crore</option>

                          </select>
                        </div>
                        <div className="col-sm-6 form-group  ">
                            <input type="text" className="form-control" id="city" placeholder="City" name="city" required/>
                        </div>
                        <div className="col-sm-12 form-group ">
                          <select defaultValue="source" className="form-control rounded-0" id="source" placeholder="source" name="source" required >
                            <option value="source" disabled >source</option>
                            <option>Newspaper</option>
                            <option>Hoarding</option>
                            <option>Email</option>
                            <option>SMS</option>
                            <option>Google</option>
                            <option>Facebook</option>
                            <option>Cinema Ad</option>
                            <option>Broker</option>
                            <option>Property Portal</option>
                            <option>Word of Mouth</option>
                            <option>Others</option>
                          </select>
                        </div>
                        <div className="form-group col-md-12">
                          <textarea className="form-control" rows="4" id="message" placeholder="Message" name="message" required></textarea>
                        </div>
                      </div>
                      <div className="sumbit text-center mt-sm-0 mt-4">
                        <button type="submit" className="btn-secondary">Submit</button>
                      </div>
                    </div>
                  </div>
              </form>
              }
              {
                this.state.channel &&
                <form className="contactChannel" onSubmit={(e) => this.submitChannelPartner(e)} name="channel" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="contact-form-bg pt-4 pb-4 pt-sm-5 pb-sm-5" id="channel">
                    <div className="container">
                      <div className="form-row">
                        <input type="hidden" name="form-name" value="channel" />
                        <input type="hidden" id="utmSource" name="utmSource" value={this.state.utmSource} />
                        <input type="hidden" id="utmMedium" name="utmMedium" value={this.state.utmMedium} />
                        <input type="hidden" id="utmCampaign" name="utmCampaign" value={this.state.utmCampaign} />
                        <div className="col-sm-6 form-group  ">
                            <input type="text" className="form-control" id="name" placeholder="Individual Name*" name="name" autoComplete="off" required/>
                        </div>

                        <div className="col-sm-6 form-group  ">
                            <input type="text" className="form-control" id="email" placeholder="Your Email*" autoComplete="off" name="email" required/>
                        </div>
                        <div className="col-sm-6 form-group  ">
                          <PhoneInput className="form-control" id="phoneNumber" maxLength="15" placeholder="Your Phone Number*" name="phone-number" required
                            value={this.state.value}
                            onChange={(e) => this.setState({value:e})}
                          />
                        </div>
                        <div className="col-sm-6 form-group  ">
                            <input type="text" className="form-control" id="rera" placeholder="RERA Registration Number" name="" required/>
                        </div>

                        <div className="form-group col-md-12">
                          <textarea className="form-control" rows="4" id="message" placeholder="Message" name="message" required></textarea>
                        </div>
                      </div>
                      <div className="sumbit text-center mt-sm-0 mt-4">
                        <button type="submit" className="btn-secondary">Submit</button>
                      </div>
                    </div>
                  </div>
              </form>
              }
              {
                this.state.constructors &&
                <form className="contactConstructors" onSubmit={(e) => this.submitConstructors(e)} name="constructors" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="contact-form-bg pt-4 pb-4 pt-sm-5 pb-sm-5" id="constructors">
                    <div className="container">
                      <div className="form-row">
                        <input type="hidden" name="form-name" value="constructors" />
                        <input type="hidden" id="utmSource" name="utmSource" value={this.state.utmSource} />
                        <input type="hidden" id="utmMedium" name="utmMedium" value={this.state.utmMedium} />
                        <input type="hidden" id="utmCampaign" name="utmCampaign" value={this.state.utmCampaign} />
                      <div className="col-sm-6 form-group  ">
                            <input type="text" className="form-control" id="company" placeholder="Company*" name="company-name" autoComplete="false" required/>
                        </div>
                        <div className="col-sm-6 form-group  ">
                            <input type="text" className="form-control" id="name" placeholder="Your Name*" name="name" autoComplete="false" required/>
                        </div>

                        <div className="col-sm-6 form-group  ">
                            <input type="text" className="form-control" id="email" placeholder="Your Email*" autoComplete="false" name="email" required/>
                        </div>
                        <div className="col-sm-6 form-group  ">
                          <PhoneInput className="form-control" id="phoneNumber" maxLength="15" placeholder="Your Phone Number*" name="phone-number" required
                            value={this.state.value}
                            onChange={(e) => this.setState({value:e})}
                          />
                        </div>

                        <div className="col-sm-12 form-group  ">
                            <input type="text" className="form-control" id="city" placeholder="City" name="city" required/>
                        </div>
                        <div className="form-group col-md-12">
                          <textarea className="form-control" rows="4" id="message" placeholder="Message" name="message" required></textarea>
                        </div>
                      </div>
                      <div className="sumbit text-center mt-sm-0 mt-4">
                        <button type="submit" className="btn-secondary">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>

              }
              {
                this.state.career &&
                <form className="contactCareer" onSubmit={(e) => this.submitCareer(e)} name="career" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="contact-form-bg pt-4 pb-4 pt-sm-5 pb-sm-5" id="career">
                  <div className="container">
                    <div className="form-row">
                      <input type="hidden" name="form-name" value="career"/>
                      <input type="hidden" id="utmSource" name="utmSource" value={this.state.utmSource} />
                      <input type="hidden" id="utmMedium" name="utmMedium" value={this.state.utmMedium} />
                      <input type="hidden" id="utmCampaign" name="utmCampaign" value={this.state.utmCampaign} />
                      <div className="col-sm-6 form-group  ">
                          <input type="text" className="form-control" id="name" placeholder="Your Name*" name="name" autoComplete="off" required/>
                      </div>

                      <div className="col-sm-6 form-group  ">
                          <input type="text" className="form-control" id="email" placeholder="Your Email*" autoComplete="off" name="email" required/>
                      </div>
                      <div className="col-sm-6 form-group  ">
                        <PhoneInput className="form-control" id="phoneNumber" maxLength="15" placeholder="Your Phone Number*" name="phone-number" required
                          value={this.state.value}
                          onChange={(e) => this.setState({value:e})}
                        />
                      </div>

                      <div className="col-sm-6 form-group  ">
                          <input type="text" className="form-control" id="city" placeholder="City" name="city" required/>
                      </div>
                      <div className="col-md-12 form-group file-area">
                          <FileUploader
                            id="file"
                            className="w-100 resume-upload-input h-100"
                            accept="pdf/*"
                            name="resume-upload"
                            storageRef={firebase.storage().ref("Resume")}
                            onUploadSuccess={this.handleUploadSuccess}
                          />
                        <div className="file-dummy resume-upload">
                          {
                            this.state.avatar && this.state.avatar ? this.state.avatar:
                            <div className="default">Resume Upload (PDF/DOC)*</div>
                          }
                        </div>
                      </div>

                      {/* <div className="form-group file-area">
                        <input type="file" name="" id="resumeUpload" multiple="multiple" name="resume-upload" className="h-100"/>
                          <div className="file-dummy resume-upload">
                            <div className="default">Resume Upload (PDF/DOC)*</div>
                          </div>
                        </div> */}

                      <div className="form-group col-md-12">
                        <textarea className="form-control" rows="4" id="message" placeholder="Message" name="message" required></textarea>
                      </div>
                    </div>
                    <div className="sumbit text-center mt-sm-0 mt-4">
                      <button type="submit" className="btn-secondary">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
              }
              {
                this.state.LandOwner &&
                <form className="contactLandOwner" onSubmit={(e) => this.submitLandOwner(e)} name="LandOwner" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="contact-form-bg pt-4 pb-4 pt-sm-5 pb-sm-5" id="LandOwner">
                    <div className="container">
                      <div className="form-row">
                      <input type="hidden" name="form-name" value="LandOwner" />
                      <input type="hidden" id="utmSource" name="utmSource" value={this.state.utmSource} />
                      <input type="hidden" id="utmMedium" name="utmMedium" value={this.state.utmMedium} />
                      <input type="hidden" id="utmCampaign" name="utmCampaign" value={this.state.utmCampaign} />
                      <div className="col-sm-6 form-group  ">
                            <input type="text" className="form-control" id="company" placeholder="Company*" name="company-name" autoComplete="off" required/>
                        </div>
                        <div className="col-sm-6 form-group  ">
                            <input type="text" className="form-control" id="name" placeholder="Your Name*" name="name" autoComplete="off" required/>
                        </div>

                        <div className="col-sm-6 form-group  ">
                            <input type="text" className="form-control" id="email" placeholder="Your Email*" autoComplete="off" name="email" required/>
                        </div>
                        <div className="col-sm-6 form-group  ">
                          <PhoneInput className="form-control" id="phoneNumber" maxLength="15" placeholder="Your Phone Number*" name="phone-number" required
                            value={this.state.value}
                            onChange={(e) => this.setState({value:e})}
                          />
                        </div>

                        <div className="col-sm-12 form-group  ">
                            <input type="text" className="form-control" id="city" placeholder="City" name="city" required/>
                        </div>
                        <div className="form-group col-md-12">
                          <textarea className="form-control" rows="4" id="message" placeholder="Message" name="message" required></textarea>
                        </div>
                      </div>
                      <div className="sumbit text-center mt-sm-0 mt-4">
                        <button type="submit" className="btn-secondary">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              }
            </div>
          </section>
          <section className="locate-us">
            <div className="container p-sm-0">
              <h3 className="text-center text-uppercase mb-4 section-title ">Locate Us</h3>
              <div className="map-image map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15131.933349805166!2d73.8796209!3d18.5296551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10c8d7103151a095!2sBRAMHACORP%20LTD.!5e0!3m2!1sen!2sin!4v1578749393535!5m2!1sen!2sin" style={{width:"100%", height:"404px", frameborder:"0", border:"0", allowfullscreen:""}}></iframe>
              </div>
            </div>
          </section>
        </section>
      </Layout>
    )
  }
}

export default Contacts;

export const contactPage = graphql`{
  prismicCompanyDetails {
    data {
      seo_title,
      seo_description,
      title {
        text
      }
      description {
        html
      }
      banner {
        url
        Mobile{
          url
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
    
      contact_info {
        title1 {
          text
        }
        number
      }
      
      followus {
        title1 {
          text
        }
        link {
          url
        }
      }
    }
  }
}`
