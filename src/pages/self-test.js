import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const SelfTestPage = () => {

    return(
        <Fragment>
            <Header />
                <main style={{ minHeight: '600px' }}>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="header">COVID-19 Self Test</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-9">
                                <div class="table-responsive-sm">
                                    <form>
                                    <table class="table">
                                        <thead>
                                            <th><strong>Question</strong></th>
                                            <th><strong>Yes</strong></th>
                                            <th><strong>No</strong></th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    (1) Do you have a cough?
                                                </td>
                                                <td><input type="radio" name="Q1" value="1"></input></td>
                                                <td><input type="radio" name="Q1" value="0"></input></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    (2) Are you experiencing flu-like symptoms?
                                                </td>
                                                <td><input type="radio" name="Q2" value="1"></input></td>
                                                <td><input type="radio" name="Q2" value="0"></input></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    (3) Are you experiencing diarrhea?
                                                </td>
                                                <td><input type="radio" name="Q3" value="1"></input></td>
                                                <td><input type="radio" name="Q3" value="0"></input></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    (4) Do you have a sore throat?
                                                </td>
                                                <td><input type="radio" name="Q4" value="1"></input></td>
                                                <td><input type="radio" name="Q4" value="0"></input></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    (5) Do you have a bodly aches and pains?
                                                </td>
                                                <td><input type="radio" name="Q5" value="1"></input></td>
                                                <td><input type="radio" name="Q5" value="0"></input></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    (6) Do you have a headache?
                                                </td>
                                                <td><input type="radio" name="Q6" value="1"></input></td>
                                                <td><input type="radio" name="Q6" value="0"></input></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    (7) Do you have a high fever (37 degC and above)?
                                                </td>
                                                <td><input type="radio" name="Q7" value="1"></input></td>
                                                <td><input type="radio" name="Q7" value="0"></input></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    (8) Do you have a difficulty breathing?
                                                </td>
                                                <td><input type="radio" name="Q8" value="1"></input></td>
                                                <td><input type="radio" name="Q8" value="0"></input></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    (9) Are you experiencing fatigue?
                                                </td>
                                                <td><input type="radio" name="Q9" value="1"></input></td>
                                                <td><input type="radio" name="Q9" value="0"></input></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    (10) Did you travel recently in the past 14 days?
                                                </td>
                                                <td><input type="radio" name="Q10" value="1"></input></td>
                                                <td><input type="radio" name="Q10" value="0"></input></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    (11) Did you travel to an area infected with COVID-19?
                                                </td>
                                                <td><input type="radio" name="Q11" value="1"></input></td>
                                                <td><input type="radio" name="Q11" value="0"></input></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    (12) Do you have direct contact with a positive COVID-19 person?
                                                </td>
                                                <td><input type="radio" name="Q12" value="1"></input></td>
                                                <td><input type="radio" name="Q12" value="0"></input></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td class="text-center" colspan="2">
                                                    <button class="btn btn-primary">Submit</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />
        </Fragment>
    );
}

export default SelfTestPage;