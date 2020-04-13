import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../components/global.css';

const Error404Page = () => {
    return(
        <Fragment>
            <Header 
                title="Page not Found"
                description="404 Error"
            />
            <main>
                <div class="container py-2">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h1 class="header">404 Error</h1>
                            <h5>Page Not Found</h5>
                            <p>Oh no, it looks like the page was not on this server</p>
                            <a href="/" class="btn btn-primary active" role="button" aria-pressed="true">
                                Return to Home
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>
    );
}

export default Error404Page;