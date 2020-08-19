
const mongoose = require('mongoose')
const schedule = require('node-schedule');
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI)

var rule = new schedule.RecurrenceRule();

console.log(`CURRENT TIME IS :  ${new Date()}`);
console.log('in scheduledProcesses file')

//heroku is in Coordianted Universal Time


//HISTORIC DATA
schedule.scheduleJob('02 * * * *', function(){
   //updates everyday at 10am
         console.log(`UPDATING HISTORICAL COVID DATA AT ${new Date()}`);
         const historicCovidData = require('./ServerSide_Covid_Data/covidHistoricData.js');
         const historic_stateData = require('./ServerSide_Covid_Data/historicStateCovid.js')
 });



 schedule.scheduleJob('20 * * * *', function(){
   // schedule.scheduleJob(rule , function(){
         console.log(`starting nyc and state data gathering at ${new Date()}`);
         const nycStats = require('./ServerSide_Covid_Data/nycStats.js');
         const jhuStateData = require('./ServerSide_Covid_Data/jhu_stateData.js')
 });




schedule.scheduleJob('30 * * * *', function(){
  // schedule.scheduleJob(rule , function(){
        console.log(`starting covid data and America gathering at ${new Date()}`);
        const covidData = require('./ServerSide_Covid_Data/covidData.js');
        const usData = require('./ServerSide_Covid_Data/usData.js')

});
//HISTORIC DATA
