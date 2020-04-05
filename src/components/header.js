import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, Link, graphql } from 'gatsby';

const Header = () => {
      return (
         <Fragment>
            <StaticQuery
               query={query}
               render={data => (
                  <Helmet title={data.site.siteMetadata.defaultTitle} titleTemplate={data.site.siteMetadata.titleTemplate}>
                     <meta charSet="utf-8" />
                     <meta name="description" content={data.site.siteMetadata.defaultDescription} />
                     <meta name="image" content={data.site.siteMetadata.defaultImage} />
                     {data.site.siteMetadata.siteUrl && <meta property="og:url" content={data.site.siteMetadata.siteUrl} />}
                     {data.site.siteMetadata.defaultTitle && <meta property="og:title" content={data.site.siteMetadata.defaultTitle} />}
                     {data.site.siteMetadata.defaultDescription && (
                     <meta property="og:description" content={data.site.siteMetadata.defaultDescription} />
                     )}
                     {data.site.siteMetadata.defaultImage && <meta property="og:image" content={data.site.siteMetadata.defaultImage} />}
                     {data.site.siteMetadata.siteUrl && <link rel="canonical" href={data.site.siteMetadata.siteUrl} />}
                     <meta name="viewport" content="width=device-width, initial-scale=1" />
                     <link href="https://fonts.googleapis.com/css?family=Special+Elite" rel="stylesheet"></link>
                     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
                     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/>
                     <script src="https://kit.fontawesome.com/e2a9dab6a2.js" crossorigin="anonymous"></script>
                  </Helmet>
               )}
            />
            <header>
            <nav class="navbar navbar-expand-md navbar-light" style={{backgroundColor: "#ece136"}}>
               <div class="container">
                  <a class="navbar-brand" href="/"><i class="fa fa-shield-virus fa-lg"></i> <span><strong>Caribbean Virus Tracker</strong></span></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-links" aria-controls="menuLinks" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="menu-links">
                     <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                           <Link to="/" className="nav-link" activeClassName="active">
                              <i class="fa fa-fw fa-home" aria-hidden="true"></i>&nbsp;Home<span class="sr-only"></span>
                           </Link>
                        </li>
                        <li class="nav-item">
                           <Link to="/world/" className="nav-link" activeClassName="active">
                              <i class="fa fa-fw fa-globe" aria-hidden="true"></i>&nbsp;World
                           </Link>
                        </li>
                        <li class="nav-item">
                           <Link to="/about/" className="nav-link" activeClassName="active">
                              <i class="fa fa-fw fa-address-card" aria-hidden="true"></i>&nbsp;About
                           </Link>
                        </li>
                        <li class="nav-item">
                           <Link to="/faq/" className="nav-link" activeClassName="active">
                              <i class="fa fa-fw fa-question-circle" aria-hidden="true"></i>&nbsp;FAQ
                           </Link>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="https://github.com/obikag/caribbean-virus-tracker"><i class="fa fa-fw fa-github-alt" aria-hidden="true"></i>GitHub</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </header>
         </Fragment>
      );
}

export default Header;

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