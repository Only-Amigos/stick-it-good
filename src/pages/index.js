import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/main.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-3xl text-blue-600">List of Products</h1>
    <ul>
      {data.allContentfulProduct.edges.map(({ node, index }) => (
        <li key={index}>
          <Link className="text-orange-600" to={`/product/${node.slug}`}>{node.name}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

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
