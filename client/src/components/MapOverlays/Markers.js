import React from 'react'
import { Geographies, Geography , Marker } from "react-simple-maps";

import { geoEqualEarth, geoPath   } from "d3-geo"
import { feature } from "topojson-client"
import * as topojson from 'topojson'
import * as d3 from 'd3'

import {connect} from 'react-redux'
import { geoAlbersUsa } from "d3-composite-projections";
// import d3GeoProjection from 'd3-geo-projection'



// const projection = geoAlbersUsa()
//   .scale(160)

const projection = geoAlbersUsa()
console.log(projection)

const path = geoPath(projection)
console.log(path)

projection.scale(100).translate([ 800 / 2, 450 / 2 ])

// console.log(path)

const cities = [
  { name: "Washington", coordinates: [120.7401,47.751] },
  { name: "Baldwin", coordinates: [-87.72352514, 30.73589116] }
]


// cities.map((city)=>{
//   console.log(city.coordinates[0])
// })






const Markers = (props) => {
  // console.log(props.covidData)
// console.log(props.covidData)

// const projection=()=>{
//   return geoAlbersUsa()
//     .scale(0)

      // return geoEqualEarth()
      // .scale(100)

    // .translate([800 / 2, 450 / 2]);
// }

// var path = d3_geo.geoPath()
//     .projection(projection);


// var path = d3.geoPath().projection(projection);


// const markers1 = []
// const handleMarkerClick = i => {
//   console.log("Marker: ", cities[i])
// }

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

// if(props.covidData){
//   props.covidData.map((county)=>{
//     console.log([county.coords.longitude , county.coords.latitude])
//   })
// }


     // {props.covidData.map((county, i) => (
                    // coordinates={ county.coords.latitude, county.coords.longitude }
const renderMarkers1 =()=>{
  return(
  <g className="markers">

            {cities.map((city, i) => (
             <circle
               key={`marker-${i}`}
               cx={ projection(city.coordinates)[0]  }
               cy={ projection(city.coordinates)[1] }
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
