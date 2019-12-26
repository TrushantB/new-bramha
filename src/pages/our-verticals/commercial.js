import React from 'react'
import Slider from "react-slick";

class Commerical extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    var data = this.props.galleryData;
    console.log('data', data);
    console.log('this.props.gallery', this.props.galleryData);
    
    
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1, 
      slidesToScroll: 1,
      autoplay : true,
      // adaptiveHeight : true,
    };
    return(
      <Slider {...settings} className="home-slider">
      {
        this.props.galleryData.gallery && this.props.galleryData.gallery.map(function(item,value){
          return(
            <section className="banner-section" key={value}>
              <img src={item.image.url} alt="banner here" className="banner-img" style={{width:'100%'}}/>
            </section>  
          )
        })
      }
    </Slider>
    )
  }
}
export default Commerical;