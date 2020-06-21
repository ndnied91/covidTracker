import {combineReducers} from 'redux'

import optionReducer from './optionReducer'
import incomeReducer from './incomeReducer'
import densityReducer from './densityReducer'
import statViewReducer from './statViewReducer'
import showAddressReducer from './showAddressReducer'


export default combineReducers({
  option: optionReducer,
  income_level : incomeReducer,
  density_rate : densityReducer,
  stat_view: statViewReducer,
  show_address : showAddressReducer
})
