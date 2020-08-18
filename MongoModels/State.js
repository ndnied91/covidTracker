const mongoose = require('mongoose')
const {Schema} = mongoose

const stateSchema = new Schema({
  date: String,
  state : String,
  fips : String,
  cases : String,
  deaths: String,
  recovered: String,
  active: String,
  incident_rate: String,
  people_tested: String,
  mortality_rate: String,

  coords : {latitude :  Number  ,longitude : Number }
})

mongoose.model('states', stateSchema) //model class

//we dont need to export mongoose models
