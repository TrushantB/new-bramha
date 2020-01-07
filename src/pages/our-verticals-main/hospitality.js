import React from 'react'
// import Slider from "react-slick";
import Img from 'gatsby-image';

class Hospitality extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    // var settings = {
    //   dots: false,
    //   infinite: true,
    //   speed: 1000,
    //   slidesToShow: 1, 
    //   slidesToScroll: 1,
    //   autoplay : true,
    //   // adaptiveHeight : true,
    // };
    
    return(
      <div className="home-slider">
        {
        this.props.gallery &&
          <section className="banner-section">
            <Img fluid={this.props.gallery.data.banner.localFile.childImageSharp.fluid} alt="banner here" className="banner-img" style={{width:'100%'}}/>
          </section>  
        }
      </div>
    )
    
    // return(
    //   <Slider {...settings} className="home-slider">
    //   {
    //     this.props.gallery && this.props.gallery.data.gallery.map((item,value) => {
    //       return(
    //         <section className="banner-section" key={value}>
    //           <Img fluid={item.image.localFile.childImageSharp.fluid} alt="banner here" className="banner-img" style={{width:'100%'}}/>
    //         </section>  
    //       )
    //     })
    //   }
    // </Slider>
    // )
  }
}
export default Hospitality;