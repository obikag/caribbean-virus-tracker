import React, { Fragment } from 'react';
import { Header, Footer } from './Layouts';
import { graphql } from 'gatsby';


const WorldPage = ({data}) => {
    return (
        <Fragment>
            <Header />
                <main>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="header">World Outbreak Statistics</h1>
                                <h5><em>These are the latest reported World stats for the Coronavirus outbreak.</em></h5>
                                <p>Last Updated on <em>{data.latest_data.nodes[0].updatedate}</em></p>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h1><strong>{data.latest_data.nodes[0].total_cases}</strong></h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Total Cases</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h1><strong>{data.latest_data.nodes[0].new_cases}</strong></h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">New Cases</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h1><strong>{data.latest_data.nodes[0].total_deaths}</strong></h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Total Deaths</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h1><strong>{data.latest_data.nodes[0].new_deaths}</strong></h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">New Deaths</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
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
                                        {data.all_data.nodes.map((node) => (
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
query WorldPageQuery {
  all_data: allCaribbeandataCsv(filter: {location: {eq: "World"}}, sort: {fields: [location, date], order: [ASC, DESC]}) {
    nodes {
      location
      date(formatString: "DD MMM YYYY")
      total_cases
      new_cases
      total_deaths
      new_deaths
      source_name
      source_url
    }
  }
  latest_data: allCaribbeandataCsv(sort: {fields: date, order: DESC}, filter: {location: {eq: "World"}}, limit: 1) {
    nodes {
      total_cases
      new_cases
      total_deaths
      new_deaths
      updatedate: date(formatString: "MMMM DD, YYYY")
      comparestring: date(formatString: "DD MMM YYYY")
    }
  }
}
`

export default WorldPage;