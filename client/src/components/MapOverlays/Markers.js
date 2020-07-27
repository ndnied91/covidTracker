import React from 'react'

import {  Marker } from "react-simple-maps";
import {connect} from 'react-redux'

const Markers = (props) => {

console.log(props)


const cities = []
const states = ['Washington' , 'Nevada' , 'Idaho' , 'Montana' , 'Wyoming' ,  'Colorado', 'Utah', 'New Mexico' , 'Arizona' , 'Texas' , 'Oklahoma' , 'North Dakota' , 'Minnesota' , 'Wisconsin' , 'Michigan' , 'Missouri',
 'Arkansas', 'Louisiana' , 'Mississippi' , 'Illinois' , 'Tennessee', 'Alabama', 'Georgia' , 'Florida', 'South Carolina' , 'North Carolina' , 'Indiana' , 'Kentucky',
'Virginia' , 'West Virginia', 'Maryland', 'Delaware', 'Connecticut' , 'New Jersey' , 'New York', 'Rhode Island' , 'Massachusetts', 'New Hampshire' , 'Vermont', 'Maine', 'Pennsylvania' , 'Ohio' , 'Iowa' , 'Kansas' , 'Oklahama',
 'Hawaii' , 'Oregon' , 'Nebraska']
// const states = ['Florida']

console.log(states.length)

props.covidData.forEach((item, i) => {
  if(item.coords.latitude !== null){
        if(states.includes(item.state) ){
          // console.log(item.cases)
          cities.push(item)
        }
  }


});


const renderMarkers=()=> {

  return cities.map((location, i) => {
    return (
      <Marker
          key={ i }
          coordinates= {[ location.coords.longitude , location.coords.latitude]}
          >
           <circle r={(location.cases/5000)} fill="rgba(184, 0, 0, 0.47)" pointerEvents= 'none' />
      </Marker>
    )
  })

}


    return renderMarkers()

}


const mapStateToProps = (state)=>{
  return { covidData : state.covidData}
}

export default connect(mapStateToProps)(Markers)
