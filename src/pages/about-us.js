import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Slider from "react-slick";
import { Link } from "gatsby"
import Footer from '../components/footer';

class AboutUs extends React.Component {
  state= {
    styleData:{height: 160, overflow: 'hidden'}
  }
  render(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay : true,
      adaptiveHeight : true,
    };
    const data = this.props.data.prismicAboutus.data;
    console.log('Data from about us page', data);
    const verticalsData = this.props.data.prismicOurVerticals.data;
    console.log('verticalsData from about us page', verticalsData);
    return(
      <Layout>
        <div>
          <section className="banner-section">
              <img src={data.image.url} alt="banner image here" className="banner-img" />
          </section>
          <section className="about-sections pb-0 page-heading-section container container-sm-fluid bg-color">
              <div className="">
                  <h2 className="page-heading">{data.sub_title.text} </h2> 
              </div>
              <div className="row padding-block-60 d-flex align-items-center">
                  <div className="col-sm-3 year-img-wrap">
                  <img src={data.banner.url} alt="35 Years image" className="w-100"/>
                </div>
                <div className="col-sm-9 main-description">
                  <div className="mb-4" dangerouslySetInnerHTML={{__html: data.description.html}} />
                </div>
              </div>
              <div className="row bg-white padding-block-60 pt-0">
              {data.aboutus_content.map((item,value)=>{
                return(
                  <div key={value} className="col-md-4 mt-2 mt-sm-2 mt-md-2">
                    <div className="about-sect-4"  style={this.state.styleData}>
                      <h3 className="section-title">
                      {item.sub_title.text}
                      </h3>
                      <p>
                        {item.description1.text}
                      </p>
                    </div>
                  </div>
                  )
                })}
                <div className="d-none d-md-flex justify-content-center align-items-center p-3 w-100">
                  {
                    this.state.styleData ? 
                    <div className="link-text" onClick={() => {
                      this.setState({styleData:null})
                      }}>Show More <i className="fas fa-chevron-down"></i></div> :
                    <div className="link-text" onClick={() => {
                      this.setState({styleData:{height: 160, overflow: 'hidden'}})
                      }}>Show Less <i className="fas fa-chevron-up"></i> </div>
                  }
                </div>
              </div>
          </section>
          <section className="our-legacy about-sections">
              <div className="d-flex justify-content-center flex-column section-title-wrapper w-100 ">
                <h3 className="section-title text-center">
                    Our Legacy
                </h3>
              </div>
              <div className="slider-wrapper">
                <Slider  {...settings}>
                  {
                    data.our_legacy.document[0].data.our_legacy.map((item,value)=>{
                      return(
                        <div key={value} className="legacy-slide">
                          <img src={item.image.url} alt="slider image" className="legacy-slider-image" />
                          <div className="slide-caption">
                            <h3 className="section-title text-white">
                              {item.title.text}
                            </h3>
                            <p className="text text-white"> 
                              {item.description.text}
                            </p>
                          </div>
                        </div>
                      )
                    })
                  }
                </Slider>
              </div>
          </section>
          <section className="container">
            <div className="row our-vertivcal-sect about-sections">
                <div className="d-flex justify-content-center align-items-center flex-column section-title-wrapper w-100 ">
                  <h3 className="section-title text-center">
                      {verticalsData.title.text}
                  </h3>
                </div>
                <div className="col-md-6">
                  <div className="vertical-card d-flex">
                    <div className="vertical-img-wrapper w-100">
                      <img src={verticalsData.vertical1.document[0].data.banner.url} alt="verticals image" className="w-100"/>
                    </div>
                    <div className="vertical-card-body d-flex flex-column justify-content-around"> 
                      <h2 className="inner-section-title">
                        {verticalsData.vertical1.document[0].data.title.text}
                      </h2>
                      <Link to='/our-verticals' className="link-text vertical-card-link d-flex justify-content-between align-items-center">
                          <span> View Projects </span> 
                          <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div> 
                  </div>
                </div>
                <div className="col-md-6 mt-5 mt-md-0">
                  <div className="vertical-card d-flex flex-row-reverse flex-md-row">
                    <div className="vertical-img-wrapper w-100">
                      <img src={verticalsData.vertical2.document[0].data.banner.url} alt="verticals image" className="w-100"/>
                    </div>
                    <div className="vertical-card-body d-flex flex-column justify-content-around"> 
                      <h2 className="inner-section-title">
                        {verticalsData.vertical2.document[0].data.title.text}
                      </h2>
                      <Link to='/our-verticals' className="link-text vertical-card-link d-flex justify-content-between align-items-center">
                          <span> View Projects </span> 
                          <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div> 
                  </div>
                </div>
                <div className="col-md-6 mt-5">
                <div className="vertical-card d-flex flex-row-reverse flex-md-row">
                    <div className="vertical-card-body d-flex flex-column justify-content-around"> 
                    <h2 className="inner-section-title">
                      {verticalsData.vertical3.document[0].data.title.text}
                    </h2>
                    <Link to='/our-verticals' className="link-text vertical-card-link d-flex justify-content-between align-items-center">
                        <span> View Projects </span> 
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                    </div>
                    <div className="vertical-img-wrapper w-100">
                    <img src={verticalsData.vertical3.document[0].data.banner.url} alt="verticals image" className="w-100"/>
                    </div>
                </div>
                </div>
                <div className="col-md-6 mt-5">
                <div className="vertical-card d-flex">
                    <div className="vertical-card-body d-flex flex-column justify-content-around"> 
                    <h2 className="inner-section-title">
                      {verticalsData.vertical4.document[0].data.title.text}
                    </h2>
                    <Link to='/our-verticals' className="link-text vertical-card-link d-flex justify-content-between align-items-center">
                        <span> View Projects </span> 
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                    </div> 
                    <div className="vertical-img-wrapper w-100">
                    <img src={verticalsData.vertical4.document[0].data.banner.url} alt="verticals image" className="w-100"/>
                    </div>
                </div>
                </div>
            </div>
            <div className="row management-team-sect about-sections">
              <div className="d-flex justify-content-center align-items-center flex-column section-title-wrapper w-100 ">
                <h3 className="section-title text-center">
                    {data.management_team.document[0].data.sub_title.text}
                </h3>
              </div>
              <div className="col-12">
                <div className="management-card d-flex">
                  <div className="management-img-wrapper w-100">
                    <img src={data.management_team.document[0].data.banner.url} alt="verticals image" className="w-100"/>
                  </div>
                  <div className="management-card-body d-flex flex-column justify-content-around"> 
                    <p className="d-none d-md-block">
                      {data.management_team.document[0].data.description.text}
                    </p>
                    <Link to={data.management_team.uid} className="link-text management-card-link d-flex justify-content-between align-items-center">
                      <span> Our Team </span> 
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div> 
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </Layout>
    )
  }
}
export default AboutUs;

export const AboutPage = graphql`{
  prismicAboutus {
    data {
      sub_title {
        text
      }
      image {
        url
      }
      banner {
        url
      }
      description {
        html
      }
      aboutus_content {
        sub_title {
          text
        }
        description1 {
          text
        }
      }
      our_legacy {
        slug
        document {
          data {
            our_legacy {
              title {
                text
              }
              image {
                url
              }
              year
              description {
                text
              }
            }
             banner {
              url
            }
            title {
              text
            }
            sub_title {
              text
            }
          
          }
          
        }
      }

      management_team {
        uid
        document {
          data {
            sub_title {
              text
            }
            description {
              text
            }
            banner {
              url
            }
          }
        }
      }
    }
  }
  prismicOurVerticals {
    data {
      title {
        text
      }
      vertical1 {
        document {
          data {
            title {
              text
            }
            banner {
              url
            }
          }
        }
      }
      vertical2 {
        document {
          data {
           title {
             text
           }
             banner {
              url
            }
          }
        }
      }
       vertical3 {
        document {
          data {
           title {
             text
           }
            banner {
              url
            }
          }
        }
      }
       vertical4 {
        document {
          data {
           title {
             text
           }
            banner {
              url
            }
          }
        }
      }
    }
  }
}
`