const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // Making multiple create page requests
  // https://swas.io/blog/using-multiple-queries-on-gatsbyjs-createpages-node-api/
  return new Promise((resolve, reject) => {
    const productDetails = path.resolve('./src/templates/productDetails.js')
    const productCategories = path.resolve('./src/templates/productCategories.js')
    resolve(
      graphql(
        `
          {
            allContentfulProduct {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            allContentfulNav {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const products = result.data.allContentfulProduct.edges
        products.forEach(product => {
          createPage({
            path: `/product/${product.node.slug}/`,
            component: productDetails,
            context: {
              slug: product.node.slug,
            },
          })
        })

        const categories = result.data.allContentfulNav.edges
        categories.forEach(category => {
          createPage({
            path: `/${category.node.slug}/`,
            component: productCategories,
            context: {
              slug: category.node.slug || '',
            },
          })
        })
      })
    )
  })
}
