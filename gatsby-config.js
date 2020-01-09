module.exports = {
  siteMetadata: {
    title: `BramhaCorp`,
    description: `BramhaCorp is one of today's leading business groups headquartered in Pune. Our businesses encompass real estate development, hospitality, retail and leisure`,
    author: `iVision Web Studio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-prismic-lazy-load`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
        useResolveUrlLoader: {
          options: {
            sourceMap: true, //default is false
            // debug: true,
          },
        },
      },
    },
    {
      resolve: `gatsby-remark-images`,
    },
    // `gatsby-remark-lazy-load`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `Bramhacorp`,
        accessToken: `MC5YVG1lQlJFQUFDTUF4Tjd5.77-9Tu-_vUlBICVMQ07vv70LMGhG77-977-977-9du-_vQLvv73vv73vv71da--_vVcaIjrvv70`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-154352464-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true
      }
    }
  ],
}
