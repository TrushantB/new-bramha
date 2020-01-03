import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';
import Slider from "react-slick";
import Img from "gatsby-image"
import Footer from '../components/footer';

class Careers extends React.Component {
  constructor(){
    super();
    this.state = {
      flag : false,
      dataSource : null,
      collapseDescription: null
    }
  }

  componentWillMount() {
    const careerData = this.props.data.prismicCareers.data;
    this.setState({collapseDescription: careerData.job_opening})
  }

  handleOpportunity(event){
    console.log('handleOpportunity', event);
    this.setState({dataSource : event})
  }

  // render(){
  //   const careerData = this.props.data.prismicCareers.data;
  //   console.log('career Data from career page', careerData);

  //   var settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay : true,
  //     adaptiveHeight : true,
  //   };
  
  render(){
    
    const careerData = this.props.data.prismicCareers.data;
    console.log('career Data from career page', careerData);
        var settings = {
      className:"career-center",
      centerMode: true,
      centerPadding: '200px',
      slidesToShow: 1,
      // beforeChange: (current, next) => this.setState({ activeSlide: next }),
      // afterChange: current => this.setState({ activeSlide2: current }),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: false,
            slidesToShow: 2
          }
        }
      ]
    };
    return(
      <Layout>
        <div className="career-page">   
          <section className="banner-section">
            <Img fluid={careerData.banner.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" />
          </section>
          <section className="career-info container-md bg-color">
            <div className="row padding-block-60">
              <h2 className="col-12 page-heading">{careerData.title.text}</h2> 
            </div>
            <div className="row">
              <div className="col-12">
                <p className="text mb-4">
                 {careerData.description.text} 
                </p>
              </div>
            </div>
          </section>
          <section className="life-at-bramha">
            <div className="padding-block-60 d-flex justify-content-center flex-column w-100 ">
              <h3 className="section-title text-center text-uppercase">
               {careerData.life_at_bramha.text}
              </h3>
            </div>
            <div className="slider-wrapper">
              <div className="container">
              <Slider {...settings}>
                    {
                      careerData.showcase.map((item,value)=>{
                        return(
                          <div key={value}>
                            <div  className="slider-img image-ratio">
                              {/* <h5>{item.heading.text}</h5>
                              <p>{item.date.text}</p>
                              <p>{item.location.text}</p> */}
                              <Img fluid={item.image.localFile.childImageSharp.fluid} alt="slider image" className="life-at-bramha-slider-image" />
                            </div>
                          </div>
                        )
                      })
                    }
                  </Slider>
              </div>
            </div>
          </section>
          <section className="container">
            <div className="row">
              <div className="padding-block-60 section-title-wrapper d-flex justify-content-center flex-column w-100 align-items-center ">
                <h3 className="section-title text-center">
                  {careerData.looking_for_a_job_opening.text}
                </h3>
              </div>
              <div className="col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
                <form action="">
                  <input type="search" onChange={(e)=>{
                   let data =  careerData.job_opening.filter(res => {
                      return res.position.text.toLocaleLowerCase().match(e.target.value.toLocaleLowerCase())
                    })
                    this.setState({collapseDescription : data })
                    }}
                   placeholder="Search by title or Department" className="form-control search-bar rounded-0 pl-5"/>
                  <i className="fas fa-search search-btn"></i>
                </form>
                <div className="career-tabs py-4 d-flex flex-wrap justify-content-between align-content-between">
                  {
                    careerData.job_opening.map((item,value)=>{
                      return(
                        <div key={value} className="btn-wraper">
                          <button onClick={()=>{this.handleOpportunity(item)}} className="button-tertiary w-100 mt-2" 
                           data-toggle="collapse" data-target={`#collapseOne${value}`}  aria-expanded="true" aria-controls="collapseOne"
                          >{item.title1.text}</button>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className="col-12 accordions-sect">
                <div className="accordion" id="accordionExample">
                  {
                    this.state.collapseDescription && this.state.collapseDescription.map((item,value)=>{
                      return(
                        <div className="card border-0" key={value}>
                          <div className="card-header" id="headingOne">
                            <h5 className="mb-0 d-flex justify-content-between align-items-center section-title-secondary" data-toggle="collapse" data-target={`#collapseOne${value}`}  aria-expanded="true" aria-controls="collapseOne">
                              {item.position.text}
                              <button className="btn btn-link">
                                <i className="fas fa-chevron-down"></i>
                              </button>
                            </h5>
                          </div>
                          <div id={`collapseOne${value}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                              <div className="card-head d-flex align-content-around text black-text flex-column">
                                <span>Qualification: – {item.qualification.text}</span>
                                <span>Total Experience: – {item.total_experience.text}</span>
                                <span>Location: – {item.location.text }</span>
                              </div>
                              <div className="description">
                                <p className="text black-text">Description</p>
                                <p className="text">
                                  {item.description2.text}
                                </p>
                              </div>
                              <button className="btn-secondary">Apply For Job</button>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </section>     
          <section className="text-center padding-block-60">
            <div>
              <h2 className=" section-title text-center">
                Cant find what you are looking for?
              </h2>
            </div>
            <p className="text py-3">
              <span className="d-block">Upload your CV to our portal.</span>
              <span className="d-block">We will get back to you once suitable position is open</span>
            </p>
              <input type="file" className="input-file-btn border-0" placeholder="Upload your CV"/>
          </section>
        </div>
        <Footer />
      </Layout>
    )
  }
}
export default Careers;

export const careerPage = graphql`{
  prismicCareers{
    data{
      title{
        text
      }
      description{
        text
      }
			banner{
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      life_at_bramha{
        text
      }
      showcase{
        image{
          localFile {
            childImageSharp {
              fluid(maxWidth: 1150, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      looking_for_a_job_opening{
        text
      }
      job_opening{
        title1{
          text
        }
        position{
          text
        }
        qualification{
          text
        }
        total_experience{
          text
        }
        image{
          localFile {
            childImageSharp {
              fluid(maxWidth: 1150, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        location{
          text
        }
        description2{
          text
        }
      }
    }
  }
}`