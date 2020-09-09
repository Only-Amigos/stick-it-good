import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"

const Header = ({ siteTitle, navItems }) => (
  <header>
    <Navbar navItems={navItems} />
    {/* <h1>{siteTitle}</h1> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  navItems: PropTypes.arrayOf(PropTypes.object),
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
