import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

export default function BlogPost({ data, location }) {
  const post = data.markdownRemark
  return (
    <Layout location={location}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Card.Title as="h1" className="display-4">
                {post.frontmatter.title}
              </Card.Title>
              <Card.Subtitle className="text-right">
                <span className="font-weight-bolder">Created: </span>
                {post.frontmatter.date}
              </Card.Subtitle>
              <Card.Body>
                <Row>
                  <Col xs={12}>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                  </Col>
                </Row>
              </Card.Body>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(locale: "en-US", formatString: "MM/DD/YYYY")
      }
      excerpt
    }
  }
`
