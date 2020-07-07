
import _ from 'lodash'


export default (state = [], action) =>{
    // console.log(action.payload)
    if(action.type === 'COVID_COUNTY_DATA'){
      // return { county : action.payload}
      return {...state , ..._.mapKeys(action.payload, 'county_name') }
    }
      return state;
}
