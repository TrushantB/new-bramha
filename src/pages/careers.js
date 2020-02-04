import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Slider from "react-slick";
import Img from "gatsby-image";
import Footer from '../components/footer';
import SEO from '../components/seo';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class Careers extends React.Component {
  constructor(){
    super();
    this.state = {
      flag : false,
      dataSource : null,
      activeSlide:null,
      jobOpening:[],
      jobOpeningStore:[],
      activeButton:null,
      photoIndex: 0,
      isOpen: false,  
      jobOpenningButtons:[
        {
          id:'sales',
          name:'Sales'
        },
        {
          id:'human_resources',
          name:'Human Resources'
        },
        {
          id:'management',
          name:'Management'
        },
        {
          id:'engineers',
          name:'Engineers'
        },
        {
          id:'accounts',
          name:'Accounts'
        },
        {
          id:'project_manager',
          name:'Project Manager'
        },
        {
          id:'admin',
          name:'Admin'
        },
        {
          id:'architect',
          name:'Architect'
        }
      ]
    }
  }

  componentWillMount() {
    let jobOpening = [];
    const careerData = this.props.data.prismicCareers.data;
    careerData.architect.map((item) => {
     jobOpening.push(item)
    })
    careerData.admin.map((item) => {
     jobOpening.push(item)
    })
    careerData.project_manager.map((item) => {
      jobOpening.push(item)
    })
    careerData.accounts.map((item) => {
     jobOpening.push(item)
    })
    careerData.engineers.map((item) => {
     jobOpening.push(item)
    })
    careerData.management.map((item) => {
     jobOpening.push(item)
    })
    careerData.human_resources.map((item) => {
     jobOpening.push(item)
    })
    careerData.sales.map((item) => {
     jobOpening.push(item)
    })
    this.setState({jobOpening,jobOpeningStore:jobOpening,dataSource:careerData})
  }

  handleJobOpening(event){
    if(this.state.activeButton!=event.id) {
      this.setState({activeButton:event.id})
      let jobOpening = [];
      this.state.dataSource[event.id].map((item) => {
        jobOpening.push(item)
      })
      this.setState({jobOpening})
      this.state.jobOpenningButtons.map((item) => {
        if(item.id==event.id) {
          item.class="active";
        }
        else item.class="";
      })
    }
    else {
      event.class="";
      this.setState({jobOpening:this.state.jobOpeningStore})
    }
  }
  scrollWin() {
    window.scrollBy({
      top: 500,
      behavior: 'smooth'
    });
  }
  render(){
    const { photoIndex, isOpen } = this.state;
    const careerData = this.props.data.prismicCareers.data;
    let settings = {
      centerMode: true,
      centerPadding: '200px',
      slidesToShow: 1,
      speed:1000,
      afterChange: current => this.setState({ activeSlide: current }),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            slideToScroll: 1,
            centerPadding: '100px'
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: true,
            centerMode: false,
            slidesToShow: 2,
            slideToScroll: 1,
            centerPadding: '45px',
          }
        }
      ]
    };
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title="Careers"/>
        <div className="career-page">
          <section className="banner-section mt-60">
            <picture>
              <source media="(max-width: 581px)" srcSet={careerData.banner.mobile.url}/>
              <img src={careerData.banner.url} alt="banner image here" className="banner-img" />
            </picture>
            <button onClick={this.scrollWin} className="scrolldown-btn"><i className="fas fa-chevron-down"></i></button>
            {/* <Img fluid={careerData.banner.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" /> */}
          </section>
          <section className="career-info container container-sm-fluid bg-color pb-5 pb-sm-0">
            <div className="padding-block-60 career-info-row">
              <h2 className="page-heading">{careerData.title.text}</h2> 
            </div>
            <div className="row career-info-row">
              <div className="col-12">
                <p className="text mb-0">
                  {careerData.description.text}
                </p>
              </div>
            </div>
          </section>
          <div className="container life-at-bramha p-0 px-md-3">
          <section className=" slider-page mt-5 m-sm-0">
            <div className="padding-block-60 d-flex justify-content-center flex-column w-100 ">
              <h3 className="section-title text-center text-uppercase mb-0" >
               {careerData.life_at_bramha.text}
              </h3>
            </div>
            <div className="slider-wrapper slider-bg">
              <div className="container-md container-fluid">
                <Slider {...settings}>
                  {
                    careerData.showcase.map((item,value)=>{
                      return(
                        <div key={value}>
                          <div  className="slider-img image-ratio" onClick={() => this.setState({ isOpen: true ,photoIndex:value})}>
                            <Img fluid={item.image.localFile.childImageSharp.fluid} alt="slider image" className="life-at-bramha-slider-image" />
                          </div>
                        </div>
                      )
                    })
                  }
                </Slider>
                {
                  isOpen &&
                  <Lightbox
                    mainSrc={careerData.showcase[photoIndex].image.localFile.childImageSharp.fluid.src}
                    nextSrc={careerData.showcase[(photoIndex + 1) % careerData.showcase.length].image.localFile.childImageSharp.fluid.src}
                    prevSrc={careerData.showcase[(photoIndex + careerData.showcase.length - 1) % careerData.showcase.length].image.localFile.childImageSharp.fluid.src}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + careerData.showcase.length - 1) % careerData.showcase.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + 1) % careerData.showcase.length,
                      })
                    }
                    animationDuration={800}

                  />
                }
                <p className=" text-left text-sm-center pages mb-0 ">
                    {this.state.activeSlide + 1} of {careerData.showcase.length}
                </p>
              </div>
            </div>
          </section>
          </div>
          <section className="container accordions">
            <div className="row m-0">
              <div className="padding-block-60 section-title-wrapper d-flex justify-content-center flex-column w-100 align-items-center">
                <h3 className="section-title text-center">
                  {careerData.looking_for_a_job_opening.text}
                </h3>
              </div>
              <div className="job-opening col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
                <form action="" >
                  <input type="search" onChange={(e) => {
                   let data =  this.state.jobOpeningStore.filter(res => {
                      return res.position.text.toLocaleLowerCase().match(e.target.value.toLocaleLowerCase())
                    })
                    this.setState({jobOpening : data })
                    }}
                   placeholder="Search by title or Department" className="form-control search-bar rounded-0 pl-5 h-40"/>
                  <i className="fas fa-search search-btn"></i>
                </form>
                <div className="career-tabs  d-flex flex-wrap justify-content-between align-content-between">
                  {this.state.jobOpenningButtons.map((item) => {
                    return (
                      <div className="btn-wraper" key={item.id}>
                        <button onClick={() => this.handleJobOpening(item)} className={`button-tertiary w-100  ${item.class}`}>
                         {item.name}
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
              </div>
              <div className="col-12 accordions-sect">
                <div className="accordion" id="accordionExample">
                  {
                    this.state.jobOpening && this.state.jobOpening.map((item,value) => {
                      return(
                        <div className="card border-0" key={value}>
                          <div className="card-header" id="headingOne">
                            <h5 className="mb-0 d-flex justify-content-between align-items-center section-title-secondary" data-toggle="collapse" data-target={`#collapseOne${value}`}  aria-expanded="false" aria-controls="collapseOne">
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
                                <p className="text black-text mb-0">Description</p>
                                <p className="text desc_info mb-32">
                                  {item.description2.text}
                                </p>
                              </div>
                              <button className="btn-secondary " data-toggle="modal" data-target={`#exampleModal${value}`}>
                                Apply For Job
                              </button>
                              {/* ------------- Modal ----------------- */}
                              <div className="modal fade" id={`exampleModal${value}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h2 className="modal-title section-title text-center w-100" id="exampleModalLabel">Apply For Job</h2>
                                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                    <div className="container">
                                        <div className="form-row">
                                        <input type="hidden" name="form-name" value="career" />
                                          <div className="col-sm-6 form-group  ">
                                              <input type="text" className="form-control rounded-0" id="name" placeholder="Your Name*" name="name" autoComplete="false" required/>
                                          </div>
                                          <div className="col-sm-6 form-group  ">
                                              <input type="text" className="form-control rounded-0" id="email" placeholder="Your Email*" autoComplete="false" name="email" required/>
                                          </div>
                                          <div className="col-12">
                                            <div className="form-group file-area">
                                              <input type="file" name="" id="" required="required" multiple="multiple" className="h-100"/>
                                                <div className="file-dummy resume-upload">
                                                  <div className="default">Resume Upload (PDF/DOC)*</div>
                                                </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="sumbit text-center mt-sm-0 mt-4">
                                          <button type="submit" className="btn-secondary ">Submit</button>
                                        </div>  
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section>
          <section className="upload-cv-scetion text-center ">
            <div>
              <h2 className=" section-title text-center">
                Cant find what you are looking for?
              </h2>
            </div>
            <p className="text m-0 ">
              <span className="d-block">Upload your CV to our portal.</span>
              <span className="d-block">We will get back to you once suitable position is open</span>
            </p>
              <input type="file" className="border-0 input-file-btn" id="choose-file" placeholder="Upload your CV"/>
              <label htmlFor="choose-file" className="btn-secondary">Upload your CV</label>
          </section>
        </div>
        <Footer />
      </Layout>
    )
  }
}
export default Careers;

export const careerPage = graphql` {
  prismicCareers {
    data {
      title {
        text
      }
      description {
        text
      }
      banner {
        url
        mobile{
          url
        }
      }
      life_at_bramha {
        text
      }
      showcase {
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1150) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      looking_for_a_job_opening {
        text
      }
      job_opening {
        title1 {
          text
        }
        position {
          text
        }
        qualification {
          text
        }
        total_experience {
          text
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1150) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        location {
          text
        }
        description2 {
          text
        }
      }
      architect {
        position {
          text
        }
        qualification {
          text
        }
        total_experience {
          text
        }
        description2 {
          text
        }
        location {
          text
        }
      }
      admin {
        position {
          text
        }
        qualification {
          text
        }
        total_experience {
          text
        }
        description2 {
          text
        }
        location {
          text
        }
      }
      project_manager {
        position {
          text
        }
        qualification {
          text
        }
        total_experience {
          text
        }
        description2 {
          text
        }
        location {
          text
        }
      }
      accounts {
        position {
          text
        }
        qualification {
          text
        }
        total_experience {
          text
        }
        description2 {
          text
        }
        location {
          text
        }
      }
      engineers {
        position {
          text
        }
        qualification {
          text
        }
        total_experience {
          text
        }
        description2 {
          text
        }
        location {
          text
        }
      }
      management {
        position {
          text
        }
        qualification {
          text
        }
        total_experience {
          text
        }
        description2 {
          text
        }
        location {
          text
        }
      }
      human_resources {
        position {
          text
        }
        qualification {
          text
        }
        total_experience {
          text
        }
        description2 {
          text
        }
        location {
          text
        }
      }
      sales {
        position {
          text
        }
        qualification {
          text
        }
        total_experience {
          text
        }
        description2 {
          text
        }
        location {
          text
        }
      }
    }
  }
}`