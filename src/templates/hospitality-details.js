import React from 'react'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import 'lazysizes';
import Slider from 'react-slick';
import Layout from '../components/layout'
import Footer from '../components/footer'

class HospitalityDetails extends React.Component {
    render(){
        const hospitalityData = this.props.data.prismicOurVerticalsArticle;
        console.log('hospitalityData', hospitalityData);
        
        return(
            <Layout>
                <main className="residencial-details">
                    {/* <!-- ---------------- banner start here ---------------- --> */}
                        <section className="banner-section">
                            <Img fluid={hospitalityData.data.banner[0].image.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" />
                        </section>
                    {/* <!-- ---------------- banner end here ---------------- --> */}
                    {/*  {/* <!------------------ middle section start here ----------------------> */}
                    <section className="detail-page-sections pb-0 pt-sm-0 container container-sm-fluid bg-color">
                        <div className="logo-card">
                            <picture className="d-flex justify-content-start justify-content-sm-center align-items-center">
                            <source media="(min-width: 581px)" srcSet="images/residency-logo.png" />
                            <img src="images/residency-logo1.png" alt="hospital Logo" className="w-50" />
                            </picture>
                        </div>
                        <div className="row page-heading-section">
                            <div className="col-12 padding-sm-0">
                                <h2 className="page-heading text-uppercase"> 
                                    {hospitalityData.data.heading.text}     
                                </h2> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p className="mb-4">
                                   {hospitalityData.data.description.text}
                                </p>
                                <a href="#" className="link-text d-flex justify-content-around align-items-center btn-tertiary hospitality-viewmore">
                                    <span> View Projects </span> 
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </section>
                    {/*  {/* <!------------------ middle section end here ------------------------> */}
                    {/* <!-- ------------------- Showcase section start here ------------------- --> */}
                        <section className="detail-page-sections">
                            <h2 className="section-title text-uppercase text-center">
                                Showcase
                            </h2>
                            <div className="slider-wrapper-gray">
                                <Slider>
                                    {
                                        hospitalityData.data.showcase.map((item, value)=>{
                                            return(
                                            <div className="container showcase-slider" key={value}>
                                                <Img fluid={item.image1.localFile.childImageSharp.fluid} alt=" Showcase slidwer" className="w-100 h-100" />
                                            </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </section>
                    {/* <!-- ------------------- Showcase section end here ------------------- --> */}
                    {/* <!-- ------------------- Location section start here ------------------- --> */}
                        <section className="detail-page-sections">
                            <h2 className="section-title text-uppercase text-center">
                                Location
                            </h2>
                            <div className="map-image">
                                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9979896405875!2d73.87803231420851!3d18.52899298740413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c056fa4d8413%3A0xe2b3bd637ed792be!2sResidency%20Club!5e0!3m2!1sen!2sin!4v1576302776373!5m2!1sen!2sin" style={{ width:"100%", height:"450", frameborder:"0", border:"0", allowFullScreen:"0"}}></iframe>
                            </div>
                        </section>
                    {/* <!-- ------------------- Location section end here ------------------- --> */}
                    {/* <!-- ------------------- Download Brouchure section start here ------------------- --> */}
                        <div className="container detail-page-sections d-flex justify-content-center">
                            <a href="#pdf-link" download="Brouchure.pdf" className="btn-secondary text-center">Download Brouchure</a>
                        </div>
                    {/* <!-- ------------------- Download Brouchure section end here ------------------- --> */}
                    </main>
            <Footer />
            </Layout>
        )
    }
}
export default HospitalityDetails;

export const hospitalityPage = graphql` 
    query hospitalityData($uid: String!) {
    prismicOurVerticalsArticle(uid: { eq: $uid }) {
    data{
        title{
          text
        }
        banner{
          image{
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1150, quality: 100) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                    }
                }
            }
          }
        }
        logo{
          localFile {
            childImageSharp {
              fluid(maxWidth: 1150, quality: 100) {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
        maharera{
         url
        }
        heading{
          text
        }
        description{
          text
        }
        phase{
            title1{
              text
            }
            description1{
              text
            }
          }
        short_description{
          text
        }
        flat_bhk{
          text
        }
        flat_address{
          text
        }
        tag_line{
          text
        }
        unique_features{
           text
        }
        thumbnail{
          url
        }
        certificate{
          title1{
            text
          }
          image{
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1150, quality: 100) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                    }
                }
            }
          }
        }
        photo_gallery{
          text
        }
        showcase{
          title1{
            text
          }
          short_description1{
            text
          }
          image1{
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1150, quality: 100) {
                      ...GatsbyImageSharpFluid
                      presentationWidth
                  }
                }
            }
          }
        }
        floor_plans1{
          text
        }
        floor_plans{
          title1{
            text
          }
          short_description1{
            text
          }
          image1{
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1150, quality: 100) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                    }
                }
            }
          }
        }
        amenities1{
          text
        }
        amenities_banner{
          url
        }
        amenities{
          title1{
              text
          }
          description1{
            text
          }
        }
        fact_file_heading{
           text
        }
        fact_file{
           title1{
            text
          }
          description1{
            text
          }
        }
        site_progress_heading{
            text
        }
        site_progress{
          images{
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1150, quality: 100) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                    }
                }
            }
          }
        }
        locate_us{
          title1{
            text
          }
        }
      }
    }
}`