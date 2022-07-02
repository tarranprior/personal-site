exports.createPages = async ({ actions, graphql }) => {
  const path = require(`path`);
  const _ = require("lodash")
  const { createPage } = actions;

  const query = await graphql(`
    query {
      allMdx(filter: { frontmatter: { published: { eq: true } } }) {
        edges {
          node {
            slug
            frontmatter {
              slug
            }
          }
        }
      }
      tags: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  query.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `/writing/${node.frontmatter.slug}`,
      component: path.resolve(`src/templates/posts.js`),
      context: {
        slug: node.slug
      },
    })
  })

  const tags = query.data.tags.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: path.resolve(`src/templates/tags.js`),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
};