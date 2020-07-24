import React, { useState, useEffect } from "react";
import {  Geographies, Geography , Marker } from "react-simple-maps";
import getStateInfo from './utils/stateFipsConverter'
import {updateLocation , selectedCounty} from '../../actions'
import {connect} from 'react-redux'

import { geoAlbersUsa, geoPath   } from "d3-geo"

import Markers from './Markers'

// import { feature } from "topojson-client"

import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
// const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3.0.0/counties-albers-10m.json'

const fillColor = '#f2f3f4'
// const fillColor = 'transparent'

const projection = geoAlbersUsa()

// const stateBoundaries = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// const projection = geoAlbersUsa()
// console.log(projection)
  // .scale(160)
  // .translate([ 800 / 2, 450 / 2 ])



const incomeScale = scaleQuantize()
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



  const popColorScale = scaleQuantize()
    .domain([0, 3500000])
     .range([
        '#deebf7',
        '#c4dfed',
        '#c1daf0',
        '#b1d4e7',
        '#9ecae1',
        '#87bede',
        '#73b3d9',
        '#73b3d9',
        '#6baed6',
        '#62a4d0',
        '#4e99ca',
        '#4292c6',
        '#2885d7',
        '#2478c2',
        '#2171b5',
        '#0a66c2',
        '#08519c',
        '#0c4aa6',
        '#093577',
        '#08306b',
        '#052047'
    ]);





const CountyView =(props)=>{

  const [income, setIncome] = useState([]);
  const [pop, setPop] = useState([]);
    const [geographies, setGeographies] = useState([])


//beginning of onClick call

    const onClick = (e) =>{
        let state = getStateInfo(e.id)
        let county = e.properties.name
        let id = e.id
            props.selectedCounty( {county , state, id})
            // console.log(e)
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
  csv("/FULLY_VERIFIED_POP.csv").then(counties => {
    setPop(counties);
  })
} ,[]);




// const renderMarkers=()=>{
  // props.covidData.map((county)=>{
  // console.log(  county.coords.longitude  ,  county.coords.latitude  )
  // })
  //
  // return props.covidData.map((county)=>(
  //
  //   <Marker
  //       key={county._id}
  //       // coordinates={  [county.coords.longitude, county.coords.latitude][0] , [county.coords.longitude, county.coords.latitude][1]  } >
  //       coordinates={  county.coords.longitude  ,  county.coords.latitude  } >
  //
  //       <circle r={5} fill="#F00" stroke="#fff" strokeWidth={1} />
  //   </Marker>
  // ))
// }

const cities = [
  { name: "Cali", coordinates: [-119.4179, 36.7783] },
  { name: "Nyc", coordinates: [-74.006, 40.7128] }
]



