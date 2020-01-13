import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby";
import Commerical from '../pages/our-verticals-main/commercial';
import Residential from "../pages/our-verticals-main/residential";
import Hospitality from "../pages/our-verticals-main/hospitality";
import Leisure from "../pages/our-verticals-main/leisure";

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedVertical: null,
      residential: null,
      commercial: null,
      hospitality: null,
      leisure: null,
      ourVerticals:[
        {
          id:'residential',
          name:'residential',
          class:'active'
        },
        {
          id:'commercial',
          name:'Commercial',
        },
        {
          id:'hospitality',
          name:'Hospitality'
        },
        {
          id:'leisure',
          name:'Leisure'
        }
      ]
    }
  }

  componentWillMount() {
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
    return (
      <Layout>
        <SEO title="Home"/>
        <div>
          { this.state.selectedVertical}
          <footer className="our-verticals-tabs d-flex">
            <div className="container d-flex">
              <ul className="p-0 d-flex w-100 justify-content-around list-style-none text-uppercase nav nav-tabs border-0" id="myTab" role="tablist">
                {
                  this.state.ourVerticals.map((item) => {
                    return(
                      <li key={item.id} className={`nav-item d-flex align-items-center ${item.class}`} id={item.id} data-toggle="tab" href={`#{item.id}`} role="tab" aria-controls={item.id} aria-selected="true" onClick={()=> {this.handleVerticals(item)}}>
                        <Link to='/' className="tab d-flex">
                          <i className="far fa-building"></i>
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
    }
  }
}`