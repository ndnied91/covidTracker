import React from "react";
import axios from 'axios'

import {connect} from 'react-redux'
import {updateLocation, zoomLevel, timeUpdated, getCountyCovid } from '../actions'

import { ComposableMap, ZoomableGroup } from "react-simple-maps";

import CountyView from './MapOverlays/CountyView'
import StateView from './MapOverlays/StateView'
import ToolTip from './MapToolTip'

// const geoUrl1 = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

class MapContainer extends React.Component{



  async componentDidMount(){

    // const response = await axios.get('https://covid19-us-api.herokuapp.com/county')
    //
    //     response.data.message.forEach( function(obj, index) {
    //          setTimeout(async function(){
    //
    //           const res = await axios.get(`https://geo.fcc.gov/api/census/block/find?latitude=${response.data.message[index].latitude}&longitude=${response.data.message[index].longitude}&format=json`)
    //
    //           console.log(response.data.message[index].county_name, response.data.message[index].state_name  + ": " + res.data.County.FIPS)
    //
    //
    //         }, 2000 * (index + 1));
    //      });
    console.log('mounted')
    // this.props.getCountyCovid()
}










   // async componentDidMount (){
   //    this.props.getCountyCovid()
   //        // var today = new Date();
   //        // var date = (today.getMonth()+1)+'-'+today.getDate()+ '-' + today.getFullYear()
   //        // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   //        // var dateTime = date+' '+time;
   //        const response = await axios.get('https://covid19-us-api.herokuapp.com/county')
   //        // this.props.timeUpdated(res.data.message[0].last_update)
   //        // console.log(response.data.message)
   //
   //        response.data.message.forEach((county)=>{
   //          console.log(county)
   //           // const res = await axios.get(`https://geo.fcc.gov/api/census/block/find?latitude=${county.latitude}&longitude=${county.longitude}&format=json`)
   //             // console.log(res)
   //        })




  // }


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
  // console.log(state)
  return { selection: state.option.selection,
            option: state.income_level.income_level,
            zoom: state.zoomLevel.zoom,
            timeUpdated : state.timeUpdated,
            countyCovid: state.county_covid_data
            }
}

export default connect(mapStateToProps , {updateLocation , zoomLevel, timeUpdated , getCountyCovid })(MapContainer)
