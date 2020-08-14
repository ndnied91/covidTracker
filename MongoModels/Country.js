const mongoose = require('mongoose')
const {Schema} = mongoose

const countrySchema = new Schema({
  date: String,
  cases : String,
  deaths: String
})

mongoose.model('country', countrySchema) //model class

//we dont need to export mongoose models
