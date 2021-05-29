const mainURL = new URL('https://elliotevans.info');
const wwwURL = new URL('https://www.elliotevans.info');
const bucketName = 'elliotevans.site';

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Elliot Evans Site`,
    description: `Elliot Evans's personal Portfolio / Blog site`,
    author: `Elliot Evans`,
    siteUrl: mainURL.href.slice(0, -1),
  },
  plugins: [
    `gatsby-plugin-preact`,
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-linaria`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          { domain: mainURL, crossOrigin: true },
          { domain: wwwURL, crossOrigin: true },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-guess-js',
    //   options: {
    //     // Find the view id in the GA admin in a section labeled "views"
    //     GAViewID: `VIEW_ID`,
    //     // Add a JWT to get data from GA
    //     jwt: {
    //       client_email: `GOOGLE_SERVICE_ACCOUNT_EMAIL`,
    //       private_key: `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`,
    //     },
    //     minimumThreshold: 0.03,
    //     // The "period" for fetching analytic data.
    //     period: {
    //       startDate: new Date('2018-1-1'),
    //       endDate: new Date(),
    //     },
    //   },
    // },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elliot Evans' Blog`,
        short_name: `Elliot Evans Blog`,
        lang: 'en-GB',
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
      resolve: 'gatsby-plugin-svgr-loader',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => mainURL.href.slice(0, -1),
        resolvePages: ({ allSitePage: { nodes: allPages } }) => allPages,
        serialize: ({ path, modifiedGmt }) => ({
          url: path,
          lastmod: modifiedGmt,
        }),
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          policy: [{ userAgent: '*', allow: '/' }],
        },
      },
    },
    `gatsby-plugin-brotli`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: mainURL.href.slice(0, -1),
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.S3_BUCKET_NAME || bucketName,
        protocol: mainURL.protocol.slice(0, -1),
        hostname: mainURL.hostname,
      },
    },
  ],
};
