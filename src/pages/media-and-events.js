import React from 'react';
import Layout from '../components/layout';
import Slider from "react-slick";
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class MediaAndEvents extends React.Component {
  state = {
    activeSlide: null,
    photoIndex: 0,
    isOpen: false,
    locateMatch: '',
    showCase:[]
  };

  render(){
    const { photoIndex, isOpen } = this.state;
    const eventwiseData = this.props.data.prismicEvents.data;
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
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
      <SEO title={eventwiseData.seo_title} description={eventwiseData.seo_description}/>
        <section className="events" >
          <section className="page-heading-section container container-sm-fluid bg-color">
            <div className="padding-block-60">
              <h2 className="page-heading">{eventwiseData.title.text}</h2>
            </div>
            <div className="row mr-0">
              <div className="col-12">
                <div className="main-paragraph mb-0" dangerouslySetInnerHTML={{__html:eventwiseData.description.html }} />
              </div>
            </div>
          </section>
          {
            eventwiseData.all_events.map((item,index) => {
              // return(
              //   item.events.document.map((item.events.document[0], index) => {
                  return(
                    <section className="event-slider slider-page" key={index}>
                      <div className="padding-block-60 d-flex justify-content-center flex-column w-100 ">
                        <h3 className="section-title text-center text-uppercase">
                          {item.events.document[0].data.title.text}
                        </h3>
                      </div>
                      <div className="slider-wrapper slider-bg">
                        <div className="container-fluid container-sm p-0 px-sm-3">
                          <p className="location text-center mb-0">
                            <span className="mr-32  text-capitalize">Location: {item.events.document[0].data.location.text}</span> | <span className="ml-32">Date: {item.events.document[0].data.date}</span>
                          </p>
                          <Slider {...settings}>
                            {
                              item.events.document[0].data.showcase.map((element,value) => {
                                return(
                                  <div key={value}>
                                    <div role="link" tabIndex="0" className="slider-img image-ratio" onClick={() =>{
                                     this.setState({ isOpen: true ,photoIndex:value,showCase:item.events.document[0].data.showcase})
                                    }
                                    } >
                                      <Img fluid={element.image.localFile.childImageSharp.fluid} width="100%"/>
                                    </div>
                                  </div>
                                )
                              })
                              }
                          </Slider>
                          <p className="text-left text-sm-center pages mb-0">
                            {this.state.activeSlide + 1} of {item.events.document[0].data.showcase.length}
                          </p>
                        </div>
                      </div>
                    </section>
                  )
              //   })
              // )
            })
          }
           {
              isOpen &&
              <Lightbox
                mainSrc={this.state.showCase[photoIndex].image.localFile.childImageSharp.fluid.src}
                nextSrc={this.state.showCase[(photoIndex + 1) % this.state.showCase.length].image.localFile.childImageSharp.fluid.src}
                prevSrc={this.state.showCase[(photoIndex + this.state.showCase.length - 1) % this.state.showCase.length].image.localFile.childImageSharp.fluid.src}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + this.state.showCase.length - 1) % this.state.showCase.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % this.state.showCase.length,
                  })
                }
                animationDuration={800}
                />
              }
        </section>
      </Layout>
    )
  }
}
export default MediaAndEvents;

export const eventPage = graphql` {
  prismicEvents {
    data {
      seo_title,
      seo_description,
      title {
        text
      }
      description {
        html
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
              locate_match
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
