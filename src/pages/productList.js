import React from "react"
import { graphql, Link } from "gatsby"

const ProductListPage = ({ data }) => (
  <div>
    <h1>List of Products</h1>
    <ul>
      {data.allContentfulProduct.edges.map(({ node, index }) => (
        <li key={index}>
          <Link to={`/product/${node.slug}`}>{node.name}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default ProductListPage

export const query = graphql`
  {
    allContentfulProduct(sort: {fields: name}) {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`
