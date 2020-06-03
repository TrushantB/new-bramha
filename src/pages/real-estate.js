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
          <div className="container mt-5 mb-5">
            <h1 className="text-center mb-5 partners-heading">{realEstateData.title.text}</h1>
            <div className="row ">
              <div className="col-lg-6">
                <div dangerouslySetInnerHTML={{__html: realEstateData.description.html}} />
              <h2> Coming Soon... </h2>
              <Link to='/' className="link-text font-weight-bold"> Back To Home Page </Link>
              </div>
              <div className="col-lg-6"> 
              <Img fluid={realEstateData.banner.localFile.childImageSharp.fluid} className="w-100 h-100"/>
              </div>
            </div>
          </div>
        <Footer/>
      </Layout>
    )
  } 
}
export default RealEstate;

export const aboutLoan = graphql` {
  prismicRealEstate{
    data{
      title{
        text
      }
      description{
        html
      }
      banner{
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}`