import "dotenv/config"
import { githubApiQuery } from "./github-api.mjs"
import { dirname } from "path"
import { fileURLToPath } from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))

export const siteMetadata = {
  title: `Vincent Shury`,
  siteUrl: `https://www.vshury.com`,
  description: `Vince Shury's Developer portfolio demonstrating recent completed projects, up to date contact information, and links to Vince's Social media profiles.`,
  author: `Vincent Shury`,
}
export const flags = {
  DEV_SSR: true,
}
export const plugins = [
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
]
