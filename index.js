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
require('./MongoModels/NycBoros.js')
require('./MongoModels/Country.js')
require('./MongoModels/State.js')
require('./MongoModels/HistoricalStateCovid.js')

mongoose.connect(keys.mongoURI)
// console.log(`THIS IS THE MONGOOSE KEY${keys.mongoURI}`)

const County = mongoose.model('counties')
const HistoricCounty = mongoose.model('counties_historic')
const Boro = mongoose.model('boros')
const America = mongoose.model('country')
const State = mongoose.model('states')
const HistoricState = mongoose.model('states_historic')


require('./scheduledProcesses.js')
//all of scheduled processes







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


app.get('/api/countyData/nyc' ,async (req,res)=>{
  const nycCovidData = await Boro.find()
  // console.log(nycCovidData)
  res.send(nycCovidData)
      //will be updated to pull in new york city county data
})


app.get('/api/usdata' ,async (req,res)=>{
  const usCovidData = await America.find()
  // console.log(usCovidData)
  res.send(usCovidData)
      //will be updated to pull in all united states data
})


app.get('/api/stateData' ,async (req,res)=>{
  const stateData = await State.find()
  // console.log(usCovidData)
    res.send(stateData)
      //will be updated to pull in state data
})

app.get('/api/historicStateData' ,async (req,res)=>{
  const historical_stateData = await HistoricState.find()
    res.send(historical_stateData)
      //will be updated to pull in historical state data
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
