import React from 'react'
import Layout from '../components/layout'
import Slider from "react-slick";
import { graphql } from 'gatsby';
import Footer from '../components/footer';
import SEO from '../components/seo';

class MediaAndEvents extends React.Component {
  state = {
    activeSlide: 1,
    activeSlide2: 0
  };  
  render(){
      const eventData = this.props.data.prismicMediaAndEvent.data;
      const eventwiseData = this.props.data.prismicEvents.data;
      console.log('eventwiseData', eventwiseData);
      // console.log("event data from media and event page",eventData);
      var settings = {
        
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1,
        // beforeChange: (current, next) => this.setState({ activeSlide: next }),
        // afterChange: current => this.setState({ activeSlide2: current }),
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
        return(
            <Layout>
            <SEO title="MediaAndEvents"/>
               <section className="events" >
                <section className="page-heading-section container container-sm-fluid bg-color">
                  <div className="padding-block-60">
                      <h2 className="page-heading">{eventData.event_heading.text}</h2> 
                  </div>
                <div className="row mr-0">
                  <div className="col-12">
                    <div className="main-paragraph"> 
                      {eventData.description.text}
                    </div>  
                  </div>
                </div>
                </section>
                <section className="event-slider">
                    <div className="padding-block-60 d-flex justify-content-center flex-column w-100 ">
                        <h3 className="section-title text-center text-uppercase">
                          {eventwiseData.event1_title.text}
                        </h3>
                    </div>
                    <div className="slider-wrapper">
                        <div className="container">
                            <p className="location text-center mb-0">
                            <span className="mr-32">Location: {eventwiseData.event1_location.text}</span> | <span className="ml-32">Date: {eventwiseData.event1_date.text}</span>
                            </p>
                            <Slider {...settings}>
                            {
                            eventwiseData.event1_showcase.map((item,value)=>{
                            return(
                              <div key={value}>
                                <div  className="slider-img image-ratio">
                                  {/* <p className="location-date">{item.location.text}   {item.date.text}</p> */}
                                  <img src={item.image.url}width="100%"/>
                                </div>
                              </div>
                            )
                            })
                            }
                            </Slider>
                            <p className=" text-center pages m-0">
                              {this.state.activeSlide} of 4
                            </p>
                        </div>
                    </div>
                </section>   

                <section className="event-slider">
                    <div className="padding-block-60 d-flex justify-content-center flex-column w-100 ">
                        <h3 className="section-title text-center text-uppercase">
                          {eventwiseData.event2_title.text}
                        </h3>
                    </div>
                    <div className="slider-wrapper">
                        <div className="container">
                            <p className="location text-center mb-0">
                            <span className="mr-32">Location: {eventwiseData.event2_location.text}</span> | <span className="ml-32">Date: {eventwiseData.event2_date.text}</span>
                            </p>
                            <Slider {...settings}>
                            {
                            eventwiseData.event2_showcase.map((item,value)=>{
                            return(
                              <div key={value}>
                                <div  className="slider-img image-ratio">
                                  {/* <p className="location-date">{item.location.text}   {item.date.text}</p> */}
                                  <img src={item.image.url}width="100%"/>
                                </div>
                              </div>
                            )
                            })
                            }
                            </Slider>
                            <p className=" text-center pages m-0">
                              {this.state.activeSlide} of 4
                            </p>
                        </div>
                    </div>
                </section>

                <section className="event-slider">
                    <div className="padding-block-60 d-flex justify-content-center flex-column w-100 ">
                        <h3 className="section-title text-center text-uppercase">
                          {eventwiseData.event3_title.text}
                        </h3>
                    </div>
                    <div className="slider-wrapper">
                        <div className="container">
                            <p className="location text-center mb-0">
                            <span className="mr-32">Location: {eventwiseData.event3_location.text}</span> | <span className="ml-32">Date: {eventwiseData.event3_date.text}</span>
                            </p>
                            <Slider {...settings}>
                            {
                            eventwiseData.event3_showcase.map((item,value)=>{
                            return(
                              <div key={value}>
                                <div  className="slider-img image-ratio">
                                  {/* <p className="location-date">{item.location.text}   {item.date.text}</p> */}
                                  <img src={item.image.url}width="100%"/>
                                </div>
                              </div>
                            )
                            })
                            }
                            </Slider>
                            <p className=" text-center pages m-0">
                              {this.state.activeSlide} of 4
                            </p>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
            </Layout>
        )
    }
}
export default MediaAndEvents;

export const eventPage = graphql`{
  prismicMediaAndEvent{
    data {
      event_heading{
        text
      }
      description{
        text
      }
      event {
        image {
          url
        }
        heading{
          text
        }
        date{
          text
        }
         location{
          text
        }
      }
    }
  }

  prismicEvents{
    data{
      title{
            text
          }
          event1_title{
            text
          }
          event1_location{
            text
          }
          event1_date{
            text
          }
          event1_showcase{
            image{
              url
            }
          }
          event2_title{
            text
          }
          event2_location{
            text
          }
          event2_date{
            text
          }
          event2_showcase{
            image{
              url
            }
          }
          event3_title{
            text
          }
          event3_location{
            text
          }
          event3_date{
            text
          }
          event3_showcase{
            image{
              url
            }
          }
       }
     }
}`