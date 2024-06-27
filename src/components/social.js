import React from "react"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

const Social = () => {
  return (
    <Card>
      <Card.Header>
        <h3>Social Profiles</h3>
      </Card.Header>
      <Card.Body>
        <ListGroup className="justify-content-center" horizontal="md">
          <ListGroup.Item>
            <a
              href="https://www.linkedin.com/in/VincentShury/"
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
            >
              LinkedIn
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a
              className="image-thumbnail"
              href="https://www.github.com/Vincent440"
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
            >
              GitHub
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a
              href="https://stackoverflow.com/users/story/10886832"
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
            >
              Stack Overflow
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}
export default Social
