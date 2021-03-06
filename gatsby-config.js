module.exports = {
  siteMetadata: {
    title: "BramhaCorp",
    description:
      "BramhaCorp is one of today's leading business groups headquartered in Pune. Our businesses encompass real estate development, hospitality, retail and leisure",
    author: "iVision Web Studio",
    siteUrl: "https://www.bramhacorp.in",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-prismic-lazy-load",
    "gatsby-remark-embed-video",
    "gatsby-remark-responsive-iframe",
    "gatsby-plugin-google-tagmanager",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KRR43BS",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.bramhacorp.in",
        sitemap: "https://www.bramhacorp.in/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
          },
        ],
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true, //default is false
            // debug: true,
          },
        },
      },
    },
    {
      resolve: "gatsby-remark-images",
    },
    // `gatsby-remark-lazy-load`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "Bramhacorp",
        accessToken:
          "MC5YVG1lQlJFQUFDTUF4Tjd5.77-9Tu-_vUlBICVMQ07vv70LMGhG77-977-977-9du-_vQLvv73vv73vv71da--_vVcaIjrvv70",
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-154352464-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            },
          },
        ],
      },
    },
  ],
}
