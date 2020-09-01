import React, { Fragment } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/global.css"
import { Container, Row, Col } from "react-bootstrap"
import { graphql } from "gatsby"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

const IslandPage = ({ data }) => {
  const page_context = data.page.nodes[0].context
  const pageUrl =
    "https://caribbeanvirustracker.com/" + page_context.iso_code[0] + "/"
  const island_stats_options = {
    chart: { type: "line" },
    title: {
      text:
        "COVID-19 Confirmed Cases, Related Deaths and Recovered Cases for " +
        page_context.location[0],
    },
    xAxis: { categories: xDateAxis() },
    series: [
      {
        name: "Total Cases",
        color: "#224c75",
        data: yCasesAxis(1),
      },
      {
        name: "Total Deaths",
        color: "#991605",
        data: yCasesAxis(2),
      },
      {
        name: "Recovered",
        color: "#27a31c",
        data: yCasesAxis(3),
      },
    ],
    responsive: {
      rules: [
        {
          condition: { maxWidth: 900 },
        },
      ],
    },
  }

  function xDateAxis() {
    var rArr = page_context.date.slice().reverse()
    rArr.forEach((item, id) => {
      rArr[id] = fmtDate(item)
    })
    return rArr
  }

  function yCasesAxis(mode) {
    var rArr1 = null,
      rArr2 = null,
      finalArr = []
    if (mode === 1) {
      rArr1 = page_context.total_cases_1.slice().reverse()
      rArr2 = page_context.total_cases_2.slice().reverse()
      rArr1.forEach((item, id) => {
        item > rArr2[id] ? finalArr.push(item) : finalArr.push(rArr2[id])
      })
    } else if (mode === 2) {
      rArr1 = page_context.total_deaths_1.slice().reverse()
      rArr2 = page_context.total_deaths_2.slice().reverse()
      rArr1.forEach((item, id) => {
        item > rArr2[id] ? finalArr.push(item) : finalArr.push(rArr2[id])
      })
    } else {
      rArr1 = page_context.recovered.slice().reverse()
      rArr1.forEach(item => {
        finalArr.push(parseInt(item))
      })
    }
    return finalArr
  }

  function getRowItem(item, column_id) {
    if (column_id === 1) {
      return Math.max(
        page_context.total_cases_1[page_context.date.indexOf(item)],
        page_context.total_cases_2[page_context.date.indexOf(item)]
      )
    } else if (column_id === 2) {
      return page_context.total_cases_2[page_context.date.indexOf(item)] >=
        page_context.total_cases_1[page_context.date.indexOf(item)]
        ? page_context.new_cases_2[page_context.date.indexOf(item)]
        : page_context.new_cases_1[page_context.date.indexOf(item)]
    } else if (column_id === 3) {
      return Math.max(
        page_context.total_deaths_1[page_context.date.indexOf(item)],
        page_context.total_deaths_2[page_context.date.indexOf(item)]
      )
    } else if (column_id === 4) {
      return page_context.total_deaths_2[page_context.date.indexOf(item)] >=
        page_context.total_deaths_1[page_context.date.indexOf(item)]
        ? page_context.new_deaths_2[page_context.date.indexOf(item)]
        : page_context.new_deaths_1[page_context.date.indexOf(item)]
    } else if (column_id === 5) {
      return page_context.recovered[page_context.date.indexOf(item)]
    }
    return null
  }

  function fmtDate(date) {
    var d = new Date(date)
    var d_date = d.getUTCDate() < 10 ? "0" + d.getUTCDate() : d.getUTCDate()
    var d_month =
      d.getUTCMonth() + 1 < 10
        ? "0" + (d.getUTCMonth() + 1)
        : d.getUTCMonth() + 1
    return d_date + "/" + d_month + "/" + d.getUTCFullYear()
  }

  return (
    <Fragment>
      <Header
        title={page_context.location[0] + " COVID-19 Statistics"}
        description={
          "As at " +
          fmtDate(page_context.date[0]) +
          " there are currently " +
          Math.max(
            page_context.total_cases_1[0],
            page_context.total_cases_2[0]
          ) +
          " confirmed COVID-19 cases and " +
          Math.max(
            page_context.total_deaths_1[0],
            page_context.total_deaths_2[0]
          ) +
          " COVID-19 related deaths in " +
          page_context.location[0] +
          "."
        }
        url={pageUrl}
      />
      <main>
        <Container className="py-3">
          <Row>
            <Col md="4">
              <div class="text-center">
                <div
                  class={
                    "flag-icon flag-icon-" +
                    page_context.iso_code[0].toLowerCase()
                  }
                  style={{ fontSize: "200px" }}
                ></div>
              </div>
            </Col>
            <Col md="8">
              <div class="text-center">
                <h1>{page_context.location[0]}</h1>
                {page_context.region[0] !== "" ? (
                  <p>
                    <strong>Territory Region:</strong>&nbsp;
                    {page_context.region[0]}
                  </p>
                ) : (
                  ""
                )}
                <p>
                  <strong>Location:</strong>&nbsp;(<em>lat:</em>&nbsp;
                  {page_context.latitude[0]},&nbsp;<em>long:</em>&nbsp;
                  {page_context.longitude[0]})
                </p>
                <p>
                  <strong>ISO code:</strong>&nbsp;{page_context.iso_code[0]}
                </p>
              </div>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col md="12">
              <div class="text-center">
                <a
                  class="btn btn-dark btn-sm mx-2 my-1"
                  style={{ backgroundColor: "#3b5998", borderStyle: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.facebook.com/sharer/sharer.php?u=" + pageUrl
                  }
                >
                  <i class="fab fa-facebook-square fa-lg"></i>{" "}
                  <span>Share</span>
                </a>
                <a
                  class="btn btn-dark btn-sm mx-2 my-1"
                  style={{ backgroundColor: "#25d366", borderStyle: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://api.whatsapp.com/send?text=" + pageUrl}
                >
                  <i class="fab fa-whatsapp-square fa-lg"></i>{" "}
                  <span>Share</span>
                </a>
                <a
                  class="btn btn-dark btn-sm mx-2 my-1"
                  style={{ backgroundColor: "#1da1f2", borderStyle: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://twitter.com/home?status=" + pageUrl + " "}
                >
                  <i class="fab fa-twitter-square fa-lg"></i> <span>Share</span>
                </a>
                <a
                  class="btn btn-dark btn-sm mx-2 my-1"
                  style={{ backgroundColor: "#0e76a8", borderStyle: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.linkedin.com/shareArticle?mini=true&url=" +
                    pageUrl +
                    "&title=&summary=&source="
                  }
                >
                  <i class="fab fa-linkedin fa-lg"></i> <span>Share</span>
                </a>
              </div>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Col md="12">
              <HighchartsReact
                highcharts={Highcharts}
                options={island_stats_options}
              />
            </Col>
          </Row>
        </Container>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <div class="table-responsive-md pb-3">
                <table id="table" class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Date (dd/mm/yyyy)</th>
                      <th>Total Cases</th>
                      <th>New Cases</th>
                      <th>Total Deaths</th>
                      <th>New Deaths</th>
                      <th>Recovered</th>
                    </tr>
                  </thead>
                  <tbody>
                    {page_context.date.map(item => (
                      <tr>
                        <td>{fmtDate(item)}</td>
                        <td>{getRowItem(item, 1)}</td>
                        <td>{getRowItem(item, 2)}</td>
                        <td>{getRowItem(item, 3)}</td>
                        <td>{getRowItem(item, 4)}</td>
                        <td>{getRowItem(item, 5)}</td>
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
  query($path: String!) {
    page: allSitePage(filter: { path: { eq: $path } }) {
      nodes {
        context {
          date
          location
          latitude
          longitude
          region
          iso_code
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
