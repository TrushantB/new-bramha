import React from 'react'
import Layout from '../components/layout'
import hero1 from '../styles/images/hero1.png';
import aboutLoan from '../styles/images/about-loan.jpg';
import guidelines1 from '../styles/images/guidelines1.jpg';
import { Link } from '@reach/router';
import Footer from '../components/footer';
class KnoweldgeHub extends React.Component {
  render(){
    return(
      <Layout>
        <section className="knowledge-hub mt-0 mt-md-5">
          <div className="knowledge-hub-heading">
            <div className="container container-sm-fluid">
              <div className="title mb-4"> 
                <h2>Knowledge Hub</h2>
              </div>
              <p className="description mt-sm-5 mt-0">BramhaCorp is one of today's leading business groups headquartered in Pune. Our businesses encompass real estate development, hospitality, retail and leisure. The vision and dynamism of the founders has seen the group making remarkable strides. Our achievements over the last 35 years are landmarks that have set precedents. In 1998, we were the first to bring the premium hospitality brand - Le Meridien, now Sheraton Grand to Pune. The Residency Club was the first lifestyle leisure club that set up. In 2003, we launched the first hi-tech 'SunCity', a residential gated community that became benchmark thereafter.
              </p>
            </div>
          </div>
          <div className=" buyer-tips-banner">
            <div className="container container-sm-fluid">
              <div className="sub-heading">
                <h3 className="text-center text-uppercase mb-3 sub-title">Buyer’s Tips</h3>
                <hr/>
              </div>
              <div className="position-relative buyer-tips-banner-img">
                <div className="buyer-tips-image">
                  <img src={hero1} alt="" width="100%"/>
                </div>
                <div className="buyer-tips-box position-absolute  d-flex justify-content-between flex-column">
                  <h3 className=" text-uppercase m-0 sub-title">Buyer’s tips</h3>
                  <hr className="m-0"/>
                  <p className="mb-sm-2 mb-0 text-white">Learn all about tax planning and documentation by reading all the FAQs and more…</p>
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
            <div className="buyer-ti ps-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                          <div className="about-loan">
                            <div className="sub-heading">
                              <h3 className=" text-uppercase mb-2 mb-sm-3 sub-title">About Loan</h3>
                              <hr className="m-sm-0"/>
                            </div>
                            <div className="row mt-25">
                              <div className="col-md-12 col-lg-6 col-6 pr-0 pr-md-3 pr-lg-0">
                                <div className="about-loan-img">
                                  <img src={aboutLoan} alt="" width="100%"/>
                                </div>
                              </div>
                              <div className="col-md-12 col-lg-6  col-6 pl-0 pl-md-3 pl-lg-0 ">
                                <div className="description d-flex justify-content-between flex-column bg-light-gray">
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
                        <div className="col-md-6 ">
                            <div className="guidelines-nris ">
                            <div className="sub-heading">
                                <h3 className=" text-uppercase mb-3 sub-title">Guidelines for NRIs</h3>
                                <hr className="m-sm-0"/>
                            </div>
                            <div className="guidelines-nris-wrapper position-relative mt-25">
                                <div className=" guidelines-nris-img">  
                                <img src={guidelines1} alt="" width="100%"/>
                                </div> 
                                <div className="guidelines-nris-info position-absolute">
                                <p className="mb-0 mb-sm-2 text-white">Guidelines For NRIs</p>
                                <div className="know-more">
                                    <Link to='/nri'>
                                      <span className="mr-sm-5 mr-3">Know More</span>
                                      <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="maha-rera">
                                <div className="sub-heading ">
                                    <h3 className=" text-uppercase mb-3 sub-title">Maha Rera</h3>
                                    <hr className="m-sm-0"/>
                                </div>
                                <div className="row mt-25">
                                    <div className="col-md-12 col-lg-6 col-6 pr-0 pr-md-3 pr-lg-0">
                                        <div className="maha-rera-img">
                                            <img src={aboutLoan} alt="" width="100%"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6 col-6 pl-0 pl-md-3 pl-lg-0">
                                        <div className="description d-flex justify-content-between flex-column bg-light-gray">
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
                            <div className="col-md-6 ">
                                <div className="important-notices">
                                    <div className="sub-heading">
                                        <h3 className=" text-uppercase mb-3 sub-title">Important Notices</h3>
                                        <hr className="m-sm-0"/>
                                    </div>
                                    <div className="row mt-25">
                                        <div className="col-md-12 col-lg-6 col-6 pr-0 pr-md-3 pr-lg-0">
                                            <div className="important-notices-img">
                                                    <img src={aboutLoan} alt="" width="100%"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 col-6 pl-0 pl-md-3 pl-lg-0">
                                            <div className="description d-flex justify-content-between flex-column bg-light-gray">
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
                        </div>
                </div>
            </div>
        </section>
        <Footer />

      </Layout>
    )
  }
}
export default KnoweldgeHub;