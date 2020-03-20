/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-react-helmet',
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
          "new_cases": "number",
          "new_deaths": "number",
          "total_cases": "number",
          "total_deaths": "number",
          "source_name": "string",
          "source_url": "string",
        },   
      }
    }
  ]
}
