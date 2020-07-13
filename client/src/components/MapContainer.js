import React from "react";
import axios from 'axios'

import {connect} from 'react-redux'
import {updateLocation, zoomLevel, timeUpdated  ,fetchCovidData  } from '../actions'

import { ComposableMap, ZoomableGroup } from "react-simple-maps";

import CountyView from './MapOverlays/CountyView'
import StateView from './MapOverlays/StateView'
import ToolTip from './MapToolTip'

// const geoUrl1 = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

class MapContainer extends React.Component{


async componentDidMount(){
  this.props.fetchCovidData()
  console.log(this.props)
  //gets covidData from database
  // const res = await axios.get('https://covid19-us-api.herokuapp.com/county')
  // console.log(res)
}
//
// confirmed: 42307
// deaths 2190
// new cases 40
// new deaths 0


    render(){
        return(
           <div>

           <ToolTip/>
                <ComposableMap projection="geoAlbersUsa" style={{height: '550px' , width: '100%' , backgroundColor : "#C0E5F6" }}  >
                        <ZoomableGroup zoom={1} onMove={((position)=> this.props.zoomLevel(position.k) )}>
                                  <CountyView />
                                  <StateView/>
                        </ZoomableGroup>
              </ComposableMap>




          </div>
        )
    }
}



const mapStateToProps =(state)=>{
  return { selection: state.option.selection,
            option: state.income_level.income_level,
            zoom: state.zoomLevel.zoom,
            timeUpdated : state.timeUpdated
            }
}

export default connect(mapStateToProps , {updateLocation , zoomLevel, timeUpdated , fetchCovidData })(MapContainer)
