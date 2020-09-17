//this is used for stats, when user clicks on a county , population of that county will be displayed


export default function(state=[] , action){
  switch(action.type){
    case 'GET_COUNTY_INCOME_STATS':
      return action.payload
    default:
      return state
  }
}
