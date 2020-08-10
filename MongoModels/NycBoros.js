const mongoose = require('mongoose')
const {Schema} = mongoose

const boroSchema = new Schema({
  date: String,
  county :String,
  state : String,
  fips : String,
  cases : String,
  deaths: String,
  coords : {latitude :  Number  ,longitude : Number }
})

mongoose.model('boros', boroSchema) //model class

//we dont need to export mongoose models
