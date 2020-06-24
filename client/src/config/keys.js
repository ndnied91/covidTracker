
//keys.js - figure out what set of credentials to return



if(process.env.NODE_ENV ===  'production'){
  //return the production set of keys
  var keys = module.exports = require('./prod')
  console.log(keys)

}else{
  //we are in the developement - return correct keys
  //this will be local
  module.exports = require('./dev')
}
