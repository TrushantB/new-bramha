import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import img2 from '../styles/images/banner.jpg'
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
    <section className="banner-section">
      <img src={img2} alt="banner here" className="banner-img" style={{width:'100%'}}/>
    </section>
    <section className="our-verticals-tabs container">
      <ul className="p-0 d-flex w-100 justify-content-around list-style-none text-uppercase nav nav-tabs border-0" id="myTab" role="tablist">
        <li className="nav-item active" id="residencial-tab" data-toggle="tab" href="#residencial" role="tab" aria-controls="residencial" aria-selected="true">
          <Link to='/' className="tab">            
              <i className="far fa-building"></i>
            <span> residencial </span>
          </Link>
        </li>
        <li className="nav-item"  id="commercial-tab" data-toggle="tab" href="#commercial" role="tab" aria-controls="commercial" aria-selected="true">
          <a href="#" className="tab">            
            <i className="fas fa-hotel"></i>
            <span>commercial</span>
          </a>
        </li>
        <li className="nav-item"  id="hospitality-tab" data-toggle="tab" href="#hospitality" role="tab" aria-controls="hospitality" aria-selected="true">
          <a href="#" className="tab">            
              <i className="far fa-hospital"></i>
            <span>hospitality</span>
          </a>
        </li>
        <li className="nav-item"  id="leisure-tab" data-toggle="tab" href="#leisure" role="tab" aria-controls="leisure" aria-selected="true">
          <a href="#" className="tab">            
              <i className="fas fa-hot-tub"></i>
            <span>leisure</span>
          </a>
        </li>
      </ul>
    </section>
    </div>
  </Layout>
)

export default IndexPage
