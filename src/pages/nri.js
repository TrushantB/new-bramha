import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import chevron_down from '../images/chevron_down.svg';
import Div100vh from 'react-div-100vh/lib/Div100vh';

class NRI extends React.Component {
  constructor(){
    super();
    this.state = {
      collapseDescription: null
    }
  }

  UNSAFE_componentWillMount() {
    const nriData = this.props.data.prismicNri.data;
    if(nriData.group[0].heading1.text != 'null' ) {
      this.setState({collapseDescription: nriData.group})
    }
  }

  scrollWin() {
    var offsetHeight = document.querySelector('.banner-section').offsetHeight;
    window.scrollBy({
      top: offsetHeight,
      behavior: 'smooth'
    });
  }
  render(){
    const nriData = this.props.data.prismicNri.data;
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={nriData.seo_title} description={nriData.seo_description}/>
        <div  className="guideline-nri-detail">
          <Div100vh style={{ height: 'calc(100rvh - 57px)'}} className="banner-section" id="banner-section">
            <picture>
              <source media="(min-width: 581px)" srcSet={nriData.banner.localFile.childImageSharp.url}/>
              <Img fluid={nriData.banner.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" />
            </picture>
            <div className="scroll-downs" onClick={this.scrollWin}>
              <span>Scroll</span>
              <div className="mousey"><img src={chevron_down} /></div>
            </div>
            {/* <Img fluid={nriData.banner.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" /> */}
          </Div100vh>

          <section className="page-heading-section container container-sm-fluid bg-color">
          <div className="padding-block-60">
            <h2 className="page-heading">{nriData.title.text}</h2>
          </div>
         <div className="row mr-0">
          <div className="col-12 ">
            <div className="main-paragraph ">
              <div className="m-0" dangerouslySetInnerHTML={{__html:nriData.description.html }} />
            </div>
          </div>
         </div>
        </section>

        {
          this.state.collapseDescription && 
          <section className="container">
            <div className="row ">
              <div className="col-sm-12 col-md-6 search-box">
                <form action="">
                 <input type="search" onChange={(e) => {
                   let data =  nriData.group.filter(res => {
                      return res.heading1.text.toLocaleLowerCase().match(e.target.value.toLocaleLowerCase())
                    })
                    this.setState({collapseDescription : data })
                    }}
                    placeholder="Search by title or Department" className="form-control search-bar rounded-0 "/>
                   <i className="fas fa-search search-btn"></i>
                </form>
              </div>
              <div className="col-12 accordions-sect pt-0">
                <div className="accordion" id="accordionExample">
                  {
                    this.state.collapseDescription && this.state.collapseDescription.map((item,value)=>{
                      return(
                        <div key={value} className="card border-0">
                          <div className="card-header" id="headingOne">
                            <h5 className="mb-0 d-flex justify-content-between align-items-center section-title-secondary border-0" data-toggle="collapse" data-target={`#collapseOne${value}`} aria-expanded="false" aria-controls="collapseOne">
                              {item.heading1.text}
                              <button className="btn btn-link">
                                <i className="fas fa-chevron-down"></i>
                              </button>
                            </h5>
                          </div>

                          <div id={`collapseOne${value}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" dangerouslySetInnerHTML={{__html: item.description1.html}} />
                            {/* {
                              item.description2.html &&
                                <div className="card-body" dangerouslySetInnerHTML={{__html: item.description2.html}}/>
                            }
                            {
                              item.description3.html &&
                                <div className="card-body" dangerouslySetInnerHTML={{__html: item.description3.html}} />
                            } */}
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </section>
        }
        </div>
      </Layout>
    )
  }
}
export default NRI;

export const nriPage = graphql`{
  prismicNri {
 		data {
      seo_title,
      seo_description,
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
            fluid(maxWidth: 1150) {
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

      }
    }
  }
}`
