import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const toggleMobileNav = (() => {
  const navItem = document.querySelectorAll(".nav__item--mobile");
  navItem.forEach(item => {
    item.classList.toggle('hidden')
    item.classList.toggle('flex')
  })
})

const Navbar = ({ navItems }) => (
  <div>
    {/* Desktop */}
    <nav className="fixed z-10 w-screen hidden sm:block bg-blue-800 font-headline font-light uppercase p-2">
      <div className="max-w-screen-lg flex justify-between items-center mx-auto">
        <div className="nav__items--left flex items-center">
          <div className="w-12 mr-12">
            <Image />
          </div>
          <ul className="flex items-center">
            {navItems.map(({ node }, index) => (
              <li key={index}>
                <Link
                  className="text-white hover:text-orange-500 px-4"
                  to={ node.slug === null ? `/` : `/${node.slug}/` }>
                    {node.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav__items--right">
          <Link className="text-white hover:text-orange-500 px-4" to={`/`}>Cart</Link>
        </div>
      </div>
    </nav>

    {/* Mobile */}
    <nav className="fixed z-10 w-screen flex sm:hidden flex-col items-center bg-blue-800 font-headline font-light uppercase">
      <button onClick={toggleMobileNav} className="w-full h-16 text-white">
        <div className="w-16 mx-auto p-2">
          <Image />
        </div>
      </button>
      {navItems.map(({ node }, index) => (
        <Link key={index}
          onClick={toggleMobileNav}
          className="nav__item--mobile hidden justify-center w-full text-white hover:bg-orange-500 border-t border-grey-700 py-4"
          to={ node.slug === null ? `/` : `/${node.slug}/` }>
            {node.name}
        </Link>
      ))}
    </nav>
  </div>
)

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object),
}

export default Navbar
