import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

class Award extends React.Component {
    render(){
        const awardData = this.props.data.prismicAwardAndRecognition.data;
        return(
            <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
                <SEO title={awardData.title.text}/>
                <section className="award-wrapper">
                    <section className="page-heading-section container container-sm-fluid bg-color">
                        <div className="padding-block-60">
                            <h2 className="page-heading">{awardData.title.text}</h2>
                        </div>
                        <div className="row mr-0">
                            <div className="col-12">
                            <div className="main-paragraph" dangerouslySetInnerHTML={{__html:awardData.short_description.html }} />
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row">
                                {awardData.awards.map((item,index) => {
                                    return(
                                        <div key={index} className="col-md-4 col-lg-4 col-sm-6">
                                            <div>
                                                <h5 className="award-title ">
                                                    {item.title1.text}
                                                </h5>
                                            </div>
                                            <img src={item.image.url} alt="" title="Founder" width="100%"/>
                                            <p className="award-description">
                                                {item.description1.text}
                                            </p>
                                        </div>
                                    )
                                })}
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
                html
            }
            awards {
                title1 {
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
