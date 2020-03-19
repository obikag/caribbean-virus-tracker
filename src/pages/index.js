import React, { Fragment } from 'react';
import { Header, Footer } from './Layouts';
import { graphql } from 'gatsby';

const HomePage = ({data}) => {
    return (
        <Fragment>
            <Header />
                <main>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col=md-12">
                                <h1 class="header">Welcome to Caribbean Virus Tracker</h1>
                                <h5><em>These are the latest reported Caribbean stats for the Coronavirus outbreak.</em></h5>
                                <p>Some Caribbean countries may not be on the list because no Coronavirus infections were reported for that country. 
                                Last Updated on <em>18th March 2020</em></p>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col=md-12">
                                <div class="table-responsive-md pb-3">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">Location</th>
                                            <th scope="col">Reporting Date</th>
                                            <th scope="col">Total Cases</th>
                                            <th scope="col">New Cases</th>
                                            <th scope="col">Total Deaths</th>
                                            <th scope="col">New Deaths</th>
                                            <th scope="col">Source</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data.allCaribbeandataCsv.nodes.map((node) => (
                                            <tr>
                                            <td>{node.location}</td>
                                            <td>{node.date}</td>
                                            <td class="text-center">{node.total_cases}</td>
                                            <td class="text-center">{node.new_cases}</td>
                                            <td class="text-center">{node.total_deaths}</td>
                                            <td class="text-center">{node.new_deaths}</td>
                                            <td><a href={node.source_url} target="_blank" rel="noopener noreferrer">{node.source_name}</a></td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />
        </Fragment>
    );
}

export const query = graphql`
query HomePageQuery {
  allCaribbeandataCsv(sort: {fields: location, order: ASC}) {
    nodes {
      location
      date
      total_cases
      new_cases
      total_deaths
      new_deaths
      source_name
      source_url
    }
  }
}
`

export default HomePage;