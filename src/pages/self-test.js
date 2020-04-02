import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const SelfTestPage = ({q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12}) => {

    function handleSubmit(event) {
        event.preventDefault();
        var travelScore = q1+q2;
        var symptomScore = q3+q4+q5+q6+q7+q8+q9+q10+q11;
        var contactScore = q12;
        console.log(travelScore);
        console.log(symptomScore);
        console.log(contactScore);
    }

    return(
        <Fragment>
            <Header />
                <main style={{ minHeight: '600px' }}>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="header">COVID-19 Self Assessment</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-9">
                                <div class="table-responsive-sm">
                                    <form onSubmit={handleSubmit}>
                                    <table class="table">
                                        <tr>
                                            <td colspan="2"><h3>Travel History</h3></td>
                                        </tr>
                                        <tr>
                                            <td>Did you travel recently in the past 14 days?</td>
                                            <td>
                                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                <label class="btn btn-success active">
                                                    <input type="radio" name="Q1" value="1" onChange={e => (q1 = parseInt(e.target.value))}></input> Yes
                                                </label>
                                                <label class="btn btn-danger">    
                                                    <input type="radio" name="Q1" value="0" onChange={e => (q1 = parseInt(e.target.value))}></input> No
                                                </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Did you travel to an area infected with COVID-19?</td>
                                            <td>
                                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                <label class="btn btn-success active">
                                                    <input type="radio" name="Q2" value="1" onChange={e => (q2 = parseInt(e.target.value))}></input> Yes
                                                </label>
                                                <label class="btn btn-danger">    
                                                    <input type="radio" name="Q2" value="0" onChange={e => (q2 = parseInt(e.target.value))}></input> No
                                                </label>
                                                </div>
                                            </td>
                                        </tr>
                                    <tr>
                                        <td colspan="2"><h3>Symptoms</h3></td>
                                    </tr>
                                    <tr>
                                        <td>Do you have a cough?</td>
                                        <td>
                                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-success active">
                                                <input type="radio" name="Q3" value="1" onChange={e => (q3 = parseInt(e.target.value))}></input> Yes
                                            </label>
                                            <label class="btn btn-danger">    
                                                <input type="radio" name="Q3" value="0" onChange={e => (q3 = parseInt(e.target.value))}></input> No
                                            </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Are you experiencing flu-like symptoms?</td>
                                        <td>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-success active">
                                                <input type="radio" name="Q4" value="1" onChange={e => (q4 = parseInt(e.target.value))}></input> Yes
                                            </label>
                                            <label class="btn btn-danger">    
                                                <input type="radio" name="Q4" value="0" onChange={e => (q4 = parseInt(e.target.value))}></input> No
                                            </label>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Are you experiencing diarrhea?</td>
                                        <td>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-success active">
                                                <input type="radio" name="Q5" value="1" onChange={e => (q5 = parseInt(e.target.value))}></input> Yes
                                            </label>
                                            <label class="btn btn-danger">    
                                                <input type="radio" name="Q5" value="0" onChange={e => (q5 = parseInt(e.target.value))}></input> No
                                            </label>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Do you have a sore throat?</td>
                                        <td>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-success active">
                                                <input type="radio" name="Q6" value="1" onChange={e => (q6 = parseInt(e.target.value))}></input> Yes
                                            </label>
                                            <label class="btn btn-danger">    
                                                <input type="radio" name="Q6" value="0" onChange={e => (q6 = parseInt(e.target.value))}></input> No
                                            </label>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Do you have a bodly aches and pains?</td>
                                        <td>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-success active">
                                                <input type="radio" name="Q7" value="1" onChange={e => (q7 = parseInt(e.target.value))}></input> Yes
                                            </label>
                                            <label class="btn btn-danger">    
                                                <input type="radio" name="Q7" value="0" onChange={e => (q7 = parseInt(e.target.value))}></input> No
                                            </label>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Do you have a headache?</td>
                                        <td>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-success active">
                                                <input type="radio" name="Q8" value="1" onChange={e => (q8 = parseInt(e.target.value))}></input> Yes
                                            </label>
                                            <label class="btn btn-danger">    
                                                <input type="radio" name="Q8" value="0" onChange={e => (q8 = parseInt(e.target.value))}></input> No
                                            </label>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Do you have a high fever (37 degC and above)?</td>
                                        <td>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-success active">
                                                <input type="radio" name="Q9" value="1" onChange={e => (q9 = parseInt(e.target.value))}></input> Yes
                                            </label>
                                            <label class="btn btn-danger">    
                                                <input type="radio" name="Q9" value="0" onChange={e => (q9 = parseInt(e.target.value))}></input> No
                                            </label>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Do you have a difficulty breathing?</td>
                                        <td>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-success active">
                                                <input type="radio" name="Q10" value="1" onChange={e => (q10 = parseInt(e.target.value))}></input> Yes
                                            </label>
                                            <label class="btn btn-danger">    
                                                <input type="radio" name="Q10" value="0" onChange={e => (q10 = parseInt(e.target.value))}></input> No
                                            </label>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Are you experiencing fatigue?</td>
                                        <td>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-success active">
                                                <input type="radio" name="Q11" value="1" onChange={e => (q11 = parseInt(e.target.value))}></input> Yes
                                            </label>
                                            <label class="btn btn-danger">    
                                                <input type="radio" name="Q11" value="0" onChange={e => (q11 = parseInt(e.target.value))}></input> No
                                            </label>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"><h3>Contact</h3></td>
                                    </tr>
                                        <tr>
                                            <td>Do you have direct contact with a positive COVID-19 person?</td>
                                            <td>
                                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                <label class="btn btn-success active">
                                                    <input type="radio" name="Q12" value="1" onChange={e => (q12 = parseInt(e.target.value))}></input> Yes
                                                </label>
                                                <label class="btn btn-danger">    
                                                    <input type="radio" name="Q12" value="0" onChange={e => (q12 = parseInt(e.target.value))}></input> No
                                                </label>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="/" class="btn btn-secondary btn-lg btn-block">Return to Homepage</a>
                                            </td>
                                            <td>
                                                <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
                                            </td>
                                        </tr>                                                
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