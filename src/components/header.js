import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"
import Img from 'gatsby-image'

const Header = ({ siteTitle, navItems, headerImage }) => (
  <header>
    <Navbar navItems={navItems} />
    {headerImage.map(({ node }, idx) => (
      <Img
        key={idx}
        className="h-screen"
        fluid={node.heroImage.fluid}
        alt={node.title}
      />
    ))}
    <h1 className="absolute top-8 left-1/2 w-3/4 text-white text-5xl font-headline font-semibold uppercase text-center transform -translate-x-1/2">{siteTitle}</h1>
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
