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
                            <div class="col-md-12">
                                <h1 class="header">Welcome to Caribbean Virus Tracker</h1>
                                <h5><em>These are the latest reported Caribbean stats for the Coronavirus outbreak.</em></h5>
                                <p>Last Updated on <em>{data.max_date.nodes[0].date}</em></p>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="header">World Outbreak Statistics</h2>
                                <br></br>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h1><strong>{data.world_stats.nodes[0].total_cases}</strong></h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Total Cases</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h1><strong>{data.world_stats.nodes[0].new_cases}</strong></h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">New Cases</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h1><strong>{data.world_stats.nodes[0].total_deaths}</strong></h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Total Deaths</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h1><strong>{data.world_stats.nodes[0].new_deaths}</strong></h1>
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
                                <h2 class="header">Caribbean Outbreak Statistics</h2>
                                <p><strong>Note: </strong>Some Caribbean countries may not be on the list because no Coronavirus infections were reported by that country. French, Dutch and U.S. Caribbean Territories are not included at the moment.</p> 
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
                                            <td>{node.date.split('T')[0]}</td>
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
  all_data: allCaribbeandataCsv(filter: {location: {ne: "World"}}, sort: {fields: location, order: ASC}) {
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
  world_stats: allCaribbeandataCsv(filter: {location: {eq: "World"}}, limit: 1, sort: {fields: date, order: DESC}) {
    nodes {
      total_cases
      new_cases
      total_deaths
      new_deaths
    }
  }
  max_date: allCaribbeandataCsv(limit: 1, sort: {fields: date, order: DESC}) {
    nodes {
      date(formatString: "MMMM DD, YYYY")
    }
  }
}
`

export default HomePage;