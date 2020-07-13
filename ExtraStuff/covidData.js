
const request = require('request-json');
const PORT = process.env.PORT || 'http://localhost:5000/'
var client = request.createClient( process.env.PORT || PORT);
const axios = require('axios')

const countyArray = require('./countyArray')

require('./MongoModels/County.js')

const countyCoordsFIPS = []


// countyArray.foreach(((item), i) => {
//   console.log(item)
// });

console.log(countyArray)


const getCovidCountyData = async () => {

              async function getCounty(name, lat, lng){

                  const res = await client.get(`https://geo.fcc.gov/api/census/block/find?latitude=${lat}&longitude=${lng}&format=json`)
                  // console.log(name + ": " + res.body.County.FIPS)
                 console.log({ name,lat,lng, code: res.body.County.FIPS })
                  console.log(',')
                  // console.log(index)
                  

                  //this shows the county name and correct county code
                  //make an object with all the necessary details
                  //push into covidData array
                  //store ino database
                    //need to connect to database
                    //need to create new Collection
                    //need to create a new model
                    //need to the push into database


                  //alt approach with mapping keys and compring , rather the constant API calls
                  //get covid data and then compare the coords and return the correct county code
                  //couty covid coord and FIPS needs to be imported into this file
                      //create a spearete file to hold that


                  //really we only need to make an api call to the covid data and it can be mapped into the database
                  //this prevents unnecessary api calls

              }








              client.get('https://covid19-us-api.herokuapp.com/county', (error, response, body) => {
                    if (error) {
                        console.error(`Could not send request to API: ${error.message}`);
                        return;
                    }

                    body.message.forEach(function(obj, index){
                           setTimeout(async function(){

                              // getCounty(obj.county_name, obj.latitude , obj.longitude )

                          }, 0200 * (index + 1));
                    });
                })
};




exports.getName = getCovidCountyData;







//////EXTRA Stuff



// if (response.statusCode != 200) {
//     console.error(`Expected status code 200 but received ${response.statusCode}.`);
//
//     return;
// }

// console.log('Processing our list of movies');
// movies = JSON.parse(body);
// movies.forEach(movie => {
//     console.log(`${movie['title']}, ${movie['release_date']}`);
// });
// });





// console.log(obj.county_name , obj.state_name)
// console.log(obj.county_name , obj.latitude , obj.longitude)

// latitude: 41.16319759,
// longitude: -73.7560629,
     // const res = await client.get(`https://geo.fcc.gov/api/census/block/find?latitude=${response.data.message[index].latitude}&longitude=${response.data.message[index].longitude}&format=json`)
    // const res = await client.get(`https://geo.fcc.gov/api/census/block/find?latitude=41.16319759&longitude=-73.7560629&format=json`)
