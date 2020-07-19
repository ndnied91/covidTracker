import React, { useState } from "react";
import {  Geographies, Geography , Marker} from "react-simple-maps";

import {connect} from 'react-redux'

// import { scaleQuantize } from "d3-scale";
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
// const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3.0.0/counties-albers-10m.json'

// const fillColor = '#f2f3f4'
const fillColor = 'none'



const CovidView =(props)=>{

  const [data, setData] = useState([]);

  const markers = [
    { markerOffset: -15, name: "KANSAS", coordinates: [-98.4842, 39.0119,] },
    { markerOffset: -15, name: "NEBRASKA", coordinates: [-99.9018, 41.925] },
    { markerOffset: -15, name: "OHIO", coordinates: [-97.9018 , 41.925 ] },
    { markerOffset: -15, name: "TEXAS", coordinates: [-96.9018 , 41.925] }
  ];


  return (
    <>
    <Geographies geography={geoUrl}>
       {({ geographies }) =>
         geographies.map(geo => {
           const cur = data.find(s => s.id === geo.id);
           return (
             <Geography
               key={geo.rsmKey}
               geography={geo}
               fill={ fillColor  }
             />
           );
         })
       }
     </Geographies>

     {markers.map(({ name, coordinates }) => (

           <Marker
              key ={name}
              // key={geo.rsmKey}
               // geography={geo}
              coordinates={coordinates}
              fill="#777"
              >
            <text textAnchor="middle" fill="#F53">
              {name}
            </text>
            <circle r={5} fill="#F00" stroke="#fff" strokeWidth={2} />
          </Marker>
      ))}


     </>
)


}



const mapStateToProps =(state)=>{
  // console.log(state)
  return { selection: state.option.selection }
}

export default connect( mapStateToProps  )(CovidView)









//  <Marker coordinates={[-102, 38]} fill="#777">
//   <text textAnchor="middle" fill="#F53">
//     COVID
//   </text>
// </Marker>
