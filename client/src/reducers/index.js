import {combineReducers} from 'redux'


import optionReducer from './optionReducer'
import incomeReducer from './incomeReducer'
import populationReducer from './populationReducer'
import statViewReducer from './statViewReducer'
import showAddressReducer from './showAddressReducer'
import updateLocationReducer from './updateLocationReducer'
import zoomLevelReducer from './zoomLevelReducer'
import timeUpdatedReducer from './timeUpdatedReducer'
import selectedCountyReducer from './selectedCountyReducer'
import covidDataReducer from './covidDataReducer'
// import covidDataHistoricReducer from './covidDataHistoricReducer'
import showOrHideCovidDensityReducer from './showOrHideCovidDensityReducer'
import casesOrDeathsReducer from './casesOrDeathsReducer'


export default combineReducers({
  option: optionReducer,
  income_level : incomeReducer,
  population_rate : populationReducer,
  stat_view: statViewReducer,
  show_address : showAddressReducer,
  updateLocation : updateLocationReducer,
  zoomLevel:zoomLevelReducer,
  time_updated: timeUpdatedReducer,
  selected_County : selectedCountyReducer,
  covidData : covidDataReducer,
  // historicCovidData : covidDataHistoricReducer
  covid_densityDots : showOrHideCovidDensityReducer,
  cases_or_deaths : casesOrDeathsReducer

})
