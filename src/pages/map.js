import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../components/map.css';
import { graphql } from 'gatsby';
import { Map, TileLayer, CircleMarker, Popup } from 'react-leaflet';
//import Plot from 'react-plotly.js';

const MapPage = ({data}) => {
    /*
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
    */
    function numFormatter(num){
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    function markerColor(num) {
        var percentage = num/totalCases;
        if (percentage <= 0.1){
            return 'green';
        } else if (percentage > 0.1 && percentage <= 0.4) {
            return 'orange';
        } else if (percentage > 0.4) {
            return 'red';
        }
        return 'grey';
    }
    
    function totalCasesCount() {
        let update_date = data.latest_data.nodes[0].comparestring;
        let count = 0;
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                count += Math.max(node.total_cases_1, node.total_cases_2);
            }
        });
        return count
    };

    const startPosition = [19.05, -70.09];

    const startZoom = 4;

    const totalCases = totalCasesCount();

    if (typeof window !== 'undefined') {
        return (
            <Fragment>
                <Header />
                    <main style={{ minHeight: '600px' }}>
                        <div class="container py-2">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1 class="header">Inteactive Map of the Caribbean</h1>
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
                                <Map center={startPosition} zoom={startZoom}>
                                    <TileLayer
                                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    {data.all_data.nodes.map((node) => (
                                        node.date === data.latest_data.nodes[0].comparestring ?
                                            <CircleMarker center={[node.latitude, node.longitude]} color={markerColor(Math.max(node.total_cases_1,node.total_cases_2))} radius={5}>
                                                <Popup><strong><em>{node.location}</em></strong>
                                                <br></br><em>Confirmed:</em> {numFormatter(Math.max(node.total_cases_1,node.total_cases_2))}
                                                <br></br><em>Deaths:</em> {numFormatter(Math.max(node.total_deaths_1,node.total_deaths_2))}
                                                <br></br><em>Recovered:</em> {numFormatter(node.recovered)}
                                                </Popup>
                                            </CircleMarker>
                                        : ''
                                    ))}
                                </Map>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        {/*
                        <div class="container">
                            <Plot
                                data={[{type: 'bar', x: xLocationAxis(), y: yTotalCasesAxis(), name: 'Total Cases'},
                                        {type: 'bar', x: xLocationAxis(), y: yTotalDeathsAxis(), name: 'Total Deaths'},]}
                                layout={{width: "100vh", xaxis: {tickangle: 20}, title: 'Caribbean Coronavirus Plot'}}
                                config={{responsive: true}} />
                        </div>
                        */}
                        {/*displayModeBar: false,*/}
                    </main>
                <Footer />
            </Fragment>
        );
    }
    return null;
}

export const query = graphql`
query MapPageQuery {
  all_data: allCaribbeandataCsv(filter: {location: {ne: "World"}}, sort: {fields: [location, date], order: [ASC, DESC]}) {
    nodes {
      location
      date(formatString: "DD MMM YYYY")
      latitude
      longitude
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

export default MapPage;