const renderMarkers=()=> {
  // return props.covidData.map((location, i) => {
  return cities.map((location, i) => {
    return (
      <Marker
          key={ i }
          // onClick = { this.onMarkerClick }
          title = { location.county }
          // position = {  [location.coordinates.longitude , location.coordinates.latitude] }
          // position = { ( (location.coords.longitude) , (location.coords.latitude)  ) }
            // position = {  position(-74.006, 40.7128) }
          // coordinates = {[-74.006, 40.7128]}
          coordinates = {[ location.coordinates[0] , location.coordinates[1] ]}
          // desc = { location.desc }
          // animation = { this.state.animation[i] }
          name = { location.county }
          >
           <circle r={4} fill="#F53"  />
      </Marker>
    )


  })
// return(
//
//   <>
//    <Marker
//      coordinates={[-74.006, 40.7128]}>
//        <circle r={4} fill="#F53" />
//      </Marker>
//
//     <Marker
//          coordinates={[-119.4179, 36.7783]}>
//            <circle r={4} fill="#F53" />
//      </Marker>
//
// </>
//    )


}




  return (
    <>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                // console.log(geo)
                  // const cur = income.find(s => s.id === geo.id);
                  // const filter = incomeScale(cur ? cur.income : "blue")
            const handleIncomeData=()=>{
              let fullArr = []
              const cur = income.find(s => s.id === geo.id);
              const filter = incomeScale(cur ? cur.income : "blue")

                    if(props.selection === 'income' && props.income_level === null) return filter

                      if( props.income_level === 'high'){
                            cur && cur.income >= 0.7 ? fullArr.push(filter) :   fullArr.push(fillColor)
                            //this checks if the income is above 0.7, adds to return array, if not adds the default color
                            return fullArr
                          }

                        if(props.income_level === 'medium'){
                           (cur && cur.income < 0.7 && cur.income >= 0.4)  ? fullArr.push(filter) :   fullArr.push(fillColor)
                           return fullArr
                        }

                        if(props.income_level === 'low'){
                           cur && cur.income < 0.4 ? fullArr.push(filter) :   fullArr.push(fillColor)
                           return fullArr
                            }

                  else {
                    return null
                  }
                } //end of handleFilterData




                  const handlePopulationData=()=>{
                      let fullArr = []
                      const cur = pop.find(s => s.id === geo.id);
                      const filter = popColorScale(cur ? cur.population : "blue")

                        if(props.selection === 'population' && props.population_rate === null) return filter

                         // if( props.population_rate === '3m'){
                         //       cur && cur.population >= 3000000 ? fullArr.push(filter) :   fullArr.push(fillColor)
                         //       //this checks if the population is above 3500000, adds to return array, if not adds the default color
                         //       return fullArr
                         //     }
                         //
                         // if(props.population_rate === '2m-3'){
                         // (cur && cur.population < 3000000 && cur.population >= 2000000)  ? fullArr.push(filter) :   fullArr.push(fillColor)
                         //    return fullArr
                         //     }
                         //
                         //
                         // if(props.population_rate === '1.5m-2'){
                         // (cur && cur.population < 2000000 && cur.population >= 1500000)  ? fullArr.push(filter) :   fullArr.push(fillColor)
                         //    return fullArr
                         //     }

                         if(props.population_rate === '1m-15'){
                          cur && cur.population >= 1500000 ? fullArr.push(filter) :   fullArr.push(fillColor)
                            return fullArr
                             }


                          if(props.population_rate === '500-1m'){
                          (cur && cur.population < 1000000 && cur.population >= 500000)  ? fullArr.push(filter) :   fullArr.push(fillColor)
                             return fullArr
                              }



                          if(props.population_rate === '300-500'){
                          (cur && cur.population < 500000 && cur.population >= 300000)  ? fullArr.push(filter) :   fullArr.push(fillColor)
                             return fullArr
                              }


                            if(props.population_rate === '200-300'){
                            (cur && cur.population < 300000 && cur.population >= 200000)  ? fullArr.push(filter) :   fullArr.push(fillColor)
                               return fullArr
                                }


                            if(props.population_rate === '100-200'){
                            (cur && cur.population < 200000 && cur.population >= 100000)  ? fullArr.push(filter) :   fullArr.push(fillColor)
                               return fullArr
                                }


                            if(props.population_rate === '100'){
                              cur && cur.population < 100000 ? fullArr.push(filter) :   fullArr.push(fillColor)
                               return fullArr
                                }


                      }






const renderFilterData=()=>{
  if(props.selection === 'income'){
    return handleIncomeData()
  }

  if(props.selection === 'population'){
    return handlePopulationData()
  }

}



        return (
          <Geography
                    stroke="black"
                    strokeWidth="0.3"
                    strokeOpacity="0.2"
                    strokeLinejoin= "round"
                    key={geo.rsmKey}
                    geography={geo}

                    fill =  {(function() {
                       switch (props.selection) {
                         case 'income':
                           return renderFilterData()
                         case 'population':
                           return renderFilterData();
                         case 'error':
                           return <div> hi </div>;
                         default:
                           return fillColor;
                       }
                     })()}

                    onClick = { ()=> onClick(geo) }
                    onMouseOver = { ()=> onHover(geo)}
// <path tabindex="0" class="rsm-geography " d="" stroke="black" stroke-width="0.3" stroke-opacity="0.2" fill="#f2f3f4" style="outline: none;"></path>
// <path tabindex="0" class="rsm-geography " d="" stroke="black" stroke-width="0.3" stroke-opacity="0.2" style="outline: none;"></path>
//document.getElementsByTagName('path').style.fill


                    style={{
                      default: { outline: "none" },
                      hover: { fill: "rgba(166, 166, 166, 0.75)", outline: "none" },
                      pressed: { fill: "#AAA", outline: "none" },
                    }}
                  />

                );
              })

            }
      </Geographies>

      
{renderMarkers()}




</>
    // <svg height='550px' width='100%'> <Markers/></svg>
// {renderMarkers()}


// <Marker
//    coordinates={[-74.006, 40.7128]}>
//      <circle r={4} fill="#F53" />
//    </Marker>




  )

}




const mapStateToProps =(state)=>{
  // console.log(state)
  return { selection: state.option.selection,
            income_level: state.income_level.income_level,
            population_rate : state.population_rate.population_rate,
            covidData : state.covidData
          }
}

export default connect( mapStateToProps,  {updateLocation, selectedCounty})(CountyView)
