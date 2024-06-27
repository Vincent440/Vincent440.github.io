import { useStaticQuery, graphql } from "gatsby"

export const useGithubProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allGithubData {
        nodes {
          data {
            user {
              pinnedItems {
                nodes {
                  url
                  homepageUrl
                  description
                  name
                  id
                  openGraphImageUrl
                  usesCustomOpenGraphImage
                  shortDescriptionHTML
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allGithubData.nodes[0].data.user.pinnedItems.nodes
}
