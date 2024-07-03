import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Projects from "../components/projects"

const Portfolio = ({ location }) => {
  return (
    <Layout location={location}>
      <Row>
        <Col>
          <Card bg="light">
            <Card.Header>
              <Card.Title as="h1" className="display-2">
                Portfolio Projects
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Deployed applications will have links to the hosted site.
                Full-stack projects are hosted on free or low-cost cloud
                providers, they may take extra time to load so please be
                patient.
              </Card.Text>

              <Row md={1} lg={2} xl={3}>
                <Projects />
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default Portfolio

export const Head = () => <Seo title="Vincent Shury's Portfolio" />
