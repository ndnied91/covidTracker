import React from 'react'

import {  Marker } from "react-simple-maps";
import {connect} from 'react-redux'

const Markers = (props) => {


const cities = []
const states = ['Washington' , 'Nevada' , 'Idaho' , 'Montana' , 'Wyoming' ,  'Colorado', 'Utah', 'New Mexico' , 'Arizona' , 'Texas' , 'Oklahoma' , 'North Dakota' , 'Minnesota' , 'Wisconsin' , 'Michigan' , 'Missouri',
 'Arkansas', 'Louisiana' , 'Mississippi' , 'Illinois' , 'Tennessee', 'Alabama', 'Georgia' , 'Florida', 'South Carolina' , 'North Carolina' , 'Indiana' , 'Kentucky',
'Virginia' , 'West Virginia', 'Maryland', 'Delaware', 'Connecticut' , 'New Jersey' , 'New York', 'Rhode Island' , 'Massachusetts', 'New Hampshire' , 'Vermont', 'Maine', 'Pennsylvania' , 'Ohio' , 'Iowa' , 'Kansas' , 'Oklahama',
 'Hawaii' , 'Oregon' , 'Nebraska', 'California', 'South Dakota']


props.covidData.forEach((item, i) => {
      if(item.coords.latitude !== null){
                if(states.includes(item.state) ){
                  // console.log(item)
                  cities.push(item)
                }
      }
});

//NEXT STEP
//ADD NYC DATA HERE
cities.push(...props.nycCovidData)
//spread operator


const renderMarkers=()=> {
      return cities.map((location, i) => {
        if(location.county !== 'New York City'){ //this made sure that it split up the NYC into its 5 boros
              return (
                <Marker
                    key={ i }
                    coordinates= {[ location.coords.longitude , location.coords.latitude]}
                    >
                  { props.covidFilter === 'cases' ?   <circle r={(location.cases/10000)} fill="rgba(179, 72, 80, 0.47)" pointerEvents= 'none' /> :
                                                      <circle r={(location.confirmed_deaths/1000)} fill="rgba(184, 0, 0, 0.47)" pointerEvents= 'none' />  }

                </Marker>
              )
        }
      else return null
  })

}

    return renderMarkers()

}


const mapStateToProps = (state)=>{
  // console.log(state)
  return { covidData : state.covidData ,
            covidFilter : state.cases_or_deaths.selection,
            nycCovidData: state.nycCovidData
          }
}

export default connect(mapStateToProps)(Markers)
