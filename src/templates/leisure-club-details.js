import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import queryString from 'query-string';
import chevron_down from '../images/chevron_down.svg';
import Div100vh from 'react-div-100vh/lib/Div100vh';

class LeisureDetails extends React.Component {
  state = {
    activeSlide:null,
    photoIndex: 0,
    isOpen: false,
    activeSlide:null,
    floorPlanActive:null,
    showCaseActive:null,
    siteProcessActive:null,
    isOpenOne:false,
    isOpenTwo:false,
    isOpenTHree:false,
    imageUrl: null,
    floorPlanSelect: null,
    value:"+91 ",
    styleData:{height: 20, overflow: 'hidden'},
    utmSource: null,
    utmMedium: null,
    utmCampaign: null
  };

  UNSAFE_componentWillMount() {
    const leisureData = this.props.data.prismicOurVerticalsArticle;
    const queryParams = queryString.parseUrl(this.props.location.search);
    this.setState({
      floorPlanSelect : leisureData.data.floor_plans,
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
  render(){
    const { photoIndex, isOpenOne, isOpen, isOpenTwo,isOpenThree,isOpenOneSlide} = this.state;
    const leisureData = this.props.data.prismicOurVerticalsArticle;
    let settings = {
    // className:"center",
    centerMode: true,
    centerPadding: '200px',
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
            slidesToShow: 1,

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
            centerPadding: '80px',
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
      speed:400,
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
      speed:400,
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
        <SEO title={leisureData.data.seo_title} description={leisureData.data.seo_description}/>
        <main className="detail-page">
          {/* <!-- ---------------- banner start here ---------------- --> */}
          <Div100vh style={{ height: 'calc(100rvh - 57px)'}} className="banner-section" id="banner-section">
            <picture>
                {
                  leisureData.data.banner[0].image.mobile &&
                  <source media="(max-width: 581px)" srcSet={leisureData.data.banner[0].image.mobile.url}/>
                }
                <img src={leisureData.data.banner[0].image.url} alt="banner image here" className="banner-img"/>
              </picture>

              <div className="scroll-downs" onClick={this.scrollWin}>
                <span>Scroll</span>
                <div className="mousey"><img src={chevron_down} /></div>
              </div>
              {/* <Img fluid={leisureData.data.banner[0].image.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" /> */}
            </Div100vh>
          {/* <!-- ---------------- banner end here ---------------- --> */}
          {/*  {/* <!------------------ middle section start here ----------------------> */}
            <section className="detail-page-sections pt-sm-0 container" id={leisureData.uid}>
              <div className="logo-card">
                <picture className="d-flex justify-content-center justify-content-sm-center align-items-center">
                  <source media="(min-width: 581px)" srcSet={leisureData.data.logo.url} />
                  <img src={leisureData.data.logo.url} alt="hospital Logo" />
                </picture>
              </div>
                <div className="row mt-0 mt-sm-5">
                  <div className="col-12">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/leisure-club">Leisure</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{leisureData.data.title.text}</li>
                      </ol>
                    </nav>
                  </div>
                </div>
               
              

              <div className="padding-block-60">
                <h2 className="page-heading text-uppercase">
                  {leisureData.data.heading.text}
                </h2>
              </div>
              <div className="row">
                <div className="col-12 d-flex d-sm-block flex-wrap justify-content-end">
                  <div className="mb-4" dangerouslySetInnerHTML={{__html:leisureData.data.description.html }}/>
                  {/* <a href="#" className="d-flex justify-content-between align-items-center btn-tertiary hospitality-viewmore">
                    <span> View Website </span>
                    <i className="fas fa-arrow-right"></i>
                  </a> */}
                </div>
              </div>
              {/* ...................Customizable Button.................. */}
                {
                  leisureData.data.customizable_button_link && leisureData.data.customizable_button_title ?
                  <div className="detail-page-sections d-flex justify-content-start align-items-start download-btn mt-80">
                    <a href={leisureData.data.customizable_button_link.url}  target="_blank" className="btn-secondary m-0 text-center">{leisureData.data.customizable_button_title}</a>
                  </div> : null
                } 
            </section>
          {/*  {/* <!------------------ middle section end here ------------------------> */}
          {/* <!-- ------------------- Showcase section start here ------------------- --> */}
            <section className="slider-page slider-bg">
              <h2 className="section-title text-uppercase text-center">
                Showcase
              </h2>
              <div className="slider-wrapper">
                <div className="container">
                  <Slider {...settings}>
                    {
                      leisureData.data.showcase.map((item,value)=>{
                        return(
                          <div key={value}>
                            <div role="link" tabIndex="0" className="slider-img image-ratio" onClick={() => this.setState({ isOpen: true ,photoIndex:value})}>
                              <Img fluid={item.image1.localFile.childImageSharp.fluid} alt=" Showcase slider" className="life-at-bramha-slider-image" />
                              <p className="showcase-slide-caption">{item.caption}</p>
                            </div>
                          </div>
                        )
                      })
                    }
                    </Slider>
                    {
                      isOpen &&
                      <Lightbox
                        mainSrc={leisureData.data.showcase[photoIndex].image1.localFile.childImageSharp.fluid.src}
                        nextSrc={leisureData.data.showcase[(photoIndex + 1) % leisureData.data.showcase.length].image1.localFile.childImageSharp.fluid.src}
                        prevSrc={leisureData.data.showcase[(photoIndex + leisureData.data.showcase.length - 1) % leisureData.data.showcase.length].image1.localFile.childImageSharp.fluid.src}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + leisureData.data.showcase.length - 1) % leisureData.data.showcase.length,
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + 1) % leisureData.data.showcase.length,
                          })
                        }
                        imageCaption={leisureData.data.showcase[photoIndex].caption}
                        animationDuration={800}
                      />
                    }
                    <p className=" text-left text-sm-center pages mb-0">
                      {this.state.activeSlide + 1} of {leisureData.data.showcase.length}
                    </p>
                  </div>
                </div>
              </section>
          {/* <!-- ------------------- Showcase section end here ------------------- --> */}
          {/* <!-- ------------------- Location section start here ------------------- --> */}
            {
              leisureData.data.location_url ?
            <section className="location-sections">
              <h2 className="section-title text-uppercase text-center">
                Location
              </h2>
              <div className="map-image">
                  <iframe className="map" src={leisureData.data.location_url} style={{ width:"100%", height:"372px", frameborder:"0", border:"0", allowFullScreen:"0"}}></iframe>
              </div>
            </section> : null
           }
          {/* <!-- ------------------- Location section end here ------------------- --> */}


