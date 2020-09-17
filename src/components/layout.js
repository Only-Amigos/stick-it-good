/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteHeaderQuery {
      allContentfulNav(sort: {fields: order}) {
        edges {
          node {
            slug
            name
          }
        }
      }
      allContentfulHeader {
        edges {
          node {
            title
            heroImage {
              fluid {
                ...GatsbyContentfulFluid_noBase64
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title}
        navItems={data.allContentfulNav.edges}
        headerImage={data.allContentfulHeader.edges}/>
      <div className="container mx-auto px-10 pt-10">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
