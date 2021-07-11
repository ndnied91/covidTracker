const request = require('request-json');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 'http://localhost:5000/'
var client = request.createClient( process.env.PORT || PORT);
const d3 = require('d3-request')
const County = mongoose.model('counties')


const covidCounties = require('./filteredCounties.js')
// console.log(covidCounties.getCounties())

let counties = covidCounties.getCounties()



//this gets us the county coords as well as the county name and county state
//before saving into database , we need to add the coords to the items being added


const getCoords = (county, state)=>{

        var coords = counties.filter(function( obj ) {
              if( obj.county === county && obj.state === state)
                  return {lat : obj.lat , lng :  obj.lng }
                })

                if(coords[0] !== undefined){
                  return { latitude : coords[0].lat  , longitude : coords[0].lng }
                }  else return  { latitude : null  , longitude : null }
                  //returns null if this cant find it
}

const getCovidCountyData = async() => {
        d3.csv("https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv",  async function(error, data) {
           if (error) throw error;

           else{
                  await County.collection.drop(()=>{console.log('cleared database')})

                       data.forEach( eachCounty =>{
                            const county = new County({
                              date: eachCounty.date, county: eachCounty.county ,
                              state: eachCounty.state, fips : eachCounty.fips,
                              cases : eachCounty.cases, deaths: eachCounty.deaths,
                              confirmed_cases: eachCounty.confirmed_cases, confirmed_deaths: eachCounty.confirmed_deaths,
                              probable_cases: eachCounty.probable_cases, probable_deaths: eachCounty.probable_deaths,
                              coords : getCoords(eachCounty.county ,  eachCounty.state)
                            })
                              county.save()
                      })
                      console.log('successfully upated county data')
                    }
                })

}

module.exports = { covid: getCovidCountyData() }


/*

this makes a call to the nytimes github page and saves the updated covid data into the database




https://github.com/nychealth/coronavirus-data/blob/master/by-boro.csv

per boro


*/
