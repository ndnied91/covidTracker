const request = require('request-json');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 'http://localhost:5000/'
var client = request.createClient( process.env.PORT || PORT);
const d3 = require('d3-request')
const HistoricCounty = mongoose.model('counties_historic')
//
var d = new Date();
console.log('Today is: ' + d.toLocaleString() )
d.setDate(d.getDate() - 6);


let dd = d.getDate()
let mm = d.getMonth()+1;
let yyyy = d.getFullYear()

if(dd<10) { dd='0'+dd }
if(mm<10)  { mm='0'+mm }

let filterDate = (yyyy + '-' + mm + '-' + dd)


console.log(filterDate)


const getHistoricCovidData = async() => {
        d3.csv("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv",  function(error, data) {
           if (error) throw error;
           else{
                  HistoricCounty.collection.drop()
                       data.forEach( eachCounty =>{
                         if(eachCounty.date >= filterDate ){
                           //this date needs to be dynamic
                                const historicCounty = new HistoricCounty({
                                  date: eachCounty.date, county: eachCounty.county ,
                                  state: eachCounty.state, fips : eachCounty.fips,
                                  cases : eachCounty.cases, deaths: eachCounty.deaths,
                                  // confirmed_cases: eachCounty.confirmed_cases, confirmed_deaths: eachCounty.confirmed_deaths,
                                  // probable_cases: eachCounty.probable_cases, probable_deaths: eachCounty.probable_deaths
                                })
                                  historicCounty.save()
                          } //date
                      })
                      console.log(`updated historical database at ${d.toLocaleString()}`)
                    }
                })

}

module.exports = { covid: getHistoricCovidData() }


/*
this makes a call to the nytimes github page and saves the updated covid data into the database
*/
