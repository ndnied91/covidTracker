
const mongoose = require('mongoose')
const {Schema} = mongoose

const stateHistoricCovid = new Schema({
  date: String,
  state : String,
  fips : String,
  cases : String,
  deaths: String,
})

mongoose.model('states_historic', stateHistoricCovid) //model class

//we dont need to export mongoose models
