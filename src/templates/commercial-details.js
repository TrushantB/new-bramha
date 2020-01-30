import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';
import Img from 'gatsby-image';
import Slider from 'react-slick';
import { graphql } from 'gatsby'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class CommercialDetails extends React.Component {
  state = {
    activeSlide: null,
    photoIndex: 0,
    isOpen: false, 
  };

  render(){
    const { photoIndex, isOpen } = this.state;
    const commercialData = this.props.data.prismicOurVerticalsArticle;
    let settings = {
      centerMode: true,
      centerPadding: '200px',
      slidesToShow: 1,
      afterChange: current => this.setState({ activeSlide: current }),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1,
            speed:1000
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '80px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    };

    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={commercialData.data.sub_title.text} />
        <main className="detail-page commercial-detail-page">
          {/* <!-- ---------------- banner start here ---------------- --> */}
            <section className="banner-section">
              <picture>
                <source media="(min-width: 581px)" srcSet={commercialData.data.banner[0].image.localFile.childImageSharp.url}/>
                <Img fluid={commercialData.data.banner[0].image.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img"/>
              </picture>
              {/* <Img fluid={commercialData.data.banner[0].image.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" /> */}
            </section>
          {/* <!-- ---------------- banner end here ---------------- --> */}
          {/*  {/* <!------------------ middle section start here ----------------------> */}
            <section className="detail-page-sections pt-sm-0 container">
              <div className="logo-card">
                <picture className="d-flex justify-content-start justify-content-sm-center align-items-center">
                  <source media="(max-width: 581px)" srcSet={commercialData.data.logo.mobile.url} />
                  <img src={commercialData.data.logo.url} alt="hospital Logo" className="w-50" />
                </picture>
              </div>
              <div className=" padding-block-60">
                <h2 className="page-heading text-uppercase"> 
                  {commercialData.data.heading.text}     
                </h2> 
              </div>
              <div className="row">
                <div className="col-12 d-flex d-sm-block flex-wrap justify-content-end">
                  <p className="mb-4">
                    {commercialData.data.description.text}
                  </p>
                  <a href="#" className="d-flex justify-content-between align-items-center btn-tertiary hospitality-viewmore">
                    <span> View Website </span> 
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </section>
          {/*  {/* <!------------------ middle section end here ------------------------> */}
          {/* <!-- ------------------- Showcase section start here ------------------- --> */}
            <section className="slider-page">
              <h2 className="section-title text-uppercase text-center">
                Showcase
              </h2>
              <div className="slider-wrapper slider-bg">
                <div className="container">
                <Slider {...settings}>
                  {
                    commercialData.data.showcase.map((item,value) => {
                      return(
                        <div key={value}>
                          <div className="slider-img image-ratio" onClick={() => this.setState({ isOpen: true ,photoIndex:value})}>
                              <img src={item.image1.url} alt=" Showcase slidwer" className="life-at-bramha-slider-image" />
                            <p className="showcase-slide-caption">{item.caption}</p>
                          </div>
                        </div>
                      )
                    })
                  }
                </Slider>
                  {
                    isOpen &&
                    <Lightbox
                      mainSrc={commercialData.data.showcase[photoIndex].image1.url}
                      nextSrc={commercialData.data.showcase[(photoIndex + 1) % commercialData.data.showcase.length].image1.url}
                      prevSrc={commercialData.data.showcase[(photoIndex + commercialData.data.showcase.length - 1) % commercialData.data.showcase.length].image1.url}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                      onMovePrevRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + commercialData.data.showcase.length - 1) % commercialData.data.showcase.length,
                        })
                      }
                      onMoveNextRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + 1) % commercialData.data.showcase.length,
                        })
                      }
                      imageCaption={commercialData.data.showcase[photoIndex].caption}
                      animationDuration={700}
                    />
                  }
                  <p className=" text-left text-sm-center pages mb-0">
                    {this.state.activeSlide + 1} of {commercialData.data.showcase.length}
                  </p>
                </div>
              </div>
            </section>
          {/* <!-- ------------------- Showcase section end here ------------------- --> */}
          {/* <!-- ------------------- Location section start here ------------------- --> */}
            <section className="location-sections">
              <h2 className="section-title text-uppercase text-center">
                Location
              </h2>
              <div className="map-image">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9979896405875!2d73.87803231420851!3d18.52899298740413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c056fa4d8413%3A0xe2b3bd637ed792be!2sResidency%20Club!5e0!3m2!1sen!2sin!4v1576302776373!5m2!1sen!2sin" style={{ width:"100%", height:"372px", frameborder:"0", border:"0", allowFullScreen:"0"}}></iframe>
              </div>
            </section>
          {/* <!-- ------------------- Location section end here ------------------- --> */}
          {/* <!-- ------------------- Download Brouchure section start here ------------------- --> */}
            <div className="container detail-page-sections d-flex justify-content-center download-btn">
              <a href="#pdf-link" download="Brouchure.pdf" className="btn-secondary text-center">Download Brochure</a>
            </div>
          {/* <!-- ------------------- Download Brouchure section end here ------------------- --> */}
          </main>
        <Footer />
      </Layout>
    )
  }
}
export default CommercialDetails;

export const hospitalityPage = graphql`
  query commercialData($uid: String!) {
    prismicOurVerticalsArticle(uid: { eq: $uid }) {
    data {
      title {
        text
      }
      sub_title {
        text
      }
      banner {
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1150) {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
      }
      logo {
        url
        mobile{
          url
        }
      }
      maharera {
        url
      }
      heading {
        text
      }
      description {
        text
      }
      phase {
        title1 {
          text
        }
        description1 {
          text
        }
      }
      short_description {
        text
      }
      flat_bhk {
        text
      }
      flat_address {
        text
      }
      tag_line {
        text
      }
      unique_features {
          text
      }
      thumbnail {
        url
      }
      certificate {
        title1 {
          text
        }
        image {
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
      photo_gallery {
        text
      }
      showcase {
        image1{
          url
        }
        caption
      }
      floor_plans1 {
        text
      }
      floor_plans {
        title1 {
          text
        }
        short_description1 {
          text
        }
        image1 {
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
      amenities1 {
        text
      }
      amenities_banner {
        url
      }
      amenities {
        title1 {
            text
        }
        description1 {
          text
        }
      }
      fact_file_heading {
          text
      }
      fact_file {
          title1 {
          text
        }
        description1 {
          text
        }
      }
      site_progress_heading {
        text
      }
      site_progress {
        images {
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
      locate_us {
        title1 {
          text
        }
      }
    }
  }
}`