import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"
import Card from "react-bootstrap/Card"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Projects from "../components/Projects"

const Portfolio = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="Portfolio" />
      <Jumbotron fluid className="py-2 rounded-bottom">
        <h1 className="text-center display-2">Portfolio</h1>
      </Jumbotron>
      <Row>
        <Col>
          <Card bg="light">
            <Card.Header>
              <Card.Title as="h2">Projects</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text className="lead">
                Deployed applications will have links to the hosted site. Please
                wait up to 15 seconds for the Heroku urls to load the page the
                first time.
              </Card.Text>
              <Card.Body>
                <Projects />
              </Card.Body>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default Portfolio
