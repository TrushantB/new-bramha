import React from 'react'
import Slider from "react-slick";
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image';
import Layout from '../components/layout'
import Footer from '../components/footer'

export default class Residential extends React.Component {
  constructor(){
    super();
   this.state = {
      activeSlide: 1,
      activeSlide2: 0,
      activeProject: '',
      activeAddress: '',
      activeType: ''
    };
    // this.handleProjects = this.handleProjects.bind(this);
  }

  addressHandle(event){
    let temp = [];
     event.map((item, index1)=>{
      item.residential_links.document.map((data)=>{
        temp.push(<option key={index1}>{data.data.flat_address.text}</option>)
      })
    })
    return temp;
  }

  addressSelect =(e)=>{
    this.setState({activeAddress: e.target.value})
  }

  typeHandle(event){
    let temp = [];
    event.map((item, index)=>{
     item.residential_links.document.map((data)=>{
       temp.push(<option value={data.data.flat_bhk.text} key={index}>{data.data.flat_bhk.text}</option>)
     })
     
   })
   return temp;
  }

  typeSelect =(e)=>{
    this.setState({activeType: e.target.value})
  }

  handleProjects = (e) =>{
    this.setState({activeProject: e.target.value});
  }

  render(){
    console.log('Project', this.state.activeProject);
    console.log('Address', this.state.activeAddress);
    console.log('Type', this.state.activeType);
    var settings = {
      className: "center",
      centerPadding: "60px",
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current }),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 580,
          settings: {
            
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 500
          }
        },
        {
          breakpoint: 480,
          settings: {
            
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 500
            
          }
        }
      ]
    };
    const residentialData = this.props.data.allPrismicResidential.edges;
    console.log('residentialData', residentialData);
    return(
      <Layout>
        {
          residentialData.map((item,value)=>{
            return(
              <section key={value} className="residential-section page-heading-section container container-sm-fluid bg-color">
                <div className="padding-block-60">
                    <h2 className="page-heading">{item.node.data.title.text}</h2> 
                </div>
                <div className="row  mr-0">
                    <div className="col-12">
                      <div className="main-paragraph"> 
                        {item.node.data.description.text}
                      </div>  
                    </div>
                </div>
              </section>
            )
          })
        }
          <section className="residential-projects">
            <div className="container">
              <div className="projects">

                <select id='dropdown' onChange={this.handleProjects} className="" placeholder="Budget" >
                  <option value='ongoing_projects'>Ongoing Projects</option>
                  <option value='completed_projects'>Completed Projects</option>
                </select>

                <select className="" placeholder="Budget" onChange={this.addressSelect}>
                {
                  this.addressHandle(residentialData[0].node.data.ongoing_projects)
                }
                </select>

                <select className="" placeholder="Budget" onChange={this.typeSelect} >
                  {
                    this.typeHandle(residentialData[0].node.data.ongoing_projects)
                  }
                </select>
                 
              </div>
            </div>
            <section className="ongoing-project">
              <div className="residences">
                <div className="container">
                  <div className="listing-heading d-flex align-items-center">
                    <h4 className="text-uppercase heading mb-0">Ongoing Projects</h4>
                  </div>
                    <div className="row">
                      {
                        this.state.activeAddress  ?
                        residentialData[0].node.data.ongoing_projects.map((item,value)=>{
                          if(this.state.activeAddress == item.residential_links.document[0].data.flat_address.text){
                            return(
                              <div key={value} className="col-md-6 col-lg-4 col-sm-12 p-0 pl-sm-3 pr-sm-3">
                              <div className="residences-card position-relative">
                                <div className="residences-img">
                                  <Img fluid={item.residential_links.document[0].data.banner[0].image.localFile.childImageSharp.fluid} alt="" width="100%"/>
                                </div>
                                <div className="rectangle position-absolute d-flex flex-column justify-content-around">
                                    <div className="rectangle-title">
                                        <h4 className="text-uppercase m-0 inner-section-title">{item.residential_links.document[0].data.title.text}</h4>
                                    </div>
                                    <div className="apartment-size d-flex justify-content-between align-items-center">
                                      <span className="text-uppercase">{item.residential_links.document[0].data.flat_bhk.text}</span>
                                      <Link to={`residential/${item.residential_links.uid}`}>
                                        <i className="fas fa-arrow-right"></i>
                                      </Link>
                                    </div>
                                    <div className="project-location">
                                      <i className="fas fa-map-marker-alt"></i>
                                      <span>{item.residential_links.document[0].data.flat_address.text}</span>
                                    </div>
                                </div>
                              </div>
                            </div>
                            )
                          }
                          }) : 
                        this.state.activeType ? 
                        residentialData[0].node.data.ongoing_projects.map((item,value)=>{
                          if(this.state.activeType == item.residential_links.document[0].data.flat_bhk.text){
                            return(
                            <div key={value} className="col-md-6 col-lg-4 col-sm-12 p-0 pl-sm-3 pr-sm-3">
                              <div className="residences-card position-relative">
                                <div className="residences-img">
                                  <Img fluid={item.residential_links.document[0].data.banner[0].image.localFile.childImageSharp.fluid} alt="" width="100%"/>
                                </div>
                                <div className="rectangle position-absolute d-flex flex-column justify-content-around">
                                    <div className="rectangle-title">
                                        <h4 className="text-uppercase m-0 inner-section-title">{item.residential_links.document[0].data.title.text}</h4>
                                    </div>
                                    <div className="apartment-size d-flex justify-content-between align-items-center">
                                      <span className="text-uppercase">{item.residential_links.document[0].data.flat_bhk.text}</span>
                                      <Link to={`residential/${item.residential_links.uid}`}>
                                        <i className="fas fa-arrow-right"></i>
                                      </Link>
                                    </div>
                                    <div className="project-location">
                                      <i className="fas fa-map-marker-alt"></i>
                                      <span>{item.residential_links.document[0].data.flat_address.text}</span>
                                    </div>
                                </div>
                              </div>
                            </div>
                          )}
                        }):
                        residentialData[0].node.data.ongoing_projects.map((item,value)=>{
                          return(
                              <div key={value} className="col-md-6 col-lg-4 col-sm-12 p-0 pl-sm-3 pr-sm-3">
                                <div className="residences-card position-relative">
                                  <div className="residences-img">
                                    <Img fluid={item.residential_links.document[0].data.banner[0].image.localFile.childImageSharp.fluid} alt="" width="100%"/>
                                  </div>
                                  <div className="rectangle position-absolute d-flex flex-column justify-content-around">
                                      <div className="rectangle-title">
                                          <h4 className="text-uppercase m-0 inner-section-title">{item.residential_links.document[0].data.title.text}</h4>
                                      </div>
                                      <div className="apartment-size d-flex justify-content-between align-items-center">
                                        <span className="text-uppercase">{item.residential_links.document[0].data.flat_bhk.text}</span>
                                        <Link to={`residential/${item.residential_links.uid}`}>
                                          <i className="fas fa-arrow-right"></i>
                                        </Link>
                                      </div>
                                      <div className="project-location">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>{item.residential_links.document[0].data.flat_address.text}</span>
                                      </div>
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
            <section className="complete-project position-relative">
              <div className="container">
                <div className="listing-heading d-flex align-items-center">
                  <h4 className="text-uppercase heading mb-0">Completed Projects</h4>
                </div>
                  <p className="text-left">{residentialData[0].node.data.completed_description.text}
                  </p>
                  <Slider  {...settings}>
                  {
                    residentialData[0].node.data.completed_project.map((item, value)=>{
                    return(
                      <div className="row"  key={value}> 
                        <div>
                          <div className="secondary-card position-relative ">
                            <div className="secondary-card-img">
                              <Img fluid={item.completed_links.document[0].data.banner[0].image.localFile.childImageSharp.fluid} alt="" width="100%"/>
                            </div>
                            <div className="secondary-card-rectangle position-absolute d-flex flex-column justify-content-around">
                              <div className="title">
                                <h4 className="text-uppercase m-0 inner-section-title">{item.completed_links.document[0].data.title.text}</h4>
                              </div>
                              <div className="apartment-size d-flex justify-content-between align-items-center">
                                <span className="text-uppercase">{item.completed_links.document[0].data.flat_bhk.text}</span>
                                <Link to={`residential/${item.completed_links.uid}`}>
                                  <i className="fas fa-arrow-right"></i>
                                </Link>
                              </div>
                              <div className="project-location">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{item.completed_links.document[0].data.flat_address.text}</span>
                              </div>
                            </div>
                          </div>
        
                        </div>
                      </div>
                    )
                  })
                  }
                </Slider>
                <span className="d-inline-block d-sm-none position-absolute pagination">
                   {this.state.activeSlide} of 4
                </span>
              </div>
            </section>
          </section>
          <Footer/>
      </Layout>
    )
  }
}

export const residentialPage = graphql`{
  allPrismicResidential{
  edges{
    node{
      uid
      data{
        title{
          text
        }
        description{
          text
        }
        ongoing_projects{
          residential_links{
            uid
            document{
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
                        }
                      }
                    }
                  }
                }
                flat_bhk{
                  text
                }
                flat_address{
                  text
                }
              }
            }
          }
        }

      completed_description{
        text
      }
      completed_project{
        completed_links{
          uid
          document{
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
                      }
                    }
                  }
                 }
               }
               flat_bhk{
                 text
               }
               flat_address{
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