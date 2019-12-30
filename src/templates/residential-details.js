import React from 'react';
import { Link } from 'gatsby';
import 'lazysizes';
import Img from 'gatsby-image';
import Slider from 'react-slick';
import Layout from '../components/layout'
import Footer from '../components/footer'

class VerticalPage extends React.Component {
  render(){
    const verticalData = this.props.data.prismicOurVerticalsArticle;
    console.log('verticalData from template page', verticalData);
    var settings = {
      dots: true,
      // dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay : true,
      // centerPadding: "50%",
 
    };
    return(
      <Layout>
        <main className="residencial-details">
            {/* <!--   ---------------- banner start here ---------------- --> */}
              <section className="banner-section">
                  <Img fluid={verticalData.data.banner[0].image.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" />
              </section>
            {/* <!--   ---------------- banner end here ---------------- --> */}
            {/* <!--  -------------------- middle section start here ----------------------> */}
            <section className="detail-page-sections pb-0 pt-sm-0 container container-sm-fluid bg-color">
                <div className="logo-card">
                  <picture className="d-flex justify-content-start justify-content-sm-center align-items-center">
                    <source media="(min-width: 581px)" srcSet="images/residency-logo.png" />
                    <img src={verticalData.data.logo.url} alt="Residency Logo" className="w-50" />
                  </picture>
                </div>
              <div className="row page-heading-section">
                  <div className="col-12 padding-sm-0">
                      <h2 className="page-heading text-uppercase"> 
                        {verticalData.data.heading.text}   
                      </h2> 
                  </div>
              </div>
              <div className="row">
                  <div className="col-12">
                      <p className="mb-4">
                          {verticalData.data.description.text}
                      </p>
                    </div>
              </div>
            </section>
            {/* <!--   ------------------- Showcase section start here ------------------- --> */}
            <section className="detail-page-sections">
              <h2 className="section-title text-uppercase text-center">
                  Showcase
              </h2>
              <div className="slider-wrapper-gray">
                <Slider {...settings}>
                  {
                    verticalData.data.showcase.map((item, value)=>{
                      return(
                        <div className="container showcase-slider" key={value}>
                          <Img fluid={item.image1.localFile.childImageSharp.fluid} alt=" Showcase slidwer" className="w-100 h-100" />
                        </div>
                      )
                    })
                  }
                </Slider>
              </div>
            </section>
            {/* <!--   ------------------- Showcase section end here ------------------- --> */}
            {/* <!--   ------------------- Location section start here ------------------- --> */}
            <section className="detail-page-sections">
              <h2 className="section-title text-uppercase text-center">
                  Location
              </h2>
              <div className="map-image">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9979896405875!2d73.87803231420851!3d18.52899298740413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c056fa4d8413%3A0xe2b3bd637ed792be!2sResidency%20Club!5e0!3m2!1sen!2sin!4v1576302776373!5m2!1sen!2sin" style={{ width:"100%", height:"450", frameborder:"0", border:"0", allowFullScreen:"0"}}> </iframe>
              </div>
            </section>
            {/* <!--   ------------------- Location section end here ------------------- --> */}
            {/* <!--   ------------------- Proximities section start here ------------------- --> */}
            <div className="detail-page-sections container">
              <h2 className="section-title text-uppercase text-center">
                  Proximities
              </h2>
              <ul className="nav nav-pills mb-3 row" id="pills-tab" role="tablist">
                  <li className="nav-item col-3 p-0">
                    <a className="nav-link d-flex flex-column align-items-center text-center active" id="pills-distance-tab" data-toggle="pill" href="#important-distance" role="tab" aria-controls="pills-home" aria-selected="true">
                      <i className="fas fa-map-marked-alt tab-icon"></i>  
                      Important Distance
                    </a>
                  </li>
                  <li className="nav-item col-3 p-0">
                    <a className="nav-link d-flex flex-column align-items-center" id="pills-hotel-tab" data-toggle="pill" href="#hotel" role="tab" aria-controls="pills-profile" aria-selected="false">
                      <i className="fas fa-hotel tab-icon"></i> 
                      Hotel
                    </a>
                  </li>
                  <li className="nav-item col-3 p-0 ">
                    <a className="nav-link d-flex flex-column align-items-center" id="pills-mall-tab" data-toggle="pill" href="#mall" role="tab" aria-controls="pills-contact" aria-selected="false">
                      <i className="fas fa-hotel tab-icon"></i>  
                      Malls
                    </a>
                  </li>
                  <li className="nav-item col-3 p-0 ">
                    <a className="nav-link d-flex flex-column align-items-center" id="pills-education-tab" data-toggle="pill" href="#education" role="tab" aria-controls="pills-contact" aria-selected="false">
                      <i className="fas fa-graduation-cap tab-icon"></i> 
                      Education
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="important-distance" role="tabpanel" aria-labelledby="pills-home-tab">
                      <div className="container">
                          <div className="row">
                              <div className="col-md-4">
                                  <ul>
                                      <li>
                                          Pune International Airport- 5 km
                                      </li>
                                      <li>
                                          Pune Railway Station- 6 km
                                      </li>
                                  </ul>
                              </div>
                              <div className="col-md-4">
                                  <ul>
                                      <li>
                                          Pune International Airport- 5 km
                                      </li>
                                      <li>
                                          Pune Railway Station- 6 km
                                      </li>
                                  </ul>
                              </div>
                              <div className="col-md-4">
                                  <ul>
                                      <li>
                                          Pune International Airport- 5 km
                                      </li>
                                      <li>
                                          Pune Railway Station- 6 km
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="hotel" role="tabpanel" aria-labelledby="pills-hotel-tab">
                      <div className="container">
                          <div className="row">
                              <div className="col-md-4">
                                  <ul>
                                      <li>
                                          Pune International Airport- 5 km
                                      </li>
                                      <li>
                                          Pune Railway Station- 6 km
                                      </li>
                                  </ul>
                              </div>
                              <div className="col-md-4">
                                  <ul>
                                      <li>
                                          Pune International Airport- 5 km
                                      </li>
                                      <li>
                                          Pune Railway Station- 6 km
                                      </li>
                                  </ul>
                              </div>
                              <div className="col-md-4">
                                  <ul>
                                      <li>
                                          Pune International Airport- 5 km
                                      </li>
                                      <li>
                                          Pune Railway Station- 6 km
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="pills-mall" role="tabpanel" aria-labelledby="pills-mall-tab">
                      <div className="container">
                          <div className="row">
                              <div className="col-md-4">
                                  <ul>
                                      <li>
                                          Pune International Airport- 5 km
                                      </li>
                                      <li>
                                          Pune Railway Station- 6 km
                                      </li>
                                  </ul>
                              </div>
                              <div className="col-md-4">
                                  <ul>
                                      <li>
                                          Pune International Airport- 5 km
                                      </li>
                                      <li>
                                          Pune Railway Station- 6 km
                                      </li>
                                  </ul>
                              </div>
                              <div className="col-md-4">
                                  <ul>
                                      <li>
                                          Pune International Airport- 5 km
                                      </li>
                                      <li>
                                          Pune Railway Station- 6 km
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="education" role="tabpanel" aria-labelledby="pills-education-tab">
                      <div className="container">
                          <div className="row">
                              <div className="col-md-4">
                                  <ul>
                                      <li>
                                          Pune International Airport- 5 km
                                      </li>
                                      <li>
                                          Pune Railway Station- 6 km
                                      </li>
                                  </ul>
                              </div>
                              <div className="col-md-4">
                                  <ul>
                                      <li>
                                          Pune International Airport- 5 km
                                      </li>
                                      <li>
                                          Pune Railway Station- 6 km
                                      </li>
                                  </ul>
                              </div>
                              <div className="col-md-4">
                                  <ul>
                                      <li>
                                          Pune International Airport- 5 km
                                      </li>
                                      <li>
                                          Pune Railway Station- 6 km
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
            {/* <!--   ------------------- Proximities section end here ------------------- --> */}
            {/* <!--   ------------------- Floor Plan section start here ------------------- --> */}
            <div className="detail-page-sections container d-none d-sm-block">
              <h2 className="section-title text-uppercase text-center">
                  {verticalData.data.floor_plans1.text}
              </h2>
              <div className=" showcase-slider">
                <Slider {...settings}>
                  {
                    verticalData.data.floor_plans.map((item,value)=>{
                      return(
                        <Img fluid={item.image1.localFile.childImageSharp.fluid} key={value} alt=" Showcase slidwer" className="w-100 h-100" />
                      )
                    })
                  }
                </Slider>
              </div>
            </div>
            {/* <!--   ------------------- Floor Plan section end here ------------------- --> */}
            {/* <!--   ------------------- Antity And Fact Files section start here ------------------- --> */}
            <section className="detail-page-sections container">
              <ul className="nav nav-pills mb-3 row" id="factfile-tab" role="tablist">
                  <li className="nav-item col-6 p-0">
                    <a className="nav-link text-center text-uppercase section-title active" id="pills-amenities-tab" data-toggle="pill" href="#amenities" role="tab" aria-controls="pills-amenities" aria-selected="true">
                      {verticalData.data.amenities1.text}
                    </a>
                  </li>
                  <li className="nav-item col-6 p-0">
                    <a className="nav-link text-center text-uppercase section-title" id="pills-factfile-tab" data-toggle="pill" href="#fact-file" role="tab" aria-controls="pills-factfile" aria-selected="false">
                      {verticalData.data.fact_file_heading.text}
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="factfiles-tabContent">
                  <div className="tab-pane fade show active" id="amenities" role="tabpanel" aria-labelledby="pills-amenities-tab">
                    <div className="container">
                      <div className="amenities-inner-wrapper d-flex">
                        <div className="icon-wrapper">
                          <div className="d-flex flex-wrap amenities" id="myTab" role="tablist">
                            <button className="d-flex flex-column flex-md-row align-items-center justify-content-start text-center text-md-left">
                              <i className="far fa-lightbulb"></i>
                                {verticalData.data.amenities[0].title1.text}
                            </button>
                            <button className="d-flex flex-column flex-md-row align-items-center justify-content-start text-center text-md-left">
                              <i className="fas fa-basketball-ball"></i>
                              {verticalData.data.amenities[1].title1.text}
                            </button>
                            <button className="d-flex flex-column flex-md-row align-items-center justify-content-start text-center text-md-left">
                              <i className="fas fa-lock"></i>
                              {verticalData.data.amenities[2].title1.text}
                            </button>
                            <button className="d-flex flex-column flex-md-row align-items-center justify-content-start text-center text-md-left">
                              <i className="fas fa-table-tennis"></i>
                              {verticalData.data.amenities[3].title1.text}
                            </button>
                            <button className="d-flex flex-column flex-md-row align-items-center justify-content-start text-center text-md-left">
                              <i className="fas fa-fire-extinguisher"></i>
                              {verticalData.data.amenities[4].title1.text}
                            </button>
                            <button className="d-flex flex-column flex-md-row align-items-center justify-content-start text-center text-md-left">
                              <i className="fas fa-dumbbell"></i>
                              {verticalData.data.amenities[5].title1.text}
                            </button>
                            <button className="d-flex flex-column flex-md-row align-items-center justify-content-start text-center text-md-left">
                              <i className="fas fa-hand-holding-heart"></i>
                              {verticalData.data.amenities[6].title1.text}
                            </button>
                            <button className="d-flex flex-column flex-md-row align-items-center justify-content-start text-center text-md-left">
                              <i className="fas fa-walking"></i>
                              {verticalData.data.amenities[7].title1.text}
                            </button>
                            <button className="d-flex flex-column flex-md-row align-items-center justify-content-start text-center text-md-left">
                              <i className="fas fa-archway"></i>
                              {verticalData.data.amenities[8].title1.text}
                            </button>
                            <button className="d-flex flex-column flex-md-row align-items-center justify-content-start text-center text-md-left">
                              <i className="fas fa-swimming-pool"></i>
                              {verticalData.data.amenities[9].title1.text}
                            </button>
                            <button className="d-flex flex-column flex-md-row align-items-center justify-content-start text-center text-md-left">
                              <i className="fas fa-swimmer"></i>
                              {verticalData.data.amenities[10].title1.text}
                            </button>
                            <button className="d-flex flex-column flex-md-row align-items-center justify-content-start text-center text-md-left">
                              <i className="fas fa-video"></i>
                              {verticalData.data.amenities[11].title1.text}
                            </button>
                          </div>
                          <div className="d-flex"></div>
                        </div>
                        <div className="image-wrapper">
                          <img src={verticalData.data.amenities_banner.url} alt="select image" className="w-100 h-100"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="fact-file" role="tabpanel" aria-labelledby="pills-factfile-tab">
                      this is hotel tab
                  </div>
                </div>
            </section>
            {/* <!--   ------------------- Antity And Fact Files section end here ------------------- --> */}
            {/* <!--   ------------------- Site-progress section start here ------------------- --> */}
            <section className="detail-page-sections">
              <h2 className="section-title text-uppercase text-center">
                  Site Progress
              </h2>
              <div className="slider-wrapper-gray">
                  <div className="container showcase-slider">
                    <Slider {...settings}>
                    {
                      verticalData.data.site_progress.map((item,value)=>{
                        return(
                          <Img fluid={item.images.localFile.childImageSharp.fluid} key={value} alt=" Showcase slidwer" className="w-100 h-100" />
                        )
                      })
                    }
                    </Slider>
                  </div>
              </div>
            </section>
            {/* <!--   ------------------- progress section end here ------------------- --> */}
            {/* <!--   ------------------- Download Brouchure section start here ------------------- --> */}
            <div className="container detail-page-sections d-flex justify-content-center">
              <a href="#pdf-link" download="Brouchure.pdf" className="btn-secondary text-center">Download Brouchure</a>
            </div>
            {/* <!--   ------------------- Download Brouchure section end here ------------------- --> */}
            {/* <!--   ------------------- Enquiry section start here ------------------- --> */}
            <section className="detail-page-sections">
              <h2 className="section-title text-uppercase text-center">
                  ENQUIRE NOW
              </h2>
              <div className="slider-wrapper-gray contact-section">
                <p className="container">
                  <span className="d-block text-left text-sm-center">
                    Its easy to get overwhelmed with the unique propositions of BramhaCorp.
                  </span>
                  <span className="d-block text-left text-sm-center">Let us help you in making up your mind.</span>
                </p>
                <form name="customer" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
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
                        <button type="submit" className="btn-secondary btn">Submit</button>
                      </div>  
                    </div> 
                  </div>
                </form>
              </div>
            </section>
            {/* <!--   ------------------- Enquiry section end here ------------------- --> */}
            {/* <!--   ------------------- Maharera section start here ------------------- --> */}
            <section className="container d-flex flex-column align-items-center detail-maharera-sections">
              <img src={verticalData.data.maharera.url} alt="maha-rera logo"/>
              <p className="text-left text-sm-center mt-3">
                {
                  verticalData.data.phase.map((item,value)=>{
                    return(
                      <span className="d-block" key={value}>
                        ​{item.title1.text} : {item.description1.text}
                      </span>
                    )
                  })
                }
              </p>
              <p className="text-left text-sm-center">
                Flats in Kalyani Nagar Available at : Website <a href={verticalData.data.tag_line.text}>https://maharera.mahaonline.gov.in </a>
              </p>
            </section>
            {/* <!--   ------------------- Maharera section end here ------------------- --> */}
            {/* <!--  -------------------- middle section end here ------------------------> */}
          </main>
        <Footer/>
      </Layout>
    )
  }
}
export default VerticalPage;

export const verticalViewData = graphql` 
    query verticalData($uid: String!) {
    prismicOurVerticalsArticle(uid: { eq: $uid }) {
    data{
        title{
          text
        }
        banner{
          image{
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1150, quality: 100) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                    }
                }
            }
          }
        }
        logo{
          url
        }
        maharera{
         url
        }
        heading{
          text
        }
        description{
          text
        }
        phase{
            title1{
              text
            }
            description1{
              text
            }
          }
        short_description{
          text
        }
        flat_bhk{
          text
        }
        flat_address{
          text
        }
        tag_line{
          text
        }
        unique_features{
           text
        }
        thumbnail{
          url
        }
        certificate{
          title1{
            text
          }
          image{
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1150, quality: 100) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                    }
                }
            }
          }
        }
        photo_gallery{
          text
        }
        showcase{
          title1{
            text
          }
          short_description1{
            text
          }
          image1{
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1150, quality: 100) {
                      ...GatsbyImageSharpFluid
                      presentationWidth
                  }
                }
            }
          }
        }
        floor_plans1{
          text
        }
        floor_plans{
          title1{
            text
          }
          short_description1{
            text
          }
          image1{
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1150, quality: 100) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                    }
                }
            }
          }
        }
        amenities1{
          text
        }
        amenities_banner{
          url
        }
        amenities{
          title1{
              text
          }
          description1{
            text
          }
        }
        fact_file_heading{
           text
        }
        fact_file{
           title1{
            text
          }
          description1{
            text
          }
        }
        site_progress_heading{
            text
        }
        site_progress{
          images{
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1150, quality: 100) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                    }
                }
            }
          }
        }
        locate_us{
          title1{
            text
          }
        }
      }
    }
}`