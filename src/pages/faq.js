import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../components/global.css';

const FaqPage = () => {
    return (
        <Fragment>
            <Header 
                title="Frequently Asked Questions"
                description="FAQ about the COVID-19 virus to provide the Caribbean Community with informaton and resources related to the outbreak."
                url="https://caribbeanvirustracker.com/faq/"
            />
                <main>
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
                                <h2 class="header">General Information</h2>
                                <hr></hr>
                                <h5>What is the coronavirus?</h5>
                                <p>
                                Coronaviruses are one of a large family of viruses which may cause illness in animals or humans.  
                                In humans, several coronaviruses are known to cause respiratory infections ranging from the 
                                common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe 
                                Acute Respiratory Syndrome (SARS).
                                </p>
                                <h5>What is COVID-19?</h5>
                                <p>
                                COVID-19 is the infectious disease caused by the most recently discovered coronavirus. 
                                This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019
                                </p>
                                <h5>What are the symptoms of COVID-19?</h5>
                                <p>
                                Symptoms vary with COVID-19 and not everyone will have the same features. 
                                The most common include:
                                <ul>
                                    <li>Fever</li>
                                    <li>Tiredness</li>
                                    <li>Dry cough</li>
                                </ul>
                                Some patients may have:
                                <ul>
                                    <li>Aches and pains</li>
                                    <li>Nasal congestion</li>
                                    <li>Sore throat</li>
                                    <li>Diarrhoea</li>
                                </ul>
                                These symptoms are usually mild and begin gradually. Some people become infected but don’t develop 
                                any symptoms and don't feel unwell. Most people <em>(about 80%)</em> recover from the disease without needing 
                                special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and 
                                develops difficulty breathing. Other at risk persons who are more likely to develop serious illines 
                                include:
                                <ul>
                                    <li>Older people</li>
                                    <li>People with underlying medical problems like high blood pressure, heart problems or diabetes</li>
                                </ul> 
                                People with fever, cough and difficulty breathing should seek medical attention.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="header">How the Coronavirus Spreads</h2>
                                <hr></hr>
                                <h5>How does the virus spread?</h5>
                                <p>TBC</p>
                                <h5>Can someone who had COVID-19 spread the illness to others?</h5>
                                <p>TBC</p>
                                <h5>Can someone who has been quarantined for COVID-19 spread the illness to others?</h5>
                                <p>TBC</p>
                                <h5>Can I get sick with COVID-19 if it is on food?</h5>
                                <p>TBC</p>
                                <h5>Can the COVID-19 be spread through restaruant food, refrigerated or frozen packaged food?</h5>
                                <p>TBC</p>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="header">Protecting Yourself</h2>
                                <hr></hr>
                                <h5>How can I help protect myself?</h5>
                                <p>TBC</p>
                                <h5>What should I do if I have had close contact with someone who has COVID-19?</h5>
                                <p>TBC</p>
                                <h5>Is it okay for me to donate blood?</h5>
                                <p>TBC</p>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="header">Protecting Your Home</h2>
                                <hr></hr>
                                <h5>How can I and my family prepare for COVID-19?</h5>
                                <p>TBC</p>
                                <h5>What cleaning products should I use to sanitize my home?</h5>
                                <p>TBC</p>
                                <h5>What should I do if I suspect that I or someone from my household has been exposed to COVID-19?</h5>
                                <p>TBC</p>
                                <h5>What are the risks for children?</h5>
                                <p>TBC</p>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="header">Related Websites</h2>
                                <hr></hr>
                                <p>Under Construction <a href="/">Click here</a> to go back to the Home Page</p>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />
        </Fragment>
    );
}

export default FaqPage;