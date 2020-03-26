import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { graphql } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const TableRow = ({node, lastupdated}) => {

    node.total_cases = Math.max(node.total_cases_1, node.total_cases_2);
    node.new_cases = Math.max(node.new_cases_1, node.new_cases_2);
    node.total_deaths = Math.max(node.total_deaths_1, node.total_deaths_2);
    node.new_deaths = Math.max(node.new_deaths_1, node.new_deaths_2);

    if(lastupdated === true){
        return (
        <Fragment>
            <tr>
            <td>{node.location}</td>
            <td>
                <div>{node.date}</div>
                <div><a href={node.source_url_1} class="badge badge-primary" target="_blank" rel="noopener noreferrer">{node.source_name_1}</a></div>
                <div><a href={node.source_url_2} class="badge badge-secondary" target="_blank" rel="noopener noreferrer">{node.source_name_2}</a></div>
            </td>
            <td class="text-center">{node.total_cases}</td>
            <td class="text-center">{node.new_cases}</td>
            <td class="text-center">{node.total_deaths}</td>
            <td class="text-center">{node.new_deaths}</td>
            <td class="text-center">{node.recovered}</td>
            </tr>
        </Fragment>       
        );  
    }
    return (
        <Fragment>
            <tr>
            <td colspan="7" style={{display: "none"}}>
                <a href={node.source_url_1} target="_blank" rel="noopener noreferrer">{node.source_name_1} ({node.date})</a>
            </td>
            </tr>
        </Fragment>
    );
}


const HomePage = ({data, location}) => {

    function totalCases() {
        let update_date = data.max_date.nodes[0].comparestring;
        let count = 0;
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                count += Math.max(node.total_cases_1, node.total_cases_2);
            }
        });
        return count;
    }

    function totalNewCases() {
        let update_date = data.max_date.nodes[0].comparestring;
        let count = 0;
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                count +=  Math.max(node.new_cases_1, node.new_cases_2);
            }
        });
        return count;
    }
    
    function totalDeaths() {
        let update_date = data.max_date.nodes[0].comparestring;
        let count = 0;
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                count += Math.max(node.total_deaths_1, node.total_deaths_2);
            }
        });
        return count;
    }

    function totalNewDeaths() {
        let update_date = data.max_date.nodes[0].comparestring;
        let count = 0;
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                count += Math.max(node.new_deaths_1, node.new_deaths_2);
            }
        });
        return count;
    }

    //Define a callback to fall back on if URLSearchparams is unavailable
    function getQueryParamFallback(param){
        const match = RegExp('[?&]' + param + '=([^&]*)').exec(location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }


    /**
     *  Get the "sort" query from the url, which corresponds to the field for each node
     * 
     * @param {string} param String representing the field to sort by. Example: total_cases 
     */
    function getUrlParam(param){        
        return (URLSearchParams) ? new URLSearchParams(location.search).get(param) :
        getQueryParamFallback(param);
    }

    
    /**
     * Get the appropriate sort function for the array, based on the field name
     * and whether or not to sort by descending
     * 
     * @param {string} field Name of the field to sort by
     * @param {boolean} descending Whether to sort by descending or not
     * @returns {function} The sorting function to pass to data.all_data.nodes.sort()
     */
    function getSortFunction(field, descending){
        return (a, b)=>{
            const first = a[field];
            const second = b[field];
            if(descending){
                return (second < first) ? -1 : ((second > first) ? 1 : 0); 
            }           
            return (first < second) ? -1 : ((first > second) ? 1 : 0);
        }
    }

    const field = getUrlParam("sort");

    const descendingParam = getUrlParam("descending"); 
    
    let descending = false;
    
    if(field){
        if(descendingParam === "true"){
            descending = true;
        }
        data.all_data.nodes.sort(getSortFunction(field, descending));
        
    }

    return (
        <Fragment>
            <Header />
                <main>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="header">Welcome to Caribbean Virus Tracker</h1>
                                <h5><em>These are the reported statistics for Coronavirus outbreak in the Caribbean.</em></h5>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                            <h2 class="header">Caribbean Outbreak Statistics</h2>
                            <p><strong>Last Updated on </strong><em>{data.max_date.nodes[0].updatedate}</em></p>
                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>Note: </strong>Some Caribbean countries may not be on the list because no Coronavirus infections were reported by that country <em>(see Disclaimer below)</em>.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                French, Dutch and U.S. Caribbean Territories are not included at the moment.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <br></br>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h1><strong>{totalCases()}</strong></h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Total Cases</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h1><strong>{totalNewCases()}</strong></h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">New Cases</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h1><strong>{totalDeaths()}</strong></h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Total Deaths</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h1><strong>{totalNewDeaths()}</strong></h1>
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
                                    <table id="table" class="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th scope="col">
                                                <AnchorLink  to={`/?sort=location&descending=${!descending}#table`}>Location</AnchorLink >
                                            </th>
                                            <th scope="col">Reporting Date/Source</th>
                                            <th scope="col">
                                                <AnchorLink to={`/?sort=total_cases&descending=${!descending}#table`}>Total Cases</AnchorLink>
                                            </th>
                                            <th scope="col">
                                                <AnchorLink to={`/?sort=new_cases&descending=${!descending}#table`}>New Cases</AnchorLink>
                                            </th>
                                            <th scope="col">
                                                <AnchorLink to={`/?sort=total_deaths&descending=${!descending}#table`}>Total Deaths</AnchorLink>
                                            </th>
                                            <th scope="col">
                                                <AnchorLink to={`/?sort=new_deaths&descending=${!descending}#table`}>New Deaths</AnchorLink>
                                            </th>
                                            <th scope="col">Recovered</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data.all_data.nodes.map((node) => (
                                            <TableRow node={node} lastupdated={node.date === data.max_date.nodes[0].comparestring}></TableRow>
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
  all_data: allCaribbeandataCsv(filter: {location: {ne: "World"}}, sort: {fields: [location, date], order: [ASC, DESC]}) {
    nodes {
      location
      date(formatString: "DD MMM YYYY")
      total_cases_1
      total_cases_2
      new_cases_1
      new_cases_2
      total_deaths_1
      total_deaths_2
      new_deaths_1
      new_deaths_2
      recovered
      source_name_1
      source_url_1
      source_name_2
      source_url_2
    }
  }
  max_date: allCaribbeandataCsv(limit: 1, sort: {fields: date, order: DESC}) {
    nodes {
      updatedate: date(formatString: "MMMM DD, YYYY")
      comparestring: date(formatString: "DD MMM YYYY")
    }
  }
}
`

export default HomePage;