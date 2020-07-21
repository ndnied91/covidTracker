const mongoose = require('mongoose')
const {Schema} = mongoose

const countySchema = new Schema({
  date: String,
  county :String,
  state : String,
  fips : String,
  cases : String,
  deaths: String,
  confirmed_cases: String,
  confirmed_deaths: String,
  probable_cases: String,
  probable_deaths: String,
  // latitude : String,
  // longitude : String
  coords : {latitude :  String  ,longitude : String }
})

mongoose.model('counties', countySchema) //model class

//we dont need to export mongoose models
