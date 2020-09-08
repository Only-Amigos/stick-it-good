import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Navbar = ({ navItems }) => (
  <nav className="fixed w-screen z-10 bg-grey-800 font-headline font-light uppercase p-2">
    <div className="max-w-screen-lg flex justify-between items-center mx-auto">
      <div className="nav__items--left flex items-center">
        <div className="w-12 mr-12">
          <Link className="text-white hover:text-orange-500" to={`/`}><Image /></Link>
        </div>
        <ul className="flex items-center">
          {navItems.map(({ node }, index) => (
            <li key={index}>
              <Link className="text-white hover:text-orange-500 px-4" to={`/${node.slug}`}>{node.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav__items--right">
        <Link className="text-white hover:text-orange-500 px-4" to={`/`}>Cart</Link>
      </div>
    </div>
  </nav>
)

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object),
}

export default Navbar
