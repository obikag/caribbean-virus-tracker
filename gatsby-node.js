const DataFrame = require(`dataframe-js`).DataFrame;
const csv = require(`csv-parser`);
const fs = require(`fs`);
const moment = require('moment');
const results = [];
const countries = [
    "Antigua and Barbuda",
    "Bahamas",
    "Barbados",
    "Belize",
    "Cuba",
    "Dominica",
    "Dominican Republic",
    "Grenada",
    "Guyana",
    "Haiti",
    "Jamaica",
    "Martinique",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Suriname",
    "Trinidad and Tobago"
];
const territories = [
    "Anguilla",
    "Aruba",
    "Bermuda",
    "Bonaire, Sint Eustatius and Saba",
    "British Virgin Islands",
    "Cayman Islands",
    "Curacao",
    "French Guiana",
    "Guadeloupe",
    "Montserrat",
    "Puerto Rico",
    "Saint Barthelemy",
    "Saint Martin",
    "Sint Maarten",
    "Turks and Caicos Islands",
    "United States Virgin Islands"
];
const countries_columns = [
    "date",
    "Antigua_and_Barbuda",
    "Bahamas",
    "Barbados",
    "Belize",
    "Cuba",
    "Dominica",
    "Dominican_Republic",
    "Grenada",
    "Guyana",
    "Haiti",
    "Jamaica",
    "Martinique",
    "Saint_Kitts_and_Nevis",
    "Saint_Lucia",
    "Saint_Vincent_and_the_Grenadines",
    "Suriname",
    "Trinidad_and_Tobago"
];
const territories_columns = [
    "date",
    "Anguilla",
    "Aruba",
    "Bermuda",
    "Bonaire_Sint_Eustatius_and_Saba",
    "British_Virgin_Islands",
    "Cayman_Islands",
    "Curacao",
    "French_Guiana",
    "Guadeloupe",
    "Montserrat",
    "Puerto_Rico",
    "Saint_Barthelemy",
    "Saint_Martin",
    "Sint_Maarten",
    "Turks_and_Caicos_Islands",
    "United_States_Virgin_Islands"
];

function datesArray(start, end){
    var arr = new Array();
    var dt = new Date(start);
    while (dt <= end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}

exports.onPreInit = () => {
    console.log("Begin CSV Transformation");
    fs.createReadStream(`${__dirname}/src/data/caribbeandata.csv`)
    .pipe(csv())
    .on('data', (row) => {
        var dateParts = row.date.split("/");
        row.date = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        row.total_cases_1 = parseInt(row.total_cases_1);
        row.total_cases_2 = parseInt(row.total_cases_2);
        row.total_deaths_1 = parseInt(row.total_deaths_1);
        row.total_deaths_2 = parseInt(row.total_deaths_2);
        results.push(row);
    })
    .on('end', () => {
        //Obtain dataframes and filter
        var df = new DataFrame(results);
        var country_df = df.filter(row => row.get('region') === '')
                            .filter(row => row.get('location') != 'World');
        var territory_df = df.filter(row => row.get('region') != '');
        //Set Dates Array
        var today = moment(new Date()).utcOffset('-0400');
        var dateRange = datesArray(new Date('2020-01-01'), new Date(today.format('YYYY-MM-DD')));
        var country_tc_arr = [],
            country_td_arr = [],
            territory_tc_arr = [],
            territory_td_arr = [];
        try{
            dateRange.forEach((date) => {
                var strDate = date.getUTCDate() + "/" + (date.getUTCMonth()+1) + "/" + date.getUTCFullYear();
                //Countries
                var totalcases_row = new Array(countries_columns.length);
                var totaldeaths_row = new Array(countries_columns.length);
                totalcases_row[0] = strDate;
                totaldeaths_row[0] = strDate;
                var temp_df = country_df.filter(row => row.get('date').getUTCDate() == (date.getUTCDate()))
                                        .filter(row => row.get('date').getUTCMonth() == (date.getUTCMonth()))
                                        .select('location', 'total_cases_1', 'total_cases_2', 'total_deaths_1', 'total_deaths_2');
                temp_df.toArray().forEach((item) => {
                    totalcases_row[countries.indexOf(item[0])+1] = Math.max(item[1], item[2]);
                    totaldeaths_row[countries.indexOf(item[0])+1] = Math.max(item[3], item[4]);
                });
                country_tc_arr.push(totalcases_row);
                country_td_arr.push(totaldeaths_row);
                //Territories
                totalcases_row = new Array(territories_columns.length);
                totaldeaths_row = new Array(territories_columns.length);
                totalcases_row[0] = strDate;
                totaldeaths_row[0] = strDate;
                temp_df = territory_df.filter(row => row.get('date').getUTCDate() == (date.getUTCDate()))
                                      .filter(row => row.get('date').getUTCMonth() == (date.getUTCMonth()))
                                      .select('location', 'total_cases_1', 'total_cases_2', 'total_deaths_1', 'total_deaths_2');
                temp_df.toArray().forEach((item) => {
                    totalcases_row[territories.indexOf(item[0])+1] = Math.max(item[1], item[2]);
                    totaldeaths_row[territories.indexOf(item[0])+1] = Math.max(item[3], item[4]);
                });
                territory_tc_arr.push(totalcases_row);
                territory_td_arr.push(totaldeaths_row);
            });
            country_df = new DataFrame(country_tc_arr, countries_columns).fillMissingValues(0).toCSV(true, `${__dirname}/src/data/carribeancountrycases.csv`);
            country_df = new DataFrame(country_td_arr, countries_columns).fillMissingValues(0).toCSV(true, `${__dirname}/src/data/carribeancountrydeaths.csv`);
            territory_df = new DataFrame(territory_tc_arr, territories_columns).fillMissingValues(0).toCSV(true, `${__dirname}/src/data/carribeanterritorycases.csv`);
            territory_df = new DataFrame(territory_td_arr, territories_columns).fillMissingValues(0).toCSV(true, `${__dirname}/src/data/carribeanterritorydeaths.csv`);
            console.log('CSV files successfully generated');
        } catch(err){
            console.log("An error has occured: "+err);
            throw "CSV Transformation Stopped";
        }
    });
}