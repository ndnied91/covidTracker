const mongoose = require('mongoose')
const {Schema} = mongoose

const countyHistoricSchema = new Schema({
  date: String,
  county :String,
  state : String,
  fips : String,
  cases : String,
  deaths: String,
  confirmed_cases: String,
  confirmed_deaths: String,
})

mongoose.model('counties_historic', countyHistoricSchema) //model class

//we dont need to export mongoose models
