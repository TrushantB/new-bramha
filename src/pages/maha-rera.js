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
          <div className="container mt-5 mb-5">
            <h1 className="text-center mb-5 partners-heading">{maharerraData.title.text}</h1>
            <div className="row ">
              <div className="col-lg-6">
              <p>
              The state’s regulatory authority, MahaRERA was formed to promote the interest of buyers as well as promoters. At BramhaCorp, all our projects are RERA-registered. We abide by the rules and regulations as laid out by the body. For any information regarding the projects, you can visit the MahaRERA website and get the latest update and all the facts pertaining to the project.
               Our customers can get complete peace of mind as far as the property deal is concerned. </p>
              <h2> Coming Soon... </h2>
              <Link to='/' className="link-text font-weight-bold"> Back To Home Page </Link>
              </div>
              <div className="col-lg-6"> 
              <Img fluid={maharerraData.banner.localFile.childImageSharp.fluid} className="w-100 h-100"/>
              </div>
            </div>
          </div>
        <Footer/>
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