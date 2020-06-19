
const INITIAL_STATE = {
  income_level: null
}



export default (state = INITIAL_STATE, action) =>{
    if(action.type === 'INCOME_LEVEL'){
      return { income_level : action.payload}
    }
      return state;
}
