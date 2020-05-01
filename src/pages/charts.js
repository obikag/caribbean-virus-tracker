import React, { Fragment } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/global.css"
import { Container, Row, Col } from "react-bootstrap"
import { graphql } from "gatsby"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

const ChartsPage = ({ data }) => {
  const caribbean_options = {
    chart: { type: "bar", height: 600 },
    title: { text: "COVID-19 Cases throughout the Caribbean" },
    xAxis: { categories: xLocationAxis(), labels: { step: 1 } },
    series: [
      { name: "Total Cases", data: yTotalCasesAxis() },
      { name: "Total Deaths", data: yTotalDeathsAxis() },
    ],
  }
  const country_cases_options = {
    chart: { type: "line" },
    title: { text: "COVID-19 Cases by Caribbean Country" },
    xAxis: { categories: xDateAxis() },
    series: [
      {
        name: "Antigua & Barbuda",
        data: yTimeSeriesCasesAxis("Antigua and Barbuda", 1),
      },
      { name: "Bahamas", data: yTimeSeriesCasesAxis("Bahamas", 1) },
      { name: "Barbados", data: yTimeSeriesCasesAxis("Barbados", 1) },
      { name: "Belize", data: yTimeSeriesCasesAxis("Belize", 1) },
      { name: "Cuba", data: yTimeSeriesCasesAxis("Cuba", 1) },
      { name: "Dominica", data: yTimeSeriesCasesAxis("Dominica", 1) },
      {
        name: "Dominican Republic",
        data: yTimeSeriesCasesAxis("Dominican Republic", 1),
      },
      { name: "Grenada", data: yTimeSeriesCasesAxis("Grenada", 1) },
      { name: "Guyana", data: yTimeSeriesCasesAxis("Guyana", 1) },
      { name: "Haiti", data: yTimeSeriesCasesAxis("Haiti", 1) },
      { name: "Jamaica", data: yTimeSeriesCasesAxis("Jamaica", 1) },
      {
        name: "St Kitts & Nevis",
        data: yTimeSeriesCasesAxis("Saint Kitts and Nevis", 1),
      },
      { name: "St Lucia", data: yTimeSeriesCasesAxis("Saint Lucia", 1) },
      {
        name: "St Vincent & Grenadines",
        data: yTimeSeriesCasesAxis("Saint Vincent and Grenadines", 1),
      },
      { name: "Suriname", data: yTimeSeriesCasesAxis("Suriname", 1) },
      {
        name: "Trinidad & Tobago",
        data: yTimeSeriesCasesAxis("Trinidad and Tobago", 1),
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

  const country_deaths_options = {
    chart: { type: "line" },
    title: { text: "COVID-19 Deaths by Caribbean Country" },
    xAxis: { categories: xDateAxis() },
    series: [
      {
        name: "Antigua & Barbuda",
        data: yTimeSeriesDeathsAxis("Antigua and Barbuda", 1),
      },
      { name: "Bahamas", data: yTimeSeriesDeathsAxis("Bahamas", 1) },
      { name: "Barbados", data: yTimeSeriesDeathsAxis("Barbados", 1) },
      { name: "Belize", data: yTimeSeriesDeathsAxis("Belize", 1) },
      { name: "Cuba", data: yTimeSeriesDeathsAxis("Cuba", 1) },
      { name: "Dominica", data: yTimeSeriesDeathsAxis("Dominica", 1) },
      {
        name: "Dominican Republic",
        data: yTimeSeriesDeathsAxis("Dominican Republic", 1),
      },
      { name: "Grenada", data: yTimeSeriesDeathsAxis("Grenada", 1) },
      { name: "Guyana", data: yTimeSeriesDeathsAxis("Guyana", 1) },
      { name: "Haiti", data: yTimeSeriesDeathsAxis("Haiti", 1) },
      { name: "Jamaica", data: yTimeSeriesDeathsAxis("Jamaica", 1) },
      {
        name: "St Kitts & Nevis",
        data: yTimeSeriesDeathsAxis("Saint Kitts and Nevis", 1),
      },
      { name: "St Lucia", data: yTimeSeriesDeathsAxis("Saint Lucia", 1) },
      {
        name: "St Vincent & Grenadines",
        data: yTimeSeriesDeathsAxis("Saint Vincent and Grenadines", 1),
      },
      { name: "Suriname", data: yTimeSeriesDeathsAxis("Suriname", 1) },
      {
        name: "Trinidad & Tobago",
        data: yTimeSeriesDeathsAxis("Trinidad and Tobago", 1),
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

  const territory_cases_options = {
    chart: { type: "line" },
    title: { text: "COVID-19 Cases by Caribbean Territory" },
    xAxis: { categories: xDateAxis() },
    series: [
      {
        name: "Anguilla",
        data: yTimeSeriesCasesAxis("Antigua and Barbuda", 2),
      },
      {
        name: "Aruba",
        data: yTimeSeriesCasesAxis("Aruba", 2),
      },
      { name: "Bermuda", data: yTimeSeriesCasesAxis("Bermuda", 1) },
      {
        name: "Bonaire, Sint_Eustatius and Saba",
        data: yTimeSeriesCasesAxis("Bonaire, Sint_Eustatius and Saba", 2),
      },
      {
        name: "British Virgin Islands",
        data: yTimeSeriesCasesAxis("British Virgin Islands", 2),
      },
      {
        name: "Cayman Islands",
        data: yTimeSeriesCasesAxis("Cayman Islands", 2),
      },
      { name: "Curacao", data: yTimeSeriesCasesAxis("Curacao", 2) },
      { name: "French Guiana", data: yTimeSeriesCasesAxis("French Guiana", 2) },
      { name: "Guadeloupe", data: yTimeSeriesCasesAxis("Guadeloupe", 2) },
      { name: "Martinique", data: yTimeSeriesCasesAxis("Martinique", 2) },
      { name: "Puerto Rico", data: yTimeSeriesCasesAxis("Puerto Rico", 2) },
      {
        name: "Saint Barthelemy",
        data: yTimeSeriesCasesAxis("Saint Barthelemy", 2),
      },
      { name: "Saint Martin", data: yTimeSeriesCasesAxis("Saint Martin", 2) },
      { name: "Sint Maarten", data: yTimeSeriesCasesAxis("Sint Maarten", 2) },
      {
        name: "Turks and Caicos Islands",
        data: yTimeSeriesCasesAxis("Turks and Caicos Islands", 2),
      },
      {
        name: "United States Virgin Islands",
        data: yTimeSeriesCasesAxis("United States Virgin Islands", 2),
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

  const territory_deaths_options = {
    chart: { type: "line" },
    title: { text: "COVID-19 Deaths by Caribbean Territory" },
    xAxis: { categories: xDateAxis() },
    series: [
      {
        name: "Anguilla",
        data: yTimeSeriesDeathsAxis("Antigua and Barbuda", 2),
      },
      {
        name: "Aruba",
        data: yTimeSeriesDeathsAxis("Aruba", 2),
      },
      { name: "Bermuda", data: yTimeSeriesDeathsAxis("Bermuda", 1) },
      {
        name: "Bonaire, Sint_Eustatius and Saba",
        data: yTimeSeriesDeathsAxis("Bonaire, Sint_Eustatius and Saba", 2),
      },
      {
        name: "British Virgin Islands",
        data: yTimeSeriesDeathsAxis("British Virgin Islands", 2),
      },
      {
        name: "Cayman Islands",
        data: yTimeSeriesDeathsAxis("Cayman Islands", 2),
      },
      { name: "Curacao", data: yTimeSeriesDeathsAxis("Curacao", 2) },
      {
        name: "French Guiana",
        data: yTimeSeriesDeathsAxis("French Guiana", 2),
      },
      { name: "Guadeloupe", data: yTimeSeriesDeathsAxis("Guadeloupe", 2) },
      { name: "Martinique", data: yTimeSeriesDeathsAxis("Martinique", 2) },
      { name: "Puerto Rico", data: yTimeSeriesDeathsAxis("Puerto Rico", 2) },
      {
        name: "Saint Barthelemy",
        data: yTimeSeriesDeathsAxis("Saint Barthelemy", 2),
      },
      { name: "Saint Martin", data: yTimeSeriesDeathsAxis("Saint Martin", 2) },
      { name: "Sint Maarten", data: yTimeSeriesDeathsAxis("Sint Maarten", 2) },
      {
        name: "Turks and Caicos Islands",
        data: yTimeSeriesDeathsAxis("Turks and Caicos Islands", 2),
      },
      {
        name: "United States Virgin Islands",
        data: yTimeSeriesDeathsAxis("United States Virgin Islands", 2),
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

  const country_vs_territory_cases = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: { text: "COVID-19 Country vs. Territory Cases" },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Islands",
        colorByPoint: true,
        data: [
          {
            name: "Countries",
            y: parseInt(data.summary_info.nodes[0].Total_Country_Cases),
          },
          {
            name: "Territories",
            y: parseInt(data.summary_info.nodes[0].Total_Territory_Cases),
          },
        ],
      },
    ],
    responsive: {
      rules: [
        {
          condition: { maxWidth: 450 },
        },
      ],
    },
  }

  const country_vs_territory_deaths = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: { text: "COVID-19 Country vs. Territory Deaths" },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Islands",
        colorByPoint: true,
        data: [
          {
            name: "Countries",
            y: parseInt(data.summary_info.nodes[0].Total_Country_Deaths),
          },
          {
            name: "Territories",
            y: parseInt(data.summary_info.nodes[0].Total_Territory_Deaths),
          },
        ],
      },
    ],
    responsive: {
      rules: [
        {
          condition: { maxWidth: 450 },
        },
      ],
    },
  }

  const territory_region_cases_options = {
    chart: { type: "column" },
    title: { text: "COVID-19 Cases by Caribbean Territory by Region" },
    xAxis: {
      categories: [
        "French Territories",
        "Dutch Territiories",
        "UK Territories",
        "US Territories",
      ],
    },
    series: [
      {
        name: "Territories",
        data: [
          parseInt(data.summary_info.nodes[0].Total_FR_Territory_Cases),
          parseInt(data.summary_info.nodes[0].Total_NL_Territory_Cases),
          parseInt(data.summary_info.nodes[0].Total_UK_Territory_Cases),
          parseInt(data.summary_info.nodes[0].Total_US_Territory_Cases),
        ],
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

  const territory_region_deaths_options = {
    chart: { type: "column" },
    title: { text: "COVID-19 Deaths by Caribbean Territory by Region" },
    xAxis: {
      categories: [
        "French Territories",
        "Dutch Territiories",
        "UK Territories",
        "US Territories",
      ],
    },
    series: [
      {
        name: "Territories",
        data: [
          parseInt(data.summary_info.nodes[0].Total_FR_Territory_Deaths),
          parseInt(data.summary_info.nodes[0].Total_NL_Territory_Deaths),
          parseInt(data.summary_info.nodes[0].Total_UK_Territory_Deaths),
          parseInt(data.summary_info.nodes[0].Total_US_Territory_Deaths),
        ],
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
    let xValues = []
    data.country_cases.nodes.forEach(node => {
      xValues.push(node.date)
    })
    return xValues
  }

  function yTimeSeriesCasesAxis(key, mode) {
    key = key.replace(/[,]/g, "").replace(/\s/g, "_")
    let yValues = []
    var nodes
    mode === 1
      ? (nodes = data.country_cases.nodes)
      : (nodes = data.territory_cases.nodes)
    nodes.forEach(node => {
      yValues.push(parseInt(node[key]))
    })
    return yValues
  }

  function yTimeSeriesDeathsAxis(key, mode) {
    key = key.replace(/[,]/g, "").replace(/\s/g, "_")
    let yValues = []
    var nodes
    mode === 1
      ? (nodes = data.country_deaths.nodes)
      : (nodes = data.territory_deaths.nodes)
    nodes.forEach(node => {
      yValues.push(parseInt(node[key]))
    })
    return yValues
  }

  function xLocationAxis() {
    let update_date = data.latest_data.nodes[0].comparestring
    let xValues = []
    data.all_data.nodes.forEach(node => {
      if (node.date === update_date) {
        xValues.push(node.location)
      }
    })
    return xValues
  }

  function yTotalCasesAxis() {
    let update_date = data.latest_data.nodes[0].comparestring
    let yValues = []
    data.all_data.nodes.forEach(node => {
      if (node.date === update_date) {
        yValues.push(Math.max(node.total_cases_1, node.total_cases_2))
      }
    })
    return yValues
  }

  function yTotalDeathsAxis() {
    let update_date = data.latest_data.nodes[0].comparestring
    let yValues = []
    data.all_data.nodes.forEach(node => {
      if (node.date === update_date) {
        yValues.push(Math.max(node.total_deaths_1, node.total_deaths_2))
      }
    })
    return yValues
  }

  return (
    <Fragment>
      <Header />
      <main>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <h1 class="header">Charts Page</h1>
              <br></br>
              <div class="alert alert-info text-center" role="alert">
                <h5>
                  Last Updated on{" "}
                  <strong>{data.latest_data.nodes[0].updatedate}</strong>
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <HighchartsReact
                highcharts={Highcharts}
                options={caribbean_options}
              />
            </Col>
          </Row>
        </Container>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <HighchartsReact
                highcharts={Highcharts}
                options={country_cases_options}
              />
            </Col>
          </Row>
        </Container>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <HighchartsReact
                highcharts={Highcharts}
                options={country_deaths_options}
              />
            </Col>
          </Row>
        </Container>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <HighchartsReact
                highcharts={Highcharts}
                options={territory_cases_options}
              />
            </Col>
          </Row>
        </Container>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <HighchartsReact
                highcharts={Highcharts}
                options={territory_deaths_options}
              />
            </Col>
          </Row>
        </Container>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <HighchartsReact
                highcharts={Highcharts}
                options={country_vs_territory_cases}
              />
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <HighchartsReact
                highcharts={Highcharts}
                options={country_vs_territory_deaths}
              />
            </Col>
          </Row>
        </Container>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <HighchartsReact
                highcharts={Highcharts}
                options={territory_region_cases_options}
              />
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <HighchartsReact
                highcharts={Highcharts}
                options={territory_region_deaths_options}
              />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </Fragment>
  )
}

export const query = graphql`
  query ChartsPageQuery {
    all_data: allCaribbeandataCsv(
      filter: { location: { ne: "World" } }
      sort: { fields: [location, date], order: [ASC, DESC] }
    ) {
      nodes {
        location
        date(formatString: "DD MMM YYYY")
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
        source_name_1
        source_url_1
        source_name_2
        source_url_2
      }
    }
    latest_data: allCaribbeandataCsv(
      sort: { fields: date, order: DESC }
      filter: { location: { ne: "World" } }
      limit: 1
    ) {
      nodes {
        updatedate: date(formatString: "MMMM DD, YYYY")
        comparestring: date(formatString: "DD MMM YYYY")
      }
    }
    country_cases: allCarribeancountrycasesCsv(
      sort: { fields: date, order: ASC }
    ) {
      nodes {
        date(formatString: "DD-MMM-YY")
        Antigua_and_Barbuda
        Bahamas
        Barbados
        Belize
        Cuba
        Dominica
        Dominican_Republic
        Grenada
        Guyana
        Haiti
        Jamaica
        Saint_Kitts_and_Nevis
        Saint_Lucia
        Saint_Vincent_and_the_Grenadines
        Suriname
        Trinidad_and_Tobago
      }
    }
    country_deaths: allCarribeancountrydeathsCsv(
      sort: { fields: date, order: ASC }
    ) {
      nodes {
        date(formatString: "DD-MMM-YY")
        Antigua_and_Barbuda
        Bahamas
        Barbados
        Belize
        Cuba
        Dominica
        Dominican_Republic
        Grenada
        Guyana
        Haiti
        Jamaica
        Saint_Kitts_and_Nevis
        Saint_Lucia
        Saint_Vincent_and_the_Grenadines
        Suriname
        Trinidad_and_Tobago
      }
    }
    territory_cases: allCarribeanterritorycasesCsv(
      sort: { fields: date, order: ASC }
    ) {
      nodes {
        Anguilla
        Aruba
        Bermuda
        Bonaire_Sint_Eustatius_and_Saba
        British_Virgin_Islands
        Cayman_Islands
        Curacao
        French_Guiana
        Guadeloupe
        Martinique
        Montserrat
        Puerto_Rico
        Saint_Barthelemy
        Saint_Martin
        Sint_Maarten
        Turks_and_Caicos_Islands
        United_States_Virgin_Islands
      }
    }
    territory_deaths: allCarribeanterritorydeathsCsv(
      sort: { fields: date, order: ASC }
    ) {
      nodes {
        Anguilla
        Aruba
        Bermuda
        Bonaire_Sint_Eustatius_and_Saba
        British_Virgin_Islands
        Cayman_Islands
        Curacao
        French_Guiana
        Guadeloupe
        Martinique
        Montserrat
        Puerto_Rico
        Saint_Barthelemy
        Saint_Martin
        Turks_and_Caicos_Islands
        Sint_Maarten
        United_States_Virgin_Islands
      }
    }
    summary_info: allCaribbeansummaryCsv(
      sort: { fields: date, order: DESC }
      limit: 1
    ) {
      nodes {
        Total_Cases
        Total_Country_Deaths
        Total_Country_Cases
        Total_Deaths
        Total_FR_Territory_Cases
        Total_FR_Territory_Deaths
        Total_NL_Territory_Cases
        Total_NL_Territory_Deaths
        Total_Territory_Cases
        Total_Territory_Deaths
        Total_UK_Territory_Cases
        Total_UK_Territory_Deaths
        Total_US_Territory_Cases
        Total_US_Territory_Deaths
      }
    }
  }
`

export default ChartsPage
