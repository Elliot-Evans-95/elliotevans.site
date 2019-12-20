module.exports = {
  siteMetadata: {
    title: 'test123',
  },
  plugins: [
    {
      resolve: `gatsby-transformer-json`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/data/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/data/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `site`,
        path: `${__dirname}/src/data/site`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elliot Evans Site`,
        short_name: `EE Site`,
        lang: "en",
        description: "Blog and Portfolio site of Elliot Evans",
        start_url: `/`,
        background_color: `rgba(76, 74, 72, 0.75)`,
        theme_color: `#0078d7`,
        display: `standalone`,
        icon: `src/assets/images/header-icon.webp`,
        legacy: false,
      },
    },
  ],
};
