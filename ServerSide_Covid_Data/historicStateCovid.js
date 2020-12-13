const request = require('request-json');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 'http://localhost:5000/'
var client = request.createClient( process.env.PORT || PORT);
const d3 = require('d3-request')
const HistoricState = mongoose.model('states_historic')
//
var d = new Date();
console.log('Today is: ' + d.toLocaleString() )
d.setDate(d.getDate() - 7);


let dd = d.getDate()
let mm = d.getMonth()+1;
let yyyy = d.getFullYear()

if(dd<10) { dd='0'+dd }
if(mm<10)  { mm='0'+mm }

let filterDate = (yyyy + '-' + mm + '-' + dd)


console.log(filterDate)


const getHistoricCovidData = async() => {
        d3.csv("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv",  async function(error, data) {
           if (error) throw error;
           else{
                  // HistoricState.collection.drop()
                    await HistoricState.collection.drop()

                       data.forEach( eachState =>{
                             if(eachState.date >= filterDate ){
                               //this date needs to be dynamic
                                    const historicState = new HistoricState({
                                      date: eachState.date,
                                      state: eachState.state,
                                      fips : eachState.fips,
                                      cases : eachState.cases,
                                      deaths: eachState.deaths
                                    })
                                    historicState.save()
                              } //date
                      })
                      console.log(`updated state historical database at ${d.toLocaleString()}`)
                    }
                })

}

module.exports = { covid: getHistoricCovidData() }


/*
this makes a call to the nytimes github page and saves the updated covid data into the database
*/
