import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import chevron_down from '../images/chevron_down.svg';
import Div100vh from 'react-div-100vh/lib/Div100vh';

class Maharerra extends React.Component {
  constructor(){
    super();
    this.state = {
      collapseDescription: null
    }
  }

  UNSAFE_componentWillMount() {
    const mahareraData = this.props.data.prismicMaharera.data;
    if(mahareraData.group[0].heading.text != 'null' ) {
      this.setState({collapseDescription: mahareraData.group})
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
    const mahareraData = this.props.data.prismicMaharera.data;
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={mahareraData.seo_title} description={mahareraData.seo_description}/>
        <div  className="guideline-nri-detail">
          <Div100vh style={{ height: 'calc(100rvh - 57px)'}} className="banner-section" id="banner-section">
            <picture>
              <source media="(min-width: 581px)" srcSet={mahareraData.banner.localFile.childImageSharp.url}/>
              <Img fluid={mahareraData.banner.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" />
            </picture>
            <div className="scroll-downs" onClick={this.scrollWin}>
              <span>Scroll</span>
              <div className="mousey"><img src={chevron_down} /></div>
            </div>
            {/* <Img fluid={mahareraData.banner.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" /> */}
          </Div100vh>

          <section className="page-heading-section container container-sm-fluid bg-color">
          <div className="padding-block-60">
            <h2 className="page-heading">{mahareraData.title.text}</h2>
          </div>
         <div className="row mr-0">
          <div className="col-12 ">
            <div className="main-paragraph ">
              <div className="m-0" dangerouslySetInnerHTML={{__html:mahareraData.description.html }} />
            </div>
          </div>
         </div>
        </section>

          <section className="container">
            <div className="row ">
              <div className="col-sm-12 col-md-6 search-box">
                <form action="">
                 <input type="search" onChange={(e) => {
                   let data =  mahareraData.group.filter(res => {
                      return res.heading.text.toLocaleLowerCase().match(e.target.value.toLocaleLowerCase())
                    })
                    this.setState({collapseDescription : data })
                    }}
                    placeholder="Search by title" className="form-control search-bar rounded-0 "/>
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
                              {item.heading.text}
                              <button className="btn btn-link">
                                <i className="fas fa-chevron-down"></i>
                              </button>
                            </h5>
                          </div>

                          <div id={`collapseOne${value}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" dangerouslySetInnerHTML={{__html: item.description1.html}} />
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
      </Layout>
    )
  }
}
export default Maharerra;

export const maharera = graphql` {
  prismicMaharera {
    data {
      seo_title,
      seo_description,
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
      group {
        description1 {
          html
        }
        heading {
          text
        }
      }
    }
  }
}`