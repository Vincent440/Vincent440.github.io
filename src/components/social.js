import React from "react"
import ListGroup from "react-bootstrap/ListGroup"

const Social = () => {
  return (
    <ListGroup className="d-flex justify-content-center" horizontal="sm">
      <ListGroup.Item className="bg-dark text-center align-middle text-light">
        <h4>Socials</h4>
      </ListGroup.Item>
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
  )
}
export default Social
