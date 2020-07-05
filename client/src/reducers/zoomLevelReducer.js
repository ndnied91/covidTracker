const INITIAL_STATE = {
  zoom: null
}



export default (state = INITIAL_STATE, action) =>{
    if(action.type === 'ZOOM_LEVEL'){
      return {zoom : action.payload}
    }
      return state;
}
