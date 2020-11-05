require("dotenv").config()
const { githubApiQuery } = require("./github-api")

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Vincent Shury`,
    siteUrl: `https://www.vshury.com`,
    description: `Vince Shury's Developer portfolio demonstrating recent completed projects, up to date contact information, and links to Vince's Social media profiles.`,
    author: `Vincent Shury`,
    social: {
      twitter: `VincentShury`,
    },
    siteLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Portfolio",
        link: "/portfolio",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets/images/`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: "https://api.github.com/graphql",
        token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
        graphQLQuery: githubApiQuery,
        variables: {
          github_login: process.env.GITHUB_LOGIN,
        },
      },
    },
  ],
}
