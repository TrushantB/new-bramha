
import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import chevron_down from '../images/chevron_down.svg';
import Div100vh from 'react-div-100vh/lib/Div100vh';
import Footer from '../components/footer';
import '../firebase/config';
import PhoneInput from 'react-phone-number-input';
import queryString from 'query-string';
import * as firebase from 'firebase';
import Slider from "react-slick";
import Lightbox from 'react-image-lightbox';
import partnerImg from '../images/1.png'
class Partners extends React.Component {
   
  state = {
    styleData:{height: 20, overflow: 'hidden'},
    value:"+91 ",
    utmSource: null,
    utmMedium: null,
    utmCampaign: null,
    activeSlide: null,
    photoIndex: 0,
    isOpen: false,
  }

  UNSAFE_componentWillMount() {
    // const verticalData = this.props.data.prismicOurVerticalsArticle;
    const queryParams = queryString.parseUrl(this.props.location.search);
    this.setState({
      // floorPlanSelect : verticalData.data.floor_plans,
      utmSource: queryParams && queryParams.query.utm_source,
      utmMedium: queryParams && queryParams.query.utm_medium,
      utmCampaign: queryParams && queryParams.query.utm_campaign
    });
  }

  scrollWin() {
    var offsetHeight = document.querySelector('.banner-section').offsetHeight;
    window.scrollBy({
        top: offsetHeight,
        behavior: 'smooth'
    });
  }

  submitPartner = (e) => {
    e.preventDefault();
    firebase
      .database()
      .ref("Channel Partner")
      .push()
      .set({
        name: e.target.name.value,
        email: e.target.email.value,
        phoneNumber: e.target.phoneNumber.value,
        budget: e.target.budget.value,
        city: e.target.city.value,
        source: e.target.source.value,
        message: e.target.message.value,
        // projectName: e.target.projectName.value,
        utmSource: e.target.utmSource.value,
        utmCampaign: e.target.utmCampaign.value,
        utmMedium: e.target.utmMedium.value
      })
      this.setState({ value: '+91'});
      document.querySelector('.channelPartner').reset();
  }
  
