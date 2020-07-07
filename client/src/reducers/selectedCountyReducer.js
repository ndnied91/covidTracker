

const INITIAL_STATE = {
  selected_county: null
}



export default (state = INITIAL_STATE, action) =>{
    if(action.type === 'SELECTED_COUNTY'){
      return { selected_county : action.payload}
    }
      return state;
}
