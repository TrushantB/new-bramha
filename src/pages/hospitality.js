import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from '../components/seo';

class Hospitality extends React.Component {
  render(){
    const hospitalityData = this.props.data.allPrismicHospitality.edges;
    const data = hospitalityData[0].node.data;
    const verticalsData = this.props.data.prismicOurVerticals.data;
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={data.sub_title.text}/>
        <section className=" page-heading-section container container-sm-fluid bg-color">
          <div className="padding-block-60">
            <h2 className="page-heading">{data.sub_title.text}</h2> 
          </div>
          <div className="row  mr-0">
            <div className="col-12">
              <div className="main-paragraph"> 
                <p dangerouslySetInnerHTML={{__html:data.description.html }}/>
              </div>  
            </div>
          </div>
          </section>
          <section className="hospitality-projects">
            <div className="residences">
              <div className="container">
                <div className="row">
                  {
                    data.hospitality_links.map((item) => {
                      return(
                        item.vertical_links.document.map((datas, value) => {
                          return(
                            <div className="col-md-6 col-lg-4 p-0 pl-sm-3 pr-sm-3" key={value}>
                              <Link to={`hospitality/${item.vertical_links.uid}`} >
                                <div className="residences-card position-relative mt-0 mt-sm-5" key={value}>
                                  
                                  <div className="residences-img ">
                                    <picture>
                                       <source media="(max-width: 581px)" srcSet={datas.data.thumbnail.mobile.url}/>
                                      <img src={datas.data.thumbnail.url} alt="Hospital Image" width="100%" />
                                    </picture>
                                    {/* <Img fluid={datas.data.thumbnail.localFile.childImageSharp.fluid} alt="" width="100%"/> */}
                                  </div>
                                  <div className="rectangle position-absolute d-flex flex-column justify-content-around">
                                    <div className="rectangle-title">
                                      <h4 className="text-uppercase m-0 inner-section-title">{datas.data.title.text}</h4>
                                    </div>
                                    <div className="apartment-size d-flex justify-content-between align-items-center">
                                      <span className="text-uppercase">{datas.data.unique_features.text}</span>
                                      <div>
                                        <i className="fas fa-arrow-right"></i>
                                      </div>
                                    </div>
                                    <div className="project-location">
                                      <i className="fas fa-map-marker-alt"></i>
                                      <span>{datas.data.flat_address.text}</span>
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
            <section className="container mt-5">
            <div className="row our-vertivcal-sect about-sections">
              <div className="d-flex justify-content-center align-items-center flex-column section-title-wrapper w-100 ">
                <h3 className="section-title text-center text-uppercase">
                  Others verticals
                </h3>
              </div>
              <div className="col-md-6 padding-sm-0">
                <Link to='/residential' className="vertical-card d-flex text-decoration-none">
                  <div className="vertical-img-wrapper w-100">
                    <Img fluid={verticalsData.vertical1.document[0].data.banner.localFile.childImageSharp.fluid} alt="verticals image" className="w-100"/>
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
                <Link to='/commercial' className="vertical-card d-flex text-decoration-none">
                  <div className="vertical-img-wrapper w-100">
                    <Img fluid={verticalsData.vertical2.document[0].data.banner.localFile.childImageSharp.fluid} alt="verticals image" className="w-100"/>
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

              <div className="col-md-6 mt-5 padding-sm-0">
                <Link to='/leisure-club' className="vertical-card d-flex text-decoration-none"> 
                  <div className="vertical-img-wrapper w-100">
                    <Img fluid={verticalsData.vertical4.document[0].data.banner.localFile.childImageSharp.fluid} alt="verticals image" className="w-100"/>
                  </div>
                  <div className="vertical-card-body d-flex flex-column justify-content-between"> 
                    <h2 className="inner-section-title">
                      {verticalsData.vertical4.document[0].data.title.text}
                    </h2>
                    <div className="link-text vertical-card-link d-flex justify-content-between align-items-center">
                        <span> View Projects </span> 
                        <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </Link>
              </div>
              
            </div>
          </section>
          </section>

        <Footer/>
      </Layout>
    )
  }
}

export default Hospitality;

export const hospitalityPage = graphql`{
  allPrismicHospitality{
    edges{
      node{
        uid
        data{
          title{
            text
          }
          sub_title {
            text
          }
          description{
            html
          }
          hospitality_links{
            vertical_links{
              uid
              document{
                data{
                  title{
                    text
                  }
                  thumbnail{
                    url
                    mobile {
                      url
                    }
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
                  flat_bhk{
                    text
                  }
                  flat_address{
                    text
                  }
                  unique_features {
                    text
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