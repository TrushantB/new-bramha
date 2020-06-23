import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class PrivacyPolicy extends React.Component {
  render(){
    const privacyData = this.props.data.prismicPrivacyPolicy.data; 
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={privacyData.title.text} />
          <div className="page-heading-section container container-sm-fluid bg-color mb-4 mb-sm-5">
            <div className="padding-block-60">
              <h2 className="page-heading">{privacyData.title.text}</h2>
            </div>
            <div className="content">
              <div className="row ">
                <div className="col-lg-12">
                  <div dangerouslySetInnerHTML={{__html: privacyData.description.html}}/>
                </div>
                <div className="col-lg-6"> 
                {/* <Img fluid={privacyData.image.localFile.childImageSharp.fluid} className="w-100 h-100"/> */}
                </div>
              </div>
            </div>
          </div>
          {
            privacyData.group &&   privacyData.group.map((item) => {
                  return(
                      <section className="detail-page-sections pb-0 pt-sm-0 container container-sm-fluid " >
                          <div className="padding-block-60 page-heading-section">
                              <div className="col-12 padding-sm-0">
                                  <h2 className="page-heading text-uppercase">
                                      {item.title1.text}
                                  </h2>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-12">
                                  <div className="mb-5" dangerouslySetInnerHTML={{__html:item.description1.html }}/>
                              </div>
                          </div>
                      </section>
                  )
              })
          }
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
        html
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