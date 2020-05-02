import React, { Fragment } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/global.css"
import { Container, Row, Col } from "react-bootstrap"
import { graphql } from "gatsby"

const IslandPage = ({data}) => {
  const location = data.page.nodes[0].context.location[0];
  return (
    <Fragment>
      <Header title={location} />
      <main>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <p>{JSON.stringify(data.page.nodes[0].context.date)}</p>
              <p>{JSON.stringify(data.page.nodes[0].context.total_cases_1)}</p>
              <p>{JSON.stringify(data.page.nodes[0].context.new_cases_1)}</p>
              <p>{JSON.stringify(data.page.nodes[0].context.total_deaths_1)}</p>
              <p>{JSON.stringify(data.page.nodes[0].context.new_deaths_1)}</p>
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
          date
          location
          total_cases_1
          total_cases_2
          new_cases_1
          new_cases_2
          total_deaths_1
          total_deaths_2
          new_deaths_1
          new_deaths_2
          recovered
        }
      }
    }
  }
`
export default IslandPage
