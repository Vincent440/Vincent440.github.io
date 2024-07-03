import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { LaptopFill, HouseDoorFill, BriefcaseFill } from "react-bootstrap-icons"

export default function Layout({ location, children }) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="sm">
        <Container fluid className="d-flex gap-4">
          <Navbar.Brand className="" as={Link} to="/">
            <h3 className="d-flex gap-2 align-items-center">
              <LaptopFill size="25" color="white" />
              Vincent Shury
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="layout-navbar-nav" />
          <Navbar.Collapse id="layout-navbar-nav">
            <Nav activeKey={location.pathname} as="ul">
              <Nav.Item as="li">
                <Nav.Link
                  as={Link}
                  eventKey={`/`}
                  to={`/`}
                  activeClassName="active fw-bolder"
                  className="d-flex gap-2 align-items-center"
                >
                  <HouseDoorFill alt="Home" size="25" />
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  as={Link}
                  eventKey={`portfolio`}
                  to={`/portfolio`}
                  activeClassName="active fw-bolder"
                  className="d-flex gap-2 align-items-center"
                >
                  <BriefcaseFill alt="Portfolio" size="25" />
                  Portfolio
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid="sm" className="py-2">
        {children}
      </Container>
    </>
  )
}
