import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class RealEstate extends React.Component {
  render(){
    const realEstateData = this.props.data.prismicRealEstate.data;
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={realEstateData.title.text}/>
          <div className='mb-5 '>
            <div className="page-heading-section container container-sm-fluid bg-color">
            <div className="padding-block-60">
              <h2 className="page-heading">{realEstateData.title.text}</h2>
            </div>
              <div className="row ">
                <div className="col-lg-6">
                  <div dangerouslySetInnerHTML={{__html: realEstateData.description.html}} />
                </div>
                <div className="col-lg-6"> 
                <img src={realEstateData.banner.url} className="w-100 h-100"/>
                </div>
              </div>
            </div>
          </div>
      </Layout>
    )
  } 
}
export default RealEstate;

export const aboutLoan = graphql` {
  prismicRealEstate{
    data{
      seo_title,
      seo_description,
      title{
        text
      }
      description{
        html
      }
      banner{
        url
      }
    }
  }
}`