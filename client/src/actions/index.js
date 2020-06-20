

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
