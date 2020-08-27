import React from 'react'
import { graphql, Link } from "gatsby"
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import Product from '../components/product'

// import heroStyles from '../components/hero.module.css'

class ProductDetailsTemplate extends React.Component {
  render() {
    const product = this.props.data.contentfulProduct;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${product.name} | ${siteTitle}`} />
          <Link to={`/productList`}>List of Products</Link>
          <div>
            <Product
              image={product.image.fluid}
              name={product.name}
              price={product.price}
            />
          </div>
          <div className="wrapper">
            <div
              // dangerouslySetInnerHTML={{
              //   __html: post.body.childMarkdownRemark.html,
              // }}
            />
          </div>
        </div>
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
    }
  }
`
