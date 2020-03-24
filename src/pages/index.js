import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link, graphql } from 'gatsby';

const TableRow = ({node, lastupdated}) => {
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
            <td class="text-center">{node.total_cases_1 > node.total_cases_2 ? node.total_cases_1 : node.total_cases_2}</td>
            <td class="text-center">{node.new_cases_1 > node.new_cases_2 ? node.new_cases_1 : node.new_cases_2}</td>
            <td class="text-center">{node.total_deaths_1 > node.total_deaths_2 ? node.total_deaths_1 : node.total_deaths_2}</td>
            <td class="text-center">{node.new_deaths_1 > node.new_deaths_2 ? node.new_deaths_1 : node.new_deaths_2}</td>
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
    function total_cases() {
        let update_date = data.max_date.nodes[0].comparestring;
        let count = 0;
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                if(node.total_cases_1 > node.total_cases_2){
                    count=count+node.total_cases_1;
                } else {
                    count=count+node.total_cases_2;
                }
            }
        });
        return count;
    }

    function total_new_cases() {
        let update_date = data.max_date.nodes[0].comparestring;
        let count = 0;
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                if(node.new_cases_1 > node.new_cases_2){
                    count=count+node.new_cases_1;    
                } else {
                    count=count+node.new_cases_2;
                }
            }
        });
        return count;
    }
    
    function total_deaths() {
        let update_date = data.max_date.nodes[0].comparestring;
        let count = 0;
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                if(node.total_deaths_1 > node.total_deaths_2){
                    count=count+node.total_deaths_1;
                } else {
                    count=count+node.total_deaths_2;
                }
            }
        });
        return count;
    }

    function total_new_deaths() {
        let update_date = data.max_date.nodes[0].comparestring;
        let count = 0;
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                if(node.new_deaths_1 > node.new_deaths_2){
                    count=count+node.new_deaths_1;
                } else {
                    count=count+node.new_deaths_2;
                }
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
     */
    function get_sort_function (field, descending){
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
    let descending_param = getUrlParam("descending"); //can possibly be changed to default later, so not const
    let descending = false;
    if(field){
        if(descending_param === "true"){
            descending = true;
        }
        data.all_data.nodes.sort(get_sort_function(field, descending));
    }

    
    
    
    return (
        <Fragment>
            <Header />
                <main>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="header">Welcome to Caribbean Virus Tracker</h1>
                                <h5><em>These are the latest reported statistics by the World Health Organization (WHO) for Coronavirus outbreak in the Caribbean.</em></h5>
                                <p>Last Updated on <em>{data.max_date.nodes[0].updatedate}</em></p>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                            <h2 class="header">Caribbean Outbreak Statistics</h2>
                            <p><strong>Note: </strong>Some Caribbean countries may not be on the list because no Coronavirus infections were reported by that country to WHO <em>(see Disclaimer)</em>. French, Dutch and U.S. Caribbean Territories are not included at the moment.</p> 
                            <br></br>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h1><strong>{total_cases()}</strong></h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Total Cases</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h1><strong>{total_new_cases()}</strong></h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">New Cases</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h1><strong>{total_deaths()}</strong></h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Total Deaths</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h1><strong>{total_new_deaths()}</strong></h1>
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
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th scope="col">
                                                <Link to={`/?sort=location&descending=${!descending}`}>Location</Link>
                                            </th>
                                            <th scope="col">Reporting Date/Source</th>
                                            <th scope="col">
                                                <Link to={`/?sort=total_cases&descending=${!descending}`}>Total Cases</Link>
                                            </th>
                                            <th scope="col">
                                                <Link to={`/?sort=new_cases&descending=${!descending}`}>New Cases</Link>
                                            </th>
                                            <th scope="col">
                                                <Link to={`/?sort=total_deaths&descending=${!descending}`}>Total Deaths</Link>
                                            </th>
                                            <th scope="col">
                                                <Link to={`/?sort=new_deaths&descending=${!descending}`}>New Deaths</Link>
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