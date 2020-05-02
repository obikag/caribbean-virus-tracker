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
  const island_stats_options = {
    chart: { type: "line" },
    title: {
      text: "COVID-19 Cases and Related Deaths for " + page_context.location[0],
    },
    xAxis: { categories: xDateAxis() },
    series: [
      {
        name: "Total Cases",
        data: yCasesDeathsAxis(1),
      },
      {
        name: "Total Deaths",
        data: yCasesDeathsAxis(2),
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

  function yCasesDeathsAxis(mode) {
    var rArr1 = null,
      rArr2 = null,
      finalArr = []
    if (mode === 1) {
      rArr1 = page_context.total_cases_1.slice().reverse()
      rArr2 = page_context.total_cases_2.slice().reverse()
      rArr1.forEach((item, id) => {
        item > rArr2[id] ? finalArr.push(item) : finalArr.push(rArr2[id])
      })
    } else {
      rArr1 = page_context.total_deaths_1.slice().reverse()
      rArr2 = page_context.total_deaths_1.slice().reverse()
      rArr1.forEach((item, id) => {
        item > rArr2[id] ? finalArr.push(item) : finalArr.push(rArr2[id])
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
          Math.max(page_context.total_cases_1[0], page_context.total_cases_2[0]) +
          " confirmed COVID-19 cases and " +
          Math.max(page_context.total_deaths_1[0], page_context.total_deaths_2[0]) +
          " COVID-19 related deaths in " +
          page_context.location[0] +
          "."
        }
        url={"https://caribbeanvirustracker.com/"+page_context.iso_code[0]+"/"}
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
