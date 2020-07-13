//this will be the server that will run the entire backend of the program

const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const mongoose = require('mongoose')
const app = express()
      app.use(bodyParser.json())


const keys = require('./config/keys')
require('./MongoModels/County.js')

mongoose.connect(keys.mongoURI)

//THIS NEEDS TO BE CALLED ONLY AT CERTAIN HOURS
//everything covid data will come from here
const covidData = require('./covidData.js');



      // this makes sure express behaves correctly
      if (process.env.NODE_ENV === 'production') {
        // Express will serve up production assets
        // like our main.js file, or main.css file!
        app.use(express.static('client/build')); //118

        // Express will serve up the index.html file
        // if it doesn't recognize the route
         //express will serve up the index.html if it doesnt recognize the route
        const path = require('path');
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
