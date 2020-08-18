
export default function(state=[] , action){
  switch(action.type){
    case 'FETCH_HISTORIC_STATE_COVID_DATA':
      return action.payload
    default:
      return state
  }
}
