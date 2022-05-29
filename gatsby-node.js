const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
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
};