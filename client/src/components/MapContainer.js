import React from "react";

import {connect} from 'react-redux'
import {updateLocation, timeUpdated , fetchCovidData  } from '../actions'

import { ComposableMap, ZoomableGroup } from "react-simple-maps";

import CountyView from './MapOverlays/CountyView'
import StateView from './MapOverlays/StateView'
import ToolTip from './MapToolTip'

import PopulationLegend from './Legends/PopulationLegend'
import IncomeLegend from './Legends/IncomeLegend'

// const geoUrl1 = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

class MapContainer extends React.Component{


async componentDidMount(){
  this.props.fetchCovidData()
  //gets covidData from database
  // const res = await axios.get('https://covid19-us-api.herokuapp.com/county')
  // console.log(res)
}


    render(){

      const renderLegend =()=>{
          if(this.props.selection === 'population'){
            console.log('population')
            return  <PopulationLegend/>
          }
          else if(this.props.selection === 'income'){
            console.log('income')
            return <IncomeLegend/>
          }
          return

      }



        return(
           <div>

            <ToolTip/>


                <ComposableMap projection="geoAlbersUsa" style={{height: '550px' , width: '100%' , backgroundColor : "#C0E5F6" }}  >
                        <ZoomableGroup
                                       zoom={1} maxZoom={4}
                        style={{ default: { outline: "1px solid red" } , pressed: { outline: "none" }  }} >
                                  <CountyView />
                                  <StateView/>
                        </ZoomableGroup>
              </ComposableMap>

              {renderLegend()}

          </div>
        )
    }
}



const mapStateToProps =(state)=>{
  // console.log(state)
  return { selection: state.option.selection,
            option: state.income_level.income_level,
            timeUpdated : state.timeUpdated
            }
}

export default connect(mapStateToProps , {updateLocation , timeUpdated , fetchCovidData })(MapContainer)
