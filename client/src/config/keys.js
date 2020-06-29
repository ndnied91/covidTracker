
//keys.js - figure out what set of credentials to return



if(process.env.NODE_ENV ===  'production'){
  //return the production set of keys
  module.exports = require('./prod')


}else{
  //we are in the developement - return correct keys
  //this will be local
  module.exports = require('./dev')
}
