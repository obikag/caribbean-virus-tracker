import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../components/global.css';
import { graphql } from 'gatsby';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartsPage = ({data}) => {
    const caribbean_options = {
        chart: {type: "bar", height: 600},
        title: {text: 'COVID-19 Cases throughout the Caribbean'},
        xAxis: {categories: xLocationAxis(), labels: {step: 1}},
        series: [{name: "Total Cases", data: yTotalCasesAxis()},
                 {name: "Total Deaths",data: yTotalDeathsAxis()}]
    }
    const country_cases_options = {
        chart: {type: "line"},
        title: {text: 'COVID-19 Cases by Caribbean Country'},
        xAxis: {categories: xDateAxis()},
        series: [{name: "Antigua & Barbuda", data: yCountryCasesAxis("Antigua and Barbuda")},
                 {name: "Bahamas", data: yCountryCasesAxis("Bahamas")},
                 {name: "Barbados", data: yCountryCasesAxis("Barbados")},
                 {name: "Belize", data: yCountryCasesAxis("Belize")},
                 {name: "Cuba", data: yCountryCasesAxis("Cuba")},
                 {name: "Dominica", data: yCountryCasesAxis("Dominica")},
                 {name: "Dominican Republic", data: yCountryCasesAxis("Dominican Republic")},
                 {name: "Grenada", data: yCountryCasesAxis("Grenada")},
                 {name: "Guyana", data: yCountryCasesAxis("Guyana")},
                 {name: "Haiti", data: yCountryCasesAxis("Haiti")},
                 {name: "Jamaica", data: yCountryCasesAxis("Jamaica")},
                 {name: "Martinique", data: yCountryCasesAxis("Martinique")},
                 {name: "St Kitts & Nevis", data: yCountryCasesAxis("Saint Kitts and Nevis")},
                 {name: "St Lucia", data: yCountryCasesAxis("Saint Lucia")},
                 {name: "St Vincent & Grenadines", data: yCountryCasesAxis("Saint Vincent and Grenadines")},
                 {name: "Suriname", data: yCountryCasesAxis("Suriname")},
                 {name: "Trinidad & Tobago", data: yCountryCasesAxis("Trinidad and Tobago")},
                ],
        responsive: {
            rules: [{
                condition: {maxWidth: 900},
            }]
        }
    }
    
    const country_deaths_options = {
        chart: {type: "line"},
        title: {text: 'COVID-19 Deaths by Caribbean Country'},
        xAxis: {categories: xDateAxis()},
        series: [{name: "Antigua & Barbuda", data: yCountryDeathsAxis("Antigua and Barbuda")},
                 {name: "Bahamas", data: yCountryDeathsAxis("Bahamas")},
                 {name: "Barbados", data: yCountryDeathsAxis("Barbados")},
                 {name: "Belize", data: yCountryDeathsAxis("Belize")},
                 {name: "Cuba", data: yCountryDeathsAxis("Cuba")},
                 {name: "Dominica", data: yCountryDeathsAxis("Dominica")},
                 {name: "Dominican Republic", data: yCountryDeathsAxis("Dominican Republic")},
                 {name: "Grenada", data: yCountryDeathsAxis("Grenada")},
                 {name: "Guyana", data: yCountryDeathsAxis("Guyana")},
                 {name: "Haiti", data: yCountryDeathsAxis("Haiti")},
                 {name: "Jamaica", data: yCountryDeathsAxis("Jamaica")},
                 {name: "Martinique", data: yCountryDeathsAxis("Martinique")},
                 {name: "St Kitts & Nevis", data: yCountryDeathsAxis("Saint Kitts and Nevis")},
                 {name: "St Lucia", data: yCountryDeathsAxis("Saint Lucia")},
                 {name: "St Vincent & Grenadines", data: yCountryDeathsAxis("Saint Vincent and Grenadines")},
                 {name: "Suriname", data: yCountryDeathsAxis("Suriname")},
                 {name: "Trinidad & Tobago", data: yCountryDeathsAxis("Trinidad and Tobago")},
                ],
        responsive: {
            rules: [{
                condition: {maxWidth: 900},
            }]
        }
    }
    
    function xDateAxis(){
        let xValues = [];
        data.country_cases.nodes.forEach(node => {
            xValues.push(node.date);
        });
        return xValues;
    }

    function yCountryCasesAxis(key){
        key = key.replace(/\s/g, '_');
        let yValues = [];
        data.country_cases.nodes.forEach(node => {
            yValues.push(parseInt(node[key]));
        });
        return yValues;
    }

    
    function yCountryDeathsAxis(key){
        key = key.replace(/\s/g, '_');
        let yValues = [];
        data.country_deaths.nodes.forEach(node => {
            yValues.push(parseInt(node[key]));
        });
        return yValues;
    }

    function xLocationAxis(){
        let update_date = data.latest_data.nodes[0].comparestring;
        let xValues = [];
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                xValues.push(node.location);
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

   return (
    <Fragment>
        <Header />
            <main>
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
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={caribbean_options}
                            />
                        </div>
                    </div>
                </div>
                <div class="container py-2">
                    <div class="row">
                        <div class="col-md-12">
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={country_cases_options}
                            />
                        </div>
                    </div>
                </div>
                <div class="container py-2">
                    <div class="row">
                        <div class="col-md-12">
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={country_deaths_options}
                            />
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
  country_cases: allCarribeancountrycasesCsv(sort: {fields: date, order: ASC}) {
    nodes {
      date(formatString: "DD-MMM-YY")
      Antigua_and_Barbuda
      Bahamas
      Barbados
      Belize
      Cuba
      Dominica
      Dominican_Republic
      Grenada
      Guyana
      Haiti
      Jamaica
      Martinique
      Saint_Kitts_and_Nevis
      Saint_Lucia
      Saint_Vincent_and_the_Grenadines
      Suriname
      Trinidad_and_Tobago
    }
  }
  country_deaths: allCarribeancountrydeathsCsv(sort: {fields: date, order: ASC}) {
    nodes {
      date(formatString: "DD-MMM-YY")
      Antigua_and_Barbuda
      Bahamas
      Barbados
      Belize
      Cuba
      Dominica
      Dominican_Republic
      Grenada
      Guyana
      Haiti
      Jamaica
      Martinique
      Saint_Kitts_and_Nevis
      Saint_Lucia
      Saint_Vincent_and_the_Grenadines
      Suriname
      Trinidad_and_Tobago
    }
  }
}
`

export default ChartsPage;