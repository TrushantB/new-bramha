import React from 'react';
import Slider from "react-slick";
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { navigate } from "gatsby"
import PhoneInput from 'react-phone-number-input';
import * as firebase from 'firebase';

export default class Residential extends React.Component {
  constructor() {
    super();
    this.state = {
      activeSlide: null,
      allType: null,
      allAddress: null,
      dataSource: null,
      ongoingProject: null,
      ongoingProjectStore: null,
      completedProjectStore: null,
      activeAddress: '',
      activeType: '',
      value:"+91",
    };
  }

  addressSelect = (e) => {
    if (e.target.value === 'all_address') {
      this.setState({ ongoingProject: this.state.ongoingProjectStore, completedProject: this.state.completedProjectStore, activeAddress: e.target.value, activeType: '' })
    }
    else {
      let ongoing = this.state.ongoingProject.length > 0 && this.state.ongoingProjectStore.filter(res => res.residential_links.document[0].data.flat_address.text === e.target.value)
      let completed = this.state.completedProject.length > 0 && this.state.completedProjectStore.filter(res => res.completed_links.document[0].data.flat_address.text === e.target.value)
      this.setState({ ongoingProject: ongoing, completedProject: completed, activeAddress: e.target.value, activeType: '' })
    }
  }

  typeSelect = (e) => {
    if (e.target.value === 'all_type') {
      this.setState({ ongoingProject: this.state.ongoingProjectStore, completedProject: this.state.completedProjectStore, activeAddress: '', activeType: e.target.value })
    }
    else {
      let ongoing = this.state.ongoingProject.length > 0 && this.state.ongoingProjectStore.filter(res => res.residential_links.document[0].data.flat_bhk.text === e.target.value)
      let completed = this.state.completedProject.length > 0 && this.state.completedProjectStore.filter(res => res.completed_links.document[0].data.flat_bhk.text === e.target.value)
      this.setState({ ongoingProject: ongoing, completedProject: completed, activeAddress: '', activeType: e.target.value })
    }
  }

  handleProjects = (e) => {
    let type = [];
    let address = [];
    this.setState({ activeAddress: '', activeType: '' });
    let project = this.state.dataSource[0].node.data[e.target.value];
    if (e.target.value === 'ongoing_projects') {
      navigate("/residential/ongoing-project")
    }
    else if (e.target.value === 'completed_project') {
      navigate("/residential/completed-project")
    }
    else {
      this.state.dataSource.map((item, index) => {
        this.setState({ ongoingProject: item.node.data.ongoing_projects, ongoingProjectStore: item.node.data.ongoing_projects });
        item.node.data.ongoing_projects.map((item) => {
          type.push(item.residential_links.document[0].data.flat_bhk.text);
          address.push(item.residential_links.document[0].data.flat_address.text);
        })
      })

      this.state.dataSource.map((item, index) => {
        this.setState({ completedProject: item.node.data.completed_project, completedProjectStore: item.node.data.completed_project });
        item.node.data.completed_project.map((item) => {
          type.push(item.completed_links.document[0].data.flat_bhk.text);
          address.push(item.completed_links.document[0].data.flat_address.text);
        })
        address = [...new Set(address)];
        type = [...new Set(type)];
        this.setState({ allType: type, allAddress: address })
      })
    }
  }

  UNSAFE_componentWillMount() {
    let type = [];
    let address = [];
    const allData = this.props.data.allPrismicResidential.edges;
    this.setState({ dataSource: allData });
    allData.map((item, index) => {
      this.setState({ ongoingProject: item.node.data.ongoing_projects, ongoingProjectStore: item.node.data.ongoing_projects });
      item.node.data.ongoing_projects.map((item) => {
        type.push(item.residential_links.document[0].data.flat_bhk.text);
        address.push(item.residential_links.document[0].data.flat_address.text);
      })
    })

    allData.map((item, index) => {
      this.setState({ completedProject: item.node.data.completed_project, completedProjectStore: item.node.data.completed_project });
      item.node.data.completed_project.map((item) => {
        type.push(item.completed_links.document[0].data.flat_bhk.text);
        address.push(item.completed_links.document[0].data.flat_address.text);
      })
    })
    let allType = [...new Set(type)];
    let allAddress = [...new Set(address)];
    this.setState({ allType });
    this.setState({ allAddress });
  }

  submitCustomer = (e) => {
    e.preventDefault();
    firebase
      .database()
      .ref("Residential Project")
      .push()
      .set({
        name: e.target.name.value,
        email: e.target.email.value,
        phoneNumber: e.target.phoneNumber.value,
        city: e.target.city.value,
        message: e.target.message.value,
        projectName: e.target.projectName.value
      })
      this.setState({ value: '+91'});
      document.querySelector('.formReset').reset();
  }

