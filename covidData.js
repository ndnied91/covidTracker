const request = require('request-json');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 'http://localhost:5000/'
var client = request.createClient( process.env.PORT || PORT);
const d3 = require('d3-request')
const County = mongoose.model('counties')

const getCovidCountyData = async() => {
        d3.csv("https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv",  function(error, data) {
           if (error) throw error;

           else{
                  County.collection.drop(()=>{console.log('cleared database')})
                       data.forEach( eachCounty =>{
                            const county = new County({
                              date: eachCounty.date, county: eachCounty.county ,
                              state: eachCounty.state, fips : eachCounty.fips,
                              cases : eachCounty.cases, deaths: eachCounty.deaths,
                              confirmed_cases: eachCounty.confirmed_cases, confirmed_deaths: eachCounty.confirmed_deaths,
                              probable_cases: eachCounty.probable_cases, probable_deaths: eachCounty.probable_deaths
                            })
                              county.save(()=>{console.log(`updating datbase:  ${eachCounty.county}`)})
                      })
                    }
                })

}

module.exports = { covid: getCovidCountyData() }


/*

this makes a call to the nytimes github page and saves the updated covid data into the database

*/
