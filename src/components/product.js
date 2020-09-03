import PropTypes from "prop-types"
import React from "react"
import Img from 'gatsby-image'

const Product = ({ image, name, price, desc, sizes }) => (
  <div className="flex mx-12 pb-12">
    {/* Image, Description */}
    <div className="w-1/2 mr-8">
      <div className="border-t-2 border-l-2 border-r-2 border-orange-200 p-12">
        <Img
          fluid={image}
          alt={name}
        />
      </div>
      <p className="text-grey-700 bg-orange-100 border-2 border-orange-200 p-4">{desc}</p>
    </div>

    <div className="flex flex-col w-1/2">
      {/* Title, Price */}
      <h3 className="text-4xl font-headline font-semibold text-grey-700">{name}</h3>
      <div className="text-grey-700 py-4">
        <span>$ </span>
        <span>{price}</span>
      </div>
      {/* Size dropdown */}
      <div className="dropdown block relative">
        <button className="flex justify-between items-center w-full text-grey-700 border-2 border-grey-300 px-4 py-1">
          <span>Size</span>
          <svg className="w-4 h-4" viewBox="0 0 20 10">
          <polyline points="2,2 10,10 18,2" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="milter" fill="none"/>
        </svg>
        </button>
        <ul className="dropdown-menu hidden">
          {sizes.map(size => (
            <li>{size}</li>
          ))}
        </ul>
      </div>
      {/* Add to cart, Key features */}
      <button className="font-semibold text-grey-800 bg-orange-300 border-2 border-orange-300 my-5 p-1">Add to Cart</button>
      <p className="font-bold text-grey-700 pt-4 pb-4">Key Features:</p>
      <p className="text-grey-700">REGULAR: Height 5.5" x Width 4.4"<br /> MINI: Height 3" x Width 2.4"<br /><br /> Gummi bears biscuit pudding apple pie bonbon dessert tiramisu gummies gingerbread. Caramels toffee wafer toffee cake marshmallow carrot cake croissant cupcake. Biscuit gummies dessert dessert. Chocolate carrot cake sweet dragée. </p>
    </div>
  </div>
)

Product.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.number,
  desc: PropTypes.string,
  sizes: PropTypes.array,
}

export default Product
