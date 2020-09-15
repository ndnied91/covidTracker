import React, { useState, useEffect } from "react";
import { geoCentroid } from "d3-geo";
import { Geographies, Geography, Marker, Annotation } from "react-simple-maps";
import {updateLocation , selectedState } from '../../actions'
import {connect} from 'react-redux'
import { scaleQuantize } from "d3-scale";
import allStates from "./data/allStates.json";
import { csv } from "d3-fetch";

import StateMarkers from './StateMarkers'
//covid dots


const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const fillColor = '#F5F5F5'

var fullArr = []
var filterArr = []


const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};


const incomeScale = scaleQuantize()
 .domain([0, 150000])
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
 .domain([0, 30000000])
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


//id Pennsylvania 42
//id Florida 12






const StateView = (props) => {

  const [income, setIncome] = useState([]);
  const [pop, setPop] = useState([]);

    // console.log(Number(props.custom_values.term))
    // console.log(Number(props.custom_values.second))

  const onClick = (e) =>{
          // console.log(e)
          props.selectedState(e.properties.name)
  }



  const onHover =(e )=>{
    props.updateLocation(`${e.properties.name} `  )

  }



  useEffect(() => {
    // https://www.bls.gov/lau/
    // csv("/income_normalized.csv").then(counties => {
    csv("/STATE_INCOME_2018.csv").then(state => {
      setIncome(state);
    });
  }, []);


  useEffect(() => {
    // https://www.bls.gov/lau/
    // csv("/income_normalized.csv").then(counties => {
    csv("/STATE_POPULATION_2018.csv").then(state => {
      // console.log(state)
      setPop(state);
    });
  }, []);



  return (
            <Geographies geography={geoUrl} >
              {({ geographies }) =>
                <>
                {geographies.map(geo => {

                    const handlePopulationData = ()=>{
                      let fullArr = []


                      const cur = pop.find(s => s.id === geo.id);
                      const filter = popColorScale(cur ? cur.population : "blue")

                      if( (props.selection === 'population' && props.population_rate === null) || ( props.selection === 'population' && props.population_rate.length === 0) ){return filter}

                      if(props.population_rate.includes('10m+')){
                           if(cur && cur.population >=10000000){
                             fullArr.push(filter)
                             return fullArr
                           }
                      }


                      if(props.population_rate.includes('7-10m')){
                           if(cur && cur.population < 10000000 && cur.population >= 7000000){
                             fullArr.push(filter)
                             return fullArr
                           }
                      }

                      if(props.population_rate.includes('5-7m')){
                           if(cur && cur.population < 7000000 && cur.population >= 5000000){
                             fullArr.push(filter)
                             return fullArr
                           }
                      }
                      if(props.population_rate.includes('3-5m')){
                           if(cur && cur.population < 5000000 && cur.population >= 3000000){
                             fullArr.push(filter)
                             return fullArr
                           }
                      }

                      if(props.population_rate.includes('1-3m')){
                           if(cur && cur.population < 3000000 && cur.population >= 1000000){
                             fullArr.push(filter)
                             return fullArr
                           }
                      }

                      if(props.population_rate.includes('less1m')){
                           if(cur && cur.population < 1000000){
                             fullArr.push(filter)
                             return fullArr
                           }
                      }

                          fullArr.push(fillColor)
                          return fullArr

                    } //end of handlePopulationData


                      const handleIncomeData =()=>{

                          let filterArr = []
                          let fullArr = []
                          const cur = income.find(s => s.id === geo.id);
                          const filter = incomeScale(cur ? cur.income : "blue")
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


                               fullArr.push(fillColor)
                               return fullArr
                             }
                              // fullArr.push(...fillColor)
                              // console.log(filterArr)
                               // return fullArr



                      } //end of handleIncomeData




                             return (
                           <React.Fragment key={geo.id} >
                                <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                stroke="black"
                                strokeWidth="0.3"
                                strokeOpacity="0.2"


                                fill =  {(function() {
                                   switch (props.selection) {
                                     case 'income':
                                       return handleIncomeData()
                                     case 'population':
                                       return handlePopulationData();
                                     case 'error':
                                       return <div> hi </div>;
                                     default:
                                       return fillColor;
                                   }
                                 })()}



                                style={{
                                  default: { outline: "#fff" },
                                    hover: { fill: "rgba(166, 166, 166, 0.75)", outline: "none" },
                                }}

                                onClick = { ()=> onClick(geo) }
                                onMouseOver = { ()=> onHover(geo)}
                       />



                         {props.covid_densityDots === 'on' && props.viewMode ==='state' ? <StateMarkers/> : null}
                         </React.Fragment>
                     );

                })}  {/* end of geo.map*/}






                            {geographies.map(geo => {
                              const centroid = geoCentroid(geo);
                              const cur = allStates.find(s => s.val === geo.id);
                              return (
                                <g key={geo.rsmKey + "-name"}>
                                  {cur &&
                                    centroid[0] > -160 &&
                                    centroid[0] < -67 &&
                                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                                      <Marker coordinates={centroid} >
                                          <text y="2" fontSize={14} textAnchor="middle"  pointerEvents= 'none' >
                                          {cur.id}
                                        </text>
                                      </Marker>
                                    ) : (
                                      <Annotation
                                        subject={centroid}
                                        dx={offsets[cur.id][0]}
                                        dy={offsets[cur.id][1]}
                                      >
                                        <text x={4} fontSize={14} alignmentBaseline="middle" >
                                          {cur.id}
                                        </text>
                                      </Annotation>

                                    ))}
                                </g>
                              );
                            })} //end of centeriod mapping
                          </>
              }
            </Geographies>
  );
};


const mapStateToProps =(state)=>{
  // console.log(state)
  return { selection: state.option.selection,
            income_level: state.income_level.income_level,
            population_rate : state.population_rate.population_rate,
            covid_densityDots : state.covid_densityDots.covid_dots,
            viewMode : state.viewMode.selection,
            custom_values : state.customValues
          }
}

export default connect( mapStateToProps,  {updateLocation, selectedState })(StateView)
