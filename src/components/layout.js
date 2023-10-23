import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
// import Button from "react-bootstrap/Button"
import {
  LaptopFill,
  HouseDoorFill,
  BriefcaseFill,
  // FileTextFill,
} from "react-bootstrap-icons"
// import resume from "../../docs/resume.pdf"

export default function Layout({ location, children }) {
  return (
    <>
      <Navbar variant="dark" bg="dark" expand="md">
        <Container fluid >
        <Navbar.Brand className="border-end pe-3" as={Link} to="/">
          <h3 className="d-flex align-items-center">
            <LaptopFill size="30" className="me-2" color="white" />
            Vincent Shury
          </h3>
        </Navbar.Brand>

        <Navbar.Toggle className="" aria-controls="layout-navbar-nav" />

        <Navbar.Collapse id="layout-navbar-nav">
          <Nav activeKey={location.pathname} as="ul">
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                eventKey={`/`}
                to={`/`}
                activeClassName="active fw-bolder"
                className="d-flex align-items-center"
              >
                <HouseDoorFill alt="house logo" size="25" className="me-2" />
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                eventKey={`/portfolio/`}
                to={`/portfolio/`}
                activeClassName="active fw-bolder"
                className="d-flex align-items-center"
              >
                <BriefcaseFill size="25" className="me-2" />
                Portfolio
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item as="li">
              <Button variant="outline-light" href={resume}>
                <FileTextFill size="25" className="me-2" />
                Resume
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse> 
      </Container>
      </Navbar>

      <Container fluid="lg" className="my-3">
        {children}
      </Container>
    </>
  )
}
