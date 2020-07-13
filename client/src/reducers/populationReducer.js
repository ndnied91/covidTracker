

const INITIAL_STATE = {
  population_rate: null
}



export default (state = INITIAL_STATE, action) =>{
    if(action.type === 'POPULATION_RATE'){
      return { population_rate : action.payload}
    }
      return state;
}
