import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

const PreviewCards = ( {data} ) => (
  <ul className="max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto pb-6">
    {data.map(({ node }, idx) => (
      <li className="bg-orange-100 border-2 border-orange-200" key={idx}>
        <Link to={`/product/${node.slug}`}>
          <div className="bg-white">
            <Img
              fluid={node.image.fluid}
              alt={node.name}
            />
          </div>
          <div className="text-center text-grey-700 border-orange-200 border-t-2 p-1">
            <p className="text-l">{node.name}</p>
            <span>$ </span>
            <span>{node.price}</span>
          </div>
        </Link>
      </li>
    ))}
  </ul>
)

PreviewCards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

export default PreviewCards
