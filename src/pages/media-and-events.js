import React from 'react';
import Layout from '../components/layout';
import Slider from "react-slick";
import { graphql } from 'gatsby';
import Footer from '../components/footer';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class MediaAndEvents extends React.Component {
  state = {
    activeSlide: null,
    photoIndex: 0,
    isOpen: false, 
  };

  render(){
    const { photoIndex, isOpen } = this.state;
    const eventwiseData = this.props.data.prismicEvents.data;
    let settings = {
      centerMode: true,
      centerPadding: '200px',
      slidesToShow: 1,
      speed:1000,
      afterChange: current => this.setState({ activeSlide: current }),
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
      <Layout>
      <SEO title="Media And Events"/>
        <section className="events" >
          <section className="page-heading-section container container-sm-fluid bg-color">
            <div className="padding-block-60">
              <h2 className="page-heading">{eventwiseData.title.text}</h2> 
            </div>
            <div className="row mr-0">
              <div className="col-12">
                <p className="main-paragraph mb-0">
                  {eventwiseData.description.text}
                </p>   
              </div>
            </div>
          </section>
          {
            eventwiseData.all_events.map((item) => {
              return(
                item.events.document.map((datas, index) => {
                  return(
                    <section className="event-slider" key={index}>
                      <div className="padding-block-60 d-flex justify-content-center flex-column w-100 ">
                        <h3 className="section-title text-center text-uppercase">
                          {datas.data.title.text}
                        </h3>
                      </div>
                      <div className="slider-wrapper">
                        <div className="container-fluid container-sm p-0 px-sm-3">
                          <p className="location text-center mb-0">
                            <span className="mr-32  text-capitalize">Location: {datas.data.location.text}</span> | <span className="ml-32">Date: {datas.data.date}</span>
                          </p>
                          <Slider {...settings}>
                            {
                              datas.data.showcase.map((item,value) => {
                                return(
                                  <div key={value}>
                                    <div className="slider-img image-ratio" onClick={() => this.setState({ isOpen: true ,photoIndex:value})}>
                                      <Img fluid={item.image.localFile.childImageSharp.fluid} width="100%"/>
                                    </div>
                                  </div>
                                )
                              })
                              }
                          </Slider>
                          {
                            isOpen &&
                            <Lightbox
                              mainSrc={datas.data.showcase[photoIndex].image.localFile.childImageSharp.fluid.src}
                              nextSrc={datas.data.showcase[(photoIndex + 1) % datas.data.showcase.length].image.localFile.childImageSharp.fluid.src}
                              prevSrc={datas.data.showcase[(photoIndex + datas.data.showcase.length - 1) % datas.data.showcase.length].image.localFile.childImageSharp.fluid.src}
                              onCloseRequest={() => this.setState({ isOpen: false })}
                              onMovePrevRequest={() =>
                                this.setState({
                                  photoIndex: (photoIndex + datas.data.showcase.length - 1) % datas.data.showcase.length,
                                })
                              }
                              onMoveNextRequest={() =>
                                this.setState({
                                  photoIndex: (photoIndex + 1) % datas.data.showcase.length,
                                })
                              }
                              />
                            }
                          <p className="text-left text-sm-center pages mb-0">
                            {this.state.activeSlide + 1} of {datas.data.showcase.length}
                          </p>
                        </div>
                      </div>
                    </section>   
                  )
                })
              )
            })
          }
        </section>
        <Footer/>
      </Layout>
    )
  }
}
export default MediaAndEvents;

export const eventPage = graphql` {
  prismicEvents {
    data {
      title {
        text
      }
      description {
        text
      }
      all_events {
        events {
          document {
            uid
            data {
              title {
                text
              }
              location {
                text
              }
              date
              showcase {
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
    }
  }
}`