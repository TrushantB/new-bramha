import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby";
import Commerical from '../pages/our-verticals-main/commercial';
import Residential from "../pages/our-verticals-main/residential";
import Hospitality from "../pages/our-verticals-main/hospitality";
import Leisure from "../pages/our-verticals-main/leisure";
import $ from 'jquery';
class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedVertical: null,
      residential: null,
      commercial: null,
      hospitality: null,
      leisure: null,
      contactFlag:false,
      mailFlag:false,
      chatFlag:false,
      ourVerticals:[
        {
          id:'residential',
          name:'residential',
          icon: 'far fa-building',
          class:'active'
        },
        {
          id:'commercial',
          name:'Commercial',
          icon: 'fas fa-city'
        },
        {
          id:'hospitality',
          name:'Hospitality',
          icon: 'far fa-hospital'
        },
        {
          id:'leisure',
          name:'Leisure',
          icon: 'fas fa-archway'
        }
      ]
    }
  }

  componentWillMount() {
    // $("#navdrawer").navdrawer();

    const residentialData = this.props.data.prismicResidential;
    this.setState({residential: residentialData})
    this.setState({selectedVertical : < Residential gallery = {residentialData}/>})

    const commercialData = this.props.data.prismicCommercial;
    this.setState({commercial: commercialData})

    const hospitalityData = this.props.data.prismicHospitality;
    this.setState({hospitality: hospitalityData})

    const leisureData  = this.props.data.prismicLeisureClub;
    this.setState({leisure: leisureData});
  }

  handleVerticals(event){
    switch(event.id){
      case 'residential': {
        this.setState({selectedVertical : < Residential gallery = {this.state.residential}/>})
      }
      break;

      case 'commercial': {
        this.setState({selectedVertical : < Commerical gallery = { this.state.commercial}/>})
      }
      break;

      case 'hospitality': {
        this.setState({selectedVertical : < Hospitality gallery = { this.state.hospitality}/>})
      }
      break;

      case 'leisure': {
        this.setState({selectedVertical : < Leisure gallery = {this.state.leisure} />})
      }
      break;
    }

    this.state.ourVerticals.map((item) => {
      if(item.id==event.id) {
        item.class = "active";
      } 
      else item.class="";
    })
  }
  render() {
    // let contactFlag=false;
    // function classHandle() {
    //   $("body").removeClass("drewer-open");
    //  }
    return (
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title="Home"/>
        <div>
          { this.state.selectedVertical}      
          {/* <div className="drawer-container">
            <div className="drawer-toggle" id="toggle" onClick={() => this.setState({contactFlag:!this.state.contactFlag})}>
              <i className="fas fa-phone"></i>
            </div>
            <div className="drawer-toggle" onClick={() => this.setState({mailFlag:!this.state.mailFlag})}>
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <div className="drawer-toggle" onClick={() => this.setState({chatFlag:!this.state.chatFlag})}>
              <i className="fas fa-comment-alt"></i>
            </div>
          </div> */}
          {
              this.state.contactFlag && 
            <div className="drawer-field" id="navigation" >
              <div className="hide text-right" onClick={() => this.setState({contactFlag:false})}>
                <i className="fas fa-times"></i>
              </div>
              Hi this is contact
            </div>

            }
            {
              this.state.mailFlag && 
            <div className="drawer-field" id="navigation" >
              <div className="hide text-right" onClick={() => this.setState({mailFlag:false})}>
                <i className="fas fa-times"></i>
              </div>
              <div className="mail">
                <form name="customer" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="contact-form-bg" id="customer">
                      <div className="container">
                        <div className="form-row">
                          <div className="col-sm-12 form-group  ">
                              <input type="text" className="form-control" id="name" placeholder="Your Name*" name="name" autoComplete="false" required/>
                          </div>
                          <div className="col-sm-12 form-group  ">
                              <input type="text" className="form-control" id="email" placeholder="Your Email*" autoComplete="false" name="email" required/>
                          </div>
                          <div className="col-sm-12 form-group  ">
                              <input type="number" className="form-control" id="phone-number" placeholder="Your Phone Number*" name="phone-number" required/>
                          </div>
                          <div className="col-sm-12 form-group  ">
                              <input type="number" className="form-control" id="budget" placeholder="Budget" name="budget" required/>
                          </div>
                          <div className="col-sm-12 form-group  ">
                              <input type="text" className="form-control" id="city" placeholder="City" name="city" required/>
                          </div>
                          <div className="form-group col-md-12">
                            <textarea className="form-control" rows="5" id="message" placeholder="Additional Message" name="message" required></textarea>
                          </div>
                        </div>
                        <div className="sumbit text-center mt-sm-0 mt-4">
                          <button type="submit" className="btn-secondary">Submit</button>
                        </div>  
                      </div> 
                    </div>
                </form>
              </div>
            </div>
            }
            {
              this.state.chatFlag && 
            <div className="drawer-field" id="navigation" >
              <div className="hide text-right" onClick={() => this.setState({chatFlag:false})}>
                <i className="fas fa-times"></i>
              </div>
              Plugin for chat goes here...!
            </div>

            }
          <footer className="our-verticals-tabs d-flex">
            <div className="container d-flex">
              <ul className="p-0 d-flex w-100 justify-content-around list-style-none text-uppercase nav nav-tabs border-0" id="myTab" role="tablist">
                {
                  this.state.ourVerticals.map((item) => {
                    return(
                      <li key={item.id} className={`nav-item d-flex align-items-center ${item.class}`} id={item.id} data-toggle="tab" href={`#{item.id}`} role="tab" aria-controls={item.id} aria-selected="true" onClick={()=> {this.handleVerticals(item)}}>
                        <Link to='/' className="tab d-flex align-items-center">
                          <i className={item.icon}></i>
                          <span >{item.name}</span>
                      </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </footer>
        </div>
      </Layout>
    )
  }
}

export default IndexPage


export const pageDataResidential = graphql` {
  prismicResidential {
    data {
      banner {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      banner_caption_logo {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  prismicCommercial {
    data {
      banner {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      banner_caption_logo {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  prismicHospitality {
    data {
      banner {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      banner_caption_logo {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  prismicLeisureClub {
    data {
      banner {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      banner_logo_caption {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}`