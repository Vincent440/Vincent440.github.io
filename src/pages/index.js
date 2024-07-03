import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"
import { EnvelopeFill, GeoAltFill } from "react-bootstrap-icons"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Social from "../components/social"

const Home = ({ location, data }) => {
  return (
    <Layout location={location}>
      <Row className="my-3">
        <Col>
          <Card bg="light">
            <Card bg="dark" className="rounded-0 rounded-top">
              <Card.Header className="py-3 text-center">
                <h1 className="display-1">Vince Shury</h1>
                <h2>Full-stack web developer</h2>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center">
                <GatsbyImage
                  image={data.file.childImageSharp.gatsbyImageData}
                  className="img-thumbnail"
                  alt="Vince Shury"
                />
              </Card.Body>
            </Card>

            <Card.Body className="p-2 d-grid gap-3">
              <h3 className="text-center">Summary</h3>
              <Card.Text className="lead">
                Full-stack Software Engineer and Teaching Assistant.
              </Card.Text>
              <Card.Text>
                Currently employed as a part-time Full-stack Software Engineer
                at Fisecal and as a Teaching Assistant for a remote 24 week
                part-time coding boot camp that is focused on full stack web
                development using the MERN stack.
              </Card.Text>
              <Card.Text>
                Graduated from the CWRU Coding Boot Camp in 2019, I've also
                acquired additional certifications through freeCodeCamp.
              </Card.Text>
              <h4 className="text-center">Languages</h4>
              <ListGroup
                horizontal
                className="d-flex flex-wrap justify-content-center"
              >
                <ListGroup.Item>HTML</ListGroup.Item>
                <ListGroup.Item>CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript/TypeScript (Node.js)</ListGroup.Item>
                <ListGroup.Item>GraphQL</ListGroup.Item>
                <ListGroup.Item>SQL (PostgreSQL/MySQL)</ListGroup.Item>
                <ListGroup.Item>BASH</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
              </ListGroup>
              <h4 className="text-center">Libraries & Frameworks</h4>
              <ListGroup
                horizontal
                className="d-flex flex-wrap justify-content-center"
              >
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>GatsbyJS</ListGroup.Item>
                <ListGroup.Item>Svelte</ListGroup.Item>
                <ListGroup.Item>SvelteKit</ListGroup.Item>
                <ListGroup.Item>Express</ListGroup.Item>
                <ListGroup.Item>MongoDB</ListGroup.Item>
                <ListGroup.Item>Mongoose</ListGroup.Item>
                <ListGroup.Item>Bootstrap</ListGroup.Item>
                <ListGroup.Item>Sequelize ORM</ListGroup.Item>
                <ListGroup.Item>Drizzle ORM</ListGroup.Item>
                <ListGroup.Item>Firebase</ListGroup.Item>
                <ListGroup.Item>jQuery</ListGroup.Item>
              </ListGroup>
              <h4 className="text-center">Skills</h4>
              <ListGroup
                horizontal
                className="d-flex flex-wrap justify-content-center"
              >
                <ListGroup.Item>Problem Solving</ListGroup.Item>
                <ListGroup.Item>Communication</ListGroup.Item>
                <ListGroup.Item>Data Modeling</ListGroup.Item>
                <ListGroup.Item>Design</ListGroup.Item>
                <ListGroup.Item>Reading/Writing Documentation</ListGroup.Item>
                <ListGroup.Item>Time Management</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Card bg="secondary">
            <Card.Body>
              <Card className="mb-4">
                <Card.Header>
                  <h3>Contact Me</h3>
                </Card.Header>
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <Row>
                        <Col sm="4" md="5" lg="6" className="align-middle">
                          <h4>Email</h4>
                        </Col>
                        <Col sm="8" md="7" lg="6">
                          <Button
                            href="mailto:vinceshury@gmail.com"
                            title="Email Vince"
                            className="d-flex gap-4 justify-content-between"
                          >
                            <EnvelopeFill size="25" className="me-3" />
                            <span>vinceshury@gmail.com</span>
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col sm="6" md="8" className="align-middle">
                          <h4 className="d-flex gap-4">
                            Location
                            <GeoAltFill size="25" />
                          </h4>
                        </Col>
                        <Col sm="6" md="4">
                          <p>Toledo, Ohio, 43623</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Social />
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}
export default Home

export const Head = () => <Seo />

export const query = graphql`
  {
    file(relativePath: { eq: "vince.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, height: 525, layout: FIXED)
      }
    }
  }
`
