import React from "react"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { Link45deg, Github } from "react-bootstrap-icons"

import { useGithubProjects } from "../hooks/use-github-projects"

const Projects = () => {
  const projects = useGithubProjects()
  return (
    <>
      {projects.map(project => (
        <Col key={project.id} className="my-3">
          <Card bg="dark" text="light" className="mx-1 my-3 h-100">
            <Card.Header>
              {project.usesCustomOpenGraphImage ? (
                <Card.Img
                  variant="top"
                  className="img-thumbnail"
                  src={project.openGraphImageUrl}
                  alt={`Screenshot of ${project.name}`}
                />
              ) : (
                <Card.Text className="text-muted text-white p-2">
                  Preview coming soon.
                </Card.Text>
              )}
            </Card.Header>

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
                <Github size={26} className="mr-2" />
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
