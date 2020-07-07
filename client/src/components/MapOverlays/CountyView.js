import React, { useState, useEffect } from "react";
import {  Geographies, Geography } from "react-simple-maps";

import {updateLocation, zoomLevel , selectedCounty} from '../../actions'

import {connect} from 'react-redux'

import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";


// const stateBoundaries = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
const colorScale = scaleQuantize()
  .domain([0, 1])
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618"
  ]);



  const colorScale1 = scaleQuantize()
    .domain([0, 1])
    .range([
      "#F6F9FF",
      "#EAF1FF",
      "#E3ECFF",
      "#D8E3FD",
      "#C6D5FC",
      "#B7CBFE",
      "#A9C1FF",
      "#9AB6FE",
      "#8CACFE",
      "#81A4FE",
      "#7098FF",
      "#638EFF",
      "#487BFF",
      "#336BFF",
      "#1D5BFF",
      "#0046FF"
    ]);






const CountyView =(props)=>{

  const [income, setIncome] = useState([]);
  const [pop, setPop] = useState([]);

  const onClick = (e) =>{
    console.log(e)
    props.selectedCounty(e.properties.name)
  }



const onHover =(e)=>{
  props.updateLocation(`${e.properties.name} County`  )

}


useEffect(() => {
  // https://www.bls.gov/lau/
  csv("/income_normalized.csv").then(counties => {
    setIncome(counties);
  });
}, []);




useEffect(() => {
  // https://www.bls.gov/lau/
  csv("/population_normalized.csv").then(counties => {
    setPop(counties);
  });
} ,[]);








  return (

          <Geographies geography={geoUrl}  >
            {({ geographies }) =>
              geographies.map(geo => {
                  // const cur = income.find(s => s.id === geo.id);
                  // const filter = colorScale(cur ? cur.income : "blue")

            const handleIncomeData=()=>{

              const cur = income.find(s => s.id === geo.id);
              // console.log(cur)
              const filter = colorScale(cur ? cur.income : "blue")


                    if(props.selection === 'income' && props.option === null) return filter
                      if( props.option === 'high'){  if(cur && cur.income >= 0.7) return filter }
                        if(props.option === 'medium'){ if(cur && cur.income < 0.7 && cur.income >= 0.4)  return filter }
                          if(props.option === 'low'){ if(cur && cur.income < 0.4) return filter }
                  else {
                    return null
                  }
                } //end of handleFilterData




                  const handlePopulationData=()=>{
                      const cur = pop.find(s => s.id === geo.id);
                      const filter = colorScale1(cur ? cur.population : "blue")
                        if(props.selection === 'density' && props.option === null) return filter

                      }





const renderFilterData=()=>{
  if(props.selection === 'income'){
    return handleIncomeData()
  }

  if(props.selection === 'density'){
    return handlePopulationData()
  }

}


                return (
                  <Geography
                    stroke="black"
                    strokeWidth="0.3"
                    strokeOpacity="0.2"


                    key={geo.rsmKey}
                    onClick = {((e)=> console.log(geo))}
                    geography={geo}




                    fill =  {(function() {
                       switch (props.selection) {
                         case 'income':
                           return renderFilterData()
                         case 'density':
                           return renderFilterData();
                         case 'error':
                           return <div> hi </div>;
                         default:
                           return '#f2f3f4';
                       }
                     })()}





                    onClick = {()=> onClick(geo) }
                    onMouseOver = { ()=> onHover(geo)}
                    // onMouseOver = { ()=> props.updateLocation(geo.id)}

                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" }
                    }}
                  />
                );
              })
            }
          </Geographies>
  )
}



const mapStateToProps =(state)=>{
  // console.log(state)
  return { selection: state.option.selection,
            option: state.income_level.income_level}
}

export default connect( mapStateToProps,  {updateLocation , zoomLevel , selectedCounty})(CountyView)


