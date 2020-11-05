import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import {
  LaptopFill,
  HouseDoorFill,
  BriefcaseFill,
  FileTextFill,
} from "react-bootstrap-icons"
import resume from "../../docs/resume.pdf"

export default function Layout({ location, children }) {
  return (
    <>
      <Navbar variant="dark" bg="dark" expand="md">
        <Navbar.Brand className="border-right pr-3" as={Link} to="/">
          <h3>
            <LaptopFill size="25" className="mr-2" color="white" />
            Vincent Shury
          </h3>
        </Navbar.Brand>

        <Navbar.Toggle className="p-2" aria-controls="layout-navbar-nav" />

        <Navbar.Collapse id="layout-navbar-nav">
          <Nav activeKey={location.pathname} as="ul">
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                eventKey={`/`}
                to={`/`}
                activeClassName="active"
              >
                <HouseDoorFill alt="house logo" size="25" className="mr-2" />
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                eventKey={`/portfolio/`}
                to={`/portfolio/`}
                activeClassName="active"
              >
                <BriefcaseFill size="25" className="mr-2" />
                Portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Button variant="outline-light" href={resume}>
                <FileTextFill size="25" className="mr-2" />
                Resume
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid="md" className="my-3">
        {children}
      </Container>
    </>
  )
}
