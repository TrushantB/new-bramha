import React from 'react'
import Layout from '../components/layout'
import hero1 from '../styles/images/hero1.png';
import aboutLoan from '../styles/images/about-loan.jpg';
import guidelines1 from '../styles/images/guidelines1.jpg';
import mahareraa from '../styles/images/mahareha.png'
import Footer from '../components/footer';
import { graphql, Link } from 'gatsby';

class KnoweldgeHub extends React.Component {
  render(){
    // const nriData = this.props.data.prismicNri.data;
    const knowledgeData = this.props.data.prismicKnowledgehub.data;
    const buyerData = this.props.data.prismicBuyersTips.data;
    // console.log('data inside knoweldgehub main', knowledgeData);
    console.log('knowledgeData from knowledge hub page', knowledgeData);
    return(
      <Layout>
        <section className="page-heading-section container container-sm-fluid bg-color">
          <div className="padding-block-60">
              <h2 className="page-heading">{knowledgeData.title.text}</h2> 
          </div>
         <div className="row mr-0">
          <div className="col-12">
            <div className="main-paragraph">
              <p className=" m-0" dangerouslySetInnerHTML={{__html: knowledgeData.description.html}} />
            </div>
          </div>
         </div>
        </section>
        <section className="knowledge-hub mt-0 mt-md-5">
          <div className=" buyer-tips-banner">
              <div className="container container-sm-fluid">
                <div className="heading">
                    <h3 className="text-center text-uppercase section-title ">{buyerData.title.text}</h3>
                </div>
                  <div className="position-relative buyer-tips-banner-img">
                    <div className="buyer-tips-image">
                      <img src={buyerData.banner.url} alt="" width="100%"/>
                    </div>
                    <div className="buyer-tips-box position-absolute  d-flex justify-content-between flex-column">
                      <h3 className=" text-uppercase m-0 section-title d-none d-md-block">{buyerData.title.text}</h3>
                      <p className="mb-0 text-white">{buyerData.short_description.text}</p>
                        <div className="know-more">
                          <a href="#">
                              <span className="mr-3">Read More</span>
                              <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="buyer-tips-info">
              <div className="container">
                  {
                    knowledgeData.knowledge_topics.map((item)=>{
                      return(
                        item.topics.document.map((item, index) => {
                          return(
                            <div className="row" key={index}>
                              { !item.data.heading && 
                              <div className="col-md-6">
                                <div className="about-loan card-primary mt-140">
                                    <div className="heading">
                                        <h3 className=" text-uppercase mb-2 mb-sm-3 section-title ">{item.data.title.text}</h3>
                                    </div>
                                    <div className="row mt-30">
                                        <div className="col-md-12 col-lg-6 col-6 pr-0 pr-md-3 pr-lg-0">
                                            <div className="card-primary-img image-ratio33">
                                                <img src={item.data.banner.url} alt="" width="100%"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6  col-6 pl-0 pl-md-3 pl-lg-0 ">
                                            <div className="  d-flex justify-content-between flex-column bg-light-gray">
                                                <p>{item.data.short_description.text}</p>
                                                <div className="know-more">
                                                    <a href="#">
                                                        <span className="mr-3">Know More</span>
                                                        <i className="fas fa-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                </div>}
                              {
                              item.data.heading &&  
                               <div className="col-md-6 p-0 pl-sm-3 pr-sm-3 ">
                                <div className="guidelines-nris mt-140">
                                  <div className="heading">
                                    <h3 className=" text-uppercase mb-3 section-title">{item.data.title.text}</h3> 
                                  </div>
                                <div className="guidelines-nris-wrapper position-relative mt-30">
                                  <div className=" guidelines-nris-img">  
                                    <img src={ item.data.banner.url } alt="" width="100%"/>
                                  </div> 
                                  <div className="guidelines-nris-info position-absolute">
                                    <p className="mb-0 mb-sm-2 text-white">{item.data.heading.text}</p>
                                    <div className="know-more pt-0">
                                      <Link to="/nri">
                                          <span className="mr-sm-5 mr-3">Know More</span>
                                          <i className="fas fa-arrow-right"></i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            }
                          </div>
                          )
                        })
                      )
                    })
                  }

            {/* <div className="row">
                <div className="col-md-6 d-none d-sm-block">
                    <div className="maha-rera card-primary mt-84">
                        <div className="heading ">
                            <h3 className=" text-uppercase mb-3 section-title">Maha Rera</h3>
                        </div>
                        <div className="row mt-30">
                            <div className="col-md-12 col-lg-6 col-6 pr-0 pr-md-3 pr-lg-0">
                                <div className="card-primary-img image-ratio33">
                                      <img src={aboutLoan} alt="" width="100%"/>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 col-6 pl-0 pl-md-3 pl-lg-0">
                                <div className="  d-flex justify-content-between flex-column bg-light-gray">
                                    <p>Praesent gravida augue eu metus interdum, ac elementum metus blandit.</p>
                                    <div className="know-more">
                                        <a href="#">
                                            <span className="mr-3">Know More</span>
                                            <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-sm-none p-0">
                  <div className="maha-rera-mb d-flex position-relative ">
                    <img src={mahareraa} alt="" className="pl-4"/>
                    <div className="ml-3 ">
                      <h3 className="inner-section-title mb-1">Maha <span className="text-uppercase">Rera</span> </h3>
                      <p className="m-0">Rules and regulations</p>
                    </div>
                    <div className="know-more d-flex align-items-end justify-content-end position-absolute">
                      <a href="#">
                          <span  className="mr-3">Know More</span>
                          <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                    <div className="col-md-6 ">
                        <div className="important-notices card-primary mt-84">
                            <div className="heading">
                                <h3 className=" text-uppercase mb-3 section-title">Important Notices</h3>
                            </div>
                              <div className="row mt-30">
                                  <div className="col-md-12 col-lg-6 col-6 pr-0 pr-md-3 pr-lg-0">
                                      <div className="card-primary-img image-ratio33">
                                            <img src={aboutLoan} alt="" width="100%"/>
                                      </div>
                                  </div>
                                  <div className="col-md-12 col-lg-6 col-6 pl-0 pl-md-3 pl-lg-0">
                                      <div className="  d-flex justify-content-between flex-column bg-light-gray">
                                        <h3 className="inner-section-title">Important Notices</h3>
                                          <p>Praesent gravida augue eu metus interdum, ac elementum metus blandit.</p>
                                          <div className="know-more">
                                              <a href="#">
                                                  <span className="mr-3">Know More</span>
                                                  <i className="fas fa-arrow-right"></i>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                    </div>
                </div> */}
            </div>
          </div> 


        </section>
        <Footer />
      </Layout>
    )
  }
}
export default KnoweldgeHub;

export const knowledgePage = graphql`{
  prismicKnowledgehub{
    uid
    data{
      title{
        text
      }
      short_description{
         text
      }
      description{
        html
      }
      knowledge_topics{
        topics{
          document{
          	...on PrismicAboutLoan{
              data{
                title{
                  text
                }
                banner{
                 	url
                }
                short_description{
                  text
                }
                description{
                   text
                }
              }
            }
          	...on PrismicImportantNotice{
             data{
                title{
                  text
                }
                banner{
                 	url
                }
                short_description{
                  text
                }
                description{
                   text
                }
              }
            }
            ...on PrismicMaharera{
              data{
                title{
                  text
                }
                banner{
                 	url
                }
                short_description{
                  text
                }
                description{
                   text
                }
              }
            }
            ...on PrismicNri{
              data{
                title{
                  text
                }
                heading{
                  text
                }
                banner{
                  url
                }
              }
            }
            
          } 
        }
      }
    }
  }

  prismicBuyersTips{
    uid
    data{
      title{
        text
      }
      short_description{
        text
      }
      banner{
        url
      }
    }
  }

  
}`