import React from "react";
import { geoCentroid } from "d3-geo";
import {
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";

import allStates from "./data/allStates.json";

import {updateLocation, zoomLevel} from '../../actions'
import {connect} from 'react-redux'

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

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

const StateView = (props) => {

  return (
                      <Geographies geography={geoUrl}>
                        {({ geographies }) => (
                          <>
                            {geographies.map(geo => (
                              <Geography
                                key={geo.rsmKey}
                                stroke="black"
                                strokeWidth="0.1"
                                geography={geo}
                                fill="none"
                                // onClick = {()=> console.log(geographies) }
                              />
                            ))}
                            {geographies.map(geo => {
                              const centroid = geoCentroid(geo);
                              const cur = allStates.find(s => s.val === geo.id);
                              return (
                                <g key={geo.rsmKey + "-name"}>
                                  {cur &&
                                    centroid[0] > -160 &&
                                    centroid[0] < -67 &&
                                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                                      <Marker coordinates={centroid}>
                                        <text y="2" fontSize={14} textAnchor="middle">
                                          {cur.id}
                                        </text>
                                      </Marker>
                                    ) : (
                                      <Annotation
                                        subject={centroid}
                                        dx={offsets[cur.id][0]}
                                        dy={offsets[cur.id][1]}
                                      >
                                        <text x={4} fontSize={14} alignmentBaseline="middle">
                                          {cur.id}
                                        </text>
                                      </Annotation>
                                    ))}
                                </g>
                              );
                            })}
                          </>
                        )}
                      </Geographies>




  );
};



const mapStateToProps =(state)=>{
  // console.log(state)
  return { selection: state.option.selection,
            option: state.income_level.income_level}
}

export default connect( mapStateToProps,  {updateLocation , zoomLevel})(StateView)
