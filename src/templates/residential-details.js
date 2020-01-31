import React from 'react';
import { graphql } from 'gatsby';
import 'lazysizes';
import Img from 'gatsby-image';
import Slider from 'react-slick';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from '../components/seo';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';


class VerticalPage extends React.Component {
  state = {
    activeSlide:null,
    floorPlanActive:null,
    showCaseActive:null,
    siteProcessActive:null,
    isOpenOne:false,
    isOpenTwo:false,
    isOpenTHree:false,
    imageUrl: null,
    floorPlanSelect: null,
    value:"+91"
  };


  componentWillMount() {
    const verticalData = this.props.data.prismicOurVerticalsArticle;
    this.setState({ floorPlanSelect : verticalData.data.floor_plans})
  }
  

  render(){
    const { photoIndex, isOpenOne ,isOpenTwo,isOpenThree} = this.state;
    const verticalData = this.props.data.prismicOurVerticalsArticle;

    let showCase = {
      photoIndex: 0,
      isOpen: false,  
      centerMode: true,
      centerPadding: '200px',
      slidesToShow: 1,
      speed:1000,
      afterChange: current => this.setState({ showCaseActive: current }),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '45px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    };
  
    let floorPlan = {
      photoIndex: 0,
      isOpen: false,  
      centerMode: true,
      centerPadding: '200px',
      slidesToShow: 1,
      speed:1000,
      afterChange: current => this.setState({ floorPlanActive: current }),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '45px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    };
    let siteProcess = {
      photoIndex: 0,
      isOpen: false,  
      centerMode: true,
      centerPadding: '200px',
      slidesToShow: 1,
      speed:1000,
      afterChange: current => this.setState({ siteProcessActive: current }),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '45px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    };
   
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={verticalData.data.sub_title.text}/>
        <main className="detail-page" id="residential-details">
            {/* <!--   ---------------- banner start here ---------------- --> */}
              <section className="banner-section">
              <picture>
                {
                  verticalData.data.banner[0].image.mobile &&
                  <source media="(max-width: 581px)" srcSet={verticalData.data.banner[0].image.mobile.url}/>
                }
                <img src={verticalData.data.banner[0].image.url} alt="banner image here" className="banner-img"/>
              </picture>
                {/* <Img fluid={verticalData.data.banner[0].image.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" /> */}
              </section>
            {/* <!--   ---------------- banner end here ---------------- --> */}
            {/* <!--  -------------------- middle section start here ----------------------> */}
            <section className="detail-page-sections pb-0 pt-sm-0 container container-sm-fluid " id={verticalData.uid}>
                <div className="logo-card text-center">
                  <picture>
                    <source media="(min-width: 581px)" srcSet={verticalData.data.logo.url}/>
                    <img src={verticalData.data.logo.url} alt="Residency Logo" />
                  </picture>
                </div>
              <div className="padding-block-60 page-heading-section">
                  <div className="col-12 padding-sm-0">
                      <h2 className="page-heading text-uppercase"> 
                        {verticalData.data.heading.text}   
                      </h2> 
                  </div>
              </div>
              <div className="row">
                  <div className="col-12">
                      <p className="mb-4" dangerouslySetInnerHTML={{__html:verticalData.data.description.html }}/>
                          </div>
                        </div>
                    </section>
            {/* <!--   ------------------- Showcase section start here ------------------- --> */}
            <section className="slider-page">
              <h2 className="section-title text-uppercase text-center">
                  Showcase
              </h2>
              <div className="slider-wrapper slider-bg">
                <div className="container">
                <Slider {...showCase}>
                      {
                        verticalData.data.showcase.map((item,value) => {
                          return(
                            <div key={value}>
                              <div  className="slider-img " onClick={() => this.setState({ isOpenOne: true ,photoIndex:value})}>
                                <Img fluid={item.image1.localFile.childImageSharp.fluid} alt=" Showcase slidwer" className="life-at-bramha-slider-image" />
                                <p className="showcase-slide-caption">{item.caption}</p>
                              </div>
                            </div>
                          )
                        })
                      }
                    </Slider>
                    {
                      isOpenOne &&
                      
                      <Lightbox
                        mainSrc={verticalData.data.showcase[photoIndex].image1.localFile.childImageSharp.fluid.src}
                        nextSrc={verticalData.data.showcase[(photoIndex + 1) % verticalData.data.showcase.length].image1.localFile.childImageSharp.fluid.src}
                        prevSrc={verticalData.data.showcase[(photoIndex + verticalData.data.showcase.length - 1) % verticalData.data.showcase.length].image1.localFile.childImageSharp.fluid.src}
                        onCloseRequest={() => this.setState({ isOpenOne: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + verticalData.data.showcase.length - 1) % verticalData.data.showcase.length,
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + 1) % verticalData.data.showcase.length,
                          })
                        }
                        imageCaption={verticalData.data.showcase[photoIndex].caption}
                        animationDuration={800}
                      />
                      }
                    <p className=" text-left text-sm-center pages mb-0">
                      {this.state.showCaseActive + 1} of {verticalData.data.showcase.length}
                    </p>
                </div>
              </div>
            </section>
            {/* <!--   ------------------- Showcase section end here ------------------- --> */}
            {/* <!--   ------------------- Location section start here ------------------- --> */}
            <section className="location-sections">
              <h2 className="section-title text-uppercase text-center">
                  Location
              </h2> 
              <div className="map-image map">
                {
                  verticalData.data.location_url ?
                  <iframe src={verticalData.data.location_url} style={{ width:"100%", height:"375px", frameborder:"0", border:"0", allowFullScreen:"0"}}></iframe>:
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15130.20482232911!2d73.9169759!3d18.5491723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfa889adcc4f893bd!2sF-Residences%20by%20BramhaCorp%20at%20New%20Kalyani%20Nagar!5e0!3m2!1sen!2sin!4v1578749234432!5m2!1sen!2sin" style={{ width:"100%", height:"375px", frameborder:"0", border:"0", allowFullScreen:"0"}}></iframe>
                }
              </div>
            </section>
            {/* <!--   ------------------- Location section end here ------------------- --> */}
            {/* <!--   ------------------- Proximities section start here ------------------- --> */}
          <section className="proximities-section">
            <div className=" container">
                <div className="section-title-wrapper">
                  <h2 className="section-title text-uppercase text-center">
                      Proximities
                  </h2>
                  <p className="text-center">{verticalData.data.proximities_description.text}</p>
                </div>
                <ul className="nav nav-pills row" id="pills-tab" role="tablist">
                    {
                      verticalData.data.proximites.map((item, index) => {
                        return(
                        <li className="nav-item col-3 p-0" key={index}>
                          <a className={ index ? "nav-link d-flex flex-column align-items-center text-center" : "nav-link d-flex flex-column align-items-center text-center active"} id={`tab${index}`} data-toggle="pill" href={`#id${index}`} role="tab" aria-controls="pills-home" aria-selected="true">
                              <i className={item.icon_name}></i>
                              <span className="text-capitalize">{item.title1.text}</span>
                          </a>
                        </li>
                        )
                      })
                    }
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                      {
                        verticalData.data.proximites.map((item, index) => {
                          return(
                            <div key={index} className={ index ? "tab-pane fade show" : "tab-pane fade show active"} id={`id${index}`} role="tabpanel" aria-labelledby={`tab${index}`}>
                              <div className="container">
                                <div >
                                    <ul className="row">
                                      {item.description1 && <li dangerouslySetInnerHTML={{__html:item.description1.html }}  className="col-sm-4 mt-2"/>}
                                      {item.description2 && <li dangerouslySetInnerHTML={{__html:item.description2.html }}  className="col-sm-4 mt-2"/>}
                                      {item.description3 && <li dangerouslySetInnerHTML={{__html:item.description3.html }}  className="col-sm-4 mt-2"/>}
                                      {item.description4.length > 0 && <li dangerouslySetInnerHTML={{__html:item.description4.html }}  className="col-sm-4 mt-2"/>}
                                      
                                    </ul>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                  </div>
              </div>
            </section>  
            {/* <!--   ------------------- Proximities section end here ------------------- --> */}
            {/* <!--   ------------------- Floor Plan section start here ------------------- --> */}
            <div className="slider-page d-none d-sm-block floor-plan">
                <div className="section-title-wrap d-flex flex-column align-items-center">
                  <h2 className="section-title text-uppercase text-center">
                      {verticalData.data.floor_plans1.text}
                  </h2>
                </div>
                <div className="slider-wrapper-gray">
                <div className="container">
                  <div className="section-title-wrap d-flex flex-column align-items-center">
                    <label className="wrap">
                      <select className="border-0 layout-select" onChange={(e)=> {
                        let floor = verticalData.data.floor_plans.filter(value => value.title1.text === e.target.value)
                        this.setState({floorPlanSelect: floor})
                        if(e.target.value === "allLayout"){
                          this.setState({floorPlanSelect: verticalData.data.floor_plans})
                        }
                      }}>
                        <option value="allLayout"> All Layout </option>
                        {
                          verticalData.data.floor_plans.map((data, index) => {
                            return(
                              <option value={data.title1.text} key={index}>{data.title1.text}</option>
                            )
                          })
                        }
                      </select>
                    </label>
                  </div>
                  <div className="showcase-slider">
                    {
                      this.state.floorPlanSelect.length == 1 ?
                      <div>
                        {
                        this.state.floorPlanSelect.map((item,value) => {
                          return(
                            <div key={value}>
                              <div className="slider-img ">
                                <Img fluid={item.image1.localFile.childImageSharp.fluid} key={value} alt="Floor Plans" className="w-100 h-100" />
                              </div>
                            </div>
                          )
                        })}
                        </div>:
                        <Slider {...floorPlan}>
                          {
                            this.state.floorPlanSelect.map((item,value) => {
                              return(
                                <div key={value}>
                                  <div className="slider-img " onClick={() => this.setState({ isOpenTwo: true ,photoIndex:value})}>
                                    <Img fluid={item.image1.localFile.childImageSharp.fluid} key={value} alt="Floor Plans" className="w-100 h-100" />
                                  </div>
                                </div>
                              )
                            })
                          }
                        </Slider>
                    }
                    
                    {
                      isOpenTwo &&
                      <Lightbox
                        mainSrc={verticalData.data.floor_plans[photoIndex].image1.localFile.childImageSharp.fluid.src}
                        nextSrc={verticalData.data.floor_plans[(photoIndex + 1) % verticalData.data.floor_plans.length].image1.localFile.childImageSharp.fluid.src}
                        prevSrc={verticalData.data.floor_plans[(photoIndex + verticalData.data.floor_plans.length - 1) % verticalData.data.floor_plans.length].image1.localFile.childImageSharp.fluid.src}
                        onCloseRequest={() => this.setState({ isOpenTwo: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + verticalData.data.floor_plans.length - 1) % verticalData.data.floor_plans.length,
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + 1) % verticalData.data.floor_plans.length,
                          })
                        }
                      animationDuration={800}

                      />
                    }
                    {
                    this.state.floorPlanSelect.length !==1 &&
                      <p className=" text-left text-sm-center pages mb-0">
                      {this.state.floorPlanActive + 1} of {verticalData.data.floor_plans.length}
                    </p>
                    }
                  
                </div>
                </div>
                </div>
            </div>
            {/* <!--   ------------------- Floor Plan section end here ------------------- --> */}
            {/* <!--   ------------------- Amenities And Fact Files section start here ------------------- --> */}
            <section className="amenity-sections container"  id={verticalData.uid}>
              <ul className="nav nav-pills row padding-sm-0" id="factfile-tab" role="tablist">
                <li className="nav-item col-6 p-0">
                  <a className="nav-link text-center text-uppercase tab-title active" id="pills-amenities-tab" data-toggle="pill" href="#amenities" role="tab" aria-controls="pills-amenities" aria-selected="true">
                    {verticalData.data.amenities1.text}
                  </a>
                </li>
                <li className="nav-item col-6 p-0">
                  <a className="nav-link text-center text-uppercase tab-title" id="pills-factfile-tab" data-toggle="pill" href="#fact-file" role="tab" aria-controls="pills-factfile" aria-selected="false">
                    {verticalData.data.fact_file_heading.text}
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="factfiles-tabContent">
                <div className="tab-pane fade show active" id="amenities" role="tabpanel" aria-labelledby="pills-amenities-tab">
                  <div className="container p-0">
                    <div className="amenities-inner-wrapper d-flex">
                      <div className="amenities-icon-wrapper">
                        <div className="d-flex flex-wrap amenities" id="myTab" role="tablist">
                          {
                            verticalData.data.amenities.map((item, index) => {
                              return(
                                <button key={index} className={`d-flex align-items-center justify-content-start text-center text-md-left ${this.state.imageUrl===item.image1.url || !index && !this.state.imageUrl ? 'active': ''}`} onClick={() => this.setState({imageUrl:  item.image1.url})} >
                                  <span className="amenities-icon-wrap"><i className={item.icon}></i></span>
                                  <span className="amenities-icon-description"><span>{item.title1.text}</span></span>
                                </button>
                              )
                            })
                          }
                        </div>
                        <div className="d-flex"></div>
                      </div>
                      <div className="image-wrapper">
                        {
                          this.state.imageUrl ?
                         <img src={this.state.imageUrl} alt="select image" className="w-100 h-100"/>
                         :<img src={verticalData.data.amenities[0].image1.url} alt="select image" className="w-100 h-100"/>
                        }
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
            <section className="slider-page site-progress-wrap mb-0">
              <h2 className="section-title text-uppercase text-center">
                Site Progress
              </h2>
              <div className="slider-wrapper-gray slider-bg">
                <div className="container showcase-slider slider-wrapper">
                  <Slider {...siteProcess}>
                    {
                      verticalData.data.site_progress.map((item,value) => {
                        return(
                          <div key={value}>
                            <div  className="slider-img " onClick={() => this.setState({ isOpenThree: true ,photoIndex:value})}>
                              <Img fluid={item.images.localFile.childImageSharp.fluid} key={value} alt=" Floor Plans" className="w-100 h-100" />
                            </div>
                          </div>
                        )
                      })
                    }
                  </Slider>
                  {
                  isOpenThree &&
                  <Lightbox
                    mainSrc={verticalData.data.site_progress[photoIndex].images.localFile.childImageSharp.fluid.src}
                    nextSrc={verticalData.data.site_progress[(photoIndex + 1) % verticalData.data.site_progress.length].images.localFile.childImageSharp.fluid.src}
                    prevSrc={verticalData.data.site_progress[(photoIndex + verticalData.data.site_progress.length - 1) % verticalData.data.site_progress.length].images.localFile.childImageSharp.fluid.src}
                    onCloseRequest={() => this.setState({ isOpenThree: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + verticalData.data.site_progress.length - 1) % verticalData.data.site_progress.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + 1) % verticalData.data.site_progress.length,
                      })
                    }
                    animationDuration={800}

                  />
                }
                <p className=" text-left text-sm-center pages mb-0">
                  {this.state.siteProcessActive + 1} of {verticalData.data.site_progress.length}
                </p>
              </div>
              </div>
            </section>
            {/* <!--   ------------------- progress section end here ------------------- --> */}
            {/* <!--   ------------------- Download Brouchure section start here ------------------- --> */}
            <div className="container detail-page-sections d-flex justify-content-center download-btn">
              <a href="#pdf-link" download="Brouchure.pdf" className="btn-secondary text-center">Download Brochure</a>
            </div>
            {/* <!--   ------------------- Download Brouchure section end here ------------------- --> */}
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
                <form name="residential customer" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="contact-form-bg pt-4 pb-4 pt-sm-5 pb-sm-5">
                    <div className="container">
                      <div className="form-row">
                        <input type="hidden" name="form-name" value="Residential Customer" />
                        <div className="col-sm-6 form-group  ">
                          <input type="text" className="form-control" id="name" placeholder="Your Name*" name="name" required/>
                        </div>
                        <div className="col-sm-6 form-group  ">
                              <PhoneInput className="form-control" id="phone-number"  placeholder="Your Phone Number*" name="phone-number" required
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
                          <select defaultValue="" className="form-control rounded-0" id="" name="source" required >
                            <option value="" disabled>Budget</option>
                            <option >50 Lakh</option>
                            <option>50-80 Lakh</option>
                            <option> 80 Lakh-1Crore</option>
                            <option>1 Crore</option>
                          </select>
                        </div>
                        <div className="col-sm-6 form-group ">
                        <select defaultValue="" className="form-control rounded-0" id="" placeholder="source" name="source" required >
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
            {/* <!--   ------------------- Maharera section start here ------------------- --> */}
            <section className="container d-flex flex-column align-items-center detail-maharera-sections">
              <img src={verticalData.data.maharera.url} alt="maha-rera logo" style={{width:"70px"}}/>
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
                Available at : Website <a href={verticalData.data.tag_line.text} target="_blank">{verticalData.data.tag_line.text} </a>
              </p>
              {
                verticalData.data.maharera_important &&
                  <p className="maharera_important">
                    {verticalData.data.maharera_important.text}
                  </p>
              }
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
    uid
    data {
      title {
        text
      }
      sub_title {
        text
      }
      banner {
        image {
          url
          mobile{
            url
          }
        }
      }
      logo {
        url
      }
      maharera {
        url
      }
      heading {
        text
      }
      description {
        html
      }
      phase {
        title1 {
          text
        }
        description1 {
          text
        }
      }
      short_description {
        text
      }
      flat_bhk {
        text
      }
      flat_address {
        text
      }
      tag_line {
        text
      }
      unique_features {
        text
      }
      showcase {
        title1 {
          text
        }
        image1 {
          localFile {
            childImageSharp {
                fluid(maxWidth: 1150) {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
        caption
      }
      floor_plans1 {
        text
      }
      floor_plans {
        title1 {
          text
        }
        image1 {
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
      proximities_description {
        text
      }
      proximites {
        icon_name
        title1 {
          text
        }
        description1{
          html
        }
        description2{
          html
        }
        description3{
          html
        }
        description4{
          html
        }
        icon {
          url
        }
      }
      amenities1 {
        text
      }
      amenities_banner {
        url
      }
      amenities {
        title1 {
            text
        }
        description1 {
          text
        }
        image1{
          url
        }
        icon
      }
      fact_file_heading {
          text
      }
      fact_file {
          title1 {
          text
        }
        description1 {
          text
        }
      }
      site_progress {
        images {
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
      maharera_important{
        text
      }
      location_url
    }
  }
}`