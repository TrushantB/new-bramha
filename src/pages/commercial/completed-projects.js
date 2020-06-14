import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { graphql, Link } from 'gatsby'

class CompletedProjects extends React.Component {
  render() {
    const completedData = this.props.data.allPrismicCommercial.edges[0].node.data;
    return (
      <Layout location="/" noHeader="true" pathname={this.props.location.pathname}>
        <SEO title="Completed Projects" />
        <section className=" page-heading-section container container-sm-fluid bg-color">
          <div className="padding-block-60">
            <h2 className="page-heading">Completed Projects</h2>
          </div>
          <div className="row  mr-0">
            <div className="col-12">
              <div className="main-paragraph">
                <div dangerouslySetInnerHTML={{ __html: completedData.completed_project_description.html }} />
              </div>
            </div>
          </div>
        </section>
        <section className="hospitality-projects">
          <div className="residences">
            <div className="container">
              <div className="row">
                {
                  completedData.completed_projects.map((item) => {
                    return (
                      item.completed_links.document.map((datas, value) => {
                        return (
                          <div className="col-md-6 col-lg-4 p-0 pl-sm-3 pr-sm-3" key={value}>
                            <Link to={`commercial/${item.completed_links.uid}`} >
                              <div className="residences-card position-relative mt-0 mt-sm-5" key={value}>

                                <div className="residences-img ">
                                  <picture>
                                    <source media="(max-width: 581px)" srcSet={datas.data.thumbnail.mobile.url} />
                                    <img src={datas.data.thumbnail.url} alt="Hospital Image" width="100%" />
                                  </picture>
                                  {/* <Img fluid={datas.data.thumbnail.localFile.childImageSharp.fluid} alt="" width="100%"/> */}
                                </div>
                                <div className="property-meta-card position-absolute d-flex flex-column justify-content-around">
                                  <div className="rectangle-title">
                                    <h4 className="text-uppercase m-0 inner-section-title">{datas.data.title.text}</h4>
                                  </div>
                                  <div className="apartment-size d-flex justify-content-between align-items-center">
                                    <span className="text-uppercase">{datas.data.flat_bhk.text}</span>
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
        </section>
      </Layout>
    )
  }
}
export default CompletedProjects;

export const completedProjects = graphql`{
	allPrismicCommercial{
        edges{
          node{
            data{
              completed_project_description{
                html
              }
              completed_projects{
                completed_links{
                  uid
                  document{
                    data{
                      title{
                        text
                      }
                      flat_bhk{
                        text
                      }
                      flat_address{
                        text
                      }
                      thumbnail{
                        url
                        mobile{
                          url
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
