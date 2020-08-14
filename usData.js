const request = require('request-json');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 'http://localhost:5000/'
var client = request.createClient( process.env.PORT || PORT);
const d3 = require('d3-request')

const America = mongoose.model('country')

const url = 'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us.csv'


const getUSCovidData = async()=>{
 d3.csv(url, function(error, data){
   if(error) throw error;
   else{
     America.collection.drop(()=>{console.log('cleared US database')})
     console.log(data)
     data.forEach( (country)=>{
       const usData = new America({
         date: country.date,
         cases: country.cases,
         deaths: country.deaths
       })
        usData.save()
     })//end of for each statement
   }//end of else statement
 })//end of d3.csv statement
}//end of getUSCovidData statement


module.exports = { covid: getUSCovidData() }
