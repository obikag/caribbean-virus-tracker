import React, { Fragment } from 'react';
import { Header, Footer } from './Layouts';

const FaqPage = () => {
    return (
        <Fragment>
            <Header />
                <main>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col=md-12">
                                <h1 class="header">Frequently Asked Questions about Coronavirus</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col=md-12">
                                <p>FAQ page</p>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />
        </Fragment>
    );
}

export default FaqPage;