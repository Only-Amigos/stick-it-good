import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from "../components/seo"
import Product from '../components/product'

class ProductDetailsTemplate extends React.Component {
  render() {
    const product = this.props.data.contentfulProduct;

    return (
      <Layout location={this.props.location}>
        <SEO title={product.name}
          description={product.description.description}
          keywords={`${product.name} stickers`} />
        <Product
          image={product.image.fluid}
          name={product.name}
          price={product.price}
          desc={product.description.description}
          sizes={product.sizes}
        />
      </Layout>
    )
  }
}

export default ProductDetailsTemplate

// Image options examples
// https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image

// ...GatsbyContentfulFluid // adds a blur up effect while image is loading
// ...GatsbyContentfulFluid_noBase64  // removes the blur up effect while image is loading
// ...GatsbyContentfulFluid_tracedSVG  // adds a traced placeholder SVGs while the image is loading

export const pageQuery = graphql`
  query ProductBySlug($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      price
      image {
        fluid(maxWidth: 400) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
      description {
        description
      }
      sizes
    }
  }
`
