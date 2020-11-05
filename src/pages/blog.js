import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import SEO from "../components/seo"

const Blog = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <Jumbotron className="py-2">
        <Container>
          <Row>
            <Col>
              <h1 className="display-2">Blog</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="lead">Author: Vince Shury</p>
              <small>Full stack web developer</small>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h2">
                {data.allMarkdownRemark.totalCount} Posts
              </Card.Title>
            </Card.Header>

            <Card.Body className="px-1 px-sm-2 px-lg-3">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card className="my-3 shadow-sm" key={node.id}>
                  <Card.Header>
                    <Link
                      className="stretched-link text-light"
                      to={node.fields.slug}
                    >
                      <Card.Title as="h3">{node.frontmatter.title} </Card.Title>
                    </Link>
                  </Card.Header>
                  <Card.Body>
                    <span>— {node.frontmatter.date}</span>
                    <p>{node.excerpt}</p>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}
export default Blog

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
