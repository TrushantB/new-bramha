import React from 'react'
import Slider from "react-slick";

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
      autoplay : true,
      // adaptiveHeight : true,
    };
    const data = this.props.gallery.data;
    return(
      <Slider {...settings} className="home-slider">
        {
        data.gallery && data.gallery.map((item,value)=>{
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
export default Residential;
