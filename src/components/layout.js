/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <footer >
        <div className="container"> 
          <div className="row">
            <div className="col-md-12"> 
              <div className="footer-menu mt-5">
                <ul className="d-flex list-unstyled justify-content-center bottom-border flex-wrap ">
                  <li className="nav-item mb-4 ">
                    <a href="#"> Real Estate</a>
                  </li>
                  <li className="nav-item mb-4">
                    <a  href="#"> Blog</a>
                  </li>
                  <li className="nav-item mb-4">
                    <a href="#"> channel Partner</a>
                  </li>
                  <li className="nav-item mb-4">
                    <a href="#"> Career</a>
                  </li>
                  <li className="nav-item mb-4">
                    <a href="#"> Site map</a>
                  </li>
                  <li className="nav-item mb-4">
                    <a className=" " href="#">Private Privacy</a>
                  </li>
                  <li className="nav-item mb-4">
                    <a href="#">Disclaimer</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="footer-social-icon mb-5">
                <ul className="d-flex list-unstyled justify-content-center ">
                  <li className="background-circle">
                    <a href=""><i className="fab fa-facebook-f"></i></a>
                  </li>
                  <li className="background-circle">
                    <a href=""><i className="fab fa-twitter"></i></a>
                  </li>
                  <li className="background-circle">
                    <a href=""><i className="fab fa-instagram"></i></a>
                  </li >
                  <li className="background-circle" >
                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                  </li>
                  <li className="background-circle" >
                    <a href=""><i className="fas fa-caret-right"></i></a>
                  </li>
                </ul>        
              </div>
              <div className="text-center text-white copyright">
                <p><a href="">Bramhacorp Ltd</a> ©2019. All reserved.</p>
              </div>
            </div>
          </div>
        </div>  
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
