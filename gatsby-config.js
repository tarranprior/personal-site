module.exports = {
  siteMetadata: {
    title: 'Tarran Prior',
    description: "I'm passionate about open source, solving problems and collaborative innovation. I also work with data a lot.",
    author: 'Tarran Prior',
    keywords: [
      'Security Engineer',
      'Software Engineer',
      'Fullstack Developer',
      'Python',
      'Javascript',
      'Jamstack',
      'Gatsby'
    ],
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
  ],
};