const mongoose = require('mongoose')
const {Schema} = mongoose

const countySchema = new Schema({
  name : String,
  // county : { type: Number  , default: 0 }
  county :String,
  coords : String,
  cases : String
  //THIS IS DUMMY DATA, will be updated when working
})

mongoose.model('Counties', countySchema) //model class

//we dont need to export mongoose models
