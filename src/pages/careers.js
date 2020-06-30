import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Slider from "react-slick";
import Img from "gatsby-image";
import Footer from '../components/footer';
import SEO from '../components/seo';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import chevron_down from '../images/chevron_down.svg';
import Div100vh from 'react-div-100vh/lib/Div100vh';
import queryString from 'query-string';

import '../firebase/config'
import * as firebase from 'firebase';
import FileUploader from "react-firebase-file-uploader";
import $ from 'jquery'
class Careers extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: false,
      dataSource: null,
      activeSlide: null,
      jobOpening: [],
      jobOpeningStore: [],
      activeButton: null,
      photoIndex: 0,
      isOpen: false,
      avatar: "",
      url: '',
      utmSource: null,
      utmMedium: null,
      utmCampaign: null,
      jobTitle:'',
      jobOpenningButtons: [],
      jobApplyFlag:false,
      applySuccess:false
    }
  }

  UNSAFE_componentWillMount() {
  
    let jobOpening = [];
    const careerData = this.props.data.prismicCareers.data;
    let jobOpenningButtons = [
      {
        id: careerData.sale_key,
        name: careerData.sale_button_name,
      },
      {
        id: careerData.human_resources_key,
        name: careerData.human_resources_button_name
      },
      {
        id: careerData.management_key,
        name: careerData.management_button_name
      },
      {
        id: careerData.engineer_key,
        name: careerData.engineer_button_name
      },
      {
        id: careerData.account_key,
        name: careerData.account_button_name
      },
      {
        id: careerData.project_manager_key,
        name: careerData.project_manager_button_name
      },
      {
        id: careerData.admin_key,
        name: careerData.admin_button_name
      },
      {
        id: careerData.architect_key,
        name: careerData.architect_button_name
      }
    ]
console.log(jobOpenningButtons);

    careerData.architect.map((item) => {
      jobOpening.push(item)
    })
    careerData.admin.map((item) => {
      jobOpening.push(item)
    })
    careerData.project_manager && careerData.project_manager.map((item) => {
      jobOpening.push(item)
    })
    careerData.accounts &&  careerData.accounts.map((item) => {
      jobOpening.push(item)
    })
    careerData.engineers && careerData.engineers.map((item) => {
      jobOpening.push(item)
    })
    careerData.management && careerData.management.map((item) => {
      jobOpening.push(item)
    })
    careerData.human_resources && careerData.human_resources.map((item) => {
      jobOpening.push(item)
    })
    careerData.sales.map((item) => {
      jobOpening.push(item)
    })
    this.setState({ jobOpening, jobOpeningStore: jobOpening, dataSource: careerData,jobOpenningButtons })
    const queryParams = queryString.parseUrl(this.props.location.search); 
    this.setState({
      utmSource: queryParams && queryParams.query.utm_source,
      utmMedium: queryParams && queryParams.query.utm_medium,
      utmCampaign: queryParams && queryParams.query.utm_campaign
    });

   
  }

  handleJobOpening(event) {
    if (this.state.activeButton != event.id) {
      this.setState({ activeButton: event.id })
      let jobOpening = [];
      this.state.dataSource[event.id].map((item) => {
        jobOpening.push(item)
      })
      this.setState({ jobOpening })
      this.state.jobOpenningButtons.map((item) => {
        if (item.id == event.id) {
          item.className = "active";
        }
        else item.className = "";
      })
    }
    else {
      event.className = "";
      this.setState({ jobOpening: this.state.jobOpeningStore })
    }
  }
  scrollWin() {
    var offsetHeight = document.querySelector('.banner-section').offsetHeight;
    window.scrollBy({
      top: offsetHeight,
      behavior: 'smooth'
    });
  }
  handleUploadResumeSuccess = filename => {
    this.setState({ avatar: filename });
    firebase
      .storage()
      .ref("Resume")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({ url: url})
      });
  };

  handleUploadSuccess = filename => {
    this.setState({ avatar: filename });
    firebase
      .storage()
      .ref("Resume")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({ url: url})
      });
  };

  submitCareer = (e) => {
    e.preventDefault();
    firebase
      .database()
      .ref("Careers")
      .push()
      .set({
        jobTitle:this.state.jobTitle,
        name: e.target.name.value,
        email: e.target.email.value,
        applyFor: e.target.applyFor.value,
        resumeUrl: this.state.url,
        utmSource: e.target.utmSource.value,
        utmCampaign: e.target.utmCampaign.value,
        utmMedium: e.target.utmMedium.value
      })
      this.setState({avatar: ''});
      document.querySelector('.careerResetForm').reset();

      $(function () {
        $('#exampleModalCenter').modal('toggle');
     });

    this.setState({applySuccess:true})

    setTimeout(() => {
      this.setState({applySuccess:false})
    }, 4000);
  }


  render() {
    const { photoIndex, isOpen } = this.state;
    const careerData = this.props.data.prismicCareers.data;
    let settings = {
      centerMode: true,
      centerPadding: '200px',
      slidesToShow: 1,
      speed: 400,
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
    
    return (
      <Layout location="/" noHeader="true" pathname={this.props.location.pathname}>
        <SEO title="Careers" />
        <div className="career-page">
          <Div100vh style={{ height: 'calc(100rvh - 60px)' }} className="banner-section mt-60">
            <picture>
              <source media="(max-width: 581px)" srcSet={careerData.banner.mobile.url} />
              <img src={careerData.banner.url} alt="banner image here" className="banner-img" />
            </picture>
            <div className="scroll-downs" onClick={this.scrollWin}>
              <span>Scroll</span>
              <div className="mousey"><img src={chevron_down} /></div>
            </div>
            {/* <Img fluid={careerData.banner.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" /> */}
          </Div100vh>
          <section className="career-info container container-sm-fluid bg-color pb-5 pb-sm-0">
            <div className="padding-block-60 career-info-row">
              <h2 className="page-heading">{careerData.title.text}</h2>
            </div>
            <div className="row career-info-row">
              <div className="col-12">
                <div className="text mb-0" dangerouslySetInnerHTML={{ __html: careerData.description.html }} />
              </div>
            </div>
          </section>
          <section className=" slider-page careers-slider-wrapper mt-5 m-sm-0">
            <div className="padding-block-60 d-flex justify-content-center flex-column w-100 ">
              <h3 className="section-title text-center text-uppercase mb-0" >
                {careerData.life_at_bramha.text}
              </h3>
            </div>
            <div className="slider-wrapper slider-bg">
              <div className="container-md container-fluid">
                <Slider {...settings}>
                  {
                    careerData.showcase.map((item, value) => {
                      return (
                        <div key={value}>
                          <div role="link" tabIndex="0" className="slider-img image-ratio" onClick={() => this.setState({ isOpen: true, photoIndex: value })}>
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
                    let data = this.state.jobOpeningStore.filter(res => {
                      return res.position.text.toLocaleLowerCase().match(e.target.value.toLocaleLowerCase())
                    })
                    this.setState({ jobOpening: data })
                  }}
                    placeholder="Search by title or Department" className="form-control search-bar rounded-0 pl-5 h-40" />
                  <i className="fas fa-search search-btn"></i>
                </form>
                <div className="career-tabs  d-flex flex-wrap justify-content-between align-content-between">
                  {
                  this.state.jobOpenningButtons.map((item) => {
                    if(item.name != 'null') {
                      return (
                        <div className="btn-wraper" key={item.id}>
                          <button onClick={() => this.handleJobOpening(item)} className={`button-tertiary w-100  ${item.className}`}>
                            {item.name}
                          </button>
                        </div>
                      )
                    }
                  })
                  }
                </div>
              </div>
            </div>
            <div className="col-12 accordions-sect">
              <div className="accordion" id="accordionExample">
                {
                  this.state.jobOpening && this.state.jobOpening.map((item, value) => {
                    return (
                      <div className="card border-0" key={value}>
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0 d-flex justify-content-between align-items-center section-title-secondary" data-toggle="collapse" data-target={`#collapseOne${value}`} aria-expanded="false" aria-controls="collapseOne">
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
                              <span>Location: – {item.location.text}</span>
                            </div>
                            <div className="description">
                              <p className="text black-text mb-0">Description</p>
                              <p className="text desc_info mb-32">
                                {item.description2.text}
                              </p>
                            </div>
                            <button className="btn-secondary " data-toggle="modal" data-target="#exampleModalCenter" 
                              onClick={() => this.setState({jobTitle:item.position.text,jobApplyFlag:true})}>
                              Apply For Job
                              </button>
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
                Can't find what you are looking for?
              </h2>
            </div>
            <p className="text m-0 ">
              <span className="d-block">Upload your CV to our portal.</span>
              <span className="d-block">We will get back to you once suitable position is open</span>
            </p>
            <div onClick={() => this.setState({jobTitle:'any',jobApplyFlag:true})}>
            <input type="file" className="border-0 input-file-btn" id="choose-file" placeholder="Upload your CV" />
              <label className="btn-secondary"  data-toggle="modal" data-target="#exampleModalCenter" >Upload your CV</label>
            </div>
          </section>

          <div className="modal fade"  id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="false">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title section-title text-center w-100 f-s-20"  id="exampleModalLongTitle">Upload your CV</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                  <form className="careerResetForm" onSubmit={(e) => this.submitCareer(e)}>
                    <div className="container">
                    <div className="form-row">
                      <input type="hidden" name="form-name" value="career"/>
                      <input type="hidden" id="applyFor" name="form-name" value="Careers" />
                      <input type="hidden" id="utmSource" name="utmSource" value={this.state.utmSource} />
                      <input type="hidden" id="utmMedium" name="utmMedium" value={this.state.utmMedium} />
                      <input type="hidden" id="utmCampaign" name="utmCampaign" value={this.state.utmCampaign} />

                      <div className="col-sm-6 form-group">
                        <input type="text" className="form-control rounded-0" id="name" placeholder="Your Name*" name="name" autoComplete="off" required />
                      </div>
                      <div className="col-sm-6 form-group">
                        <input type="text" className="form-control rounded-0" id="email" placeholder="Your Email*" autoComplete="off" name="email" required />
                      </div>
                      <div className="col-12">
                        <div className="form-group file-area">
                          <FileUploader
                            id="file"
                            className="w-100 resume-upload-input h-100"
                            accept="pdf/*"
                            name="resume-upload"
                            storageRef={firebase.storage().ref("Resume")}
                            onUploadSuccess={this.handleUploadSuccess}
                          />
                        <div className="file-dummy resume-upload">
                          {
                            this.state.avatar && this.state.avatar ? this.state.avatar:
                            <div className="default">Resume Upload (PDF/DOC)*</div>
                          }
                        </div>
                      </div>

                      </div>
                    </div>
                    <div className="sumbit text-center mt-sm-0 mt-4">
                      <button type="submit" className="btn-secondary">
                            Submit
                        </button>
                    </div>
                    </div>
                  </form>

                  </div>
                </div>
              </div>
            </div>
        </div>
        {
          this.state.applySuccess &&
        <div class="alert alert-success" role="alert">
           <h4 class="alert-heading">Well done!</h4>
        <p>You are successfully applied for job.</p>
       </div>
        }
      </Layout>
    )
  }
}
export default Careers;

export const careerPage = graphql` {
  prismicCareers {
    data {
      architect_button_name
      admin_button_name
      admin_key
      architect_key
      engineer_key
      human_resources_key
      management_key
      sale_button_name
      project_manager_key
      sale_key
      account_key
      engineer_button_name
      management_button_name
      project_manager_button_name
      human_resources_button_name
      account_button_name
      title {
        text
      }
      description {
        html
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
        #  project_manager {
        #    position {
        #      text
        #    }
        #    qualification {
        #      text
        #    }
        #    total_experience {
        #      text
        #    }
        #    description2 {
        #      text
        #    }
        #    location {
        #      text
        #    }
        #  }
        #  accounts {
        #    position {
        #      text
        #    }
        #    qualification {
        #      text
        #    }
        #    total_experience {
        #      text
        #    }
        #    description2 {
        #      text
        #    }
        #    location {
        #      text
        #    }
        #  }
        #  engineers {
        #    position {
        #      text
        #    }
        #    qualification {
        #      text
        #    }
        #    total_experience {
        #      text
        #    }
        #    description2 {
        #      text
        #    }
        #    location {
        #      text
        #    }
        #  }
        #  management {
        #    position {
        #      text
        #    }
        #    qualification {
        #      text
        #    }
        #    total_experience {
        #      text
        #    }
        #    description2 {
        #      text
        #    }
        #    location {
        #      text
        #    }
        #  }
        #  human_resources {
        #    position {
        #      text
        #    }
        #    qualification {
        #      text
        #    }
        #    total_experience {
        #      text
        #    }
        #    description2 {
        #      text
        #    }
        #    location {
        #      text
        #    }
        #  }

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
