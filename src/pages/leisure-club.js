import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

class LeisureClub extends React.Component {
  render() {
    const leisureData = this.props.data.allPrismicLeisureClub.edges[0].node.data;
    const verticalsData = this.props.data.prismicOurVerticals.data;
    return (
      <Layout location="/" noHeader="true" pathname={this.props.location.pathname}>
        <SEO title={leisureData.seo_title} description={leisureData.seo_description}/>
        <section className=" page-heading-section container container-sm-fluid bg-color">
          <div className="padding-block-60">
            <h2 className="page-heading">{leisureData.sub_title.text}</h2>
          </div>
          <div className="row  mr-0">
            <div className="col-12">
              <div className="main-paragraph">
                <div dangerouslySetInnerHTML={{ __html: leisureData.description.html }} />
              </div>
            </div>
          </div>
        </section>
        <section className="hospitality-projects">
          <div className="residences leisure-club">
            <div className="container">
              <div className="row">
                {
                  leisureData.all_verticals.map((item, index) => {
                    return (
                      <div className="col-md-6 col-lg-4 p-0 pl-sm-3 pr-sm-3" key={index}>
                        <Link to={`leisure-club/${item.verticals.uid}`}>
                          <div className="residences-card position-relative mt-0 mt-sm-5">
                            <div className="residences-img ">
                              <picture>
                                <source media="(min-width: 581px)" srcSet={item.verticals.document[0].data.thumbnail.url} />
                                <img src={item.verticals.document[0].data.thumbnail.url} alt="" width="100%" />
                              </picture>
                              {/* <Img fluid={item.data.thumbnail.localFile.childImageSharp.fluid} alt="" width="100%"/> */}
                            </div>
                            <div className="property-meta-card position-absolute d-flex flex-column justify-content-around">
                              <div className="rectangle-title">
                                <h4 className="text-uppercase m-0 inner-section-title">{item.verticals.document[0].data.title.text}</h4>
                              </div>
                              <div className="apartment-size d-flex justify-content-between align-items-center">
                                <span className="text-uppercase">{item.verticals.document[0].data.flat_bhk.text}</span>
                                <div>
                                  <i className="fas fa-arrow-right"></i>
                                </div>
                              </div>
                              <div className="project-location">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{item.verticals.document[0].data.flat_address.text}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <section className="container mt-5">
            <div className="row our-vertivcal-sect about-sections">
              <div className="d-flex justify-content-center align-items-center flex-column section-title-wrapper w-100 ">
                <h3 className="section-title text-center text-uppercase">
                  Other Verticals
                </h3>
              </div>
              <div className="col-md-6 padding-sm-0">
                <Link to='/residential' className="vertical-card d-flex text-decoration-none">
                  <div className="vertical-img-wrapper w-100">
                    <Img fluid={verticalsData.vertical1.document[0].data.banner.localFile.childImageSharp.fluid} alt="verticals image" className="w-100" />
                  </div>
                  <div className="vertical-card-body d-flex flex-column justify-content-between">
                    <h2 className="inner-section-title">
                      {verticalsData.vertical1.document[0].data.title.text}
                    </h2>
                    <div className="link-text vertical-card-link d-flex justify-content-between align-items-center">
                      <span> View Projects </span>
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 mt-5 mt-md-0 padding-sm-0">
                <Link to='/commercial' className="vertical-card d-flex flex-row-reverse flex-md-row text-decoration-none">
                  <div className="vertical-img-wrapper w-100">
                    <Img fluid={verticalsData.vertical2.document[0].data.banner.localFile.childImageSharp.fluid} alt="verticals image" className="w-100" />
                  </div>
                  <div className="vertical-card-body d-flex flex-column justify-content-between">
                    <h2 className="inner-section-title">
                      {verticalsData.vertical2.document[0].data.title.text}
                    </h2>
                    <div className="link-text vertical-card-link d-flex justify-content-between align-items-center">
                      <span> View Projects </span>
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 mt-5 padding-sm-0 ">
                <Link to='/hospitality' className="vertical-card d-flex flex-row-reverse flex-md-row text-decoration-none">
                  <div className="vertical-card-body d-flex flex-column justify-content-between">
                    <h2 className="inner-section-title">
                      {verticalsData.vertical3.document[0].data.title.text}
                    </h2>
                    <div className="link-text vertical-card-link d-flex justify-content-between align-items-center">
                      <span> View Projects </span>
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                  <div className="vertical-img-wrapper w-100">
                    <Img fluid={verticalsData.vertical3.document[0].data.banner.localFile.childImageSharp.fluid} alt="verticals image" className="w-100" />
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </section>
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
          seo_title,
          seo_description,
          title {
            text
          }
          sub_title {
            text
          }
          description {
            html
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
  prismicOurVerticals {
    data {
      title {
        text
      }
      vertical1 {
        document {
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
      }
      vertical2 {
        document {
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
      }
       vertical3 {
        document {
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
      }
       vertical4 {
        document {
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
      }
    }
  }
}`
