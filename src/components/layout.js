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
        <footer style={{ bottom: 30, textAlign: "center" }}>
          <Link style={{paddingRight: 10}} to="/real-estate"> Real Estate</Link>
          <Link style={{paddingRight: 10}} to="/blog">Blog</Link>
          <Link style={{paddingRight: 10}} to="/careers">Careers</Link>
          <Link style={{paddingRight: 10}} to="/channel-partners">Channel Partners</Link>
          <Link style={{paddingRight: 10}} to="/site-map">Site Map</Link>
          <Link style={{paddingRight: 10}} to="/privacy-policy">Privacy Policy</Link>
          <Link style={{paddingRight: 10}} to="/desclaimer">Desclaimer</Link>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
