import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Commerical from "./our-verticals/commercial"
import Residential from "./our-verticals/residential"
import Hospitality from "./our-verticals/hospitality"
import Leisure from "./our-verticals/leisure"

class IndexPage extends React.Component {
  constructor(){
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

  render(){
    return(
    <Layout>
      <SEO title="Home" />
      <div>
      {this.state.selectedVertical}
      <section className="our-verticals-tabs container">
        <ul className="p-0 d-flex w-100 justify-content-around list-style-none text-uppercase nav nav-tabs border-0" id="myTab" role="tablist">
          <li className="nav-item active" id="residencial-tab" data-toggle="tab" href="#residencial" role="tab" aria-controls="residencial" aria-selected="true">
            <Link to='/' className="tab">            
                <i className="far fa-building"></i>
              <span onClick={()=> {this.handleVerticals('residencial')}}> residencial </span>
            </Link>
          </li>
          <li className="nav-item"  id="commercial-tab" data-toggle="tab" href="#commercial" role="tab" aria-controls="commercial" aria-selected="true">
            <a href="#" className="tab">            
              <i className="fas fa-hotel"></i>
              <span onClick={()=> {this.handleVerticals('commercial')}}>commercial</span>
            </a>
          </li>
          <li className="nav-item"  id="hospitality-tab" data-toggle="tab" href="#hospitality" role="tab" aria-controls="hospitality" aria-selected="true">
            <a href="#" className="tab">            
                <i className="far fa-hospital"></i>
              <span onClick={()=> {this.handleVerticals('hospitality')}}>hospitality</span>
            </a>
          </li>
          <li className="nav-item"  id="leisure-tab" data-toggle="tab" href="#leisure" role="tab" aria-controls="leisure" aria-selected="true">
            <a href="#" className="tab">            
                <i className="fas fa-hot-tub"></i>
              <span onClick={()=> {this.handleVerticals('leisure')}}>leisure</span>
            </a>
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

