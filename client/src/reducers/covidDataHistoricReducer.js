

export default function(state=[] , action){
  switch(action.type){
    case 'FETCH_HISTORIC_COVID_DATA':
      return action.payload
    default:
      return state
  }
}