  render() {
    let settings = {
      className: "project-carousel",
      centerPadding: "60px",
      dots: false,
      infinite: false,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplaySpeed: 0,
      nfinite: true,
      afterChange: current => this.setState({ activeSlide: current }),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            afterChange: current => this.setState({ completeChange: current }),
            autoplaySpeed: 0
          }
        },
        {
          breakpoint: 580,
          settings: {

            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            autoplaySpeed: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            infinite: true,
            centerPadding: "30px",
            slidesToShow: 1,
            autoplaySpeed: 0
          }
        }
      ]
    };
    const residentialData = this.props.data.allPrismicResidential.edges;
    const lookingForMe = residentialData[0].node.data

    return (
      <Layout location="/" noHeader="true" pathname={this.props.location.pathname}>
        <SEO title="Residential Project" />
        {residentialData.map((item, value) => {
          return (
            <section key={value} className="residential-section page-heading-section container container-sm-fluid bg-color">
              <div className="padding-block-60">
                <h2 className="page-heading">{item.node.data.sub_title.text}</h2>
              </div>
              <div className="row  mr-0">
                <div className="col-12">
                  <div className="main-paragraph" dangerouslySetInnerHTML={{ __html: item.node.data.description.html }} />
                </div>
              </div>
            </section>
          )
        })
        }
        <section className="residential-projects">
          {/* <div className="container">
            <div className="projects">
              <select defaultValue="" onChange={(e) => { this.handleProjects(e) }}>
                <option value="all_projects" >All Projects</option>
                <option value="ongoing_projects">Ongoing Project</option>
                <option value="completed_project">Completed Project</option>
              </select>
              <select className="" value={this.state.activeAddress} onChange={(e) => this.addressSelect(e)}>
                <option value="" disabled hidden>Select Address </option>
                <option value="all_address"> All Address </option>
                {
                  this.state.allAddress.map((data, index) => {
                    return (
                      <option value={data} key={index}>{data}</option>
                    );
                  })
                }
              </select>
              <select className="" value={this.state.activeType} placeholder="Budget" onChange={(e) => this.typeSelect(e)} >
                <option value="" disabled hidden>Select Type </option>
                <option value="all_type"> All Type </option>
                {
                  this.state.allType.map((data, index) => {
                    return (
                      <option value={data} key={index}>{data}</option>
                    );
                  })
                }
              </select>
             
            </div>
          </div> */}
          { this.state.ongoingProject.length > 0 &&
            <section className="ongoing-project">
              <div className="residences">
                <div className="container">
                  <div className="listing-heading d-flex align-items-center">
                    <h4 className="text-uppercase heading mb-0">Ongoing Projects</h4>
                  </div>
                  <div className="row">
                    {this.state.ongoingProject.map((item, value) => {
                      return (
                        <div key={value} className="col-md-6 col-lg-4 col-sm-12 p-0 pl-sm-3 pr-sm-3">
                          <Link to={`/residential/${item.residential_links.uid}`} >
                            <div className="residences-card position-relative">
                              <div className="residences-img">
                                <picture>
                                  <source media="(max-width: 581px)" srcSet={item.residential_links.document[0].data.thumbnail.mobile.url} />
                                  <img src={item.residential_links.document[0].data.thumbnail.url} alt="" width="100%" />
                                </picture>
                                {/* <Img fluid={item.residential_links.document[0].data.thumbnail.localFile.childImageSharp.fluid} alt="" width="100%"/> */}
                              </div>
                              <div className="property-meta-card position-absolute d-flex flex-column justify-content-around">
                                <div className="rectangle-title">
                                  <h4 className="text-uppercase m-0 inner-section-title">{item.residential_links.document[0].data.title.text}</h4>
                                </div>
                                <div className="apartment-size d-flex justify-content-between align-items-center">
                                  <span className="text-uppercase">{item.residential_links.document[0].data.flat_bhk.text}</span>
                                  <div>
                                    <i className="fas fa-arrow-right"></i>
                                  </div>
                                </div>
                                <div className="project-location">
                                  <i className="fas fa-map-marker-alt"></i>
                                  <span>{item.residential_links.document[0].data.flat_address.text}</span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      )
                    })
                    }
                  </div>
                </div>
              </div>
            </section>
          }
          { this.state.completedProject.length > 0 &&
            <section className="complete-project position-relative">
              <div className="container">
                <div className="listing-heading d-flex align-items-center">
                  <h4 className="text-uppercase heading mb-0">Completed Projects</h4>
                </div>
                <div className="text-left d-none d-sm-block" dangerouslySetInnerHTML={{ __html: residentialData[0].node.data.completed_description.html }} />
                <Slider  {...settings}>
                  {this.state.completedProject.map((item, value) => {
                    return (
                      <div className="row" key={value}>
                        <Link to={`/residential/${item.completed_links.uid}`}>
                          <div className="secondary-card position-relative ">
                            <div className="secondary-card-img image-ratio">
                              <picture>
                                <source media="(max-width: 581px)" srcSet={item.completed_links.document[0].data.thumbnail.mobile.url} />
                                <img src={item.completed_links.document[0].data.thumbnail.url} alt="" width="100%" />
                              </picture>
                            </div>
                            <div className="secondary-card-rectangle position-absolute d-flex flex-column justify-content-around">
                              <div className="title">
                                <h4 className="text-uppercase m-0 inner-section-title">{item.completed_links.document[0].data.title.text}</h4>
                              </div>
                              <div className="apartment-size d-flex justify-content-between align-items-center">
                                <span className="text-uppercase">{item.completed_links.document[0].data.flat_bhk.text}</span>
                                <div>
                                  <i className="fas fa-arrow-right"></i>
                                </div>
                              </div>
                              <div className="project-location">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{item.completed_links.document[0].data.flat_address.text}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                  })
                  }
                </Slider>
                <span className="d-inline-block position-absolute pagination">
                  {this.state.activeSlide + 1} of {this.state.completedProject.length}
                </span>
              </div>
            </section>
          }
          <div className="view-all text-center mt-5 mt-sm-4 mb-5">
            <Link to={`/residential/completed-projects`} className="btn-secondary">View All</Link>
          </div>
          <section className="give-details text-center">
            <div className="container">
              <h4 className="text-uppercase text-center section-title centered">Looking for more option?</h4>
              <p>
                {lookingForMe.looking_for_more.text}
              </p>
              <div className="sumbit text-center mt-sm-0 mt-4">
                <button type="submit" className="btn-secondary" data-toggle="modal" data-target="#exampleModalCenter">Give Details</button>
              </div>
               {/* ------------- Modal ----------------- */}  
            
            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title section-title text-center w-100 f-s-20"  id="exampleModalLongTitle">Give Details</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                  <form className="formReset" onSubmit={(e) => this.submitCustomer(e)}>
                    <div className="container">
                      <div className="form-row">
                      <input type="hidden" name="form-name" value="career" />
                      <input type="hidden" id="projectName" name="form-name" value='Residential Customer' />
                        <div className="col-sm-6 form-group">
                            <input type="text" className="form-control rounded-0" id="name" placeholder="Your Name*" name="name" autoComplete="false" required/>
                        </div>
                        <div className="col-sm-6 form-group">
                            <input type="text" className="form-control rounded-0" id="email" placeholder="Your Email*" autoComplete="false" name="email" required/>
                        </div>
                        <div className="col-sm-6 form-group">
                          <PhoneInput className="form-control h-38" id="phoneNumber" maxLength="15" placeholder="Your Phone Number*" name="phone-number" required
                            value={this.state.value}
                            onChange={(e) => this.setState({value:e})}
                          />
                        </div>
                        <div className="col-sm-6 form-group">
                           <input type="text" className="form-control  rounded-0" id="city" placeholder="City" name="city" required/>
                        </div>
                        <div className="col-sm-12 form-group">
                          <textarea className="form-control" rows="4" id="message" placeholder="Message" name="message" required></textarea>
                        </div>
                      </div>
                      <div className="sumbit text-center mt-sm-0 mt-4">
                        <button type="submit" className="btn-secondary ">
                          <a href="/thank-you" className="btn-secondary-text">
                            Submit
                          </a>
                        </button>
                      </div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>
        </section>
      </Layout>
    )
  }
}

export const residentialPage = graphql` {
  allPrismicResidential {
    edges {
      node {
        uid
        data {
          seo_title,
          seo_description,
          title {
            text
          }
          sub_title {
            text
          }
          description {
            html
          }
          looking_for_more{
            text
          }
          ongoing_projects {
            residential_links {
              uid
              document {
                data {
                  title {
                    text
                  }
                  thumbnail {
                    url
                    mobile{
                      url
                    }
                  }
                  banner{
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
                  flat_bhk {
                    text
                  }
                  flat_address {
                    text
                  }
                }
              }
            }
          }
            completed_description {
              html
            }
            completed_project {
              completed_links {
                uid
                document {
                  data {
                    title {
                    text
                  }
                  thumbnail {
                   url
                   mobile{
                     url
                   }
                  }
                  banner {
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
                  flat_bhk {
                    text
                  }
                  flat_address {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`
