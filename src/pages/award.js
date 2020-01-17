import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
class Award extends React.Component {
    render(){
        const awardData = this.props.data.prismicAwardAndRecognition.data;
        return(
            <Layout>
                <SEO title={awardData.title.text}/>
                <section className="award-wrapper">
                    <section className="page-heading-section container container-sm-fluid bg-color">
                        <div className="padding-block-60">
                            <h2 className="page-heading">{awardData.title.text}</h2> 
                        </div>
                        <div className="row mr-0">
                            <div className="col-12">
                            <p className="main-paragraph mb-0">
                                {awardData.short_description.text}
                            </p>   
                            </div>
                        </div>
                    </section>

                    <section className="award-name">
                        <div className="container">
                            <div className="row">
                                {
                                    awardData.awards.map((item, index) => {
                                        return(
                                            <div key={index} className="col-lg-4 col-sm-6 mb-120">
                                            <div className="award-bg">
                                                <div className="award-details">
                                                    <p className="inner-section-title text-center">
                                                        {item.description1.text}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="company-name">
                                                <h5 className="inner-section-title text-center text-uppercase">
                                                    {item.title1.text}
                                                </h5>
                                                <p className="award-by text-center text-uppercase">
                                                   {item.tagline.text}
                                                </p>
                                            </div>
                                            </div>
                                        )
                                    })
                                }
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

export const awardPage = graphql`{
    prismicAwardAndRecognition{
        data {
            title {
                text
            }
            short_description {
                text
            }
            awards {
                title1 {
                    text
                }
                tagline {
                    text
                }
                description1 {
                    text
                }
                image {
                    url
                }
            }
        }
    }
}`