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
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        typeName: 'EEAPI',
        fieldName: 'elliotEvans',
        url: 'https://elliotevans.site/graphql',
      },
    },
  ],
};
