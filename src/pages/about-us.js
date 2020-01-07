import React from 'react'
import { graphql, Link } from 'gatsby'
import Slider from "react-slick";
import Img from 'gatsby-image';
import Layout from '../components/layout'
import Footer from '../components/footer';
import SEO from '../components/seo';

class AboutUs extends React.Component {
  state = {
    styleData:{height: 160, overflow: 'hidden'},
    activeSlide: 0,
    activeSlide2: 0,
    nav1: null,
    nav2: null
  }
  
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  render(){
    let index = 0;
    var settings1={
          // autoplay: true,
          // autoplaySpeed:3500,
          slidesToShow: 12,
          slidesToScroll: 1,
          centerMode: false,
          focusOnSelect: true,
           mobileFirst: true,
          arrows: false,
          infinite:false,
          className:"timeline-nav",
           responsive: [
               {
              breakpoint: 768,
              settings: {
                slidesToShow: 8,
               }
              },
             {
              breakpoint: 0,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              }
            }
         ]
      }
      var settings2={
        autoplay: true,
        autoplaySpeed:3500,
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,  
       centerMode: false,     
       cssEase: 'ease',
        edgeFriction: 0.5,
        mobileFirst: true,
        speed: 500,
        responsive: [
          {
           breakpoint: 0,
           settings: {
               centerMode: false
           }
         },
            {
           breakpoint: 768,
           settings: {
               centerMode: false
           }
         }
      ]
   }
    const data = this.props.data.prismicAboutus.data;
    const verticalsData = this.props.data.prismicOurVerticals.data;
    // const ourLegacy = this.props.data.allPrismicOurLegacy.edges;
    // console.log('ourLegacy', ourLegacy);
    console.log('data from about us page', data);
    return(
      <Layout>
        <SEO title="AboutUs"/>
        <div>
            <section className="banner-section">
              <Img fluid={data.image.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" />
          </section>
          <section className="about-sections pb-0 pt-sm-0 page-heading-section container container-sm-fluid">
              <div className="row padding-block-60 pb-0 about-heading">
                <div className="col-12 padding-sm-0">
                  <h2 className="page-heading">{data.sub_title.text} </h2>
                </div> 
              </div>
              <div className="row about-description d-flex">
                  <div className="col-md-3 col-sm-12 about-years">
                  <Img fluid={data.banner.localFile.childImageSharp.fluid} alt="35 Years image" className="about-years-img"/>
                </div>
                <div className="col-md-9 col-sm-12">
                  <div className="" dangerouslySetInnerHTML={{__html: data.description.html}} />
                </div>
              </div>
              <div className="row bg-white about-content">
              {data.aboutus_content.map((item,value)=>{
                return(
                  <div key={value} className="col-md-4 mt-2 mt-sm-2 mt-md-2">
                    <div className="about-sect-4"  style={this.state.styleData}>
                      <h3 className="section-title text-uppercase">
                      {item.sub_title.text}
                      </h3>
                      <p className="vision-mission-des">
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
                <h3 className="section-title text-center text-uppercase">
                    Our Legacy
                </h3>
              </div>
              <div className="slider-wrapper">
                <div className="slider-border"></div>
                <div className="container">
                <Slider {...settings1}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
            <div className="timeline-nav__item">1991</div>
              <div className="timeline-nav__item">1999</div>
              <div className="timeline-nav__item">2000</div>
              <div className="timeline-nav__item">2003</div>
              <div className="timeline-nav__item">2005</div>
              <div className="timeline-nav__item">2010</div>
              <div className="timeline-nav__item">2012</div>
              <div className="timeline-nav__item">2013</div>
              <div className="timeline-nav__item">2015</div>
              <div className="timeline-nav__item">2016</div>
        </Slider>
        <Slider {...settings2}
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={1}
          swipeToSlide={true}
          focusOnSelect={true}
        >
                      {
                      data.our_legacy.document[0].data.our_legacy.map((item,value)=>{
                        return(
                          <div key={value} className="legacy-slide">
                            <Img fluid={item.image.localFile.childImageSharp.fluid} alt="slider image" className="legacy-slider-image" />
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
                  <div className="vertical-card d-flex">
                    <div className="vertical-img-wrapper w-100">
                      <Img fluid={verticalsData.vertical1.document[0].data.banner.localFile.childImageSharp.fluid} alt="verticals image" className="w-100"/>
                    </div>
                    <div className="vertical-card-body d-flex flex-column justify-content-around"> 
                      <h2 className="inner-section-title">
                        {verticalsData.vertical1.document[0].data.title.text}
                      </h2>
                      <Link to='/residential' className="link-text vertical-card-link d-flex justify-content-between align-items-center">
                          <span> View Projects </span> 
                          <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div> 
                  </div>
                </div>
                <div className="col-md-6 mt-5 mt-md-0 padding-sm-0">
                  <div className="vertical-card d-flex flex-row-reverse flex-md-row">
                    <div className="vertical-img-wrapper w-100">
                      <Img fluid={verticalsData.vertical2.document[0].data.banner.localFile.childImageSharp.fluid} alt="verticals image" className="w-100"/>
                    </div>
                    <div className="vertical-card-body d-flex flex-column justify-content-around"> 
                      <h2 className="inner-section-title">
                        {verticalsData.vertical3.document[0].data.title.text}
                      </h2>
                      <Link to='/hospitality' className="link-text vertical-card-link d-flex justify-content-between align-items-center">
                          <span> View Projects </span> 
                          <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div> 
                  </div>
                </div>
                <div className="col-md-6 mt-5 padding-sm-0 ">
                <div className="vertical-card d-flex flex-row-reverse flex-md-row">
                    <div className="vertical-card-body d-flex flex-column justify-content-around"> 
                    <h2 className="inner-section-title">
                      {verticalsData.vertical2.document[0].data.title.text}
                    </h2>
                    <Link to='our-verticals-main/hospitality' className="link-text vertical-card-link d-flex justify-content-between align-items-center">
                        <span> View Projects </span> 
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                    </div>
                    <div className="vertical-img-wrapper w-100">
                    <Img fluid={verticalsData.vertical3.document[0].data.banner.localFile.childImageSharp.fluid} alt="verticals image" className="w-100"/>
                    </div>
                </div>
                </div>
                <div className="col-md-6 mt-5 padding-sm-0">
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
                    <Img fluid={verticalsData.vertical4.document[0].data.banner.localFile.childImageSharp.fluid} alt="verticals image" className="w-100"/>
                    </div>
                </div>
                </div>
            </div>
            <div className="row management-team-sect about-sections">
              <div className="d-flex justify-content-center align-items-center flex-column section-title-wrapper w-100 ">
                <h3 className="section-title text-center text-uppercase">
                    {data.management_team.document[0].data.sub_title.text}
                </h3>
              </div>
              <div className="col-12 padding-sm-0">
                <div className="management-card d-flex">
                  <div className="management-img-wrapper w-100">
                    <Img fluid={data.management_team.document[0].data.banner.localFile.childImageSharp.fluid} alt="verticals image" className="w-100"/>
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
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      banner {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1150, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              year
              description {
                text
              }
            }
             banner {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1150, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1150, quality: 100) {
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
                  fluid(maxWidth: 1150, quality: 100) {
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
                  fluid(maxWidth: 1150, quality: 100) {
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
                  fluid(maxWidth: 1150, quality: 100) {
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
                  fluid(maxWidth: 1150, quality: 100) {
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