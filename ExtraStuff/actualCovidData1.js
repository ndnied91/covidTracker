const request = require('request-json');
const PORT = process.env.PORT || 'http://localhost:5000/'
var client = request.createClient( process.env.PORT || PORT);
// const countyArray = require('./countyArray')

const fs = require('fs');
const path = require('path');
const neatCsv = require('neat-csv');



const getCovidCountyData = async () => {

  client.get('https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv', (error, response, body) => {
        if (error) {
            console.error(`Could not send request to API: ${error.message}`);
            return;
        }

        fs.readFile(filePath, async (error, data) => {
          if (error) {
            return console.log('error reading file');
          }
          const parsedData = await neatCsv(data);
          console.log(parsedData);
        });

      })

  // const filePath = 'https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv'
  //
  // fs.readFile(filePath, async (error, data) => {
  //   if (error) {
  //     return console.log('error reading file');
  //   }
  //   const parsedData = await neatCsv(data);
  //   console.log(parsedData);
  // });

}


module.exports = {


    covid: getCovidCountyData(),

}
