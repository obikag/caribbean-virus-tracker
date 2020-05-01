import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import { Nav, Navbar, Container } from "react-bootstrap"
import { StaticQuery, graphql } from "gatsby"

const Header = ({ title = "", description = "", url = "" }) => {
  return (
    <Fragment>
      <StaticQuery
        query={query}
        render={data => (
          <Helmet
            title={title || data.site.siteMetadata.defaultTitle}
            titleTemplate={data.site.siteMetadata.titleTemplate}
          >
            <meta charSet="utf-8" />
            <meta keywords="Caribbean,Coronavrus,COVID,Virus,Tracker" />
            <meta
              name="description"
              content={description || data.site.siteMetadata.defaultDescription}
            />
            <meta name="image" content={data.site.siteMetadata.defaultImage} />
            {data.site.siteMetadata.siteUrl && (
              <meta
                property="og:url"
                content={url || data.site.siteMetadata.siteUrl}
              />
            )}
            {data.site.siteMetadata.defaultTitle && (
              <meta
                property="og:title"
                content={title || data.site.siteMetadata.defaultTitle}
              />
            )}
            {data.site.siteMetadata.defaultDescription && (
              <meta
                property="og:description"
                content={
                  description || data.site.siteMetadata.defaultDescription
                }
              />
            )}
            {data.site.siteMetadata.defaultImage && (
              <meta
                property="og:image"
                content={data.site.siteMetadata.defaultImage}
              />
            )}
            {data.site.siteMetadata.siteUrl && (
              <link
                rel="canonical"
                href={url || data.site.siteMetadata.siteUrl}
              />
            )}
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Special+Elite|Montserrat"
              rel="stylesheet"
            ></link>
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
              integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
              crossorigin="anonymous"
            ></link>
            <link
              rel="stylesheet"
              href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
              integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
              crossorigin=""
            />
            {/*
                     <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
                     <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
                     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
                     */}
            <script
              src="https://kit.fontawesome.com/e2a9dab6a2.js"
              crossorigin="anonymous"
            ></script>
          </Helmet>
        )}
      />
      <header>
        <Navbar className="color-nav" variant="light" expand="md">
          <Container>
            <Navbar.Brand href="/">
              <i class="fa fa-shield-virus fa-lg"></i>{" "}
              <span>
                <strong>Caribbean Virus Tracker</strong>
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/" className="active">
                  <i class="fa fa-fw fa-home" aria-hidden="true"></i>&nbsp;Home
                  <span class="sr-only"></span>
                </Nav.Link>
                <Nav.Link href="/world/" className="active">
                  <i class="fa fa-fw fa-globe" aria-hidden="true"></i>
                  &nbsp;World
                </Nav.Link>
                <Nav.Link href="/about/" className="active">
                  <i class="fa fa-fw fa-address-card" aria-hidden="true"></i>
                  &nbsp;About
                </Nav.Link>
                <Nav.Link href="/faq/" className="active">
                  <i class="fa fa-fw fa-question-circle" aria-hidden="true"></i>
                  &nbsp;FAQ
                </Nav.Link>
                <Nav.Link href="https://github.com/obikag/caribbean-virus-tracker">
                  <i class="fa fa-fw fa-github-alt" aria-hidden="true"></i>
                  &nbsp;GitHub
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </Fragment>
  )
}

export default Header

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
      }
    }
  }
`
