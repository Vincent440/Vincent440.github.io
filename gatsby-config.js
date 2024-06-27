require("dotenv").config()
const { githubApiQuery } = require("./github-api")

module.exports = {
  siteMetadata: {
    title: `Vincent Shury`,
    siteUrl: `https://www.vshury.com`,
    description: `Vince Shury's Developer portfolio demonstrating recent completed projects, up to date contact information, and links to Vince's Social media profiles.`,
    author: `Vincent Shury`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images/`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: "https://api.github.com/graphql",
        token: process.env.PERSONAL_ACCESS_TOKEN_GITHUB,
        graphQLQuery: githubApiQuery,
        variables: {
          github_login: process.env.LOGIN_GITHUB,
        },
      },
    },
  ],
}
