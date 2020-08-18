


const INITIAL_STATE = {
  selection: 'state'
}



export default (state = INITIAL_STATE, action) =>{
    if(action.type === 'STATE_COUNTY_VIEW'){
      return { selection : action.payload}
    }
      return state;
}
