import React, { Fragment } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/global.css"
import { graphql } from "gatsby"
import { Container, Row, Col, Alert } from "react-bootstrap"

const WorldPage = ({ data }) => {
  function numFormatter(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }

  return (
    <Fragment>
      <Header
        title="World Statistics"
        description="The latest reported World statistics for the COVID-19 outbreak."
        url="https://caribbeanvirustracker.com/world/"
      />
      <main>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <h1 class="header">World Outbreak Statistics</h1>
                <Alert variant="warning">
                  <Alert.Heading>Changes to Website and Reporting</Alert.Heading>
                  <p>
                    World Health Organization has changed their reporting format for the COVID-19 pandemic 
                    from a daily scheme to a weekly one. As a result, their statistics will not be used again. 
                  </p>
                  <p>
                    Additionally, the site will be undergoing some changes over the month to the dashboard 
                    and other sections of the site.
                  </p>
                </Alert>
                <br></br>
              <h5>
                <em>
                  These are the latest reported World stats for the Coronavirus
                  outbreak.
                </em>
              </h5>
              <Alert variant="info" className="text-center" role="alert">
                <h5>
                  Last Updated on{" "}
                  <strong>{data.latest_data.nodes[0].updatedate}</strong>
                </h5>
              </Alert>
            </Col>
          </Row>
        </Container>
        <Container className="py-2">
          <Row>
            <Col md="3">
              <div class="card mb-3">
                <div class="card-header text-center text-white bg-primary">
                  <h1 style={{ fontFamily: "Special Elite" }}>
                    {numFormatter(data.latest_data.nodes[0].total_cases_1)}
                  </h1>
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title">Total Cases</h5>
                  <p class="card-text" style={{ fontSize: "10px" }}>
                    Total confirmed Coronavirus infections
                  </p>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div class="card mb-3">
                <div class="card-header text-center text-white bg-warning">
                  <h1 style={{ fontFamily: "Special Elite" }}>
                    {numFormatter(data.latest_data.nodes[0].new_cases_1)}
                  </h1>
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title">New Cases</h5>
                  <p class="card-text" style={{ fontSize: "10px" }}>
                    Newly reported Coronavirus infections
                  </p>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div class="card mb-3">
                <div class="card-header text-center text-white bg-danger">
                  <h1 style={{ fontFamily: "Special Elite" }}>
                    {numFormatter(data.latest_data.nodes[0].total_deaths_1)}
                  </h1>
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title">Total Deaths</h5>
                  <p class="card-text" style={{ fontSize: "10px" }}>
                    Total confirmed deaths linked to Coronavirus
                  </p>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div class="card mb-3">
                <div class="card-header text-center text-white bg-dark">
                  <h1 style={{ fontFamily: "Special Elite" }}>
                    {numFormatter(data.latest_data.nodes[0].new_deaths_1)}
                  </h1>
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title">New Deaths</h5>
                  <p class="card-text" style={{ fontSize: "10px" }}>
                    Newly reported deaths linked to Coronavirus
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <div class="table-responsive-md pb-3">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Location</th>
                      <th scope="col">Total Cases</th>
                      <th scope="col">New Cases</th>
                      <th scope="col">Total Deaths</th>
                      <th scope="col">New Deaths</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.all_data.nodes.map(node => (
                      <tr>
                        <td>
                          <div>{node.location}</div>
                          <div>
                            <a
                              href={node.source_url_1}
                              class="badge badge-primary"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {node.source_name_1}
                            </a>
                          </div>
                        </td>
                        <td class="text-center">
                          {numFormatter(node.total_cases_1)}
                        </td>
                        <td class="text-center">
                          {numFormatter(node.new_cases_1)}
                        </td>
                        <td class="text-center">
                          {numFormatter(node.total_deaths_1)}
                        </td>
                        <td class="text-center">
                          {numFormatter(node.new_deaths_1)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </Fragment>
  )
}

export const query = graphql`
  query WorldPageQuery {
    all_data: allCaribbeandataCsv(
      filter: { location: { eq: "World" } }
      sort: { fields: [location, date], order: [ASC, DESC] }
    ) {
      nodes {
        location
        date(formatString: "DD MMM YYYY")
        total_cases_1
        new_cases_1
        total_deaths_1
        new_deaths_1
        source_name_1
        source_url_1
      }
    }
    latest_data: allCaribbeandataCsv(
      sort: { fields: date, order: DESC }
      filter: { location: { eq: "World" } }
      limit: 1
    ) {
      nodes {
        total_cases_1
        new_cases_1
        total_deaths_1
        new_deaths_1
        updatedate: date(formatString: "MMMM DD, YYYY")
        comparestring: date(formatString: "DD MMM YYYY")
      }
    }
  }
`

export default WorldPage
