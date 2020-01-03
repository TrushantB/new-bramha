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
      leisure: null
    }
  }

  componentWillMount() {
    const residentialData = this.props.data.prismicResidential;
    this.setState({residential: residentialData})
    this.setState({selectedVertical : < Residential galleryData = {residentialData}/>})

    const commercialData = this.props.data.prismicCommercial.data;
    this.setState({commercial: commercialData})
    this.setState({selectedVertical : < Commerical galleryData = { commercialData } />})

    const hospitalityData = this.props.data.prismicHospitality.data;
    this.setState({hospitality: hospitalityData})
    this.setState({selectedVertical : < Hospitality gallery = { hospitalityData } />})

    const leisureData  = this.props.data.prismicLeisureClub.data;
    this.setState({leisure: leisureData});
    this.setState({selectedVertical : < Leisure gallery = { leisureData } />})
  }

  handleVerticals(event){
    switch(event){
      case 'residencial': {
        this.setState({selectedVertical : < Residential gallery = {this.state.residential}/>})
      }
      break;

      case 'commercial': {
        this.setState({selectedVertical : < Commerical galleryData = { this.state.commercial}/>})
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
  }
  
  render() {
    return (
      <Layout>
        <SEO title="Home"/>
        <div>
          {this.state.selectedVertical}
          <section className="our-verticals-tabs container">
            <ul className="p-0 d-flex w-100 justify-content-around list-style-none text-uppercase nav nav-tabs border-0" id="myTab" role="tablist">
              <li className="nav-item active" id="residencial-tab" data-toggle="tab" href="#residencial" role="tab" aria-controls="residencial" aria-selected="true">
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
              </li>
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
			gallery{
        image{
          url
        }
      }
    }
  }
  prismicCommercial{
    data{
      gallery{
        image{
          url
        }
      }
    }
  }
  prismicHospitality{
    data{
      gallery{
        image{
          url
        }
      }
    }
  }
  prismicLeisureClub{
    data{
      gallery{
        image{
          url
        }
      }
    }
  }
}`

