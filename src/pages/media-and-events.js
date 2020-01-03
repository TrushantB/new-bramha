import React from 'react'
import Layout from '../components/layout'
import Slider from "react-slick";
import { graphql } from 'gatsby';
import Footer from '../components/footer';

class MediaAndEvents extends React.Component {
  state = {
    activeSlide: 1,
    activeSlide2: 0
  };  
  render(){
      const eventData = this.props.data.prismicMediaAndEvent.data;
      console.log("event data from media and event page",eventData);
      var settings = {
        className:"center",
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
               <section className="events" >
                <div>
                    <div className="container container-sm page-heading-section">
                        <div className="padding-block-60"> 
                            <h2 className="page-heading">{eventData.event_heading.text}</h2>
                        </div>
                        <div className="row  mr-0">
                          <div className="col-12">
                            <div className="main-paragraph"> 
                            {eventData.description.text}
                            </div>  
                          </div>
                      </div>
                    </div>
                </div>
                <div className="heading">
                  <h3 className="text-center text-uppercase section-title "> Time Realty Showcase</h3>
               </div>
                <div className="bg-light-gray">
                  
                <div className="container ">
                <Slider {...settings}>
                    {
                      eventData.event.map((item,value)=>{
                        return(
                          <div key={value}>
                            <div  className="slider-img image-ratio">
                              {/* <h5>{item.heading.text}</h5> */}
                              {/* <p>{item.date.text}</p> */}
                              <p>{item.location.text}   {item.date.text}</p>
                              <img src={item.image.url}width="100%"/>
                            </div>
                          </div>
                        )
                      })
                    }
                  </Slider>
                  <p className=" text-center pages mb-0">
                   {this.state.activeSlide} of 4
                </p>
                </div>
                </div>
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
}`