import React, { Fragment } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/global.css"
import { Container, Row, Col } from "react-bootstrap"

const FaqPage = () => {
  return (
    <Fragment>
      <Header
        title="Frequently Asked Questions"
        description="FAQ about the COVID-19 virus to provide the Caribbean Community with informaton and resources related to the outbreak."
        url="https://caribbeanvirustracker.com/faq/"
      />
      <main>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <h1 class="header">Frequently Asked Questions</h1>
            </Col>
          </Row>
        </Container>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <h2 class="header">General Information</h2>
              <hr></hr>
              <h5>What is the coronavirus?</h5>
              <p>
                Coronaviruses are one of a large family of viruses which may
                cause illness in animals or humans. In humans, several
                coronaviruses are known to cause respiratory infections ranging
                from the common cold to more severe diseases such as Middle East
                Respiratory Syndrome (MERS) and Severe Acute Respiratory
                Syndrome (SARS).
              </p>
              <h5>What is COVID-19?</h5>
              <p>
                COVID-19 is the infectious disease caused by the most recently
                discovered coronavirus. This new virus and disease were unknown
                before the outbreak began in Wuhan, China, in December 2019
              </p>
              <h5>What are the symptoms of COVID-19?</h5>
              <p>
                Symptoms vary with COVID-19 and not everyone will have the same
                features. The most common include:
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
                These symptoms are usually mild and begin gradually. Some people
                become infected but don’t develop any symptoms and don't feel
                unwell. Most people <em>(about 80%)</em> recover from the
                disease without needing special treatment. Around 1 out of every
                6 people who gets COVID-19 becomes seriously ill and develops
                difficulty breathing. Other at risk persons who are more likely
                to develop serious illines include:
                <ul>
                  <li>Older people</li>
                  <li>
                    People with underlying medical problems like high blood
                    pressure, heart problems or diabetes
                  </li>
                </ul>
                People with fever, cough and difficulty breathing should seek
                medical attention.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <h2 class="header">How the Coronavirus Spreads</h2>
              <hr></hr>
              <h5>How does the virus spread?</h5>
              <p>
                People can catch COVID-19 from others who have the virus. The
                disease can spread from person to person through small droplets
                from the nose or mouth which are spread when a person with
                COVID-19 coughs or exhales. These droplets land on objects and
                surfaces around the person. Other people then catch COVID-19 by
                touching these objects or surfaces, then touching their eyes,
                nose or mouth. People can also catch COVID-19 if they breathe in
                droplets from a person with COVID-19 who coughs out or exhales
                droplets.
              </p>
              <h5>
                Can someone who had COVID-19 spread the illness to others?
              </h5>
              <p>
                The virus that causes COVID-19 is spreading from
                person-to-person. People are thought to be most contagious when
                they are symptomatic (the sickest). Someone who has been
                released from isolation is not considered to pose a risk of
                infection to others.
              </p>
              <h5>Can I get sick with COVID-19 if it is on food?</h5>
              <p>
                Based on information about this novel coronavirus thus far, it
                seems unlikely that COVID-19 can be transmitted through food.
              </p>
              <h5>
                Can the COVID-19 be spread through restaruant food, refrigerated
                or frozen packaged food?
              </h5>
              <p>
                Currently, there is no evidence to support transmission of
                COVID-19 associated with food.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <h2 class="header">Protecting Yourself</h2>
              <hr></hr>
              <h5>How can I help protect myself?</h5>
              <p>
                You should:
                <ul>
                  <li>
                    Wash your hands often with soap and water for at least 20
                    seconds especially after you have been in a public place, or
                    after blowing your nose, coughing, or sneezing
                  </li>
                  <li>Avoid close contact with people who are sick</li>
                  <li>
                    Everyone should wear a cloth face cover when they have to go
                    out in public, for example to the grocery store or to pick
                    up other necessities.
                  </li>
                  <li>
                    If you are in a private setting and do not have on your
                    cloth face covering, remember to always cover your mouth and
                    nose with a tissue when you cough or sneeze or use the
                    inside of your elbow.
                  </li>
                  <li>
                    Clean AND disinfect frequently touched surfaces daily. This
                    includes tables, doorknobs, light switches, countertops,
                    handles, desks, phones, keyboards, toilets, faucets, and
                    sinks.
                  </li>
                </ul>
              </p>
              <h5>
                What should I do if I have had close contact with someone who
                has COVID-19?
              </h5>
              <p>
                You should:
                <ul>
                  <li>Limit Contact with the person as much as possible</li>
                  <li>
                    Stay separated: The person who is sick should eat (or be
                    fed) in their room, if possible
                  </li>
                  <li>
                    Avoid sharing personal items: Do not share dishes,
                    cups/glasses, silverware, towels, bedding, or electronics
                    with the person who is sick.
                  </li>
                  <li>
                    When interacting with the person: Wear gloves when you touch
                    or have contact with blood, stool, or body fluids, such as
                    saliva, mucus, vomit, and urine. Throw out gloves into a
                    lined trash can
                  </li>
                  <li>
                    Wash hands: Wash your hands often with soap and water for at
                    least 20 seconds. Tell everyone in the home to do the same,
                    especially after being near the person who is sick.
                  </li>
                </ul>
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="py-2">
          <Row>
            <Col md="12">
              <h2 class="header">Related Websites</h2>
              <hr></hr>
              <p>
                Under Construction <a href="/">Click here</a> to go back to the
                Home Page
              </p>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </Fragment>
  )
}

export default FaqPage
