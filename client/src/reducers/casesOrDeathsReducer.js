


const INITIAL_STATE = {
  selection: 'cases'
}



export default (state = INITIAL_STATE, action) =>{
    if(action.type === 'CASES_OR_DEATHS'){
      return { selection : action.payload}
    }
      return state;
}
