import React, { useState, useEffect } from "react";
import {  Geographies, Geography } from "react-simple-maps";
import getStateInfo from './utils/stateFipsConverter'
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
    .domain([0, 3500000])
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
  // csv("/population_normalized.csv").then(counties => {
  csv("/2019population.csv").then(counties => {
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
              const filter = colorScale(cur ? cur.income : "blue")


                    if(props.selection === 'income' && props.income_level === null) return filter
                      if( props.income_level === 'high'){  if(cur && cur.income >= 0.7) return filter }
                        if(props.income_level === 'medium'){ if(cur && cur.income < 0.7 && cur.income >= 0.4)  return filter }
                          if(props.income_level === 'low'){ if(cur && cur.income < 0.4) return filter }
                  else {
                    return null
                  }
                } //end of handleFilterData




                  const handlePopulationData=()=>{
                      const cur = pop.find(s => s.id === geo.id);
                      // console.log(cur)
                      const filter = colorScale1(cur ? cur.population : "blue")
                        if(props.selection === 'population' && props.population_rate === null) return filter

                        if( props.population_rate === '35plus'){  if(cur && cur.population >= 3500000) return filter }
                        if( props.population_rate === '2534'){  if(cur && cur.population < 3500000 && cur.population >= 2500000) return filter }
                        if( props.population_rate === '1524'){  if(cur && cur.population < 2500000 && cur.population >= 1500000) return filter }
                        if( props.population_rate === 'less15'){  if(cur && cur.population < 1500000) return filter }

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
            income_level: state.income_level.income_level,
            population_rate : state.population_rate.population_rate
          }
}

export default connect( mapStateToProps,  {updateLocation , zoomLevel , selectedCounty})(CountyView)
