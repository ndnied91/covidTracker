//THIS IS FOR GETTING JHU STATE LEVEL DATA

const request = require('request-json');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 'http://localhost:5000/'
var client = request.createClient( process.env.PORT || PORT);
const d3 = require('d3-request')

const State = mongoose.model('states')


const url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports_us/08-16-2020.csv'

const getStateLevelData = async() => {
       d3.csv(url,  function(error, data) {
         if (error) throw error;

             else {
               //everything happens here
               State.collection.drop(()=>{console.log('cleared database')})
                   data.forEach((item, i) => {
                           const state = new State({
                             date: item.Last_Update,
                             state : item.Province_State,
                             fips : item.FIPS,
                             cases : item.Confirmed,
                             deaths: item.Deaths,
                             recovered: item.Recovered,
                             active: item.Active,
                             incident_rate: item.Incident_Rate,
                             people_tested: item.People_Tested,
                             mortality_rate: item.Mortality_Rate,

                             coords : {latitude :  item.Lat  ,longitude : item.Long_ }
                           }) //end of for new State call
                           state.save()
                         });

                 }

       })
}









module.exports = { covid: getStateLevelData() }
