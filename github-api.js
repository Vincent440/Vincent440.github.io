// github-api.js

exports.githubApiQuery = `
  query($github_login: String!) {
    user(login: $github_login) {
      name
      avatarUrl(size: 500)
      bio
      email
      isHireable
      location
      twitterUsername
      pinnedItems(first: 10) {
      nodes {
        ... on Repository {
          id
          name
          nameWithOwner
          url
          homepageUrl
          description
          shortDescriptionHTML
          usesCustomOpenGraphImage
          openGraphImageUrl
        }
      }
    }
    }
  }
`
