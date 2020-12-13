
import React from "react";

import {connect} from 'react-redux'
import { fetchCovidData  } from '../actions'

import { ComposableMap, ZoomableGroup  } from "react-simple-maps";
import CountyView from './MapOverlays/CountyView'
import StateOverlay from './MapOverlays/StateOverlay'
import ToolTip from './MapToolTip'
import PopulationCountyLegend from './Legends/PopulationCountyLegend'
import IncomeCountyLegend from './Legends/IncomeCountyLegend'

import PopulationStateLegend from './Legends/PopulationStateLegend'
import IncomeStateLegend from './Legends/IncomeStateLegend'

import StateView from './MapOverlays/StateView'

class MapContainer extends React.Component{


async componentDidMount(){
  this.props.fetchCovidData()
}


    render(){

      const renderCountyLegends =()=>{
          if(this.props.selection === 'population'){
            return  <PopulationCountyLegend/>
          }
          else if(this.props.selection === 'income'){
            return <IncomeCountyLegend/>
          }
          return null
      }


      //renders state data
      const renderStateLegends =()=>{
          if(this.props.selection === 'population'){
            return  <PopulationStateLegend/>
          }
          else if(this.props.selection === 'income'){
            return <IncomeStateLegend/>
          }
          return null
      }



        return(
           <div>
            <ToolTip/>

                <ComposableMap projection="geoAlbersUsa" style={{height: '550px' , width: '100%' , backgroundColor : "#C0E5F6" }}  >
                        <ZoomableGroup
                              style={{ default: { outline: "1px solid red" } , pressed: { outline: "none" }  }} >

                             {this.props.viewMode === 'county' ?  <><CountyView/>  <StateOverlay/> </> : <StateView/> }
                        </ZoomableGroup>
                </ComposableMap>

              {this.props.viewMode === 'county' ? renderCountyLegends() : renderStateLegends()}


          </div>
        )
    }
}




const mapStateToProps =(state)=>{
  return { selection: state.option.selection,
            option: state.income_level.income_level,
            viewMode: state.viewMode.selection
            }
}

export default connect(mapStateToProps , {  fetchCovidData })(MapContainer)
