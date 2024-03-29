
const mongoose = require('mongoose')
const schedule = require('node-schedule');
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI)

var rule = new schedule.RecurrenceRule();

console.log(`CURRENT TIME IS :  ${new Date()}`);

//heroku is in Coordianted Universal Time
// const covidData = require('./ServerSide_Covid_Data/covidData.js');

// const historicCovidData = require('./ServerSide_Covid_Data/covidHistoricData.js');


//fixed issues
// const covidData = require('./ServerSide_Covid_Data/covidData.js');

 // const historic_stateData = require('./ServerSide_Covid_Data/historicStateCovid.js')
// const historicCovidData = require('./ServerSide_Covid_Data/covidHistoricData.js'); //county
// const jhuStateData = require('./ServerSide_Covid_Data/jhu_stateData.js')
// const nycStats = require('./ServerSide_Covid_Data/nycStats.js')
// const usData = require('./ServerSide_Covid_Data/usData.js')



//county covid data
schedule.scheduleJob('55 * * * *', function(){
   //updates everyday at 10am
         console.log(`updating county covid data  ${new Date()}`);
          const covidData = require('./ServerSide_Covid_Data/covidData.js');
 });


 // historic county data
 schedule.scheduleJob('05 * * * *', function(){
    //updates everyday at 10am
          console.log(`updating historic county covid data at ${new Date()}`);
          const historicCovidData = require('./ServerSide_Covid_Data/covidHistoricData.js');
  });


//nyc data
 schedule.scheduleJob('57 * * * *', function(){
   // schedule.scheduleJob(rule , function(){
         console.log(`starting nyc : gathering at ${new Date()} `);
          const nycStats = require('./ServerSide_Covid_Data/nycStats.js')
 });


//historic state data
 schedule.scheduleJob('58 * * * *', function(){
   // schedule.scheduleJob(rule , function(){
         console.log(`starting historical state data : gathering at ${new Date()}`);
         const historic_stateData = require('./ServerSide_Covid_Data/historicStateCovid.js')
 });

//united states data
 schedule.scheduleJob('59 * * * *', function(){
   // schedule.scheduleJob(rule , function(){
         console.log(`united states data:  gathering at ${new Date()}`);
         const usData = require('./ServerSide_Covid_Data/usData.js')
 });

 //jhu STATE data
  schedule.scheduleJob('54 * * * *', function(){
    // schedule.scheduleJob(rule , function(){
          console.log(`jhu state data :  gathering at ${new Date()} `);
           const jhuStateData = require('./ServerSide_Covid_Data/jhu_stateData.js')
  });










// const jhuStateData = require('./ServerSide_Covid_Data/jhu_stateData.js')






//HISTORIC DATA
