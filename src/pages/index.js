import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PreviewCards from "../components/previewCards"
import "../styles/main.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Stick It Good" />
    <div>
      <h2 className="sub-header text-center uppercase py-8">All Items</h2>
      <PreviewCards data={data.allContentfulProduct.edges}/>
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
          categories
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
