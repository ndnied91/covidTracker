import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
// import Controllers from './Controllers'
import {connect} from 'react-redux'

import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";



const colorScale = scaleQuantize()
  // .domain([1, 10])
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



const MapContainer = (props) => {
  const [data, setData] = useState([]);

  console.log(props)

  const onClick = (e) =>{
    console.log(e)
  }


  useEffect(() => {
    // https://www.bls.gov/lau/
    csv("/income_normalized.csv").then(counties => {
      setData(counties);
    });
  }, []);


  // useEffect(() => {
  //   // https://www.bls.gov/lau/
  //   csv("/population_normalized.csv").then(counties => {
  //     setData(counties);
  //   });
  // }, []);



  return (
    <div>
          <ComposableMap projection="geoAlbersUsa" style={{height: '550px' , width: '100%' , backgroundColor : "#C0E5F6"}}>
          <ZoomableGroup
          zoom={1}
          // onMoveStart(position)
          >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map(geo => {
                        // const cur = data.find(s => s.id === geo.id);
                        // const filter = colorScale(cur ? cur.income : "blue")


                        const handleFilterData=()=>{
                          const cur = data.find(s => s.id === geo.id);
                          const filter = colorScale(cur ? cur.income : "blue")

                          if(props.selection === 'income' && props.option === null){
                              return filter
                            }
                              if( props.selection === 'income' && props.option === 'high'){
                                  if(cur && cur.income >= 0.7)
                                      return filter
                                }
                                if( props.selection === 'income' && props.option === 'medium'){
                                    if(cur && cur.income < 0.7 && cur.income >= 0.4)
                                        return filter
                                  }

                                  if( props.selection === 'income' && props.option === 'low'){
                                      if(cur && cur.income < 0.4)
                                          return filter
                                    }

                          else {
                            return null
                          }



                        }

                      return (
                        <Geography

                          key={geo.rsmKey}
                          geography={geo}
                          fill={ handleFilterData() }
                          onClick = {()=> onClick(geo)  }
                          style={{
                            default: { outline: "none" },
                            hover: { outline: "none" },
                            pressed: { outline: "none" },
                          }}

                        />
                      );
                    })
                  }
                </Geographies>
            </ZoomableGroup>
          </ComposableMap>

    </div>
  );
};

const mapStateToProps =(state)=>{
  // console.log(state)
  return { selection: state.option.selection,
            option: state.income_level.income_level}
}

export default connect(mapStateToProps )(MapContainer)
