const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const productDetails = path.resolve('./src/templates/productDetails.js')
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
      })
    )
  })
}
