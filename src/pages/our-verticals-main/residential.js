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
            <Img fluid={this.props.gallery.data.banner.localFile.childImageSharp.fluid} className="banner-img" style={{width:'100%'}}/>
            <div className="banner-caption">
              Residential
            </div>
          </section>  
        }
      </div>
    )
  }
}
export default Residential;
