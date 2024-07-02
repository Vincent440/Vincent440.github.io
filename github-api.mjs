export const githubApiQuery = `
  query($github_login: String!) {
    user(login: $github_login) {
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
