import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import img1 from '../images/logo.png';
const ThankYou = () => (
    
  <div className="thank-you-page-wrapper py-5 px-4">
    <div className="d-flex align-items-center justify-content-center py-5 flex-column">
        <div className="logo">
          <img src={img1} alt="BramhaCorp Logo" className="logo-img"/>
        </div>
        <div className="headings">
          <h1 className="title mt-5 mb-3">Thank you for showing interest.</h1>
          <h2 className="sub-title mb-0 mb-sm-2">Our representative will contact you shortly.</h2>
        </div>
        <div className="visit-website-button mt-5">
            <a href="#" className="btn-secondary">
                visit Our website
            </a>
        </div>
    </div>
  </div>
)

export default ThankYou
