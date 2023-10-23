import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { Link45deg, Github } from "react-bootstrap-icons"

import { useGithubProjects } from "../hooks/use-github-projects"
/**
 * ## Projects
 * Displays all projects pinned to GitHub profile
 */

const Projects = () => {
  const projects = useGithubProjects()
  return (
    <>
      {projects.map(project => (
        <Col key={project.id} className="p-1">
          <Card bg="dark" text="light" className="m-1 h-100">
            <Card.Header>
              {project.usesCustomOpenGraphImage ? (
                <Card.Img
                  variant="top"
                  className="img-thumbnail"
                  src={project.openGraphImageUrl}
                  alt={`Screenshot of ${project.name}`}
                />
              ) : (
                <Card.Text className="display-6 p-2">
                  No image for this project.
                </Card.Text>
              )}
            </Card.Header>

            <Card.Body>
              <Card.Title as="h3">{project.name}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>

            <ButtonGroup className="m-2 max-w-50 text-center">
              <Button
                variant="primary"
                target="_blank"
                rel="noreferrer"
                href={project.homepageUrl}
              >
                <Link45deg size={24} className="me-2" />
                Website
              </Button>
              <Button
                variant="secondary"
                target="_blank"
                rel="noreferrer"
                href={project.url}
              >
                <Github size={24} className="me-2" />
                GitHub
              </Button>
            </ButtonGroup>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default Projects
