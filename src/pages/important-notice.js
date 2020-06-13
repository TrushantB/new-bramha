import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class ImportantNotice extends React.Component {
  render(){
    const importantData = this.props.data.prismicImportantNotice.data;
    return(
      <Layout location="/" noHeader="true" pathname={this.props.location.pathname}>
        <SEO title={importantData.title.text}/>
          <div className="container mt-5 mb-5">
            <h1 className="text-center mb-5 partners-heading">{importantData.title.text} </h1>
            <div className="row ">
              <div className="col-lg-6">
              <p>
              Real estate is one of the most dynamic sectors in India. Be it the supply and demand, prices of raw materials or the rates of loans, it has a significant effect on the buyers across India. Through this section, we bring to you the important notice and announcements from time to time that will help you in your decision-making process.</p>
              <h2> Coming Soon... </h2>
              <Link to='/' className="link-text font-weight-bold"> Back To Home Page </Link>
              </div>
              <div className="col-lg-6"> 
              <Img fluid={importantData.banner.localFile.childImageSharp.fluid} className="w-100 h-100"/>
              </div>
            </div>
          </div>
      </Layout>
    )
  } 
}
export default ImportantNotice;

export const importantNotice = graphql` {
    prismicImportantNotice {
    data {
      title {
        text
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