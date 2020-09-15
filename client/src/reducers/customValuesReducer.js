

const INITIAL_STATE = {
  values: null
}



export default (state = INITIAL_STATE, action) =>{
    if(action.type === 'CUSTOM_VALUES'){
      return  action.payload 
    }
      return state;
}
