module.exports = {
  siteMetadata: {
    title: 'Tarran Prior',
    description: "I'm passionate about open source, solving problems and collaborative innovation. I also work with data a lot.",
    author: 'Tarran Prior',
    lang: 'en',
    keywords: [
      'Security Engineer',
      'Software Engineer',
      'Fullstack Developer',
      'Cybersecurity',
      'Python',
      'Javascript',
      'Jamstack',
      'Gatsby'
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              theme: "nord",
              lineNumbers: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              quality: 75,
            },
          },
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/favicon.png' // Relative to the project's root folder
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono\:100,200,300,400,400i,500,600,700`,
        ],
      },
    },
  ],
};