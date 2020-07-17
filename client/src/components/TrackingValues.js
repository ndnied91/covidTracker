import React from 'react'

import Filter from './TrackingValuesFolder/Filter'
import Stats from './TrackingValuesFolder/Stats'
import CurveGraph from './TrackingValuesFolder/CurveGraph'

class TrackingValues extends React.Component{


  render(){
    return(
      <div className="ui raised segment" >
          <Filter />
          <Stats/>
          <CurveGraph/>
      </div>
    )
  }
}



export default TrackingValues
