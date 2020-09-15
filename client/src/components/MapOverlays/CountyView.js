import React, { useState, useEffect } from "react";
import {  Geographies, Geography  } from "react-simple-maps";
import getStateInfo from './utils/stateFipsConverter'
import {updateLocation , selectedCounty} from '../../actions'
import {connect} from 'react-redux'

import Markers from './Markers'
//covid dots

import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
// const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3.0.0/counties-albers-10m.json'

const fillColor = '#F5F5F5'






   const incomeScale = scaleQuantize()
    .domain([0, 200000])
    .range([
      "#FDFEFD",
      "#DEE8E0",
      "#BFD3C5",
      "#9EBFAD",
      "#7DAB9A",
      "#5B998C",
      "#388783",
      "#2F686E",
      "#254A54",
      "#1A2F3C"
      ]);





  const popColorScale = scaleQuantize()
    .domain([0, 3000000])
     .range([
        '#deebf7',
        '#c4dfed',
        '#9ecae1',
        '#73b3d9',
        '#4e99ca',
        '#4292c6',
        '#2885d7',
        '#2478c2',
        '#08519c',
        '#0c4aa6',
        '#093577',
        '#08306b',
        '#052047'
    ]);



const CountyView =(props)=>{
  const [income, setIncome] = useState([]);
  const [pop, setPop] = useState([]);

//beginning of onClick call
    const onClick = (e) =>{
        let state = getStateInfo(e.id)
        let county = e.properties.name
        let id = e.id
            props.selectedCounty( {county , state, id})
            // console.log(e)

    }


//end of onCLick call

const onHover =(e )=>{
  props.updateLocation(`${e.properties.name} County`  )

}


useEffect(() => {
  // https://www.bls.gov/lau/
  // csv("/income_normalized.csv").then(counties => {
  csv("/INCOME_CLASSES.csv").then(counties => {
    setIncome(counties);
  });
}, []);




useEffect(() => {
  // https://www.bls.gov/lau/
  csv("/FULLY_VERIFIED_POP.csv").then(counties => {
    // console.log(counties)
    setPop(counties);
  })
} ,[]);



const renderCovidMarkers = () =>{
  if(props.covid_densityDots === 'on')
    return  ( <Markers/> )

  return null
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
              // console.log(geo)
              // console.log(cur)

              const filter = incomeScale(cur ? cur.income : "blue")
              // console.log(filter)

              if( (props.selection === 'income' && props.income_level === null) || ( props.selection === 'income' && props.income_level.length === 0) ){ return filter }

              if(props.income_level){
                // console.log(props.income_level)

                if(props.income_level.includes('40')){
                     if(cur && cur.income <40000){
                       fullArr.push(filter)
                       return fullArr
                     }
                }

                    if(props.income_level.includes('40-50')){
                         if(cur && cur.income <50000 && cur.income >=40000){
                           fullArr.push(filter)
                           return fullArr
                         }
                   }

                   if(props.income_level.includes('50-60')){
                        if(cur && cur.income <60000 && cur.income >=50000){
                          fullArr.push(filter)
                          return fullArr
                        }
                  }

                  if(props.income_level.includes('60-80')){
                       if(cur && cur.income <80000 && cur.income >=60000){
                         fullArr.push(filter)
                         return fullArr
                       }
                 }

                 if(props.income_level.includes('80-100')){
                      if(cur && cur.income <100000 && cur.income >=80000){
                        fullArr.push(filter)
                        return fullArr
                      }
                 }

                 if(props.income_level.includes('100')){
                      if(cur && cur.income >=100000){
                        fullArr.push(filter)
                        return fullArr
                      }
                 }



             } //end of props.income_level
                            fullArr.push(fillColor)
                            return fullArr

                } //end of handleFilterData




                  const handlePopulationData=()=>{
                      let fullArr = []
                      const cur = pop.find(s => s.id === geo.id);
                      const filter = popColorScale(cur ? cur.population : "blue")


                         if( (props.selection === 'population' && props.population_rate === null) || ( props.selection === 'population' && props.population_rate.length === 0) ){return filter}

                         if(props.population_rate.includes('50')){
                              if(cur && cur.population <50000){
                                fullArr.push(filter)
                                return fullArr
                              }
                         }


                         if(props.population_rate.includes('50-100')){
                              if(cur && cur.population < 100000 && cur.population >= 50000){
                                fullArr.push(filter)
                                return fullArr
                              }
                        }


                        if(props.population_rate.includes('100-200')){
                             if(cur && cur.population < 200000 && cur.population >= 100000){
                               fullArr.push(filter)
                               return fullArr
                             }
                       }

                       if(props.population_rate.includes('200-500')){
                            if(cur && cur.population < 500000 && cur.population >= 200000){
                              fullArr.push(filter)
                              return fullArr
                            }
                      }

                      if(props.population_rate.includes('500-1m')){
                           if(cur && cur.population < 1000000 && cur.population >= 500000){
                             fullArr.push(filter)
                             return fullArr
                           }
                     }

                     if(props.population_rate.includes('1m-15')){
                          if(cur && cur.population >= 1000000){
                            fullArr.push(filter)
                            return fullArr
                          }
                    }







                          fullArr.push(fillColor)
                          return fullArr

                      }






const renderFilterData=()=>{
  if(props.selection === 'income'){
    return handleIncomeData()
  }

  if(props.selection === 'population'){
    return handlePopulationData()
  }

}

  const cellStyle =  { fill: "red", stroke: "#FFF", strokeWidth: 0.5, outline: 'none' };


        return (
          <Geography
                    stroke="black"
                    strokeWidth="0.3"
                    strokeOpacity="0.2"
                    strokeLinejoin= "round"
                    key={geo.rsmKey}
                    geography={geo}

                    style={{
                      default: { outline : "none" },
                      hover: { fill: "rgba(166, 166, 166, 0.75)", outline: "none" },
                      pressed : cellStyle
                    }}


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
                    // onClick = { (e)=> handleColor(e) }
                    onMouseOver = { ()=> onHover(geo)}

                  />

                );
              })

            }
      </Geographies>

       {renderCovidMarkers()}

</>


  )

}




const mapStateToProps =(state)=>{
  // console.log(state)
  return { selection: state.option.selection,
            income_level: state.income_level.income_level,
            population_rate : state.population_rate.population_rate,
            covid_densityDots : state.covid_densityDots.covid_dots,
            custom_values : state.customValues
          }
}

export default connect( mapStateToProps,  {updateLocation, selectedCounty})(CountyView)
