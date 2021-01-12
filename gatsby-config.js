module.exports = {
  siteMetadata: {
    title: `Elliot Evans Site`,
    description: `Elliot Evans's personal Portfolio / Blog site`,
    author: `Elliot Evans`,
    siteUrl: `https://elliotevans.site`,
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
        name: `site`,
        path: `${__dirname}/src/data/site`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'icons',
        path: `${__dirname}/src/assets/icons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elliot Evans' Blog`,
        short_name: `Elliot Evans Blog`,
        lang: "en",
        description: "Elliot Evans' blog",
        start_url: `/`,
        background_color: `#252525`,
        theme_color: `#C85127`,
        display: `standalone`,
        icon: `src/assets/images/header-icon.webp`,
        legacy: false,
      },
    },
    {
      resolve: "gatsby-plugin-svgr-loader",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-sitemap`,
  ],
};
