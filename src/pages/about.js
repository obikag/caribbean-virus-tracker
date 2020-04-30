import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../components/global.css';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
    return (
        <Fragment>
            <Header 
                title="About this Tracker" 
                description="This tracker was created for the purpose of providing the Caribbean community with an overview of the ongoing COVID-19 pandemic within the Caribbean."
                url="https://caribbeanvirustracker.com/about/" 
            />
                <main>
                    <Container className="py-2">
                        <Row>
                            <Col md="12">
                                <h1 class="header">About this Tracker</h1>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="py-2">
                        <Row>
                            <Col md="12">
                                <p>This tracker was created for the purpose of providing the Caribbean community with an overview of 
                                    the ongoing COVID-19 pandemic within the Caribbean.
                                </p>
                                <p>The site is progressively being updated and will have more features in the coming weeks.
                                If you wish to contribute to the site, please visit the <a href="https://github.com/obikag/caribbean-virus-tracker">GitHub page</a></p>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="py-2">
                        <Row>
                            <Col md="12">
                                <h1 class="header">About the Author</h1>
                            </Col>
                        </Row>
                    </Container>
                    <br></br>
                    <Container className="border py-5">
                        <Row>
                            <Col md="3" className="text-center">
                                <img src={'/profile.jpg'} alt="John" style={{width: '150px', borderRadius: '50%'}}/>
                            </Col>
                            <Col md="9">
                                <h1 class="header">Obika Gellineau</h1>
                                <h6>Security Professional &amp; Blogger | Visionary Scientific Innovator | Part-Time Web &amp; Python Developer</h6>
                                <br></br>
                                <p>A person with a passion for cybersecurity, who has several years of
                                    security and software development experience to share with others.
                                </p>
                                <a href="https://tt.linkedin.com/in/obikag" style={{float: 'left', paddingLeft: '10px'}}><i class="fa fa-linkedin fa-2x"></i></a>
                                <a href="https://medium.com/@obikag" style={{float: 'left', paddingLeft: '10px'}}><i class="fa fa-medium fa-2x"></i></a>
                            </Col>
                        </Row>
                    </Container>
                </main>
            <Footer />
        </Fragment>
    );
}

export default AboutPage;