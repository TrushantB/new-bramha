import React from 'react';
import Img from 'gatsby-image';

class Residential extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="home-slider">
        {
        this.props.gallery &&
          <section className="banner-section">
            <picture>
              <source media="(max-width: 581px)" srcSet={this.props.gallery.data.banner.mobile.url}/>
              <img src={this.props.gallery.data.banner.url} className="banner-img" style={{width:'100%'}} />
            </picture>
            {/* <Img fluid={this.props.gallery.data.banner.localFile.childImageSharp.fluid} className="banner-img" style={{width:'100%'}}/> */}
            <div className="banner-caption">
              <img src={this.props.gallery.data.banner_caption_logo.localFile.childImageSharp.fluid.src}/>
            </div>
            
          </section>  
        }
      </div>
    )
  }
}
export default Residential;
