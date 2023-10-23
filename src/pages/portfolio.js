import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Projects from "../components/projects"

const Portfolio = ({ location }) => {
  return (
    <Layout location={location}>
      <Container className="py-3 rounded">
        <h1 className="text-center fw-bold display-2">Portfolio</h1>
      </Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h2" className="display-6 fw-normal">Projects</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text className="lead">
                Deployed applications will have links to the hosted site. Please
                wait up to 15 seconds for the Heroku urls to load the page the
                first time.
              </Card.Text>
              <Card.Body>
                <Row xs={1} md={2} xl={3}>
                  <Projects />
                </Row>
              </Card.Body>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default Portfolio

export const Head = () => (
  <Seo title="Vincent Shury's Portfolio" />
)