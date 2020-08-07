import React from "react";

import {connect} from 'react-redux'
import { fetchCovidData  } from '../actions'

import { ComposableMap, ZoomableGroup  } from "react-simple-maps";
import CountyView from './MapOverlays/CountyView'
import StateView from './MapOverlays/StateView'
import ToolTip from './MapToolTip'
import PopulationLegend from './Legends/PopulationLegend'
import IncomeLegend from './Legends/IncomeLegend'


class MapContainer extends React.Component{


async componentDidMount(){
  this.props.fetchCovidData()
}


    render(){

      const renderLegend =()=>{
          if(this.props.selection === 'population'){
            return  <PopulationLegend/>
          }
          else if(this.props.selection === 'income'){
            return <IncomeLegend/>
          }
          return null
      }





        return(
           <div>

            <ToolTip/>
                <ComposableMap projection="geoAlbersUsa" style={{height: '550px' , width: '100%' , backgroundColor : "#C0E5F6" }}  >
                        <ZoomableGroup
                              style={{ default: { outline: "1px solid red" } , pressed: { outline: "none" }  }} >

                           <CountyView/>
                           <StateView/>
                        </ZoomableGroup>
                </ComposableMap>
              {renderLegend()}


          </div>
        )
    }
}




const mapStateToProps =(state)=>{
  return { selection: state.option.selection,
            option: state.income_level.income_level
            }
}

export default connect(mapStateToProps , {  fetchCovidData })(MapContainer)
