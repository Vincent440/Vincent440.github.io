import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Jumbotron from "react-bootstrap/Jumbotron"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"
import { EnvelopeFill, GeoAltFill } from "react-bootstrap-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"

const Home = ({ location, data }) => {
  return (
    <Layout location={location}>
      <SEO
        title="About Me"
        image={data.file.childImageSharp.fixed}
        pathname={location.pathname}
      />
      <Row>
        <Col>
          <Jumbotron fluid className="py-2 rounded-bottom">
            <h1 className="text-center display-2">About Me</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row className="mb-5 mt-4 pb-3">
        <Col>
          <Card bg="light">
            <Card.Header className="py-3 text-center">
              <h2>Vince Shury, Full Stack Web Developer</h2>
              <Card.Body className="d-flex justify-content-center">
                <Img
                  className="img-thumbnail"
                  fixed={data.file.childImageSharp.fixed}
                  alt="Vince Shury"
                />
              </Card.Body>
              <h3 className="text-center">
                Teaching Assistant, MSU Coding Boot Camp.
              </h3>
            </Card.Header>

            <h4 className="text-center pt-3">Summary</h4>
            <Card.Body>
              <Card.Text className="lead">
                I graduated from the CWRU Coding Boot Camp in 2019.
              </Card.Text>
              <Card.Text>
                Currently working as a TA for a remote 24 week part-time boot
                camp that is a deep dive into full stack web development and the
                MERN stack. I am nearing the end of teaching my first cohort of
                about 20 students. Currently open to new opportunities.
              </Card.Text>
            </Card.Body>
            <h4 className="text-center">Languages</h4>
            <Card.Body>
              <ListGroup
                horizontal="md"
                className="d-flex justify-content-center"
              >
                <ListGroup.Item>HTML5</ListGroup.Item>
                <ListGroup.Item>CSS3</ListGroup.Item>
                <ListGroup.Item>JavaScript (Node.js)</ListGroup.Item>
                <ListGroup.Item>SQL</ListGroup.Item>
                <ListGroup.Item>BASH</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <h4 className="text-center">
                Technologies, Libraries, and Frameworks
              </h4>
              <Card.Text>
                Express, React, GatsbyJS, MongoDB + Mongoose, PostgreSQL, MySQL
                + Sequelize, GraphQL, jQuery, Bootstrap, and Foundation CSS
              </Card.Text>

              <h4 className="text-center">Skills</h4>
              <Card.Text>
                Problem solving, communication, data modeling, command line
                interfaces, reading documentation, and time mananagement
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mx-3" bg="dark">
            <Card.Body>
              <Card>
                <Card.Header>
                  <h3>
                    Contact Me
                  </h3>
                </Card.Header>
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <Row>
                        <Col sm="5" xl="2" className="align-middle">
                          <h4>Email</h4>
                        </Col>
                        <Col>
                          <Button
                            href="mailto:vinceshury@gmail.com"
                            title="Email vinceshury@gmail.com"
                            className="px-2 mx-0"
                          >
                            <EnvelopeFill size="25" className="mr-3" />
                            vinceshury@gmail.com
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col sm="5" xl="2" className="align-middle">
                          <h4>
                            Location
                            <GeoAltFill size="25" className="ml-2" />
                          </h4>
                        </Col>
                        <Col>Toledo, Ohio, 43623</Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              <Card.Body>

              </Card.Body>

              <Social />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}
export default Home

export const query = graphql`
  query {
    file(relativePath: { eq: "vince.png" }) {
      childImageSharp {
        fixed(width: 700, height: 525) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
