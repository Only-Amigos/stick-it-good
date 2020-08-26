import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

// import heroStyles from '../components/hero.module.css'

class ProductDetailsTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div>
            <Img
              alt={post.title}
              fluid={post.heroImage.fluid}
              style={{ maxWidth: '400px' }}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p>{post.line1}</p>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
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

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      line1
      heroImage {
        fluid(maxWidth: 400, background: "rgb:ffffff") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
