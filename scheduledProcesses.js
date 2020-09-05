
const mongoose = require('mongoose')
const schedule = require('node-schedule');
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI)

var rule = new schedule.RecurrenceRule();

console.log(`CURRENT TIME IS :  ${new Date()}`);
console.log('in scheduledProcesses file')

//heroku is in Coordianted Universal Time

// const historicCovidData = require('./ServerSide_Covid_Data/covidHistoricData.js');
//HISTORIC DATA
schedule.scheduleJob('10 * * * *', function(){
   //updates everyday at 10am
         console.log(`updating county covid data and historic county covid data at ${new Date()}`);
         const covidData = require('./ServerSide_Covid_Data/covidData.js');
         const historicCovidData = require('./ServerSide_Covid_Data/covidHistoricData.js');
 });



 schedule.scheduleJob('15 * * * *', function(){
   // schedule.scheduleJob(rule , function(){
         console.log(`starting historical state data and united states data gathering at ${new Date()}`);
         const historic_stateData = require('./ServerSide_Covid_Data/historicStateCovid.js')
         const usData = require('./ServerSide_Covid_Data/usData.js')

 });


 schedule.scheduleJob('* 2 * * *', function(){
   // schedule.scheduleJob(rule , function(){
         console.log(`starting nyc and jhu state data gathering at ${new Date()} TESTING MINUTE `);
          const nycStats = require('./ServerSide_Covid_Data/nycStats.js')
          const jhuStateData = require('./ServerSide_Covid_Data/jhu_stateData.js')

 });


//HISTORIC DATA
