import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class Disclaimer extends React.Component {
  render(){
    const disclaimerData = this.props.data.prismicDisclaimer.data;
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title='Disclaimer'/>
          <div className="container mt-5 mb-5">
            <h1 className="text-center mb-5 partners-heading">{disclaimerData.title.text}</h1>
            <div className="row ">
              <div className="col-lg-12">
              <div dangerouslySetInnerHTML={{__html: disclaimerData.description.html}}/>

              <h2> Coming Soon... </h2>
              <Link to='/' className="link-text font-weight-bold"> Back To Home Page </Link>
              </div>
              {/* <div className="col-lg-6"> 
              <Img fluid={disclaimerData.banner.localFile.childImageSharp.fluid} className="w-100 h-100"/>
              </div> */}
            </div>
          </div>
      </Layout>
    )
  } 
}
export default Disclaimer;

export const aboutLoan = graphql` {
  prismicDisclaimer {
    data {
      title {
        text
      }
      description {
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