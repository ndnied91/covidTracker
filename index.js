//this will be the server that will run the entire backend of the program

const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const mongoose = require('mongoose')
const app = express()
      app.use(bodyParser.json())


const keys = require('./config/keys')
//hiding the keys

require('./MongoModels/County.js')
//imported schema for creating the county object

mongoose.connect(keys.mongoURI, ()=>{
  console.log('successfully connected to database')
  //connected to database , key is hidden 
})



// request('https://covid19-us-api.herokuapp.com/county')
//load up the covid data
//schedule it at some random time at night to update data

// const response = await axios.get('https://covid19-us-api.herokuapp.com/county')
// console.log(response)

const user = require('./covidData');
console.log(`User: ${user.getName()}`);








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