  render(){
    let settings = {
      centerMode: true,
      centerPadding: '200px',
      focusOnSelect: false,
      slidesToShow: 1,
      speed:400,
      afterChange: current => this.setState({ activeSlide: current }),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '100px',
            focusOnSelect: false,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '100px',
            focusOnSelect: false,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '45px',
            focusOnSelect: false,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            focusOnSelect: false,
            slidesToShow: 1
          }
        }
      ]
    };
    const partnersData = this.props.data.prismicPartners.data;
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
      <SEO title='Channel Partner'/>
      <main className="detail-page partner-page" id="residential-details">
          {/* <!--   ---------------- banner start here ---------------- --> */}
          <Div100vh style={{ height: 'calc(100rvh - 60px)'}} className="banner-section" id="banner-section">
          <picture>
              {/* { 
              verticalData.data.banner[0].image.mobile &&
              <source media="(max-width: 581px)" srcSet={verticalData.data.banner[0].image.mobile.url}/>
              } */}
              <img src={partnersData.banner.url} className="banner-img"/>
          </picture>
          <button className="scroll-downs" onClick={this.scrollWin}>
              <span>Scroll</span>
              <div className="mousey"><img src={chevron_down} alt="Scroll to content" /></div>
          </button>
              {/* <Img fluid={verticalData.data.banner[0].image.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" /> */}
          </Div100vh>

          <section className="detail-page-sections pb-0 pt-sm-0 container container-sm-fluid " >
              <div className="padding-block-60 page-heading-section">
                  <div className="col-12 padding-sm-0">
                      <h2 className="page-heading text-uppercase">
                          {partnersData.title.text}
                      </h2>
                  </div>
              </div>
              <div className="row">
                  <div className="col-12">
                      <div className="mb-4" dangerouslySetInnerHTML={{__html:partnersData.description.html }}/>
                  </div>
              </div>
          </section>

          {/* Channel Partner start here  */}
          <section className="channel-partner-wrapper">
              <h2 className="section-title text-uppercase text-center" >
                Channel Partner Advantages
              </h2>
              <div className="container">
                  <div className="row">
                    {
                      partnersData.channel_partner_adv.map((item, index) => {
                        return(
                          <div key={index} className="offset-1 col-lg-5 col-md-5 col-sm-11">
                            <div className="channel-partner-tab">
                                <img className="icon" src={item.image.url}/>
                                <p className='tab-text'>{item.title1.text}</p>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
              </div>
          </section>
          {/* Event section start here */}
          <section className="event-slider slider-page">
              <h2 className="section-title text-uppercase text-center">
                Events
              </h2>
            <div className="slider-wrapper slider-bg">
              <div className="container-fluid container-sm p-0 px-sm-3">
                <Slider {...settings}>
                  {
                    partnersData.events.map((item,value) => {
                      console.log(item);
                      
                      return(
                        <div key={value}>
                          <div role="link" tabIndex="0" className="slider-img image-ratio" onClick={() => this.setState({ isOpen: true ,photoIndex:value})}> 
                            <img src={item.image.url} width="100%"/>
                          </div>
                        </div>
                      )
                    })
                    }
                </Slider>
                {
                  this.state.isOpen &&
                  <Lightbox
                    mainSrc={partnersData.events[this.state.photoIndex].image.url}
                    nextSrc={partnersData.events[(this.state.photoIndex + 1) % partnersData.events.length].image.url}
                    prevSrc={partnersData.events[(this.state.photoIndex + partnersData.events.length - 1) % partnersData.events.length].image.url}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex: (this.state.photoIndex + partnersData.events.length - 1) % partnersData.events.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (this.state.photoIndex + 1) % partnersData.events.length,
                      })
                    }
                    animationDuration={800}
                    />
                  }
                  <p className="text-left text-sm-center pages mb-0">
                  {this.state.activeSlide + 1} of {partnersData.events.length}
                </p>
              </div>
            </div>
          </section>
          {/* <!--   ------------------- Enquiry section start here ------------------- --> */}
          <section className="detail-page-sections enquiry-form">
              <h2 className="section-title text-uppercase text-center">
                ENQUIRE NOW
              </h2>
              <div className="slider-wrapper-gray contact-section">
                <p className="container mb-0">
                  <span className="d-block text-left text-sm-center">
                    Its easy to get overwhelmed with the unique propositions of BramhaCorp.
                  </span>
                  <span className="d-block text-left text-sm-center">Let us help you in making up your mind.</span>
                </p>

                <form  className="channelPartner" onSubmit={(e) => this.submitPartner(e)} name="channel partner" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="contact-form-bg pt-4 pb-4 pt-sm-5 pb-sm-5">
                    <div className="container">
                      <div className="form-row">
                        {/* <input type="hidden" id="projectName" name="form-name" value='Channel Partner' /> */}
                        <input type="hidden" id="utmSource" name="utmSource" value={this.state.utmSource} />
                        <input type="hidden" id="utmMedium" name="utmMedium" value={this.state.utmMedium} />
                        <input type="hidden" id="utmCampaign" name="utmCampaign" value={this.state.utmCampaign} />
                        <div className="col-sm-6 form-group  ">
                          <input type="text" className="form-control" id="name" placeholder="Your Name*" name="name" required/>
                        </div>
                        <div className="col-sm-6 form-group  ">
                          <PhoneInput className="form-control" id="phoneNumber"  placeholder="Your Phone Number*" maxLength="15" name="phone-number" required
                            value={this.state.value}
                            onChange={(e) => this.setState({value:e})}/>
                          </div>
                        <div className="col-sm-6 form-group  ">
                          <input type="text" className="form-control" id="email" placeholder="Your Email*" name="email" required/>
                        </div>
                        <div className="col-sm-6 form-group  ">
                          <input type="" className="form-control" id="city" placeholder="City" name="city" required/>
                        </div>
                        <div className="col-sm-6 form-group  ">
                          <select defaultValue="" className="form-control rounded-0" id="budget" name="budget" required >
                            <option value="" disabled>Budget</option>
                            <option >50 Lakh</option>
                            <option>50-80 Lakh</option>
                            <option> 80 Lakh-1Crore</option>
                            <option>1 Crore</option>
                          </select>
                        </div>
                        <div className="col-sm-6 form-group ">
                        <select defaultValue="" className="form-control rounded-0" id="source" placeholder="source" name="source" required >
                            <option value="" disabled >source</option>
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
                        <button type="submit" className="btn-secondary btn">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </section>
            {/* <!--   ------------------- Enquiry section end here ------------------- --> */}
      </main>
    <Footer/>
    </Layout>
    )
  } 
}
export default Partners;

export const partnersPage = graphql` {
  prismicPartners {
    data {
      title {
        text
      }
      banner {
        url
      }
      description {
        html
      }
      channel_partner_adv{
        image{
          url
        }
        title1{
          text
        }
      }
      events {
        image{
          url
        }
      }
    }
  }
}`