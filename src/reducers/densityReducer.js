

const INITIAL_STATE = {
  density_rate: null
}



export default (state = INITIAL_STATE, action) =>{
    if(action.type === 'DENSITY_RATE'){
      return { density_rate : action.payload}
    }
      return state;
}
