
const INITIAL_STATE = {
  covid_dots: 'off'
}



export default (state = INITIAL_STATE, action) =>{
    if(action.type === 'COVID_DOTS'){
      return { covid_dots : action.payload}
    }
      return state;
}
