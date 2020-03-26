/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Caribbean Virus Tracker",
    titleTemplate: "%s · Tracking the Coronavirus outbreak in the Caribbean",
    description:
      "Web site to track Coronavirus throughout the Caribbean",
    url: "https://caribbeanvirustracker.com",
    image: "/cvt-image.png",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-anchor-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    //'gatsby-transformer-csv',
    {
      resolve: 'gatsby-transformer-csv',
      options:{
        colParser: {
          "date": function(item, head, resultRow, row , colIdx){
            var dateParts = item.split("/");
            var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
              return dateObject;
          },
          "location": "string",
          "total_cases_1": "number",
          "total_cases_2": "number",
          "new_cases_1": "number",
          "new_cases_2": "number",
          "total_deaths_1": "number",
          "total_deaths_2": "number",
          "new_deaths_1": "number",
          "new_deaths_2": "number",
          "recovered": "number",
          "source_name_1": "string",
          "source_url_1": "string",
          "source_name_2": "string",
          "source_url_2": "string",
        },   
      }
    }
  ]
}
