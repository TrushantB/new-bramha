import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from '../components/seo';

class NRI extends React.Component {
  constructor(){
    super();
    this.state = {
      collapseDescription: null
    }
  }

  componentWillMount() {
    const nriData = this.props.data.prismicNri.data;
    this.setState({collapseDescription: nriData.group})
  }
  
  render(){
    const nriData = this.props.data.prismicNri.data;
    return(
      <Layout>
        <SEO title="NRI"/>
        <div>
          <section className="banner-section">
            <Img fluid={nriData.banner.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" />
          </section>
          
          <section className="career-info container-md bg-color">
            <div className="row padding-block-60">
              <h2 className="col-12 page-heading">Guidlines for NRIs</h2> 
            </div>
            <div className="row">
              <div className="col-12">
                <p className="mb-4" dangerouslySetInnerHTML={{__html: nriData.description.html}}/>
              </div>
            </div>
          </section>

          <section className="container">
            <div className="row">
              <div className="col-sm-6 my-5">
                <form action="">
                 <input type="search" onChange={(e)=>{
                   let data =  nriData.group.filter(res => {
                      return res.heading1.text.toLocaleLowerCase().match(e.target.value.toLocaleLowerCase())
                    })
                    this.setState({collapseDescription : data })
                    }}
                    placeholder="Search by title or Department" className="form-control search-bar rounded-0 pl-5"/>
                   <i className="fas fa-search search-btn"></i>
                </form>
              </div>
              <div className="col-12 accordions-sect padding-block-60 pt-0">
                <div className="accordion" id="accordionExample">
                  {
                    this.state.collapseDescription && this.state.collapseDescription.map((item,value)=>{
                      return(
                        <div key={value} className="card border-0">
                          <div className="card-header" id="headingOne">
                            <h5 className="mb-0 d-flex justify-content-between align-items-center section-title-secondary border-0" data-toggle="collapse" data-target={`#collapseOne${value}`} aria-expanded="true" aria-controls="collapseOne">
                              {item.heading1.text}
                              <button className="btn btn-link">
                                <i className="fas fa-chevron-down"></i>
                              </button>
                            </h5>
                          </div>
                      
                          <div id={`collapseOne${value}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" dangerouslySetInnerHTML={{__html: item.description1.html}} />
                            {
                              item.description2.html && 
                                <div className="card-body" dangerouslySetInnerHTML={{__html: item.description2.html}}/>
                            }
                            {
                              item.description3.html &&  
                                <div className="card-body" dangerouslySetInnerHTML={{__html: item.description3.html}} />
                            }
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </section>  
        </div>
        <Footer />
      </Layout>
    )
  }
}
export default NRI;

export const nriPage = graphql`{
  prismicNri {
 		data {
      title {
        text
      }
      heading {
        text
      }
      description {
        html
      }
      banner {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      group {
        heading1 {
          text
        }
        description1 {
          html
        }
        description2 {
          html
        }
        description3 {
          html
        }
      }
    }  
  }
}`