//
// import React, { useState, useEffect } from "react";
// import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
//
// import {updateLocation, zoomLevel} from '../../actions'
//
// import {connect} from 'react-redux'
//
// import { scaleQuantize } from "d3-scale";
// import { csv } from "d3-fetch";
// const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
//
//
// const colorScale = scaleQuantize()
//   .domain([0, 1])
//   .range([
//     "#ffedea",
//     "#ffcec5",
//     "#ffad9f",
//     "#ff8a75",
//     "#ff5533",
//     "#e2492d",
//     "#be3d26",
//     "#9a311f",
//     "#782618"
//   ]);
//
//
//
//   const colorScale1 = scaleQuantize()
//     .domain([0, 1])
//     .range([
//       "#F6F9FF",
//       "#EAF1FF",
//       "#E3ECFF",
//       "#D8E3FD",
//       "#C6D5FC",
//       "#B7CBFE",
//       "#A9C1FF",
//       "#9AB6FE",
//       "#8CACFE",
//       "#81A4FE",
//       "#7098FF",
//       "#638EFF",
//       "#487BFF",
//       "#336BFF",
//       "#1D5BFF",
//       "#0046FF"
//     ]);
//
//
//
//
//
//
// const CountyView =(props)=>{
//
//   const [income, setIncome] = useState([]);
//   const [pop, setPop] = useState([]);
//
//   const onClick = (e) =>{
//     console.log(e)
//   }
//
// const onHover =(e)=>{
//   props.updateLocation(`${e.properties.name} County`  )
//
// }
//
//
// useEffect(() => {
//   // https://www.bls.gov/lau/
//   csv("/income_normalized.csv").then(counties => {
//     setIncome(counties);
//   });
// }, []);
//
//
//
//
// useEffect(() => {
//   // https://www.bls.gov/lau/
//   csv("/population_normalized.csv").then(counties => {
//     setPop(counties);
//   });
// } ,[]);
//
//
//
//
//   return (
//     <ComposableMap projection="geoAlbersUsa" style={{height: '550px' ,
//                                                     width: '100%' ,
//                                                     backgroundColor : "#C0E5F6"
//                                                     }}   >
//
//     <ZoomableGroup zoom={1} onMove={((position)=> props.zoomLevel(position.k) )}
//
//       // onClick = {((e)=> console.log(e.view))}
//     // onMoveStart(position)
//     >
//
//           <Geographies geography={geoUrl}  >
//             {({ geographies }) =>
//               geographies.map(geo => {
//                   // const cur = income.find(s => s.id === geo.id);
//                   // const filter = colorScale(cur ? cur.income : "blue")
//
//             const handleIncomeData=()=>{
//               const cur = income.find(s => s.id === geo.id);
//               // console.log(cur)
//               const filter = colorScale(cur ? cur.income : "blue")
//
//
//                     if(props.selection === 'income' && props.option === null) return filter
//                       if( props.option === 'high'){  if(cur && cur.income >= 0.7) return filter }
//                         if(props.option === 'medium'){ if(cur && cur.income < 0.7 && cur.income >= 0.4)  return filter }
//                           if(props.option === 'low'){ if(cur && cur.income < 0.4) return filter }
//                   else {
//                     return null
//                   }
//                 } //end of handleFilterData
//
//
//
//
//                   const handlePopulationData=()=>{
//                       const cur = pop.find(s => s.id === geo.id);
//                       const filter = colorScale1(cur ? cur.population : "blue")
//                         if(props.selection === 'density' && props.option === null) return filter
//
//                       }
//
//
//
//
//
// const renderFilterData=()=>{
//   if(props.selection === 'income'){
//     return handleIncomeData()
//   }
//
//   if(props.selection === 'density'){
//     return handlePopulationData()
//   }
//
// }
//
//
//                 return (
//                   <Geography
//                     stroke="black"
//                     strokeWidth="0.3"
//                     strokeOpacity="0.2"
//
//
//                     key={geo.rsmKey}
//                     // onClick = {((e)=> console.log(geo))}
//                     geography={geo}
//
//
//
//                     fill =  {(function() {
//                        switch (props.selection) {
//                          case 'income':
//                            return renderFilterData()
//                          case 'density':
//                            return renderFilterData();
//                          case 'error':
//                            return <div> hi </div>;
//                          default:
//                            return 'white';
//                        }
//                      })()}
//
//
//
//
//
//                     onClick = {()=> onClick(geo) }
//                     onMouseOver = { ()=> onHover(geo)}
//                     // onMouseOver = { ()=> props.updateLocation(geo.id)}
//
//                     style={{
//                       default: { outline: "none" },
//                       hover: { outline: "none" },
//                       pressed: { outline: "none" }
//                     }}
//                   />
//
//                 );
//               })
//             }
//           </Geographies>
//
//       </ZoomableGroup>
//     </ComposableMap>
//   )
// }
//
//
//
// const mapStateToProps =(state)=>{
//   // console.log(state)
//   return { selection: state.option.selection,
//             option: state.income_level.income_level}
// }
//
// export default connect( mapStateToProps,  {updateLocation , zoomLevel})(CountyView)
