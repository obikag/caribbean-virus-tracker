import React, { Fragment } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/global.css"
import { Container, Row, Col } from "react-bootstrap"
import { graphql } from "gatsby"

const IslandPage = ({data}) => {
  return (
    <Fragment>
      <Header title="Test" description="Test" />
      <main>
        <Container className="py-2">
          <Row>
            <Col md="12" className="text-center">
              <pre>{JSON.stringify(data)}</pre>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </Fragment>
  )
}

export const query = graphql`
  query($path: String!) {
    page: allSitePage(filter: { path: {eq: $path } }) {
      nodes {
        context {
          code
        }
      }
    }
  }
`
export default IslandPage
