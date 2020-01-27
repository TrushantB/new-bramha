import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

class LeisureClub extends React.Component {
  render(){
    const leisureData = this.props.data.allPrismicLeisureClub.edges[0].node.data;    
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={leisureData.sub_title.text}/>
        <section className=" page-heading-section container container-sm-fluid bg-color">
          <div className="padding-block-60">
            <h2 className="page-heading">{leisureData.sub_title.text}</h2> 
          </div>
          <div className="row  mr-0">
            <div className="col-12">
              <div className="main-paragraph"> 
                <p>
                  {leisureData.description.text}
                </p>  
              </div>  
            </div>
          </div>
        </section>
        <section className="hospitality-projects">
          <div className="residences leisure-club">
            <div className="container">
              <div className="row">
                {
                  leisureData.all_verticals.map((item2) => {
                    return(
                      item2.verticals.document.map((item, index) => {
                        return(
                          <div className="col-md-6 col-lg-4 p-0 pl-sm-3 pr-sm-3" key={index}>
                            <Link to={`leisure-club/${item2.verticals.uid}`}>
                              <div className="residences-card position-relative mt-0 mt-sm-5">
                                <div className="residences-img ">
                                  
                                  <picture>
                                    <source media="(min-width: 581px)" srcSet={item.data.thumbnail.url}/>
                                    <img src={item.data.thumbnail.url} alt="" width="100%" />
                                  </picture>
                                  {/* <Img fluid={item.data.thumbnail.localFile.childImageSharp.fluid} alt="" width="100%"/> */}
                                </div>
                                <div className="rectangle position-absolute d-flex flex-column justify-content-around">
                                  <div className="rectangle-title">
                                    <h4 className="text-uppercase m-0 inner-section-title">{item.data.title.text}</h4>
                                  </div>
                                  <div className="apartment-size d-flex justify-content-between align-items-center">
                                    <span className="text-uppercase">{item.data.flat_bhk.text}</span>
                                    <div>
                                      <i className="fas fa-arrow-right"></i>
                                    </div>
                                  </div>
                                  <div className="project-location">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>{item.data.flat_address.text}</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        )
                      })
                    )
                  })
                }
              </div>
            </div>
          </div>
        </section>
        <Footer/>   
      </Layout>
    )
  }
}
export default LeisureClub;

export const leisurePage = graphql` {
  allPrismicLeisureClub {
    edges {
      node {
        uid
        data {
          title {
            text
          }
          sub_title {
            text
          }
          description {
            text
          }
          all_verticals {
            verticals {
              uid
              document {
                data {
                  title {
                    text
                  }
                  flat_bhk {
                    text
                  }
                  flat_address {
                    text
                  }
                  thumbnail {
                    url
                  }
                  banner{
                    image{
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
              }
            }
          }
        }
      }
    }
  }
}`