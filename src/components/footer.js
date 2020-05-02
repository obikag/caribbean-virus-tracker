import React, { Fragment } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <Fragment>
      <footer class="bg-dark text-white">
        <Container>
          <Row>
            <Col md="12">
              <h4 class="text-center">Disclaimer</h4>
              <p class="text-center">
                This list is managed voluntarily by{" "}
                <a class="text-white" href="/about">
                  Obika Gellineau
                </a>
              </p>
              <p>
                While listing additions are sourced through the{" "}
                <a
                  class="text-white"
                  href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports"
                >
                  <em>WHO Situation reports on COVID-19</em>
                </a>{" "}
                provided by the World Health Organization (WHO) and the{" "}
                <a
                  class="text-white"
                  href="https://github.com/CSSEGISandData/COVID-19"
                >
                  <em>John Hopkins CSSE GitHub Repo on CORVID-19</em>
                </a>
                , the site's author cannot be responsible for any inaccuracies
                reported by WHO and John Hopkins CSSE respectively.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <p class="text-center">
                <Link to="/privacy-policy/" className="text-white">
                  <strong>Privacy Policy</strong>
                </Link>{" "}
                | Copyright &copy;{new Date().getFullYear()} All Rights
                Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Fragment>
  )
}

export default Footer
