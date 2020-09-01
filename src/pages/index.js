import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1 className="text-center text-3xl text-gray-700 py-4">Animated Sticker Page</h1>
      <ul className="grid grid-cols-4 gap-4 pb-12">
        {data.allContentfulProduct.edges.map(({ node }, idx) => (
          <li className="border-2 border-orange-200" key={idx}>
            <Link to={`/product/${node.slug}`}>
              <Img className="m-3"
                fluid={node.image.fluid}
                alt={node.name}
              />
              <div className="text-center text-gray-700 bg-orange-100 border-orange-200 border-t-2 p-3">
                <p className="text-l">{node.name}</p>
                <span>$ </span>
                <span>{node.price}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
          price
          image {
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  }
`
