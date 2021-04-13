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
/**
 * // Fixes to place in node_modules to build until new version is published below:

  const { fetchFromGithub } = require("./src/helper");
  const crypto = require("crypto");
  const uuid = require("uuid/v1");

  exports.sourceNodes = (
    { actions },
    { token, variables, graphQLQuery, url }
  ) => {
    const { createNode } = actions;
    return new Promise((resolve, reject) => {
      // we need a token to use this plugin
      if (token === undefined) {
        reject("token is undefined");
        return;
      }
      fetchFromGithub(url, token, graphQLQuery, variables).then(result => {
        createNode({
          data: result.data,
          id: result.id || uuid(),
          // see https://github.com/ldd/gatsby-source-github-api/issues/19
          // provide the raw result to see errors, or other information
          rawResult: result,
          parent: null,
          children: [],
          internal: {
            type: "GithubData",
            contentDigest: crypto
              .createHash(`md5`)
              .update(JSON.stringify(result))
              .digest(`hex`),
            // see https://github.com/ldd/gatsby-source-github-api/issues/10
            // our node should have an 'application/json' MIME type, but we wish
            // transformers to ignore it, so we set its mediaType to text/plain for now
            mediaType: "text/plain"
          }
        });
        resolve();
      });
    });
  };
  
*/
