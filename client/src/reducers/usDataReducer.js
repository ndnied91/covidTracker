
export default function(state=[] , action){
  switch(action.type){
    case 'FETCH_US_DATA':
      return action.payload

    default:
      return state
  }
}
