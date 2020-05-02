const DataFrame = require(`dataframe-js`).DataFrame
const csv = require(`csv-parser`)
const fs = require(`fs`)
const path = require('path')

const results = []
const iso_codes = [
  "AG","AI","AW",
  "BB","BL","BM",
  "BQ","BS","BZ",
  "CU","CW","DM",
  "DO","GD","GF",
  "GP","GY","HT",
  "JM","KN","KY",
  "LC","MF","MQ",
  "MS","PR","SR",
  "SX","TC","TT",
  "VC","VG","VI"
]
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
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Suriname",
  "Trinidad and Tobago",
]
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
  "Martinique",
  "Montserrat",
  "Puerto Rico",
  "Saint Barthelemy",
  "Saint Martin",
  "Sint Maarten",
  "Turks and Caicos Islands",
  "United States Virgin Islands",
]
const fr_territories = [
  "French Guiana",
  "Guadeloupe",
  "Martinique",
  "Saint Barthelemy",
  "Saint Martin",
]
const nl_territories = [
  "Aruba",
  "Bonaire, Sint Eustatius and Saba",
  "Curacao",
  "Sint Maarten",
]
const uk_territories = [
  "Anguilla",
  "Bermuda",
  "British Virgin Islands",
  "Cayman Islands",
  "Montserrat",
  "Turks and Caicos Islands",
]
const us_territories = ["Puerto Rico", "United States Virgin Islands"]
const summary_columns = [
  "date",
  "Total_Cases",
  "Total_Deaths",
  "Total_Country_Cases",
  "Total_Country_Deaths",
  "Total_Territory_Cases",
  "Total_Territory_Deaths",
  "Total_FR_Territory_Cases",
  "Total_FR_Territory_Deaths",
  "Total_NL_Territory_Cases",
  "Total_NL_Territory_Deaths",
  "Total_UK_Territory_Cases",
  "Total_UK_Territory_Deaths",
  "Total_US_Territory_Cases",
  "Total_US_Territory_Deaths",
]
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
  "Saint_Kitts_and_Nevis",
  "Saint_Lucia",
  "Saint_Vincent_and_the_Grenadines",
  "Suriname",
  "Trinidad_and_Tobago",
]
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
  "Martinique",
  "Montserrat",
  "Puerto_Rico",
  "Saint_Barthelemy",
  "Saint_Martin",
  "Sint_Maarten",
  "Turks_and_Caicos_Islands",
  "United_States_Virgin_Islands",
]

function datesArray(start, end) {
  var arr = new Array()
  var dt = new Date(start)
  while (dt <= end) {
    arr.push(new Date(dt))
    dt.setDate(dt.getDate() + 1)
  }
  return arr
}

