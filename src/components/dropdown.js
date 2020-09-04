import PropTypes from "prop-types"
import React from "react"

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


const Dropdown = ( {sizes} ) => (
  <div>
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
  </div>
)

Dropdown.propTypes = {
  sizes: PropTypes.array,
}

export default Dropdown
