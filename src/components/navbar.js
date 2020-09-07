import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Navbar = () => (
  <div>
    <nav className="fixed w-screen z-10 font-headline font-light uppercase mx-auto">
      <div className="bg-black opacity-75 p-2">
        <div className="max-w-screen-lg flex justify-between items-center mx-auto">
          <div className="flex items-center">
            <div className="w-12 mr-12">
              <Link className="text-white hover:text-orange-500" to={`/`}><Image /></Link>
            </div>
            <Link className="text-white hover:text-orange-500 px-4" to={`/`}>Nav Item</Link>
            <Link className="text-white hover:text-orange-500 px-4" to={`/`}>Nav Item</Link>
            <Link className="text-white hover:text-orange-500 px-4" to={`/`}>Nav Item</Link>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export default Navbar
