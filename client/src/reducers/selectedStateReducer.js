

const INITIAL_STATE = {
  selected_state: null
}



export default (state = INITIAL_STATE, action) =>{
    if(action.type === 'SELECTED_STATE'){
      return { selected_state : action.payload}
    }
      return state;
}
