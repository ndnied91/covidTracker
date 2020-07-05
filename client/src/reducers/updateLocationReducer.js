const INITIAL_STATE = {
  location: null
}



export default (state = INITIAL_STATE, action) =>{
    if(action.type === 'UPDATE_LOCATION'){
      return {county : action.payload}
    }
      return state;
}
