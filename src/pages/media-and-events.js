import React from 'react'
import Layout from '../components/layout'
import Slider from "react-slick";
import { graphql } from 'gatsby';
import Footer from '../components/footer';

class MediaAndEvents extends React.Component {
    render(){
      const eventData = this.props.data.prismicMediaAndEvent.data;
      console.log("event data from media and event page",eventData);
      var settings = {
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '100px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '100px',
              slidesToShow: 1
            }
          }
        ]
      };
        return(
            <Layout>
               <section className="event mb-5 mt-0 mt-sm-5">
                <div className="event-heading">
                    <div className="container container-sm">
                        <div className="title mb-4"> 
                            <h2>{eventData.event_heading.text}</h2>
                        </div>
                        <p className="description">{eventData.description.text}</p>
                    </div>
                </div>
                <div>
                <div className="container">
                <Slider {...settings}>
                    {
                      eventData.event.map((item,value)=>{
                        return(
                          <div key={value}>
                            <div  className="mx-3">
                              {/* <h5>{item.heading.text}</h5>
                              <p>{item.date.text}</p>
                              <p>{item.location.text}</p> */}
                              <img src={item.image.url}/>
                            </div>
                          </div>
                        )
                      })
                    }
                  </Slider>
                </div>
                </div>
                <div className="">
                  <div className="container">
                    <div className="">
                      <h3 className="text-center text-uppercase mb-4 ">Enquiry Now</h3>
                    </div>
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