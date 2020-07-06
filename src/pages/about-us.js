import React from 'react';
import { graphql, Link } from 'gatsby';
import Slider from "react-slick";
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import chevron_down from '../images/chevron_down.svg';
import Div100vh from 'react-div-100vh/lib/Div100vh';

class AboutUs extends React.Component {
  state = {
    // styleData:{height: 160, overflow: 'hidden'},
    activeSlide: 0,
    activeSlide2: 0,
  }
  scrollWin() {
    var offsetHeight = document.querySelector('.banner-section').offsetHeight;
    window.scrollBy({
      top: offsetHeight,
      behavior: 'smooth'
    });
  }
  render(){
    let settings = {
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay : true,
      autoplaySpeed:3000,
      arrows:false,
      customPaging: i => (
        <div>
          <div key={i}> {ourLegacy.data.our_legacy[i].year}</div>
        </div>
      ),
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current }),
      adaptiveHeight : true,
    };
    const data = this.props.data.prismicAboutus.data;
    const ourLegacy = this.props.data.prismicOurLegacy;
    const verticalsData = this.props.data.prismicOurVerticals.data;
    const mgntTeam = this.props.data.prismicManagementTeam;
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        {/* <p>This won't work at all {alert(this.props.location.pathname)}</p> */}
        <SEO title={data.seo_title} description={data.seo_description}/>
        <div className="about-page">
          <Div100vh style={{ height: 'calc(100rvh - 57px)'}} className="banner-section mt-60" id="banner-section">
            <picture>
              <source media="(max-width: 581px)" srcSet={data.image.mobile.url}/>
              <img src={data.image.url} alt="banner image here" className="banner-img" />
            </picture>
            <div className="scroll-downs" onClick={this.scrollWin}>
              <span>Scroll</span>
              <div className="mousey"><img src={chevron_down} /></div>
            </div>
            {/* <Img fluid={data.image.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" /> */}
          </Div100vh>
          <section className="about-sections pb-0 pt-sm-0 page-heading-section container container-sm-fluid">
            <div className="row padding-block-60 pb-0 about-heading">
              <div className="col-12 padding-sm-0">
                <h2 className="page-heading">{data.sub_title.text} </h2>
              </div>
            </div>
            <div className="row about-description d-flex">
              <div className="col-md-3 col-sm-8 col-sm-offset-1 about-years">
                <img src={data.banner.url} alt="35 Years image" className="about-years-img"/>
              </div>
              <div className="about-para col-md-9 col-sm-12 mb-sm-3">
                <div dangerouslySetInnerHTML={{__html:data.description.html }}/>
              </div>
            </div>
            <div className="row bg-white about-content">
                {data.aboutus_content.map((item,value) => {
                  return(
                    <div key={value} className="col-md-4 mt-2 mt-sm-2 mt-md-2">
                      <div className="about-sect-4" style={this.state.styleData}>
                        <h3 className="mb-3 section-title text-uppercase">
                          {item.sub_title.text}
                        </h3>
                        <p className="vision-mission-des">
                          {item.description1.text}
                        </p>
                      </div>
                    </div>
                    )
                  })}
                {/* <div className="d-none d-md-flex justify-content-center align-items-center p-3 w-100">
                  {
                    this.state.styleData ?
                    <div className="link-text" onClick={() => {
                      this.setState({styleData:null})
                      }}>Show More <i className="fas fa-chevron-down"></i></div> :
                    <div className="link-text" onClick={() => {
                      this.setState({styleData:{height: 160, overflow: 'hidden'}})
                      }}>Show Less <i className="fas fa-chevron-up"></i>
                    </div>
                  }
                </div> */}
              </div>
          </section>
          <section className="our-legacy about-sections">
            <div className="d-flex justify-content-center flex-column section-title-wrapper w-100 ">
              <h3 className="our-legacy-title section-title text-center text-uppercase">
                Our Legacy
              </h3>
            </div>
            <div className="slider-wrapper">
                <div className="slider-border"></div>
                <div className="container-fluid container-md slider-container padding-sm-0">
                <Slider {...settings}>
                    {
                      ourLegacy.data.our_legacy.map((item,value) => {
                        return(
                          <div key={value} className="legacy-slide">
                            <picture>
                            <source media="(max-width: 581px)" srcSet={item.image.mobile.url} className="legacy-slider-image" />
                              <img src={item.image.url} alt="hospital Logo" className="legacy-slider-image" />
                            </picture>
                            {/* <Img fluid={item.image.localFile.childImageSharp.fluid} alt="slider image" className="legacy-slider-image" /> */}
                            <div className="slide-caption">
                              <h3 className="slide-title text-white">
                                {item.title.text}
                              </h3>
                              <p className="slide-description text-white m-0">
                                {item.description.text}
                              </p>
                            </div>
                          </div>
                        )
                      })
                    }
                  </Slider>
                </div>
              </div>
          </section>

          <section className="container">
            <div className="row our-vertivcal-sect about-sections">
              <div className="d-flex justify-content-center align-items-center flex-column section-title-wrapper w-100 ">
                <h3 className="section-title text-center text-uppercase">
                  {verticalsData.title.text}
                </h3>
              </div>
              <div className="col-md-6 padding-sm-0">
                <Link to='/residential' className="vertical-card d-flex text-decoration-none">
                  <div className="vertical-img-wrapper w-100">
                    <Img fluid={verticalsData.vertical1.document[0].data.banner.localFile.childImageSharp.fluid} alt="verticals image" className="w-100"/>
                  </div>
                  <div className="vertical-card-body d-flex flex-column justify-content-between">
                    <h2 className="inner-section-title">
                      {verticalsData.vertical1.document[0].data.title.text}
                    </h2>
                    <div className="link-text vertical-card-link d-flex justify-content-between align-items-center">
                      <span> View Projects </span>
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 mt-5 mt-md-0 padding-sm-0">
                <Link to='/commercial' className="vertical-card d-flex text-decoration-none">
                  <div className="vertical-img-wrapper w-100">
                    <Img fluid={verticalsData.vertical2.document[0].data.banner.localFile.childImageSharp.fluid} alt="verticals image" className="w-100"/>
                  </div>
                  <div className="vertical-card-body d-flex flex-column justify-content-between">
                    <h2 className="inner-section-title">
                      {verticalsData.vertical2.document[0].data.title.text}
                    </h2>
                    <div className="link-text vertical-card-link d-flex justify-content-between align-items-center">
                      <span> View Projects </span>
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 mt-5 padding-sm-0 ">
                <Link to='/hospitality' className="vertical-card d-flex text-decoration-none">
                  <div className="vertical-img-wrapper w-100">
                    <Img fluid={verticalsData.vertical3.document[0].data.banner.localFile.childImageSharp.fluid} alt="verticals image" className="w-100"/>
                  </div>
                  <div className="vertical-card-body d-flex flex-column justify-content-between">
                    <h2 className="inner-section-title">
                      {verticalsData.vertical3.document[0].data.title.text}
                    </h2>
                    <div className="link-text vertical-card-link d-flex justify-content-between align-items-center">
                      <span> View Projects </span>
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 mt-5 padding-sm-0">
                <Link to='/leisure-club' className="vertical-card d-flex text-decoration-none">
                  <div className="vertical-img-wrapper w-100">
                    <Img fluid={verticalsData.vertical4.document[0].data.banner.localFile.childImageSharp.fluid} alt="verticals image" className="w-100"/>
                  </div>
                  <div className="vertical-card-body d-flex flex-column justify-content-between">
                    <h2 className="inner-section-title">
                      {verticalsData.vertical4.document[0].data.title.text}
                    </h2>
                    <div className="link-text vertical-card-link d-flex justify-content-between align-items-center">
                        <span> View Projects </span>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row management-team-sect about-sections">
              <div className="d-flex justify-content-center align-items-center flex-column section-title-wrapper w-100 ">
                <h3 className="section-title text-center text-uppercase">
                  {mgntTeam.data.sub_title.text}
                </h3>
              </div>
              <div className="col-12 padding-sm-0">
                <div className="management-card d-flex">
                  <div className="management-img-wrapper w-100">
                    <img src={mgntTeam.data.banner.url} alt="verticals image" className="w-100 h-100"/>
                  </div>
                  <div className="management-card-body d-flex flex-column justify-content-around">
                    <p className="d-none d-md-block">
                      {mgntTeam.data.description.text}
                    </p>
                    <Link to={`/${mgntTeam.uid}`} className="link-text management-card-link d-flex justify-content-between align-items-center">
                      <span> Our Team </span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
export default AboutUs;

export const AboutPage = graphql` {
  prismicAboutus {
    data {
      seo_title,
      seo_description,
      sub_title {
        text
      }
      image {
        url
        mobile{
          url
        }
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
    }
  }

      prismicOurLegacy {
        data {
          our_legacy {
            image {
              url
              mobile {
                url
              }
            }
            year
            description {
              text
            }
            title {
              text
            }
          }
        }
      }

      prismicManagementTeam {
          uid
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
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`
