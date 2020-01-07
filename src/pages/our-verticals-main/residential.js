import React from 'react';
import Slider from "react-slick";
import Img from 'gatsby-image';

class Residential extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1, 
      slidesToScroll: 1,
      autoplay : false,
      // adaptiveHeight : true,
    };
    // const data = this.props.gallery.data;
    console.log('this.props.gallery residential', this.props.gallery);
    return(
      <Slider {...settings} className="home-slider">
        {
          this.props.gallery && this.props.gallery.data.gallery.map((item,value) => {
            return(
              <section className="banner-section" key={value}>
                <img src={item.image.url} alt="banner here" className="banner-img" style={{maxHeight: '100%'}}/>
              </section>  
            )
          })
        }
      </Slider>
    )
  }
}
export default Residential;