            {/* <!--   ------------------- Proximities section start here ------------------- --> */}
                        
            {leisureData.data.proximites.length > 1 ?
              <section className="proximities-section">
              <div className=" container">
                  <div className="section-title-wrapper">
                    <h2 className="section-title text-uppercase text-center">
                        Proximities
                    </h2>
                    <p className="text-center">{leisureData.data.proximities_description.text}</p>
                  </div>
                  <ul className="nav nav-pills row" id="pills-tab" role="tablist">
                      {
                        leisureData.data.proximites.map((item, index) => {
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
                          leisureData.data.proximites.map((item, index) => {
                            return(
                              <div key={index} className={ index ? "tab-pane fade show" : "tab-pane fade show active"} id={`id${index}`} role="tabpanel" aria-labelledby={`tab${index}`}>
                                <div className="container">
                                  <div >
                                      <ul className="row">
                                        {item.description1 && <li dangerouslySetInnerHTML={{__html:item.description1.html }}  className="col-sm-4"/>}
                                        {item.description2 && <li dangerouslySetInnerHTML={{__html:item.description2.html }}  className="col-sm-4"/>}
                                        {item.description3 && <li dangerouslySetInnerHTML={{__html:item.description3.html }}  className="col-sm-4"/>}
                                        {item.description4.length > 0 && <li dangerouslySetInnerHTML={{__html:item.description4.html }}  className="col-sm-4"/>}
                                      </ul>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                    </div>
                </div>
              </section>:null
            }
            {/* <!--   ------------------- Proximities section end here ------------------- --> */}
             
          {/* <!--   ------------------- Amenities And Fact Files section start here ------------------- --> */}
            {
              leisureData.data.amenities.length && leisureData.data.floor_plans.length ? 
            <section className="amenity-sections container"  id={leisureData.uid}>
              <ul className="nav nav-pills row padding-sm-0" id="factfile-tab" role="tablist">
                <li className="nav-item col-6 p-0">
                  <a className="nav-link text-center text-uppercase tab-title active" id="pills-amenities-tab" data-toggle="pill" href="#amenities" role="tab" aria-controls="pills-amenities" aria-selected="true">
                    {leisureData.data.amenities1.text}
                  </a>
                </li>
                <li className="nav-item col-6 p-0">
                  <a className="nav-link text-center text-uppercase tab-title" id="pills-factfile-tab" data-toggle="pill" href="#fact-file" role="tab" aria-controls="pills-factfile" aria-selected="false">
                    Floor Plans
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="factfiles-tabContent">
                {
                  leisureData.data.amenities.length  ?
                  <div className="tab-pane fade show active" id="amenities" role="tabpanel" aria-labelledby="pills-amenities-tab">
                    <div className="container p-0">
                      <div className="amenities-inner-wrapper d-flex">
                        <div className="amenities-icon-wrapper">
                          <div className="d-flex flex-wrap amenities" id="myTab" role="tablist">
                            {
                              leisureData.data.amenities.map((item, index) => {
                                return(
                                  item.image1.url ?
                                    <button key={index} className={`d-flex align-items-center justify-content-start  ${this.state.imageUrl===item.image1.url || !index && !this.state.imageUrl ? 'active': ''}`} onClick={() => this.setState({imageUrl:  item.image1.url})} >
                                      <span className="amenities-icon-wrap">
                                        <img className="amenities-icon" src={item.icon_image.url} />
                                        {/* <i className={item.icon}></i> */}
                                        </span>
                                      <span className="amenities-icon-description"><span>{item.title1.text}</span></span>
                                    </button>: null
                                )
                              })
                            }
                          </div>
                          <div className="d-flex"></div>
                        </div>
                        <div className="image-wrapper">
                          {
                            this.state.imageUrl ?
                          <img src={this.state.imageUrl} alt={leisureData.data.title.text} className="w-100 h-100"/>
                          :<img src={leisureData.data.amenities[0].image1.url} alt={leisureData.data.title.text} className="w-100 h-100"/>
                          }
                        </div>
                      </div>
                    </div>
                  </div>: null
                }
                
                {
                  leisureData.data.floor_plans.length ?
                <div className="tab-pane fade floor-plan" id="fact-file" role="tabpanel" aria-labelledby="pills-factfile-tab">
                  <div className="slider-page">
                    <div className="container">
                      <div className="section-title-wrap d-flex flex-column align-items-center">
                        <label className="wrap">
                          <select className="border-0 layout-select" onChange={(e)=> {
                            let floor = leisureData.data.floor_plans.filter(value => value.title1.text === e.target.value)
                            this.setState({floorPlanSelect: floor})
                            if(e.target.value === "allLayout"){
                              this.setState({floorPlanSelect: leisureData.data.floor_plans})
                            }
                          }}>
                            <option value="allLayout"> All Layout </option>
                            {
                              leisureData.data.floor_plans.map((data, index) => {
                                return(
                                  <option value={data.title1.text} key={index}>{data.title1.text}</option>
                                )
                              })
                            }
                          </select>
                        </label>
                      </div>
                      <div className="slider-wrapper">
                        {
                          this.state.floorPlanSelect && this.state.floorPlanSelect.length == 1 ?
                          <div>
                            {
                            this.state.floorPlanSelect && this.state.floorPlanSelect.map((item,value) => {
                              return(
                                <div key={value}>
                                  <div role="link" tabIndex="0" className="slider-img" onClick={() => this.setState({ isOpenOneSlide: true ,photoIndex:value})}>
                                    <Img fluid={item.image1.localFile.childImageSharp.fluid} key={value} alt="Floor Plans" className="w-100 h-100" />
                                  </div>
                                </div>
                              )
                            })}
                                {
                          isOpenOneSlide && leisureData.data.floor_plans &&
                          <Lightbox
                            mainSrc={leisureData.data.floor_plans[photoIndex].image1.localFile.childImageSharp.fluid.src}
                            onCloseRequest={() => this.setState({ isOpenOneSlide: false })}
                            // onMovePrevRequest={() =>
                            //   this.setState({
                            //     photoIndex: (photoIndex + leisureData.data.floor_plans.length - 1) % leisureData.data.floor_plans.length,
                            //   })
                            // }
                            // onMoveNextRequest={() =>
                            //   this.setState({
                            //     photoIndex: (photoIndex + 1) % leisureData.data.floor_plans.length,
                            //   })
                            // }
                          animationDuration={800}

                          />
                        }
                            </div>:
                            <Slider {...floorPlan}>
                              {
                                this.state.floorPlanSelect.length > 0 && this.state.floorPlanSelect.map((item,value) => {
                                  return(
                                    <div key={value}>
                                      <div role="link" tabIndex="0" className="slider-img " onClick={() => this.setState({ isOpenTwo: true ,photoIndex:value})}>
                                        <Img fluid={item.image1.localFile.childImageSharp.fluid} key={value} alt="Floor Plans" className="w-100 h-100" />
                                        <p className="showcase-slide-caption">{item.caption}</p>
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
                            mainSrc={leisureData.data.floor_plans[photoIndex].image1.localFile.childImageSharp.fluid.src}
                            nextSrc={leisureData.data.floor_plans[(photoIndex + 1) % leisureData.data.floor_plans.length].image1.localFile.childImageSharp.fluid.src}
                            prevSrc={leisureData.data.floor_plans[(photoIndex + leisureData.data.floor_plans.length - 1) % leisureData.data.floor_plans.length].image1.localFile.childImageSharp.fluid.src}
                            onCloseRequest={() => this.setState({ isOpenTwo: false })}
                            onMovePrevRequest={() =>
                              this.setState({
                                photoIndex: (photoIndex + leisureData.data.floor_plans.length - 1) % leisureData.data.floor_plans.length,
                              })
                            }
                            onMoveNextRequest={() =>
                              this.setState({
                                photoIndex: (photoIndex + 1) % leisureData.data.floor_plans.length,
                              })
                            }
                          animationDuration={800}
                          imageCaption={leisureData.data.floor_plans[photoIndex].caption}
                          />
                        }

                        {
                        this.state.floorPlanSelect.length !==1 &&
                          <p className=" text-left text-sm-center pages mb-0">
                          {this.state.floorPlanActive + 1} of {leisureData.data.floor_plans.length}
                        </p>
                        }

                    </div>
                    </div>
                  </div>
                </div>:  null
                }
              </div>
            </section>
            :null
            }

            {
              leisureData.data.floor_plans.length && !leisureData.data.amenities.length  ?
              <section className="amenity-sections container">
              <div className="slider-page d-none d-sm-block floor-plan">
                  <div className="section-title-wrap d-flex flex-column align-items-center">
                    <h2 className="section-title text-uppercase text-center">
                        Floor Plans
                    </h2>
                  </div>
                  <div>
                  <div className="container">
                    <div className="section-title-wrap d-flex flex-column align-items-center">
                      <label className="wrap">
                        <select className="border-0 layout-select" onChange={(e)=> {
                          let floor = leisureData.data.floor_plans.filter(value => value.title1.text === e.target.value)
                          this.setState({floorPlanSelect: floor})
                          if(e.target.value === "allLayout"){
                            this.setState({floorPlanSelect: leisureData.data.floor_plans})
                          }
                        }}>
                          <option value="allLayout"> All Layout </option>
                          {
                            leisureData.data.floor_plans.map((data, index) => {
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
                        this.state.floorPlanSelect && this.state.floorPlanSelect.length == 1 ?
                        <div>
                          {
                          this.state.floorPlanSelect && this.state.floorPlanSelect.map((item,value) => {
                            return(
                              <div key={value}>
                                <div className="slider-img" onClick={() => this.setState({ isOpenOneSlide: true ,photoIndex:value})}>
                                  <Img fluid={item.image1.localFile.childImageSharp.fluid} key={value} alt="Floor Plans" className="w-100 h-100" />
                                </div>
                              </div>
                            )
                          })}
                              {
                        isOpenOneSlide && leisureData.data.floor_plans &&
                        <Lightbox
                          mainSrc={leisureData.data.floor_plans[photoIndex].image1.localFile.childImageSharp.fluid.src}
                          onCloseRequest={() => this.setState({ isOpenOneSlide: false })}
                          // onMovePrevRequest={() =>
                          //   this.setState({
                          //     photoIndex: (photoIndex + leisureData.data.floor_plans.length - 1) % leisureData.data.floor_plans.length,
                          //   })
                          // }
                          // onMoveNextRequest={() =>
                          //   this.setState({
                          //     photoIndex: (photoIndex + 1) % leisureData.data.floor_plans.length,
                          //   })
                          // }
                        animationDuration={800}
                        />
                      }
                          </div>:
                          <Slider {...floorPlan}>
                            {
                              this.state.floorPlanSelect.length > 0 && this.state.floorPlanSelect.map((item,value) => {
                                return(
                                  <div key={value}>
                                    <div className="slider-img " onClick={() => this.setState({ isOpenTwo: true ,photoIndex:value})}>
                                      <Img fluid={item.image1.localFile.childImageSharp.fluid} key={value} alt="Floor Plans" className="w-100 h-100" />
                                      <p className="showcase-slide-caption">{item.caption}</p>
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
                          mainSrc={leisureData.data.floor_plans[photoIndex].image1.localFile.childImageSharp.fluid.src}
                          nextSrc={leisureData.data.floor_plans[(photoIndex + 1) % leisureData.data.floor_plans.length].image1.localFile.childImageSharp.fluid.src}
                          prevSrc={leisureData.data.floor_plans[(photoIndex + leisureData.data.floor_plans.length - 1) % leisureData.data.floor_plans.length].image1.localFile.childImageSharp.fluid.src}
                          onCloseRequest={() => this.setState({ isOpenTwo: false })}
                          onMovePrevRequest={() =>
                            this.setState({
                              photoIndex: (photoIndex + leisureData.data.floor_plans.length - 1) % leisureData.data.floor_plans.length,
                            })
                          }
                          onMoveNextRequest={() =>
                            this.setState({
                              photoIndex: (photoIndex + 1) % leisureData.data.floor_plans.length,
                            })
                          }
                        animationDuration={800}
                        imageCaption={leisureData.data.floor_plans[photoIndex].caption}
                        />
                      }
                      {
                      this.state.floorPlanSelect.length !==1 &&
                        <p className=" text-left text-sm-center pages mb-0">
                        {this.state.floorPlanActive + 1} of {leisureData.data.floor_plans.length}
                      </p>
                      }
                    </div>
                  </div>
                  </div>
                </div>
              </section>: null
            }
            {
            leisureData.data.amenities.length && !leisureData.data.floor_plans.length  ?
               <section className="slider-page site-progress-wrap mb-0">
               <h2 className="section-title text-uppercase text-center">
               {leisureData.data.amenities1.text}
               </h2>
                    <div className="container p-0">
                      <div className="amenities-inner-wrapper d-flex">
                        <div className="amenities-icon-wrapper">
                          <div className="d-flex flex-wrap amenities" id="myTab" role="tablist">
                            {
                              leisureData.data.amenities.map((item, index) => {
                                return(
                                  item.image1.url ?
                                    <button key={index} className={`d-flex align-items-center justify-content-start  ${this.state.imageUrl===item.image1.url || !index && !this.state.imageUrl ? 'active': ''}`} onClick={() => this.setState({imageUrl:  item.image1.url})} >
                                      <span className="amenities-icon-wrap">
                                        <img className="amenities-icon" src={item.icon_image.url} />
                                        {/* <i className={item.icon}></i> */}
                                        </span>
                                      <span className="amenities-icon-description"><span>{item.title1.text}</span></span>
                                    </button>: null
                                )
                              })
                            }
                          </div>
                          <div className="d-flex"></div>
                        </div>
                        <div className="image-wrapper">
                          {
                            this.state.imageUrl ?
                          <img src={this.state.imageUrl} alt={leisureData.data.title.text} className="w-100 h-100"/>
                          :<img src={leisureData.data.amenities[0].image1.url} alt={leisureData.data.title.text} className="w-100 h-100"/>
                          }
                        </div>
                      </div>
                    </div>
               </section>: 
               null
            }
           

            {/* <!--   ------------------- Amenity And Fact Files section end here ------------------- --> */}

        {/* <!--   ------------------- Site-progress section start here ------------------- --> */}
     { 
        leisureData.data.site_progress.length > 0 ?
          <section className="slider-page site-progress-wrap mb-0">
              <h2 className="section-title text-uppercase text-center">
                Site Progress
              </h2>
              <div className="slider-wrapper-gray slider-bg">
                <div className="container showcase-slider slider-wrapper">
                  <Slider {...siteProcess}>
                    {
                      leisureData.data.site_progress.length > 0 && leisureData.data.site_progress.map((item,value) => {
                        return(
                          <div key={value}>
                            <div role="link" tabIndex="0" className="slider-img " onClick={() => this.setState({ isOpenThree: true ,photoIndex:value})}>
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
                    mainSrc={leisureData.data.site_progress[photoIndex].images.localFile.childImageSharp.fluid.src}
                    nextSrc={leisureData.data.site_progress[(photoIndex + 1) % leisureData.data.site_progress.length].images.localFile.childImageSharp.fluid.src}
                    prevSrc={leisureData.data.site_progress[(photoIndex + leisureData.data.site_progress.length - 1) % leisureData.data.site_progress.length].images.localFile.childImageSharp.fluid.src}
                    onCloseRequest={() => this.setState({ isOpenThree: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + leisureData.data.site_progress.length - 1) % leisureData.data.site_progress.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + 1) % leisureData.data.site_progress.length,
                      })
                    }
                    animationDuration={800}

                  />
                }
                <p className=" text-left text-sm-center pages mb-0">
                  {this.state.siteProcessActive + 1} of {leisureData.data.site_progress.length}
                </p>
              </div>
              </div>
            </section>: null
            }
            {/* <!--   ------------------- progress section end here ------------------- --> */}


           {/* <!--   ------------------- Download Brouchure section start here ------------------- --> */}
            {
              leisureData.data.download_info && leisureData.data.download_info.length > 0 ?
              <div className="container detail-page-sections d-flex justify-content-center download-btn">
                {
                  leisureData.data.download_info.map((item, index) => {
                    return(
                    <a key={index} href="#pdf-link" download={item.file.name} className="btn-secondary text-center">Download {item.title_of_info.text}</a>
                    )
                  })
                }
              </div>: null
            }
            
            {/* <!--   ------------------- Download Brouchure section end here ------------------- --> */}            {/* <!--   ------------------- Enquiry section start here ------------------- --> */}
            
        </main>
      </Layout>
    )
  }
}
export default LeisureDetails;

export const leisurePage = graphql`
  query leisureData($uid: String!) {
  prismicOurVerticalsArticle(uid: { eq: $uid }) {
    uid
    data {
      seo_title,
      seo_description,
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

      customizable_button_title
      customizable_button_link{
        url
      }

      phase {
        title1 {
          text
        }
        description1 {
          text
        }
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
      thumbnail {
        url
      }
      showcase {
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
      floor_plans {
        caption
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
      amenities {
        title1 {
            text
        }
        
        image1{
          url
        }
        icon
        icon_image {
          url
        }
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
      site_progress_heading {
          text
      }
      site_progress {
        images {
          localFile {
              childImageSharp {
                  fluid(maxWidth: 1150) {
                      ...GatsbyImageSharpFluid
                      presentationWidth
                  }
              }
          }
        }
      }
      location_url
    #  download_info {
    #    title_of_info {
    #      text
    #    }
    #    file {
    #      name
    #    }
    #  }
    }
  }
}`
