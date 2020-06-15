import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class Maharerra extends React.Component {
  render(){
    const maharerraData = this.props.data.prismicMaharera.data;
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={maharerraData.title.text}/>
        <div class="bg-color">
          <div class="page-heading-section container container-sm-fluid mb-5">
            <div class="padding-block-60">
              <h2 class="partners-heading  page-heading">{maharerraData.title.text}</h2>
            </div>
            <div className="row ">
              <div className="col-lg-6">
                <div dangerouslySetInnerHTML={{__html: maharerraData.description.html}}/>
              <h2> Coming Soon... </h2>
              <Link to='/' className="link-text font-weight-bold"> Back To Home Page </Link>
              </div>
              <div className="col-lg-6"> 
              <Img fluid={maharerraData.banner.localFile.childImageSharp.fluid} className="w-100 h-100"/>
              </div>
            </div>
          </div>
        </div> 
          
      </Layout>
    )
  } 
}
export default Maharerra;

export const maharera = graphql` {
  prismicMaharera {
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