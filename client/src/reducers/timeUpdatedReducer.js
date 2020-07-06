
const INITIAL_STATE = {
  time_updated: null
}



export default (state = INITIAL_STATE, action) =>{
    if(action.type === 'TIME_UPDATED'){
      return { time_updated : action.payload}
    }
      return state;
}
