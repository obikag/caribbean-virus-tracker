import React, { Fragment } from 'react';
import { Header, Footer } from './Layouts';

const FaqPage = () => {
    return (
        <Fragment>
            <Header />
                <main style={{ minHeight: '600px' }}>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="header">Frequently Asked Questions</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                                <h6>Under Construction. <a href="/">Click here</a> to return to the Homepage.</h6>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />
        </Fragment>
    );
}

export default FaqPage;