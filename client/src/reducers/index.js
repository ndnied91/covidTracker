import {combineReducers} from 'redux'


import optionReducer from './optionReducer'
import incomeReducer from './incomeReducer'
import populationReducer from './populationReducer'
// import statViewReducer from './statViewReducer'
// import showAddressReducer from './showAddressReducer'
import updateLocationReducer from './updateLocationReducer'
// import zoomLevelReducer from './zoomLevelReducer'
import timeUpdatedReducer from './timeUpdatedReducer'
import selectedCountyReducer from './selectedCountyReducer'
import covidDataReducer from './covidDataReducer'
import covidDataHistoricReducer from './covidDataHistoricReducer'
import showOrHideCovidDensityReducer from './showOrHideCovidDensityReducer'
import casesOrDeathsReducer from './casesOrDeathsReducer'
import populationStatsReducer from './populationStatsReducer'
import nyccoviddataReducer from './nyccoviddataReducer'
import usDataReducer from './usDataReducer'
import viewModeReducer from './viewModeReducer'
import selectedStateReducer from './selectedStateReducer'
import stateCovidReducer from './stateCovidReducer'
import historicalStateDataReducer from './historicalStateDataReducer'
import statePopulationReducer from './statePopulationReducer'
import customValuesReducer from './customValuesReducer'

export default combineReducers({
  option: optionReducer,
  income_level : incomeReducer,
  population_rate : populationReducer,
  updateLocation : updateLocationReducer,
  time_updated: timeUpdatedReducer,
  selected_County : selectedCountyReducer,
  covidData : covidDataReducer,
  covid_densityDots : showOrHideCovidDensityReducer,
  cases_or_deaths : casesOrDeathsReducer,
  historicCovidData : covidDataHistoricReducer,
  populationStat : populationStatsReducer,
  nycCovidData: nyccoviddataReducer,
  usCovidData : usDataReducer,
  viewMode: viewModeReducer,
  selectedState : selectedStateReducer,
  state_covid_data : stateCovidReducer,
  historicalStateData: historicalStateDataReducer,
  statePopulation : statePopulationReducer,
  customValues : customValuesReducer
})
