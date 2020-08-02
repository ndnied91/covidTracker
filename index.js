//this will be the server that will run the entire backend of the program

const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const mongoose = require('mongoose')
const path = require('path');
const app = express()
      app.use(bodyParser.json())


const keys = require('./config/keys')
require('./MongoModels/County.js')
require('./MongoModels/HistoricCovid.js')

mongoose.connect(keys.mongoURI)
// console.log(`THIS IS THE MONGOOSE KEY${keys.mongoURI}`)

const County = mongoose.model('counties')
const HistoricCounty = mongoose.model('counties_historic')

var schedule = require('node-schedule');






var rule = new schedule.RecurrenceRule();
// rule.hour = 15; //THIS IS IN EST TIME (USE EST TIME)
// rule.minute = 57;

rule.hour = 20;
rule.minute = 03;

console.log(`CURRENT TIME IS :  ${new Date()}`);

//heroku is in Coordianted Universal Time

schedule.scheduleJob('55 * * * *', function(){
  // schedule.scheduleJob(rule , function(){
        console.log(`starting covid data gathering at ${new Date()}`);
        const covidData = require('./covidData.js');
});

const covidData = require('./covidData.js');

//HISTORIC DATA


    //THIS IS A PROBLEM APPERENTLY
  const historicCovidData = require('./covidHistoricData.js');

 //  needs to be optimized before implmeneting
 // pull in by specific county NOT ALL IN ONE SHOT



//will make a call to database to retreive covid data
app.get('/api/countyData' ,async (req,res)=>{
  const counties = await County.find()
  res.send(counties)
      //will be updated to pull in county data
})



app.get('/api/historicCountyData' ,async (req,res)=>{
  const historicCounty = await HistoricCounty.find()
  res.send(historicCounty)
      //will be updated to pull in HISTORICAL county data
})


      // this makes sure express behaves correctly
      if (process.env.NODE_ENV === 'production') {
        // Express will serve up production assets
        // like our main.js file, or main.css file!
        app.use(express.static('client/build')); //118

        // Express will serve up the index.html file
        // if it doesn't recognize the route
         //express will serve up the index.html if it doesnt recognize the route



        app.get('*', (req, res) => {
          res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
      }




const PORT = process.env.PORT || 5000

app.listen(PORT , ()=> console.log('running'))













/*


// request('https://covid19-us-api.herokuapp.com/county')
//load up the covid data
//schedule it at some random time at night to update data

// const response = await axios.get('https://covid19-us-api.herokuapp.com/county')
// console.log(response)

*/
