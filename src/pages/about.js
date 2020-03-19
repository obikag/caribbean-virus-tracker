import React, { Fragment } from 'react';
import { Header, Footer } from './Layouts';

const AboutPage = () => {
    return (
        <Fragment>
            <Header />
                <main>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col=md-12">
                                <h1 class="header">About this Tracker</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col=md-12">
                                <p>About Page</p>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />
        </Fragment>
    );
}

export default AboutPage;