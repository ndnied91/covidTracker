import React, { useState, useEffect } from "react";
import {  Geographies, Geography } from "react-simple-maps";

import {updateLocation, zoomLevel , selectedCounty} from '../../actions'

import {connect} from 'react-redux'

import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
// const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3.0.0/counties-albers-10m.json'


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




    const getStateInfo =(code)=>{

            if(code >= 1001 && code <=1133){
              return 'Alabama'
            }
            if(code >= 2013 && code <=2290){
              return 'Alaska'
            }


            if(code >= 4001 && code <=4027){
              return 'Arizona'
            }

            if(code >= 5001 && code <=5149){
              return 'Arkansas'
            }

            if(code >= 6001 && code <=6115){
              return 'California'
            }

            if(code >= 8001 && code <=8125){
              return 'Colorado'
            }

            if(code >= 9001 && code <=9015){
              return 'Connecticut'
            }

            if(code >= 10001 && code <=10005){
              return 'Delaware'
            }

            if(code >= 11000 && code <=11001){
              return 'District of Columbia'
            }

            if(code >= 12001 && code <=12133){
              return 'Florida'
            }

            if(code >= 13001 && code <=13321){
              return 'Georgia'
            }

            if(code >= 15001 && code <=15009){
              return 'Hawaii'
            }

            if(code >= 16001 && code <=16087){
              return 'Idaho'
            }

            if(code >= 17001 && code <=17203){
              return 'Illinios'
            }

            if(code >= 18001 && code <=18183){
              return 'Indiana'
            }

            if(code >= 19001 && code <=19197){
              return 'Iowa'
            }

            if(code >= 20001 && code <=20209){
              return 'Kansas'
            }

            if(code >= 21001 && code <=21239){
              return 'Kentucky'
            }

            if(code >= 22001 && code <=22127){
              return 'Louisiana'
            }

            if(code >= 23001 && code <=23031){
              return 'Maine'
            }

            if(code >= 24001 && code <=24510){
              return 'Maryland'
            }

            if(code >= 25001 && code <=25027){
              return 'Massachusetts'
            }

            if(code >= 26001 && code <=26165){
              return 'Michigan'
            }

            if(code >= 26165 && code <=27173){
              return 'Minnesota'
            }

            if(code >= 28001 && code <=28163){
              return 'Mississippi'
            }

            if(code >= 29001 && code <=29510){
              return 'Missouri'
            }

            if(code >= 30001 && code <=30111){
              return 'Montana'
            }

            if(code >= 31001 && code <=31185){
              return 'Nebraska'
            }

            if(code >= 32001 && code <=32510){
              return 'Nevada'
            }

            if(code >= 33001 && code <=33019){
              return 'New Hampshire'
            }

            if(code >= 34001 && code <=34041){
              return 'New Jersey'
            }

            if(code >= 35001 && code <=35061){
              return 'New Mexico'
            }

            if(code >= 36001 && code <=36123){
              return 'New York'
            }

            if(code >= 37001 && code <=37199){
              return 'North Carolina'
            }

            if(code >= 38001 && code <=38105){
              return 'North Dakota'
            }

            if(code >= 39001 && code <=39175){
              return 'Ohio'
            }

            if(code >= 40001 && code <=40153){
              return 'Oklahoma'
            }

            if(code >= 41001 && code <=41071){
              return 'Oregon'
            }

            if(code >= 42001 && code <=42133){
              return 'Pennsylvania'
            }

            if(code >= 44001 && code <=44009){
              return 'Rhode Island'
            }

            if(code >= 45001 && code <=45091){
              return 'South Carolina'
            }

            if(code >= 46003 && code <=46137){
              return 'South Dakota'
            }

            if(code >= 47001 && code <=47189){
              return 'Tennessee'
            }

            if(code >= 48001 && code <=48507){
              return 'Texas'
            }

            if(code >= 49001 && code <=49057){
              return 'Utah'
            }

            if(code >= 50001 && code <=50027){
              return 'Vermont'
            }

            if(code >= 51001 && code <=51840){
              return 'Virginia'
            }

            if(code >= 53001 && code <=53077){
              return 'Washington'
            }

            if(code >= 54001 && code <=54109){
              return 'West Virginia'
            }

            if(code >= 55001 && code <=55141){
              return 'Wisconsin'
            }

            if(code >= 56001 && code <=56045){
              return 'Wyoming'
            }

    }



const CountyView =(props)=>{

  const [income, setIncome] = useState([]);
  const [pop, setPop] = useState([]);

//beginning of onClick call

    const onClick = (e) =>{
        let state = getStateInfo(e.id)
        let county = e.properties.name
            props.selectedCounty( {county , state})
    }


//end of onCLick call

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

          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                // console.log(geo)
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
