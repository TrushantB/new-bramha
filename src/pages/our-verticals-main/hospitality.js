import React from 'react'
import Slider from "react-slick";

class Hospitality extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const data = this.props.gallery;
    console.log('this.props.gallery hospitality', this.props.gallery);

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
        this.props.gallery && this.props.gallery.data.gallery.map((item,value) => {
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
export default Hospitality;