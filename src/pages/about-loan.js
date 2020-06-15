import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class AboutLoan extends React.Component {
  render(){
    const aboutData = this.props.data.prismicAboutLoan.data;
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={aboutData.title.text}/>
          <div class="about-loan-page-wrapper">
            <div class="bg-color">
              <div className="page-heading-section container container-sm-fluid  mb-5">
                <div className="padding-block-60">
                  <h2 className="page-heading">{aboutData.title.text}</h2>
                </div>
                <div className="row ">
                  <div className="col-lg-6">
                    <div dangerouslySetInnerHTML={{__html:aboutData.description.html }}/>
                    <h2> Coming Soon... </h2>
                    <Link to='/' className="link-text font-weight-bold"> Back To Home Page </Link>
                  </div>
                  <div className="col-lg-6"> 
                  <Img fluid={aboutData.banner.localFile.childImageSharp.fluid} className="w-100 h-100"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Layout>
    )
  } 
}
export default AboutLoan;

export const aboutLoan = graphql` {
    prismicAboutLoan {
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