module.exports = {
  siteMetadata: {
    title: 'test123',
  },
  plugins: [
    {
      resolve: `gatsby-transformer-json`,
      // options: {
      //   typeName: `Json`,
      // },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
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
