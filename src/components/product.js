import PropTypes from "prop-types"
import React from "react"
import Img from 'gatsby-image'

const toggleDropdown = (() => {
  const dropdownMenu = document.querySelector(".product__dropdown--menu");
  dropdownMenu.classList.toggle("hidden");
})

const toggleDropdownA11y = ((event) => {
  const dropdownMenu = document.querySelector(".product__dropdown--menu");
  dropdownMenu.classList.add("isActive")
  // Return Key
  if(event.keyCode === 13) {
    dropdownMenu.classList.toggle("hidden");
    const size = document.querySelector(".product__size--item");
    size.focus();
  }
})

const closeDropdown = (() => {
  const dropdownMenu = document.querySelector(".product__dropdown--menu");
  const isActive = dropdownMenu.classList.contains("isActive")
  // allows selection of list item to occur before closing menu
  setTimeout(() => {
    if (!isActive) {
      dropdownMenu.classList.add("hidden");
    }
  }, 150);
})

const updateSelection = (id => {
  const dropdownMenu = document.querySelector(".product__dropdown--menu");
  const sizeSelection = document.querySelector(".product__size--selection");
  const sizes = document.querySelectorAll(".product__size--item");
  [...sizes].forEach((size, idx) => {
    if (id === idx) {
      sizeSelection.innerText = size.innerText;
      dropdownMenu.classList.remove("isActive")
      size.parentElement.classList.add("hidden");
    }
  })
})

// Grouping controls for Accessibility
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets
const updateSelectionA11y = ((id, event) => {
  const dropdownMenu = document.querySelector(".product__dropdown--menu");
  const sizeSelection = document.querySelector(".product__size--selection");
  const sizes = document.querySelectorAll(".product__size--item");
  [...sizes].forEach((size, idx) => {
    // Down Key
    if(id === idx && event.keyCode === 40) {
      size.setAttribute("aria-selected", "false");
      if (size.nextElementSibling) {
        size.nextElementSibling.focus();
      }
    }
    // Up Key
    if((id === idx && event.keyCode === 38)) {
      size.setAttribute("aria-selected", "false");
      if (size.previousElementSibling) {
        size.previousElementSibling.focus();
      }
    }
    // Return Key
    if(id === idx && event.keyCode === 13) {
      size.setAttribute("aria-selected", "true");
      dropdownMenu.classList.remove("isActive")
      sizeSelection.innerText = size.innerText;
      size.parentElement.classList.add("hidden");
    }
    // Tab Key
    if(event.keyCode === 9) {
      size.parentElement.classList.add("hidden");
    }
  })
})


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
      <span className="text-grey-700">Size:</span>
      <div className="w-full block relative">
        <button
          onClick={toggleDropdown}
          onKeyDown={toggleDropdownA11y}
          onBlur={closeDropdown}
          aria-haspopup="true"
          aria-expanded="false"
          className="product__dropdown w-full text-grey-700 border-2 border-grey-300 px-4 py-1">
          <div className="flex justify-between items-center">
            <span className="product__size--selection capitalize">Select</span>
            <svg className="w-4 h-4" viewBox="0 0 20 10">
              <polyline points="2,2 10,10 18,2" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="milter" fill="none"/>
            </svg>
          </div>
        </button>
        <ul tabIndex="0"
          className="product__dropdown--menu absolute hidden left-0 w-full text-left text-grey-700">
          {sizes.map((size, idx) => (
            <li key={idx}
              onClick={updateSelection.bind(this, idx)}
              onKeyDown={updateSelectionA11y.bind(this, idx)}
              tabIndex="-1"
              className="product__size--item block bg-grey-200 hover:bg-grey-400 border-b border-grey-300 last:border-b-0 capitalize px-4 py-2">
                {size}
            </li>
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
