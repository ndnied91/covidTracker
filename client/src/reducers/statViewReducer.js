
const INITIAL_STATE = {
  view: null
}




export default (state = INITIAL_STATE, action) =>{
    if(action.type === 'GET_VIEW'){
      return {view : action.payload}
    }
      return state;
}
