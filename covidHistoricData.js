const request = require('request-json');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 'http://localhost:5000/'
var client = request.createClient( process.env.PORT || PORT);
const d3 = require('d3-request')
const HistoricCounty = mongoose.model('counties_historic')

const getHistoricCovidData = async() => {
        d3.csv("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv",  function(error, data) {
           if (error) throw error;

           else{
                  HistoricCounty.collection.drop(()=>{console.log('cleared database')})
                       data.forEach( eachCounty =>{
                         if(eachCounty.date >= '2020-07-22'){
                           //this date needs to be dynamic
                                const historicCounty = new HistoricCounty({
                                  date: eachCounty.date, county: eachCounty.county ,
                                  state: eachCounty.state, fips : eachCounty.fips,
                                  cases : eachCounty.cases, deaths: eachCounty.deaths,
                                  // confirmed_cases: eachCounty.confirmed_cases, confirmed_deaths: eachCounty.confirmed_deaths,
                                  // probable_cases: eachCounty.probable_cases, probable_deaths: eachCounty.probable_deaths
                                })
                                  historicCounty.save()
                                  // console.log(eachCounty)
                          } //date
                      })
                    }
                })

}

module.exports = { covid: getHistoricCovidData() }


/*

this makes a call to the nytimes github page and saves the updated covid data into the database

*/
