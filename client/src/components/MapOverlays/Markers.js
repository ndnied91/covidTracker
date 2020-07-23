import React from 'react'
import { Geographies, Geography , Marker } from "react-simple-maps";

import { geoEqualEarth, geoPath  , geoAlbersUsa } from "d3-geo"
import { feature } from "topojson-client"

import {connect} from 'react-redux'


// const projection = geoAlbersUsa()
//   .scale(160)



const Markers = (props) => {
  // console.log(props.covidData)
// console.log(props.covidData)

const projection=()=>{
  return geoAlbersUsa()
    .scale(1)
    // .translate([800 / 2, 450 / 2]);
}
// const markers1 = []


// const {userInfo, setUserInfo} = useContext(userInfoContext);

  // props.covidData.forEach( async (item, i) =>  {
  //   if(item.coords.latitude !== null){
  //       // markers1.push({index: i,  markerOffset: -15 ,  name : item.county ,  coordinates : [-100.53849378099994, 30.897439184000074] })
  //       let obj = {index: i,  markerOffset: -15 ,  name : item.county ,  coordinates : [item.coords.longitude , item.coords.latitude ] }
  //       markers1.push(obj)
  //   }

  // })

  // console.log(markers1)



//   const markers = [
//         { markerOffset: -15, name: "NEBRASKA", coordinates: [-99.9018, 41.925] },
//         { markerOffset: -15, name: "OHIO", coordinates: [-100.53849378099994, 30.897439184000074 ] },
//         { markerOffset: -15, name: "Weston", coordinates: [-104.5679427 , 43.84049175] },
//         { markerOffset: -15, name: "KANSAS", coordinates: [-98.4842, 39.0119] }
//
//   ];
//
//
// console.log(markers)
//
// const renderMarkers = () =>{
//
//       return markers.map(({ name, coordinates}) => (
//            <Marker
//               key ={name}
//               coordinates={coordinates}
//               fill="#777"
//               >
//             <circle r={1} fill="#F00" stroke="#fff" strokeWidth={1} />
//           </Marker>
//       ))
// }


// const renderMarkers1 =()=>{
//       return markers1.map(( marker ) => (
//            <Marker
//               key= {marker.index}
//               coordinates={ marker.coordinates }
//               fill="#777"
//              >
//             <circle r={1} fill="#F00" stroke="#fff" strokeWidth={1} />
//           </Marker>
//
//       ))
// }

if(props.covidData){
  props.covidData.map((county)=>{
    console.log(county.coords.longitude , county.coords.latitude)
  })
}



const renderMarkers1 =()=>{
  return(
  <g className="markers">
           {props.covidData.map((county, i) => (
             <circle
               key={`marker-${i}`}

               // cx={projection(county.coords.latitude)}
               cx={county.coords.latitude}
               // cy={projection(county.coords.longitude)}
               cy={county.coords.longitude}
               r={4}
               fill="#000"
               stroke="#FFFFFF"
               className="marker"
               // onClick={() => this.handleMarkerClick(i)}
             />
           ))}
         </g>
       )
}

              // https://www.dashingd3js.com/svg-text-element
              // https://observablehq.com/@d3/bubble-map?collection=@d3/d3-geo
              // https://codesandbox.io/s/ndnvr?file=/client/components/WorldMap.js:635-732







return(
  <>
      {props.covidData.length === 0 ? null : renderMarkers1() }
  </>
)

}


const mapStateToProps = (state)=>{
  return { covidData : state.covidData}
}

export default connect(mapStateToProps)(Markers)
