import axios from "axios"
import { csv } from "d3-fetch";
import _ from 'lodash'

const counties = []
//action creater
export const getOption = (option) =>{
  //return an action

  return {
    type: 'GET_OPTION',
    payload: option
  }
}





export const getIncomeLevel = (level) =>{
  //return an action
// console.log(level)
  return {
    type: 'INCOME_LEVEL',
    payload: level
  }
}




export const getDensityRate = (rate) =>{
  //return an action
// console.log(rate)
  return {
    type: 'DENSITY_RATE',
    payload: rate
  }
}



export const getStatView = (view) =>{
  //return an action
// console.log(rate)
  return {
    type: 'GET_VIEW',
    payload: view
  }
}





export const getAddressView = (address) =>{
  //return an action
// console.log(rate)
  return {
    type: 'SHOW_ADDRESS',
    payload: address
  }
}






export const updateLocation = (location) =>{
  return {
    type: 'UPDATE_LOCATION',
    payload: location
  }
}






export const zoomLevel = (zoom) =>{
  return {
    type: 'ZOOM_LEVEL',
    payload: zoom
  }
}





export const timeUpdated = (time) =>{
  return {
    type: 'TIME_UPDATED',
    payload: time
  }
}





export const getCountyCovid = ()=> async dispatch =>{

const covidList = []

  csv('/countyState.csv').then( county => counties.push(county))
  const response = await axios.get('https://covid19-us-api.herokuapp.com/county')

  await dispatch({type: 'COVID_COUNTY_DATA', payload: response.data.message})
}



export const selectedCounty = (county) =>{
  return {
    //THIS IS FOR SHOWING DATA WITIN THE STATS PANE
    type: 'SELECTED_COUNTY',
    payload: county
  }
}







// const res = await axios.get('https://geo.fcc.gov/api/census/block/find?latitude=46.1079526&longitude=-97.63078942&format=json')

// response.data.message.forEach( async (county)=>{
//   // setTimeout(function () {
//
//     const res = await axios.get(`https://geo.fcc.gov/api/census/block/find?latitude=${county.latitude}&longitude=${county.longitude}&format=json`)
//     console.log(county.latitude)
//     console.log(county.longitude)
//     console.log(res.data.County.FIPS)
//     //
//   })


//   42.04264493
// -89.32067151
// 17141


  // var interval = 5000; // how much time should the delay between two iterations be (in milliseconds)?
  // response.data.message.forEach(function (el, index) {
  //   setTimeout(function () {
  //
  //     const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //     const url = `http://www.datasciencetoolkit.org/coordinates2politics/${response.data.message.latitude}%2c${response.data.message.longitude}`;
  //     fetch(proxyurl + url)
  //     .then(response => response.json())
  //     .then(contents => console.log(contents[0].politics[2].code.replace('_' , '')))
  //     .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  //
  //
  //
  //     console.log(el);
  //   }, index * interval);
  // });
  // console.log('Loop finished.');





 //
 // const url = `http://www.datasciencetoolkit.org/coordinates2politics/${county.latitude}%2c${county.longitude}`;
 // fetch(proxyurl + url)
 // .then(response => response.json())
 // .then(contents => console.log(contents[0].politics[2].code.replace('_' , '')))
 // .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

 // covidList.push(county)
 // console.log(county.latitude , county.longitude)




// 40.71455 , -74.00714

// response.data.message.forEach((county)=>{
//   console.log(county)
// })
//
//
// let lat = 37.769456
// let lng = -122.429128
//
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = `http://www.datasciencetoolkit.org/coordinates2politics/${lat}%2c${lng}`;
// fetch(proxyurl + url)
// .then(response => response.json())
// .then(contents => console.log(contents[0].politics[2].code.replace('_' , '')))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
//







// http://www.datasciencetoolkit.org/coordinates2politics/37.769456%2c-122.429128
// console.log(data)
// const response = await axios.get(' https://data.covidactnow.org/latest/us/counties.WEAK_INTERVENTION.timeseries.json')
//   const response = await axios.get('https://coronavirus-county-api.herokuapp.com')

// https://static.usafacts.org/
//


// response.data.message.forEach(county =>{
//   console.log(county.county_name,county.latitude, county.longitude)
// })
//

// 40.71455, -74.00714

  // https://geo.fcc.gov/api/census/block/find?latitude=46.1079526&longitude=-97.63078942&format=json
// 46.1079526 -97.63078942

// let actualCounties = counties[0]
// console.log(actualCounties)

// let covidData = response.data.message
// console.log(covidData)
