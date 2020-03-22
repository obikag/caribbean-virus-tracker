import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const AboutPage = () => {
    return (
        <Fragment>
            <Header />
                <main style={{minHeight: '600px'}}>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="header">About this Tracker</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                                <p>This tracker was created for the purpose of providing the Caribbean community with an overview of 
                                    the ongoing Coronavirus pandemic within the Caribbean.
                                </p>
                                <p>The site is progressively being updated and will have more features in the coming weeks.
                                If you wish to contribute to the site, please visit the <a href="https://github.com/obikag/caribbean-virus-tracker">GitHub page</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="header">About the Author</h1>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div class="container border py-5">
                        <div class="row">
                            <div class="col-md-3 text-center">
                                <img src={'/avatar.png'} alt="John" style={{width: '150px', borderRadius: '50%'}}/>
                            </div>
                            <div class="col-md-9">
                                <h1 class="header">Obika Gellineau</h1>
                                <h6>Security Professional &amp; Blogger | Visionary Scientific Innovator | Part-Time Web &amp; Python Developer</h6>
                                <br></br>
                                <p>A person with a passion for cybersecurity, who has several years of
                                    security and software development experience to share with others.
                                </p>
                                <a href="https://tt.linkedin.com/in/obikag" style={{float: 'left', paddingLeft: '10px'}}><i class="fa fa-linkedin"></i></a>
                                <a href="https://medium.com/@obikag" style={{float: 'left', paddingLeft: '10px'}}><i class="fa fa-medium"></i></a>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />
        </Fragment>
    );
}

export default AboutPage;