import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Stick It Good" />
    <div>
      <h1 className="text-center text-4xl font-headline font-semibold uppercase text-grey-700 py-4">Animated Sticker Page</h1>
      <ul className="grid grid-cols-4 gap-4 pb-6">
        {data.allContentfulProduct.edges.map(({ node }, idx) => (
          <li className="bg-orange-100 border-2 border-orange-200" key={idx}>
            <Link to={`/product/${node.slug}`}>
              <div className="bg-white p-3">
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