exports.onPreInit = () => {
  console.log("Begin CSV Transformation")
  fs.createReadStream(`${__dirname}/src/data/caribbeandata.csv`)
    .pipe(csv())
    .on("data", row => {
      var dateParts = row.date.split("/")
      row.date = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])
      row.total_cases_1 = parseInt(row.total_cases_1)
      row.total_cases_2 = parseInt(row.total_cases_2)
      row.total_deaths_1 = parseInt(row.total_deaths_1)
      row.total_deaths_2 = parseInt(row.total_deaths_2)
      results.push(row)
    })
    .on("end", () => {
      //Obtain dataframes and filter
      var df = new DataFrame(results)
      var country_df = df
        .filter(row => row.get("region") === "")
        .filter(row => row.get("location") != "World")
      var territory_df = df.filter(row => row.get("region") != "")
      //Set Dates Array
      var maxdate = new Date(country_df.stat.max("date"))
      var startdate = new Date(maxdate.getTime() - 15 * 24 * 60 * 60 * 1000)
      var dateRange = datesArray(startdate, maxdate)
      var country_tc_arr = [],
        country_td_arr = [],
        territory_tc_arr = [],
        territory_td_arr = [],
        summary_arr = []
      try {
        dateRange.forEach(date => {
          var strDate =
            date.getUTCDate() +
            "/" +
            (date.getUTCMonth() + 1) +
            "/" +
            date.getUTCFullYear()
          //Countries
          var summary_row = new Array(summary_columns.length)
          var totalcases_row = new Array(countries_columns.length)
          var totaldeaths_row = new Array(countries_columns.length)
          summary_row[0] = strDate
          totalcases_row[0] = strDate
          totaldeaths_row[0] = strDate
          var temp_df = country_df
            .filter(row => row.get("date").getUTCDate() == date.getUTCDate())
            .filter(row => row.get("date").getUTCMonth() == date.getUTCMonth())
            .select(
              "location",
              "total_cases_1",
              "total_cases_2",
              "total_deaths_1",
              "total_deaths_2"
            )
          var country_total_cases = 0
          var country_total_deaths = 0
          temp_df.toArray().forEach(item => {
            country_total_cases += Math.max(item[1], item[2])
            country_total_deaths += Math.max(item[3], item[4])
            totalcases_row[countries.indexOf(item[0]) + 1] = Math.max(
              item[1],
              item[2]
            )
            totaldeaths_row[countries.indexOf(item[0]) + 1] = Math.max(
              item[3],
              item[4]
            )
          })
          summary_row[3] = country_total_cases
          summary_row[4] = country_total_deaths
          country_tc_arr.push(totalcases_row)
          country_td_arr.push(totaldeaths_row)
          //Territories
          totalcases_row = new Array(territories_columns.length)
          totaldeaths_row = new Array(territories_columns.length)
          totalcases_row[0] = strDate
          totaldeaths_row[0] = strDate
          temp_df = territory_df
            .filter(row => row.get("date").getUTCDate() == date.getUTCDate())
            .filter(row => row.get("date").getUTCMonth() == date.getUTCMonth())
            .select(
              "location",
              "total_cases_1",
              "total_cases_2",
              "total_deaths_1",
              "total_deaths_2"
            )
          var territory_total_cases = 0
          var territory_total_deaths = 0
          var fr_territory_total_cases = 0
          var fr_territory_total_deaths = 0
          var nl_territory_total_cases = 0
          var nl_territory_total_deaths = 0
          var uk_territory_total_cases = 0
          var uk_territory_total_deaths = 0
          var us_territory_total_cases = 0
          var us_territory_total_deaths = 0
          temp_df.toArray().forEach(item => {
            territory_total_cases += Math.max(item[1], item[2])
            territory_total_deaths += Math.max(item[3], item[4])
            if (fr_territories.includes(item[0])) {
              fr_territory_total_cases += Math.max(item[1], item[2])
              fr_territory_total_deaths += Math.max(item[3], item[4])
            } else if (nl_territories.includes(item[0])) {
              nl_territory_total_cases += Math.max(item[1], item[2])
              nl_territory_total_deaths += Math.max(item[3], item[4])
            } else if (uk_territories.includes(item[0])) {
              uk_territory_total_cases += Math.max(item[1], item[2])
              uk_territory_total_deaths += Math.max(item[3], item[4])
            } else if (us_territories.includes(item[0])) {
              us_territory_total_cases += Math.max(item[1], item[2])
              us_territory_total_deaths += Math.max(item[3], item[4])
            }
            totalcases_row[territories.indexOf(item[0]) + 1] = Math.max(
              item[1],
              item[2]
            )
            totaldeaths_row[territories.indexOf(item[0]) + 1] = Math.max(
              item[3],
              item[4]
            )
          })
          summary_row[5] = territory_total_cases
          summary_row[6] = territory_total_deaths
          summary_row[7] = fr_territory_total_cases
          summary_row[8] = fr_territory_total_deaths
          summary_row[9] = nl_territory_total_cases
          summary_row[10] = nl_territory_total_deaths
          summary_row[11] = uk_territory_total_cases
          summary_row[12] = uk_territory_total_deaths
          summary_row[13] = us_territory_total_cases
          summary_row[14] = us_territory_total_deaths
          summary_row[1] = country_total_cases + territory_total_cases
          summary_row[2] = country_total_deaths + territory_total_deaths
          territory_tc_arr.push(totalcases_row)
          territory_td_arr.push(totaldeaths_row)
          summary_arr.push(summary_row)
        })
        country_df = new DataFrame(country_tc_arr, countries_columns)
          .fillMissingValues(0)
          .toCSV(true, `${__dirname}/src/data/carribeancountrycases.csv`)
        country_df = new DataFrame(country_td_arr, countries_columns)
          .fillMissingValues(0)
          .toCSV(true, `${__dirname}/src/data/carribeancountrydeaths.csv`)
        territory_df = new DataFrame(territory_tc_arr, territories_columns)
          .fillMissingValues(0)
          .toCSV(true, `${__dirname}/src/data/carribeanterritorycases.csv`)
        territory_df = new DataFrame(territory_td_arr, territories_columns)
          .fillMissingValues(0)
          .toCSV(true, `${__dirname}/src/data/carribeanterritorydeaths.csv`)
        summary_df = new DataFrame(summary_arr, summary_columns)
          .fillMissingValues(0)
          .toCSV(true, `${__dirname}/src/data/caribbeansummary.csv`)
        console.log("CSV files successfully generated")
      } catch (err) {
        console.log("An error has occured: " + err)
        throw "CSV Transformation Stopped"
      }
    })
}

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const template = `${__dirname}/src/templates/island.js`;
  const df = new DataFrame(results);
  iso_codes.forEach(iso_code => {
    var path = iso_code;
    var island_json = JSON.parse(df.filter(row => row.get("iso_code") === iso_code).sortBy('date',true).toJSON());
    createPage({
      path,
      component: template,
      context: island_json,
    })
  })
}