const request = require('request-json');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 'http://localhost:5000/'
var client = request.createClient( process.env.PORT || PORT);
const d3 = require('d3-request')

const Boro = mongoose.model('boros')


const url = 'https://raw.githubusercontent.com/nychealth/coronavirus-data/master/totals/by-boro.csv'

const getNYCFips =(county)=>{
  switch (county) {
    case 'Bronx':
      return '36005'
    case 'Brooklyn':
      return '36047'
    case 'Manhattan':
      return '36061'
    case 'Queens':
      return '36081'
    case 'StatenIsland':
      return '36085'
    default:
        return null
  }
}




const getNYCCoords=(county)=>{
  switch (county) {
    case 'Bronx':
      return {latitude: 40.8448, longitude: -73.8648}
    case 'Brooklyn':
      return {latitude: 40.6782, longitude: -73.9442}
    case 'Manhattan':
      return {latitude: 40.7831, longitude: -73.9712}
    case 'Queens':
      return {latitude: 40.7282, longitude: -73.7949}
    case 'StatenIsland':
      return {latitude: 40.5795, longitude: -74.1502}
    default:
        return null
  }
}



const getnewyorkcitycovidData = async() => {
       d3.csv(url, async function(error, data) {
           if (error) throw error;
           else {
              await Boro.collection.drop(()=>{console.log('cleared database')})

                console.log(data)

              data.forEach( (eachCounty)=>{




                      if(eachCounty.BOROUGH_GROUP === 'Bronx'){
                          // console.log(county.BOROUGH_GROUP , county.CASE_COUNT )
                                const boro = new Boro({
                                  date : Date.now(),
                                  county : 'Bronx',
                                  state: 'New York',
                                  fips: getNYCFips('Bronx'),
                                  cases:  eachCounty.CASE_COUNT,
                                  confirmed_deaths: eachCounty.DEATH_COUNT,
                                  coords: getNYCCoords('Bronx')
                                })
                                  boro.save(()=>{console.log(`updating datbase: Bronx`)})
                        } //end of Bronx

                        if(eachCounty.BOROUGH_GROUP === 'Manhattan'){
                            // console.log(county.BOROUGH_GROUP , county.CASE_COUNT )
                                  const boro = new Boro({
                                    date : Date.now(),
                                    county : 'New York',
                                    state: 'New York',
                                    fips: getNYCFips('Manhattan'),
                                    cases:  eachCounty.CASE_COUNT,
                                    confirmed_deaths: eachCounty.DEATH_COUNT,
                                    coords: getNYCCoords('Manhattan')
                                  })
                                    boro.save(()=>{console.log(`updating datbase: Manhattan`)})
                          } //end of Manhattan

                          if(eachCounty.BOROUGH_GROUP === 'Queens'){
                              // console.log(county.BOROUGH_GROUP , county.CASE_COUNT )
                                    const boro = new Boro({
                                      date : Date.now(),
                                      county : 'Queens',
                                      state: 'New York',
                                      fips: getNYCFips('Queens'),
                                      cases:  eachCounty.CASE_COUNT,
                                      confirmed_deaths: eachCounty.DEATH_COUNT,
                                      coords: getNYCCoords('Queens')
                                    })
                                      boro.save(()=>{console.log(`updating datbase:  Queens`)})
                            }//end of Queens

                            if(eachCounty.BOROUGH_GROUP === 'Brooklyn'){
                                // console.log(county.BOROUGH_GROUP , county.CASE_COUNT )
                                      const boro = new Boro({
                                        date : Date.now(),
                                        county : 'Brooklyn',
                                        state: 'New York',
                                        fips: getNYCFips('Brooklyn'),
                                        cases:  eachCounty.CASE_COUNT,
                                        confirmed_deaths: eachCounty.DEATH_COUNT,
                                        coords: getNYCCoords('Brooklyn')
                                      })
                                        boro.save(()=>{console.log(`updating datbase:  Brooklyn`)})
                              }//end of Brooklyn

                              if(eachCounty.BOROUGH_GROUP === 'StatenIsland'){
                                  // console.log(county.BOROUGH_GROUP , county.CASE_COUNT )
                                        const boro = new Boro({
                                          date : Date.now(),
                                          county : 'Richmond',
                                          state: 'New York',
                                          fips: getNYCFips('StatenIsland'),
                                          cases:  eachCounty.CASE_COUNT,
                                          confirmed_deaths: eachCounty.DEATH_COUNT,
                                          coords: getNYCCoords('StatenIsland')
                                        })
                                          boro.save(()=>{console.log(`updating datbase: Staten Island`)})
                                }//end of StatenIsland

                   })

              }

        })

}



module.exports = { covid: getnewyorkcitycovidData() }
