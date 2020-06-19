import {combineReducers} from 'redux'

import optionReducer from './optionReducer'
import incomeReducer from './incomeReducer'
import densityReducer from './densityReducer'


export default combineReducers({
  option: optionReducer,
  income_level : incomeReducer,
  density_rate : densityReducer
})
