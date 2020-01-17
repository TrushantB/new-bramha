import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer';
class Award extends React.Component {
    render(){
        return(
            <Layout>
                <section className="award-wrapper">
                    <section className="page-heading-section container container-sm-fluid bg-color">
                        <div className="padding-block-60">
                            <h2 className="page-heading">Awards & Recognition</h2> 
                        </div>
                        <div className="row mr-0">
                            <div className="col-12">
                            <p className="main-paragraph mb-0">
                                BramhaCorp welcomes you to get in touch with us. It has been our endeavor to exceed our customer's expectations at all times. Please communicate with us by telling us what you are looking for.
                            </p>   
                            </div>
                        </div>
                    </section>

                    <section className="award-name">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6 mb-120">
                                   <div className="award-bg">
                                      <div className="award-details">
                                        <p className="inner-section-title text-center">
                                            Ranked 12th amongst the top 15 real estate developers by crisis
                                        </p>
                                      </div>
                                   </div>
                                   <div className="company-name">
                                       <h5 className="inner-section-title text-center text-uppercase">
                                           BramhaCorp Ltd
                                       </h5>
                                       <p className="award-by text-center text-uppercase">
                                           By Crisil
                                       </p>
                                   </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 mb-120">
                                   <div className="award-bg">
                                      <div className="award-details">
                                        <p className="inner-section-title text-center">
                                            Ranked 12th amongst the top 15 real estate developers by crisis
                                        </p>
                                      </div>
                                   </div>
                                   <div className="company-name">
                                       <h5 className="inner-section-title text-center text-uppercase">
                                           BramhaCorp Ltd
                                       </h5>
                                       <p className="award-by text-center text-uppercase">
                                           By Crisil
                                       </p>
                                   </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 mb-120">
                                   <div className="award-bg">
                                      <div className="award-details">
                                        <p className="inner-section-title text-center">
                                            Ranked 12th amongst the top 15 real estate developers by crisis
                                        </p>
                                      </div>
                                   </div>
                                   <div className="company-name">
                                       <h5 className="inner-section-title text-center text-uppercase">
                                           BramhaCorp Ltd
                                       </h5>
                                       <p className="award-by text-center text-uppercase">
                                           By Crisil
                                       </p>
                                   </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </section>
            <Footer />    
            </Layout>
        )
    }
}
export default Award;