import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from "../components/seo"
import PreviewCards from "../components/previewCards"

class ProductCategoriesTemplate extends React.Component {
  render() {
    const products = this.props.data.allContentfulProduct;
    const category = this.props.pageContext.slug;

    return (
      <Layout>
      <SEO title="Stick It Good" />
      <div>
        <h2 className="sub-header text-center uppercase py-8">{category}</h2>
        <PreviewCards data={products.edges}/>
      </div>
    </Layout>
    )
  }
}

export default ProductCategoriesTemplate

// Docs for Filtering by reference field:
// https://www.gatsbyjs.com/docs/query-filters/#elemmatch
// https://www.contentfulcommunity.com/t/how-do-i-filter-entries-by-category-with-graphql-and-gatsby/4189

// search query `$slug` is coming from the context in gatsby-node.js
export const query = graphql`
  query ProductByCategories($slug: String!) {
    allContentfulProduct(sort: {fields: name}, filter: {categoriesByRefField: {elemMatch: {slug: {eq: $slug}}}}) {
      edges {
        node {
          name
          slug
          categoriesByRefField {
            slug
          }
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
