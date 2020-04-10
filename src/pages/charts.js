import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { graphql } from 'gatsby';
//import Plot from 'react-plotly.js';

const ChartsPage = ({data}) => {
    /*  
    function xLocationAxis(){
        let update_date = data.latest_data.nodes[0].comparestring;
        let xValues = [];
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                xValues.push(node.iso_code);
            }
        });
        return xValues;
    }

    function yTotalCasesAxis(){
        let update_date = data.latest_data.nodes[0].comparestring;
        let yValues = [];
        data.all_data.nodes.forEach(node => {
            if(node.date === update_date) {
                yValues.push(Math.max(node.total_cases_1, node.total_cases_2));
            }
        });
        return yValues;
    }
    
    function yTotalDeathsAxis(){
        let update_date = data.latest_data.nodes[0].comparestring;
        let yValues = [];
        data.all_data.nodes.forEach(node => {
            if(node.date === update_date) {
                yValues.push(Math.max(node.total_deaths_1, node.total_deaths_2));
            }
        });
        return yValues;
    }
    
    function numFormatter(num){
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    */
   return (
    <Fragment>
        <Header />
            <main style={{ minHeight: '600px' }}>
                <div class="container py-2">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="header">Charts Page</h1>
                            <br></br>
                            <div class="alert alert-info text-center" role="alert">
                                <h5>Last Updated on <strong>{data.latest_data.nodes[0].updatedate}</strong></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container py-2">
                    <div class="row">
                        <div class="col-md-12">
                            {/*
                            <Plot
                                data={[{type: 'bar', x: xLocationAxis(), y: yTotalCasesAxis(), name: 'Total Cases'},
                                        {type: 'bar', x: xLocationAxis(), y: yTotalDeathsAxis(), name: 'Total Deaths'},]}
                                layout={{minWidth: 400, width: 980, xaxis: {tickangle: 20}, title: 'Caribbean Coronavirus Plot'}}
                                config={{displayModeBar: false, responsive: true}} 
                            />
                            */}
                        </div>
                    </div>
                </div>
            </main>
        <Footer />
    </Fragment>
   );
}

export const query = graphql`
query ChartsPageQuery {
  all_data: allCaribbeandataCsv(filter: {location: {ne: "World"}}, sort: {fields: [location, date], order: [ASC, DESC]}) {
    nodes {
      location
      date(formatString: "DD MMM YYYY")
      region
      iso_code
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
  latest_data: allCaribbeandataCsv(sort: {fields: date, order: DESC}, filter: {location: {ne: "World"}}, limit: 1) {
    nodes {
      updatedate: date(formatString: "MMMM DD, YYYY")
      comparestring: date(formatString: "DD MMM YYYY")
    }
  }
}
`

export default ChartsPage;