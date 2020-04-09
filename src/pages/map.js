import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../components/map.css';
import { graphql } from 'gatsby';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';

const MapPage = ({data}) => {
    /*
    function numFormatter(num){
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    */
    function addressPoints(){
        let update_date = data.latest_data.nodes[0].comparestring;
        let arrValues = [];
        data.all_data.nodes.forEach(node =>{
            if(node.date === update_date) {
                var point = [];
                point.push(node.latitude);
                point.push(node.longitude);
                point.push(Math.max(node.total_cases_1, node.total_cases_2));
                arrValues.push(point);
            }
        });
        console.log(arrValues);
        return arrValues;
    }

    const startPosition = [15.05, -70.09];

    const startZoom = 10;
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
                                    <HeatmapLayer
                                    fitBoundsOnLoad
                                    fitBoundsOnUpdate
                                    points={addressPoints()}
                                    latitudeExtractor={m => m[0]}
                                    longitudeExtractor={m => m[1]}
                                    intensityExtractor={m => m[2]} 
                                    max={3.0}
                                    radius={20} 
                                    />
                                    <TileLayer
                                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    {data.all_data.nodes.map((node) => (
                                        node.date === data.latest_data.nodes[0].comparestring ?
                                            <Marker position={[node.latitude, node.longitude]}>
                                                <Popup><strong><em>{node.location}</em></strong>
                                                <br></br><em>Confirmed:</em> {Math.max(node.total_cases_1,node.total_cases_2)}
                                                <br></br><em>Deaths:</em> {Math.max(node.total_deaths_1,node.total_deaths_2)}
                                                <br></br><em>Recovered:</em> {node.recovered}
                                                </Popup>
                                            </Marker>
                                        : ''
                                    ))}
                                </Map>
                                </div>
                            </div>
                        </div>
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