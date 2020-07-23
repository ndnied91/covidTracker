import React from 'react'
import {  Marker } from "react-simple-maps";

import {connect} from 'react-redux'


class MarkerClass extends React.Component{

  render(){
    // coordinates={ [county.coords.longitude , county.coords.latitude] }
    console.log(this.props.covidData)

    const renderContent = () =>{
        return this.props.covidData.map(( county ) => (
                  <Marker
                     key ={county._id}
                     coordinates={ [-98.4842, 39.0119] }
                     fill="#777" >
                   <circle r={10} fill="#F00" stroke="#fff" strokeWidth={3} />
                 </Marker>
         ))
    }



    const markers = [
      { markerOffset: -15, name: "KANSAS", coordinates: [-98.4842, 39.0119] },
      { markerOffset: -15, name: "NEBRASKA", coordinates: [-99.9018, 41.925] },
      { markerOffset: -15, name: "OHIO", coordinates: [-100.53849378099994, 30.897439184000074 ] },
      { markerOffset: -15, name: "Weston", coordinates: [-104.5679427 , 43.84049175] }
    ];

    const renderMarkers =()=>{
          return markers.map(({ name, coordinates}) => (
               <Marker
                  key ={name}
                  coordinates={coordinates}
                  fill="#777" >
                <circle r={3} fill="#F00" stroke="#fff" strokeWidth={3} />
              </Marker>
          ))
    }



    return(
       <>  {renderMarkers()}
            {this.props.covidData === null  ? ' ' : renderContent() }
       </>
    )
  }
}





const mapStateToProps = (state)=>{
  return { covidData : state.covidData}
}

export default connect(mapStateToProps)(MarkerClass)
