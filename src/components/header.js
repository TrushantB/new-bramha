import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h6 style={{ margin: 10, padding:50, marginLeft:"35%" }}>
        <Link style={{paddingRight: 10}} to="/">HOME </Link>
        <Link style={{paddingRight: 10}} to="/about-us"> ABOUT US</Link>
        <Link style={{paddingRight: 10}} to="/our-verticals"> OUR VERTICALS</Link>
        <Link style={{paddingRight: 10}} to="/partners"> PARTNERS</Link>
        <Link style={{paddingRight: 10}} to="/knoweldge-hub">KNOWELDGE HUB</Link>
        <Link style={{paddingRight: 10}} to="/careers">CAREERS</Link>
        <Link style={{paddingRight: 10}} to="/media-and-events">MEDIA & EVENTS</Link>
        <Link style={{paddingRight: 10}} to="/contacts">CONTACT</Link>
      </h6>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
