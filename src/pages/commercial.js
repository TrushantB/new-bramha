import React from 'react';
import Slider from "react-slick";

import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';
import { graphql, Link } from 'gatsby';

class Commercial extends React.Component {
  constructor(){
    super();
    this.state = {
      activeSlide: null,

    }
  }

  render(){
    let settings = {
      className: "project-carousel",
      centerPadding: "60px",
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplaySpeed: 0,
      nfinite:true,
      afterChange: current => this.setState({ activeSlide: current }),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            speed: 1000,
            afterChange: current => this.setState({ completeChange: current }),
            autoplaySpeed: 0
          }
        },
        {
          breakpoint: 580,
          settings: {

            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            autoplaySpeed: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            infinite: true,
            centerPadding: "30px",
            slidesToShow: 1,
            autoplaySpeed: 0
          }
        }
      ]
    };
    const commercialData = this.props.data.allPrismicCommercial.edges[0].node.data;
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={commercialData.sub_title.text}/>
        <section className=" page-heading-section container container-sm-fluid bg-color">
          <div className="padding-block-60">
            <h2 className="page-heading">{commercialData.sub_title.text}</h2>
          </div>
          <div className="row  mr-0">
            <div className="col-12">
              <div className="main-paragraph">
                <div dangerouslySetInnerHTML={{__html:commercialData.description.html }} />
              </div>
            </div>
          </div>
        </section>
        <section className="residential-projects">
          <div className="residences">
            <div className="container">
              <div className="row">
                {
                  commercialData.all_vericals.map((item2) => {
                    return(
                      item2.verticals.document.map((item, index) => {
                        return(
                          <div className="col-md-6 col-lg-4 col-sm-12 p-0 pl-sm-3 pr-sm-3" key={index}>
                            <Link to={`commercial/${item2.verticals.uid}`}>
                              <div className="residences-card position-relative">
                                <div className="residences-img ">
                                  <picture>
                                    <source media="(min-width: 581px)" srcSet={item.data.thumbnail.url}/>
                                    <img src={item.data.thumbnail.url} alt="" width="100%" />
                                  </picture>
                                  {/* <Img fluid={item.data.thumbnail.localFile.childImageSharp.fluid} alt="" width="100%"/> */}
                                </div>
                                <div className="rectangle position-absolute d-flex flex-column justify-content-around">
                                  <div className="rectangle-title">
                                    <h4 className="text-uppercase m-0 inner-section-title">{item.data.title.text}</h4>
                                  </div>
                                  <div className="apartment-size d-flex justify-content-between align-items-center">
                                    <span className="text-uppercase">{item.data.flat_bhk.text}</span>
                                    <div>
                                      <i className="fas fa-arrow-right"></i>
                                    </div>
                                  </div>
                                  <div className="project-location">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>{item.data.flat_address.text}</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        )
                      })
                    )
                  })
                }
              </div>
            </div>
          </div>

        <section className="complete-project position-relative">
          <div className="container">
            <div className="listing-heading d-flex align-items-center">
              <h4 className="text-uppercase heading mb-0">Completed Projects</h4>
            </div>
            <div className="text-left d-none d-sm-block" dangerouslySetInnerHTML={{__html:commercialData.completed_project_description.html }} />
            <Slider  {...settings}>
              {  commercialData.completed_projects.map((item, index)=>{
                return(
                  <div className="row"  key={index}>
                  <Link to={`commercial/${item.completed_links.uid}`} >
                    <div className="secondary-card position-relative ">
                      <div className="secondary-card-img image-ratio">
                      <picture>
                          <source media="(max-width: 581px)" srcSet={item.completed_links.document[0].data.thumbnail.mobile.url}/>
                          <img src={item.completed_links.document[0].data.thumbnail.url} alt="" width="100%"/>
                        </picture>
                      </div>
                      <div className="secondary-card-rectangle position-absolute d-flex flex-column justify-content-around">
                        <div className="title">
                          <h4 className="text-uppercase m-0 inner-section-title">{item.completed_links.document[0].data.title.text}</h4>
                        </div>
                        <div className="apartment-size d-flex justify-content-between align-items-center">
                          <span className="text-uppercase">{item.completed_links.document[0].data.flat_bhk.text}</span>
                          <div>
                            <i className="fas fa-arrow-right"></i>
                          </div>
                        </div>
                        <div className="project-location">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>{item.completed_links.document[0].data.flat_address.text}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  </div>
                )})
              }
            </Slider>
          </div>
        </section>
          <div className="view-all text-center mt-5 mt-sm-4 mb-5">
            <Link to="commercial/completed-projects/" className="btn-secondary">View All</Link>
          </div>
          <section className="give-details text-center">
            <div className="container">
              <h4 className="text-uppercase text-center section-title">Looking for more option?</h4>
              <p>
                Tell us your requirement and we will let you know when there is a match.
              </p>
              <div className="sumbit text-center mt-sm-0 mt-4">
                <button type="submit" className="btn-secondary">Give Details</button>
              </div>
            </div>
          </section>
        </section>
        <Footer/>
      </Layout>
    )
  }
}
export default Commercial;

export const commercialPageData = graphql` {
  allPrismicCommercial {
    edges {
      node {
        uid
        data {
          title {
            text
          }
          sub_title {
            text
          }
          description {
            html
          }
          banner {
            url
          }
          all_vericals {
            verticals {
              uid
              document {
                data {
                  title {
                    text
                  }
                  flat_bhk {
                    text
                  }
                  flat_address {
                    text
                  }
                  thumbnail {
                    url
                  }
                  banner {
                    image {
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
        completed_project_description{
          html
        }
        completed_projects{
          completed_links{
            uid
            document{
              data{
                title{
                  text
                }
                flat_bhk{
                  text
                }
                flat_address{
                  text
                }
                thumbnail{
                  url
                  mobile{
                    url
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
}`
