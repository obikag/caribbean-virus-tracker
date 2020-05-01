import React, { Fragment } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/global.css"
import { Container, Row, Col } from "react-bootstrap"

const Error404Page = () => {
  return (
    <Fragment>
      <Header title="Page not Found" description="404 Error" />
      <main>
        <Container className="py-2">
          <Row>
            <Col md="12" className="text-center">
              <h1 class="header">404 Error</h1>
              <h5>Page Not Found</h5>
              <p>Oh no, it looks like the page was not on this server</p>
              <a
                href="/"
                class="btn btn-primary active"
                role="button"
                aria-pressed="true"
              >
                Return to Home
              </a>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </Fragment>
  )
}

export default Error404Page
