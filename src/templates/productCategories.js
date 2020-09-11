import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from "../components/seo"
import PreviewCards from "../components/previewCards"

class ProductCategoriesTemplate extends React.Component {
  render() {
    const products = this.props.data.allContentfulProduct;

    return (
      <Layout>
      <SEO title="Stick It Good" />
      <div>
        <h1 className="text-center text-4xl font-headline font-semibold uppercase text-grey-700 py-4">Stick It Good</h1>
        <PreviewCards data={products.edges}/>
      </div>
    </Layout>
    )
  }
}

export default ProductCategoriesTemplate

// search query `$slug` is coming from the context in gatsby-node.js
export const query = graphql`
  query ProductByCategories($slug: String!) {
    allContentfulProduct(sort: {fields: name}, filter: {categories: {eq: $slug}}) {
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
