import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { Link45deg } from "react-bootstrap-icons"

import GitHubIcon from "./GithubIcon"
/**
 * ## Projects
 * Displays all projects in a bootstrap Row
 */
const Projects = () => {
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
  const projects = data.allGithubData.nodes[0].data.user.pinnedItems.nodes
  return (
    <Row>
      {projects.map(project => (
        <Col md={6} xl={4} key={project.id}>
          <Card bg="dark" text="light" className="mx-1 my-3">
            {project.usesCustomOpenGraphImage ? (
              <Card.Img
                variant="top"
                className="img-thumbnail"
                src={project.openGraphImageUrl}
                alt={`Screenshot of ${project.name}`}
              />
            ) : null}

            <Card.Body>
              <Card.Title as="h3">{project.name}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>

            <ButtonGroup className="my-2 mx-2 px-0">
              <Button
                className="px-0 py-2"
                variant="primary"
                target="_blank"
                rel="noreferrer"
                href={project.homepageUrl}
              >
                <Link45deg size={26} className="mr-2" />
                Website
              </Button>
              <Button
                className="px-0 py-2"
                variant="secondary"
                target="_blank"
                rel="noreferrer"
                href={project.url}
              >
                <GitHubIcon />
                GitHub
              </Button>
            </ButtonGroup>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Projects
