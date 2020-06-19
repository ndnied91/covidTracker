

const INITIAL_STATE = {
  selection: null
}




export default (state = INITIAL_STATE, action) =>{
    if(action.type === 'GET_OPTION'){
      return {selection : action.payload}
    }
      return state;
}
