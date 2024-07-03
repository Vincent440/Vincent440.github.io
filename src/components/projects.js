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
        <Col key={project.id} className="my-2">
          <Card bg="dark" text="light" className="h-100">
            <Card.Header>
              {project.usesCustomOpenGraphImage ? (
                <Card.Img
                  variant="top"
                  className="img-thumbnail text-body-secondary"
                  src={project.openGraphImageUrl}
                  alt={`Screenshot of ${project.name}`}
                />
              ) : (
                <Card.Text className="text-body-secondary bg-secondary rounded text-center p-2">
                  Preview Image Unavailable
                </Card.Text>
              )}
            </Card.Header>

            <Card.Body>
              <Card.Title as="h3" className="text-capitalize text-center">
                {project.name.replaceAll("-", " ")}
              </Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>

            <ButtonGroup className="mx-2 mb-2">
              <Button
                className="d-flex justify-content-center align-items-center gap-2"
                variant="primary"
                target="_blank"
                rel="noreferrer"
                href={project.homepageUrl}
              >
                <Link45deg size={26} />
                Website
              </Button>
              <Button
                className="d-flex justify-content-center align-items-center gap-2"
                variant="secondary"
                target="_blank"
                rel="noreferrer"
                href={project.url}
              >
                <Github size={26} />
                <span>GitHub</span>
              </Button>
            </ButtonGroup>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default Projects
