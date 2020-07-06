import React from "react";
import axios from "axios"

import {connect} from 'react-redux'
import {updateLocation, zoomLevel} from '../actions'

import { ComposableMap, ZoomableGroup } from "react-simple-maps";

import CountyView from './MapOverlays/CountyView'
import StateView from './MapOverlays/StateView'
import ToolTip from './MapToolTip'

// const geoUrl1 = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";


class MapContainer extends React.Component{

  async componentDidMount(){
    const res =await axios.get('https://api.covid19api.com/countries')
    console.log(res.data)
  }


    render(){

        return(
           <div>

           <ToolTip/>
                <ComposableMap projection="geoAlbersUsa" style={{height: '550px' , width: '100%' , backgroundColor : "#C0E5F6" }}  >
                        <ZoomableGroup zoom={1} onMove={((position)=> this.props.zoomLevel(position.k) )}>
                                  <CountyView/>
                                  <StateView/>
                        </ZoomableGroup>
              </ComposableMap>




          </div>
        )
    }
}



const mapStateToProps =(state)=>{
  // console.log(state)
  return { selection: state.option.selection,
            option: state.income_level.income_level,
            zoom: state.zoomLevel.zoom}
}

export default connect(mapStateToProps , {updateLocation , zoomLevel})(MapContainer)






// const mapStateToProps =(state)=>{
//   // console.log(state)
//   return { selection: state.option.selection,
//             option: state.income_level.income_level}
// }
//
// export default connect( mapStateToProps,  {updateLocation , zoomLevel})(StateView)

//
//
// import React from "react";
//
//
// import {connect} from 'react-redux'
//
//
// import CountyView from './MapOverlays/CountyView'
// import ToolTip from './MapToolTip'
//
//
//
//
// class MapContainer extends React.Component{
//
//     render(){
//
//         console.log(this.props.zoom)
//   // {this.props.zoom !== undefined && this.props.zoom < 1.5 ? <CountyView/> : <div> StateView </div>}
//
//         return(
//            <div>
//                 <ToolTip/>
//                 <CountyView/>
//
//           </div>
//         )
//     }
// }
//
//
// const mapStateToProps = (state) =>{
//   return { zoom : state.zoomLevel.zoom}
// }
//
// export default connect(mapStateToProps)(MapContainer)
