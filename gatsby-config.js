module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
        disableVendorPrefixes: true
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/chevron.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'my-projects-port',
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        shouldDownloadImage: () => true,
        schemas: {
          projects: require('./settings/prismic/projects.json'),
          home: require('./settings/prismic/home.json'),
          about: require('./settings/prismic/about.json'),
          header: require('./settings/prismic/header.json'),
          category: require('./settings/prismic/category.json'),
        },
        prismicToolbar: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
