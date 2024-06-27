import React from "react"
import { graphql } from "gatsby"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import { Seo } from "../components/seo"
import Layout from "../components/layout"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Row className="py-5 my-5 align-items-center">
        <Col>
          <Card body bg="dark" text="light">
            <Card.Header>
              <Card.Title as="h1" className="text-center display-1">
                404: Not Found
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <p>
                Sorry that page wasn't found, try again or navigate back to the
                home page.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export const Head = () => (
  <Seo title="404 Page not found - Vincent Shury's Error page" />
)