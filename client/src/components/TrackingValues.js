import React from 'react'

import Filter from './TrackingValuesFolder/Filter'
import Stats from './TrackingValuesFolder/Stats'
import CountyGraph from './TrackingValuesFolder/CountyGraph'

class TrackingValues extends React.Component{


  render(){
    return(
      <div className="ui raised segment menuColor"  >
          <Filter />
          <Stats/>
          <CountyGraph/>
      </div>
    )
  }
}



export default TrackingValues
