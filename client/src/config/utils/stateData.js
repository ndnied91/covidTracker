//https://covidtracking.com/api/v1/states/current.json

import axios from 'axios'



export const getData = async () =>{
  const response = await axios.get('https://covidtracking.com/api/v1/states/current.json');
  console.log(response.data)
}



// 'http://corona-api.com/countries/:US'

//
//
//
// export const getData = async () =>{
//   const response = await axios.get("https://covidtracking.com/api/v1/states/current.json");
//   console.log(response)
// }





// export const getData = async () =>{
//   const response = await axios.get('https://corona-api.com/countries/US');
//   console.log(response.data.data)
  //this gets us monthly, can posentially be used for curvegraph



// https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#071be6ab-ebcc-40dc-be8b-9209ab7caca5
//gets date range
