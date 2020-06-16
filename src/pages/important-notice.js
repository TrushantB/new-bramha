import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class ImportantNotice extends React.Component {
  render(){
    const importantData = this.props.data.prismicImportantNotice.data;
    return(
      <Layout location="/" noHeader="true" pathname={this.props.location.pathname}>
        <SEO title={importantData.title.text}/>
          <div className="page-heading-section container container-sm-fluid bg-color mb-4 mb-sm-5">
            <div className="padding-block-60">
              <h2 className="page-heading">{importantData.title.text}</h2>
            </div>
            <div className="content">
              <div className="row ">
                <div className="col-lg-6">
                  <div dangerouslySetInnerHTML={{__html: importantData.description.html}} />
                <h2> Coming Soon... </h2>
                  <Link to='/' className="link-text font-weight-bold"> Back To Home Page </Link>
                </div>
                <div className="col-lg-6"> 
                  <Img fluid={importantData.banner.localFile.childImageSharp.fluid} className="w-100 h-100"/>
                </div>
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