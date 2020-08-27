import PropTypes from "prop-types"
import React from "react"
import Img from 'gatsby-image'

const Product = ({ image, name, price }) => (
  <div className="product-item-container">
    <Img
      fluid={image}
      alt={name}
      style={{ maxWidth: '300px' }}
    />
    <div className="product-item-details">
      <h3>{name}</h3>
      <span>$ </span>
      <span>{price}</span>
    </div>
  </div>
)

Product.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.string,
}

export default Product
