import axios from "axios"
import { csv } from "d3-fetch";
// import _ from 'lodash'
// const counties = []
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




export const getPopulationRate = (rate) =>{
  //return an action
// console.log(rate)
  return {
    type: 'POPULATION_RATE',
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





// export const timeUpdated = (time) =>{
//   return {
//     type: 'TIME_UPDATED',
//     payload: time
//   }
// }
export const timeUpdated = () => async dispatch => {
  const res = await axios.get('/api/countyData')
    // console.log(res.data[0].date)
    dispatch({ type: 'TIME_UPDATED' , payload: res.data[0].date})
}





export const selectedCounty = (county) =>{
  return {
    //THIS IS FOR SHOWING DATA WITIN THE STATS PANE
    type: 'SELECTED_COUNTY',
    payload: county
  }
}



export const showOrHideCovidDensity = (dots) =>{
  return {
    type: 'COVID_DOTS',
    payload: dots
  }
}



export const selectedFilterCovid = (option) =>{
  return {
    type: 'CASES_OR_DEATHS',
    payload: option
  }
}




export const fetchCovidData = () => async dispatch => {
  const res = await axios.get('/api/countyData')
    // console.log(res.data[0].date)
    dispatch({ type: 'FETCH_COVID_DATA' , payload: res.data})
}



export const fetchHistoricCovidData = () => async dispatch => {
  const res = await axios.get('/api/historicCountyData')
    dispatch({ type: 'FETCH_HISTORIC_COVID_DATA' , payload: res.data})
}



export const fetchNYCCovidData = () => async dispatch => {
  const res = await axios.get('/api/countyData/nyc')
    dispatch({ type: 'FETCH_NYC_DATA' , payload: res.data})
}











export const getPopulationForStats = ()=> async dispatch =>{
  const res = await csv("/FULLY_VERIFIED_POP.csv")
  dispatch({ type: 'GET_POPULATION_STATS' , payload: res})
  //gets population stats for "stats"
}



export const fetchUnitedStatesCovidData = () => async dispatch => {
  const res = await axios.get('/api/usdata')
  console.log(res)
    dispatch({ type: 'FETCH_US_DATA' , payload: res.data})
}
