import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../components/global.css';
import { graphql } from 'gatsby';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartsPage = ({data}) => {
    const caribbean_options = {
        chart: {type: "bar",height: 600},
        title: {text: 'COVID-19 Cases throughout the Caribbean'},
        xAxis: {categories: xLocationAxis(), labels: {step: 1}},
        series: [{name: "Total Cases", data: yTotalCasesAxis()},
                 {name: "Total Deaths",data: yTotalDeathsAxis()}]
    }
    const country_cases_options = {
        chart: {type: "line"},
        title: {text: 'COVID-19 Cases by Caribbean Country'},
        xAxis: {categories: xDateAxis()},
        series: [{name: "Antigua and Barbuda", data: yCountryCasesAxis(1)},
                 {name: "Bahamas", data: yCountryCasesAxis(2)},
                 {name: "Barbados", data: yCountryCasesAxis(3)},
                 {name: "Belize", data: yCountryCasesAxis(4)},
                 {name: "Cuba", data: yCountryCasesAxis(5)},
                 {name: "Dominica", data: yCountryCasesAxis(6)},
                 {name: "Dominican Republic", data: yCountryCasesAxis(7)},
                 {name: "Grenada", data: yCountryCasesAxis(8)},
                 {name: "Guyana", data: yCountryCasesAxis(9)},
                 {name: "Haiti", data: yCountryCasesAxis(10)},
                 {name: "Jamaica", data: yCountryCasesAxis(11)},
                 {name: "Martinique", data: yCountryCasesAxis(12)},
                 {name: "Saint Kitts and Nevis", data: yCountryCasesAxis(13)},
                 {name: "Saint Lucia", data: yCountryCasesAxis(14)},
                 {name: "Saint Vincent and Grenadines", data: yCountryCasesAxis(15)},
                 {name: "Suriname", data: yCountryCasesAxis(16)},
                 {name: "Trinidad and Tobago", data: yCountryCasesAxis(17)},
                ]
    }
    
    const country_deaths_options = {
        chart: {type: "line"},
        title: {text: 'COVID-19 Deaths by Caribbean Country'},
        xAxis: {categories: xDateAxis()},
        series: [{name: "Antigua and Barbuda", data: yCountryDeathsAxis(1)},
                 {name: "Bahamas", data: yCountryDeathsAxis(2)},
                 {name: "Barbados", data: yCountryDeathsAxis(3)},
                 {name: "Belize", data: yCountryDeathsAxis(4)},
                 {name: "Cuba", data: yCountryDeathsAxis(5)},
                 {name: "Dominica", data: yCountryDeathsAxis(6)},
                 {name: "Dominican Republic", data: yCountryDeathsAxis(7)},
                 {name: "Grenada", data: yCountryDeathsAxis(8)},
                 {name: "Guyana", data: yCountryDeathsAxis(9)},
                 {name: "Haiti", data: yCountryDeathsAxis(10)},
                 {name: "Jamaica", data: yCountryDeathsAxis(11)},
                 {name: "Martinique", data: yCountryDeathsAxis(12)},
                 {name: "Saint Kitts and Nevis", data: yCountryDeathsAxis(13)},
                 {name: "Saint Lucia", data: yCountryDeathsAxis(14)},
                 {name: "Saint Vincent and Grenadines", data: yCountryDeathsAxis(15)},
                 {name: "Suriname", data: yCountryDeathsAxis(16)},
                 {name: "Trinidad and Tobago", data: yCountryDeathsAxis(17)},
                ]
    }
    
    function xDateAxis(){
        let xValues = [];
        data.country_cases.nodes.forEach(node => {
            xValues.push(node.date);
        });
        return xValues;
    }

    function yCountryCasesAxis(num){
        let yValues = [];
        data.country_cases.nodes.forEach(node => {
            if(num === 1){
                yValues.push(parseInt(node.Antigua_and_Barbuda));
            }else if (num === 2){
                yValues.push(parseInt(node.Bahamas));
            }else if (num === 3){
                yValues.push(parseInt(node.Barbados));
            }else if (num === 4){
                yValues.push(parseInt(node.Belize));
            }else if (num === 5){
                yValues.push(parseInt(node.Cuba));
            }else if (num === 6){
                yValues.push(parseInt(node.Dominica));
            }else if (num === 7){
                yValues.push(parseInt(node.Dominican_Republic));
            }else if (num === 8){
                yValues.push(parseInt(node.Grenada));
            }else if (num === 9){
                yValues.push(parseInt(node.Guyana));
            }else if (num === 10){
                yValues.push(parseInt(node.Haiti));
            }else if (num === 11){
                yValues.push(parseInt(node.Jamaica));
            }else if (num === 12){
                yValues.push(parseInt(node.Martinique));
            }else if (num === 13){
                yValues.push(parseInt(node.Saint_Kitts_and_Nevis));
            }else if (num === 14){
                yValues.push(parseInt(node.Saint_Lucia));
            }else if (num === 15){
                yValues.push(parseInt(node.Saint_Vincent_and_the_Grenadines));
            }else if (num === 16){
                yValues.push(parseInt(node.Suriname));
            }else if (num === 17){
                yValues.push(parseInt(node.Trinidad_and_Tobago));
            }
        });
        return yValues;
    }

    function yCountryDeathsAxis(num){
        let yValues = [];
        data.country_deaths.nodes.forEach(node => {
            if(num === 1){
                yValues.push(parseInt(node.Antigua_and_Barbuda));
            }else if (num === 2){
                yValues.push(parseInt(node.Bahamas));
            }else if (num === 3){
                yValues.push(parseInt(node.Barbados));
            }else if (num === 4){
                yValues.push(parseInt(node.Belize));
            }else if (num === 5){
                yValues.push(parseInt(node.Cuba));
            }else if (num === 6){
                yValues.push(parseInt(node.Dominica));
            }else if (num === 7){
                yValues.push(parseInt(node.Dominican_Republic));
            }else if (num === 8){
                yValues.push(parseInt(node.Grenada));
            }else if (num === 9){
                yValues.push(parseInt(node.Guyana));
            }else if (num === 10){
                yValues.push(parseInt(node.Haiti));
            }else if (num === 11){
                yValues.push(parseInt(node.Jamaica));
            }else if (num === 12){
                yValues.push(parseInt(node.Martinique));
            }else if (num === 13){
                yValues.push(parseInt(node.Saint_Kitts_and_Nevis));
            }else if (num === 14){
                yValues.push(parseInt(node.Saint_Lucia));
            }else if (num === 15){
                yValues.push(parseInt(node.Saint_Vincent_and_the_Grenadines));
            }else if (num === 16){
                yValues.push(parseInt(node.Suriname));
            }else if (num === 17){
                yValues.push(parseInt(node.Trinidad_and_Tobago));
            }
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