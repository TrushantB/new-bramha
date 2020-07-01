import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class SiteMap extends React.Component {
  render(){
    const siteMapData = this.props.data.prismicSiteMap.data;
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={siteMapData.title.text}/>
          <div className="page-heading-section container container-sm-fluid bg-color mb-4 mb-sm-5 ">
            <div className="padding-block-60">
              <h2 className="page-heading">{siteMapData.title.text}</h2>
            </div>
            <div className="content">
              <div className="row ">
                <div className="col-lg-6">
                  <div dangerouslySetInnerHTML={{__html: siteMapData.description.html}}/>
                <h2> Coming Soon... </h2>
                <Link to='/' className="link-text font-weight-bold"> Back To Home Page </Link>
                </div>
                <div className="col-lg-6"> 
                  <img src={siteMapData.banner.url} className="w-100 h-100"/>
                </div>
              </div>
            </div>
          </div>
      </Layout>
    )
  } 
}
export default SiteMap;

export const aboutLoan = graphql` {
  prismicSiteMap{
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