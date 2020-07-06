

// export const getOption = (selection)=>{
//   console.log(selection)
//   return{
//     type: GET_OPTION,
//     payload: selection
//   }
// }

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




// export const deleteSurvey = (id) => async dispatch =>{
//   // const res = await axios.delete(`/api/delete/${id} `)
//   const res = await axios.get(`/api/surveys/delete/${id}`)
//
//   dispatch({ type: FETCH_SURVEYS , payload: res.data})
//
// }
