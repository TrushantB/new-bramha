import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class Disclaimer extends React.Component {
  render(){
    const disclaimerData = this.props.data.prismicDisclaimer.data;
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title='Disclaimer'/>
          <div className="page-heading-section container container-sm-fluid bg-color mb-4">
            <div className="padding-block-60">
              <h2 className="page-heading">{disclaimerData.title.text}</h2>
            </div>
            <div class="content">
              <div className="row ">
                <div className="col-lg-12">
                <div dangerouslySetInnerHTML={{__html: disclaimerData.description.html}}/>

                </div>
                {/* <div className="col-lg-6"> 
                <Img fluid={disclaimerData.banner.localFile.childImageSharp.fluid} className="w-100 h-100"/>
                </div> */}
              </div>
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