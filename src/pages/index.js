import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { graphql } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
//import Plot from 'react-plotly.js';

const TableRow = ({node, lastupdated}) => {

    node.total_cases = Math.max(node.total_cases_1, node.total_cases_2);
    node.new_cases = Math.max(node.new_cases_1, node.new_cases_2);
    node.total_deaths = Math.max(node.total_deaths_1, node.total_deaths_2);
    node.new_deaths = Math.max(node.new_deaths_1, node.new_deaths_2);

    if(lastupdated === true){
        return (
        <Fragment>
            <tr>
            <td>
                <div>{node.location}</div>
                <div><a href={node.source_url_1} class="badge badge-primary" target="_blank" rel="noopener noreferrer">{node.source_name_1}</a></div>
                {node.source_url_2 && 
                    <div><a href={node.source_url_2} class="badge badge-secondary" target="_blank" rel="noopener noreferrer">{node.source_name_2}</a></div>
                }
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
            <td colspan="6" style={{display: "none"}}>
                <span class="badge badge-pill badge-info">{node.date} </span>
                <span><a href={node.source_url_1} class="badge badge-primary" target="_blank" rel="noopener noreferrer">{node.source_name_1}</a> </span>
                <span><a href={node.source_url_2} class="badge badge-secondary" target="_blank" rel="noopener noreferrer">{node.source_name_2}</a> </span>
                <span> | </span>
                <span class="badge badge-pill badge-success">Total Cases: {node.total_cases}</span>
                <span class="badge badge-pill badge-warning">New Cases: {node.new_cases}</span>
                <span class="badge badge-pill badge-danger">Total Deaths: {node.total_deaths}</span>
                <span class="badge badge-pill badge-dark">New Deaths: {node.new_deaths}</span>
                <span class="badge badge-pill badge-primary">Recovered: {node.recovered}</span>
                <span> |</span>
            </td>
            </tr>
        </Fragment>
    );
}


const HomePage = ({data, location}) => {
    /*
    function xLocationAxis(){
        let update_date = data.max_date.nodes[0].comparestring;
        let xValues = [];
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                xValues.push(node.location);
            }
        });
        return xValues;
    }

    function yTotalCasesAxis(){
        let update_date = data.max_date.nodes[0].comparestring;
        let yValues = [];
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                yValues.push(Math.max(node.total_cases_1, node.total_cases_2));
            }
        });
        return yValues;
    }
    
    function yTotalDeathsAxis(){
        let update_date = data.max_date.nodes[0].comparestring;
        let yValues = [];
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                yValues.push(Math.max(node.total_deaths_1, node.total_deaths_2));
            }
        });
        return yValues;
    }
    */
    function totalCases() {
        let update_date = data.max_date.nodes[0].comparestring;
        let count = 0;
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                count += Math.max(node.total_cases_1, node.total_cases_2);
            }
        });
        return count.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    function totalNewCases() {
        let update_date = data.max_date.nodes[0].comparestring;
        let count = 0;
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                count +=  Math.max(node.new_cases_1, node.new_cases_2);
            }
        });
        return count.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    
    function totalDeaths() {
        let update_date = data.max_date.nodes[0].comparestring;
        let count = 0;
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                count += Math.max(node.total_deaths_1, node.total_deaths_2);
            }
        });
        return count.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    function totalNewDeaths() {
        let update_date = data.max_date.nodes[0].comparestring;
        let count = 0;
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                count += Math.max(node.new_deaths_1, node.new_deaths_2);
            }
        });
        return count.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
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
                            <div class="col-md-8">
                                <h1 class="header">Welcome to Caribbean Virus Tracker</h1>
                                <h5><em>These are the reported statistics for Coronavirus outbreak in the Caribbean.</em></h5>
                            </div>
                            <div class="col-md-4">
                                <a class="btn btn-dark btn-sm mx-1 my-1" style={{backgroundColor: "#3b5998", borderStyle: "none"}} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https://caribbeanvirustracker.com">
                                    <i class="fab fa-facebook-square fa-lg"></i> <span>Share</span>
                                </a>
                                <a class="btn btn-dark btn-sm mx-1 my-1" style={{backgroundColor: "#25d366", borderStyle: "none"}} target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?text=https://caribbeanvirustracker.com">
                                    <i class="fab fa-whatsapp-square fa-lg"></i> <span>Share</span>
                                </a>
                                <a class="btn btn-dark btn-sm mx-1 my-1" style={{backgroundColor: "#1da1f2", borderStyle: "none"}} target="_blank" rel="noopener noreferrer" href="https://twitter.com/home?status=https://caribbeanvirustracker.com ">
                                    <i class="fab fa-twitter-square fa-lg"></i> <span>Share</span>
                                </a>
                                <a class="btn btn-dark btn-sm mx-1 my-1" style={{backgroundColor: "#0e76a8", borderStyle: "none"}} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/shareArticle?mini=true&url=https://caribbeanvirustracker.com&title=&summary=&source=">
                                    <i class="fab fa-linkedin fa-lg"></i> <span>Share</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                            <h2 class="header">Caribbean Outbreak Statistics</h2>
                            <div class="alert alert-info text-center" role="alert">
                                <h5>Last Updated on <strong>{data.max_date.nodes[0].updatedate}</strong></h5>
                            </div>
                            <br></br>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="card mb-3">
                                    <div class="card-header text-center text-white bg-success">
                                        <h1 style={{fontFamily: "Special Elite"}}>{totalCases()}</h1>
                                    </div>
                                    <div class="card-body text-center">
                                        <h5 class="card-title">Total Cases</h5>
                                        <p class="card-text" style={{fontSize: "10px"}}>Total confirmed Coronavirus infections</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card mb-3">
                                    <div class="card-header text-center text-white bg-warning">
                                        <h1 style={{fontFamily: "Special Elite"}}>{totalNewCases()}</h1>
                                    </div>
                                    <div class="card-body text-center">
                                        <h5 class="card-title">New Cases</h5>
                                        <p class="card-text" style={{fontSize: "10px"}}>Newly reported Coronavirus infections</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card mb-3">
                                    <div class="card-header text-center text-white bg-danger">
                                        <h1 style={{fontFamily: "Special Elite"}}>{totalDeaths()}</h1>
                                    </div>
                                    <div class="card-body text-center">
                                        <h5 class="card-title">Total Deaths</h5>
                                        <p class="card-text" style={{fontSize: "10px"}}>Total confirmed deaths linked to Coronavirus</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card mb-3">
                                    <div class="card-header text-center text-white bg-dark">
                                        <h1 style={{fontFamily: "Special Elite"}}>{totalNewDeaths()}</h1>
                                    </div>
                                    <div class="card-body text-center">
                                        <h5 class="card-title">New Deaths</h5>
                                        <p class="card-text" style={{fontSize: "10px"}}>Newly reported deaths linked to Coronavirus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                            <Plot
                                data={[{type: 'bar', x: xLocationAxis(), y: yTotalCasesAxis(), name: 'Total Cases'},
                                        {type: 'line', x: xLocationAxis(), y: yTotalDeathsAxis(), name: 'Total Deaths'},]}
                                layout={{width: 900, xaxis: {tickangle: 20, tickfont: {size: 10}}, title: 'Caribbean Coronavirus Plot'}}
                                config={{displayModeBar: false}} />
                            </div>
                        </div>
                    </div>
                    */}
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-md-12">
                                <p><em>* When viewing on a mobile device, scroll right.</em></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive-md pb-3">
                                    <table id="table" class="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th scope="col">
                                                <AnchorLink  to={`/?sort=location&descending=${!descending}#table`}>Location&nbsp;<i class="fas fa-sort"></i></AnchorLink >
                                            </th>
                                            <th scope="col">
                                                <AnchorLink to={`/?sort=total_cases&descending=${!descending}#table`}>Total Cases&nbsp;<i class="fas fa-sort"></i></AnchorLink>
                                            </th>
                                            <th scope="col">
                                                <AnchorLink to={`/?sort=new_cases&descending=${!descending}#table`}>New Cases&nbsp;<i class="fas fa-sort"></i></AnchorLink>
                                            </th>
                                            <th scope="col">
                                                <AnchorLink to={`/?sort=total_deaths&descending=${!descending}#table`}>Total Deaths&nbsp;<i class="fas fa-sort"></i></AnchorLink>
                                            </th>
                                            <th scope="col">
                                                <AnchorLink to={`/?sort=new_deaths&descending=${!descending}#table`}>New Deaths&nbsp;<i class="fas fa-sort"></i></AnchorLink>
                                            </th>
                                            <th scope="col">
                                                <AnchorLink to={`/?sort=new_deaths&descending=${!descending}#table`}>Recovered&nbsp;<i class="fas fa-sort"></i></AnchorLink>
                                            </th>
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