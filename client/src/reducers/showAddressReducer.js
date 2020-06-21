
const INITIAL_STATE = {
  address: null
}



export default (state = INITIAL_STATE, action) =>{
    if(action.type === 'SHOW_ADDRESS'){
      return { address : action.payload}
    }
      return state;
}
