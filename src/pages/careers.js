import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';
import Slider from "react-slick";
import Img from "gatsby-image"
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
    let jobOpening=[];
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
      let jobOpening=[];
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
  render(){
    const { photoIndex, isOpen } = this.state;
    const careerData = this.props.data.prismicCareers.data;
        var settings = {
      // className:"career-center",
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
            centerMode: false,
            slidesToShow: 2
          }
        }
      ]
    };
    return(
      <Layout>
        <SEO title="Careers"/>
        <div className="career-page">
          <section className="banner-section">
            <Img fluid={careerData.banner.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" />
          </section>
          <section className="career-info container-md bg-color">
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
          <section className="life-at-bramha slider-page mt-5 m-sm-0">
            <div className="padding-block-60 d-flex justify-content-center flex-column w-100 ">
              <h3 className="section-title text-center text-uppercase mb-0" >
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
                        />
                  }
                  <p className=" text-left text-sm-center pages mb-0">
                      {this.state.activeSlide + 1} of {careerData.showcase.length}
                  </p>
              </div>
            </div>
          </section>
          <section className="container">
            <div className="row">
              <div className="padding-block-60 section-title-wrapper d-flex justify-content-center flex-column w-100 align-items-center">
                <h3 className="section-title text-center">
                  {careerData.looking_for_a_job_opening.text}
                </h3>
              </div>
              <div className="job-opening col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
                <form action="" >
                  <input type="search" onChange={(e)=>{
                   let data =  this.state.jobOpeningStore.filter(res => {
                      return res.position.text.toLocaleLowerCase().match(e.target.value.toLocaleLowerCase())
                    })
                    this.setState({jobOpening : data })
                    }}
                   placeholder="Search by title or Department" className="form-control search-bar rounded-0 pl-5"/>
                  <i className="fas fa-search search-btn"></i>
                </form>

                <div className="career-tabs py-4 d-flex flex-wrap justify-content-between align-content-between">
                  {this.state.jobOpenningButtons.map((item) => {
                    return (
                      <div className="btn-wraper mb-3" key={item.id}>
                        <button onClick={() => this.handleJobOpening(item)} className={`button-tertiary w-100 mt-2 ${item.class}`}>
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
                    this.state.jobOpening && this.state.jobOpening.map((item,value)=>{
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
                                <p className="text black-text mb-0">Description</p>
                                <p className="text desc_info mb-32">
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
          </section>
          <section className="upload-cv-scetion text-center padding-block-60">
            <div>
              <h2 className=" section-title text-left text-sm-center">
                Cant find what you are looking for?
              </h2>
            </div>
            <p className="text py-3 text-left text-sm-center">
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
            fluid(maxWidth: 1150) {
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
              fluid(maxWidth: 1150) {
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
              fluid(maxWidth: 1150) {
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
      architect{
        position{
          text
        }
        qualification{
          text
        }
        total_experience{
          text
        }
        description2{
          text
        }
        location{
          text
        }
      }
      admin{
        position{
          text
        }
        qualification{
          text
        }
        total_experience{
          text
        }
        description2{
          text
        }
        location{
          text
        }
      }
      project_manager{
        position{
          text
        }
        qualification{
          text
        }
        total_experience{
          text
        }
        description2{
          text
        }
        location{
          text
        }
      }
      accounts{
        position{
          text
        }
        qualification{
          text
        }
        total_experience{
          text
        }
        description2{
          text
        }
        location{
          text
        }
      }
      engineers{
        position{
          text
        }
        qualification{
          text
        }
        total_experience{
          text
        }
        description2{
          text
        }
        location{
          text
        }
      }
      management{
        position{
          text
        }
        qualification{
          text
        }
        total_experience{
          text
        }
        description2{
          text
        }
        location{
          text
        }
      }
      human_resources{
        position{
          text
        }
        qualification{
          text
        }
        total_experience{
          text
        }
        description2{
          text
        }
        location{
          text
        }
      }
      sales{
        position{
          text
        }
        qualification{
          text
        }
        total_experience{
          text
        }
        description2{
          text
        }
        location{
          text
        }
      }
    }
  }
}`