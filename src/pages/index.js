import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
// import "../styles/css/custom.css"
// import '../styles/scss/main.scss';
import { Link } from "gatsby"
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
          id:'residencial',
          name:'Residencial',
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
    this.setState({selectedVertical : < Residential galleryData = {residentialData}/>})

    const commercialData = this.props.data.prismicCommercial;
    this.setState({commercial: commercialData})
    this.setState({selectedVertical : < Commerical gallery = { commercialData } />})

    const hospitalityData = this.props.data.prismicHospitality;
    this.setState({hospitality: hospitalityData})
    this.setState({selectedVertical : < Hospitality gallery = { hospitalityData } />})

    const leisureData  = this.props.data.prismicLeisureClub;
    this.setState({leisure: leisureData});
    this.setState({selectedVertical : < Leisure gallery = { leisureData } />})
  }

  handleVerticals(event){
    switch(event.id){
      case 'residencial': {
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
          {this.state.selectedVertical}
          <section className="our-verticals-tabs container">
            <ul className="p-0 d-flex w-100 justify-content-around list-style-none text-uppercase nav nav-tabs border-0" id="myTab" role="tablist">
              {
                this.state.ourVerticals.map((item) => {
                  return(
                    <li key={item.id} className={`nav-item ${item.class}`} id={item.id} data-toggle="tab" href={`#{item.id}`} role="tab" aria-controls={item.id} aria-selected="true" onClick={()=> {this.handleVerticals(item)}}>
                      <Link to='/' className="tab" >
                      <i className="far fa-building"></i>
                      <span >{item.name}</span>
                     </Link>
                    </li>
                  )
                })
              }
              {/* <li className="nav-item active" id="residencial-tab" data-toggle="tab" href="#residencial" role="tab" aria-controls="residencial" aria-selected="true">
                <Link to='/' className="tab" onClick={()=> {this.handleVerticals('residencial')}}>
                  <i className="far fa-building"></i>
                  <span > residencial </span>
                </Link>
              </li>
              <li className="nav-item" id="commercial-tab" data-toggle="tab" href="#commercial" role="tab" aria-controls="commercial" aria-selected="true">
                <Link to="/" className="tab" onClick={()=> {this.handleVerticals('commercial')}}>
                  <i className="fas fa-hotel"></i>
                  <span >commercial</span>
                  
                </Link>
              </li>
              <li className="nav-item" id="hospitality-tab" data-toggle="tab" href="#hospitality" role="tab" aria-controls="hospitality" aria-selected="true">
                <Link to="/" className="tab" onClick={()=> {this.handleVerticals('hospitality')}}>
                  <i className="far fa-hospital"></i>
                  <span >hospitality</span>
                </Link>
              </li>
              <li className="nav-item" id="leisure-tab" data-toggle="tab" href="#leisure" role="tab" aria-controls="leisure" aria-selected="true">
                <Link to="/" className="tab" onClick={()=> {this.handleVerticals('leisure')}}>
                  <i className="fas fa-hot-tub"></i>
                  <span >leisure</span>
                </Link>
              </li> */}
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default IndexPage


export const pageDataResidential = graphql`{
  prismicResidential{
    data{
      banner{
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
			gallery{
        image{
          url
        }
      }
    }
  }
  prismicCommercial{
    data{
      banner{
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      gallery{
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
    }
  }
  prismicHospitality{
    data{
      banner{
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      gallery{
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
    }
  }
  prismicLeisureClub{
    data{
      banner{
        localFile {
          childImageSharp {
            fluid(maxWidth: 1150, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      gallery{
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
    }
  }
}`

