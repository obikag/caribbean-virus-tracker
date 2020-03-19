import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

const Header = () => {
      return (
         <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Caribbean Virus Tracker</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Web site to track Corona Virus throughout the Caribbean" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
            </Helmet>
            <header>
            <nav class="navbar navbar-expand-md navbar-dark bg-primary">
               <div class="container">
                  <a class="navbar-brand" href="/"><strong>Caribbean Virus Tracker</strong></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-links" aria-controls="menuLinks" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="menu-links">
                     <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                           <Link to="/" className="nav-link">
                              <i class="fa fa-fw fa-home" aria-hidden="true"></i>Home<span class="sr-only"></span>
                           </Link>
                        </li>
                        <li class="nav-item">
                           <Link to="/about/" className="nav-link">
                              <i class="fa fa-fw fa-address-card" aria-hidden="true"></i>About
                           </Link>
                        </li>
                        <li class="nav-item">
                           <Link to="/faq/" className="nav-link">
                              <i class="fa fa-fw fa-question-circle" aria-hidden="true"></i>FAQ
                           </Link>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="/"><i class="fa fa-fw fa-github-alt" aria-hidden="true"></i>GitHub</a>
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