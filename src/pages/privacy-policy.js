import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class PrivacyPolicy extends React.Component {
  render(){
    const privacyData = this.props.data.prismicPrivacyPolicy.data;
    console.log('privacyData', privacyData);
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={privacyData.title.text} />
          <div className="container mt-5 mb-5">
            <h1 className="text-center mb-5 partners-heading">{privacyData.title.text}</h1>
            <div className="row ">
              <div className="col-lg-6">
                <p>
                  {privacyData.description.text}
                </p>
              {/* <p> */}
              {/* Home buying is one of the most significant decisions but also one of the toughest. While making the right choice is always challenging, what is more difficult is the loans. The loan terminology and industry jargons can be really complicated. Not only does it confuse the home seekers, some financial institutions often mislead them. Naïve buyers often fall in a trap thereby paying a huge price for their decision. So, the most important thing to ensure is: never make a decision in a haste. </p>

              <p>
              We can help you understand every term and advise you on choosing the best possible plan so that home buying is a smooth journey for you with this property loan guide. 
              </p> */}

              <h2> Coming Soon... </h2>
              <Link to='/' className="link-text font-weight-bold"> Back To Home Page </Link>
              </div>
              <div className="col-lg-6"> 
              {/* <Img fluid={privacyData.image.localFile.childImageSharp.fluid} className="w-100 h-100"/> */}
              </div>
            </div>
          </div>
      </Layout>
    )
  } 
}
export default PrivacyPolicy;

export const privacyPolicy = graphql` {
  prismicPrivacyPolicy {
    data {
      title {
        text
      }
      description {
        text
      }
      group {
        title1 {
          text
        }
        description1 {
          html
        }
      }
      description1 {
        text
      }
    }
  }
}`