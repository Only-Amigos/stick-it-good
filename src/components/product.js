import PropTypes from "prop-types"
import React from "react"
import Img from 'gatsby-image'

const Product = ({ img, title, price }) => (
  <div className="product-item-container">
    <Img
      fluid={img}
      alt={title}
      style={{ maxWidth: '400px' }}
    />
    <div className="product-item-details">
      <h3>{title}</h3>
      <span>$ </span>
      <span>{price}</span>
    </div>
  </div>
)

Product.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
  price: PropTypes.string,
}

export default Product
