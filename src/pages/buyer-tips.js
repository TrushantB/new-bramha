import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class BuyersTips extends React.Component {
  render(){
    const buyersData = this.props.data.prismicBuyersTips.data;
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={buyersData.title.text}/>
          <div className="page-heading-section container container-sm-fluid bg-color mb-5">
            <div className="padding-block-60">
              <h2 className="page-heading">{buyersData.title.text}</h2>
            </div>
            <div className="row ">
              <div className="col-lg-6">
                <div dangerouslySetInnerHTML={{__html:buyersData.short_description.html }}/>
              <h2> Coming Soon... </h2>
              <Link to='/' className="link-text font-weight-bold"> Back To Home Page </Link>
              </div>
              <div className="col-lg-6"> 
              <Img fluid={buyersData.banner.localFile.childImageSharp.fluid} className="w-100 h-100"/>
              </div>
            </div>
          </div>
      </Layout>
    )
  } 
}
export default BuyersTips;

export const AboutLoan = graphql` {
    prismicBuyersTips {
    data {
      title {
        text
      }
      short_description{
        html
      }
      banner {
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