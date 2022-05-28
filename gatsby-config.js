module.exports = {
  siteMetadata: {
    title: 'Tarran Prior',
    author: 'Tarran Prior',
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
    },
  ],
};