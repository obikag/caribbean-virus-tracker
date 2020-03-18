import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import { Helmet } from 'react-helmet';

class Home extends Component {

    render() {
        return (
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Caribbean Virus Tracker</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="Web site to track Corona Virus throughout the Caribbean" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
                    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
                </Helmet>
                <Header />
                    <main>
                        <h1>Hello World</h1>
                    </main>
                <Footer />
            </Fragment>
        );
    }
}

export default Home;