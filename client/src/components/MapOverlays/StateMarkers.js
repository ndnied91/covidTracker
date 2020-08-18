import React from 'react'

import {  Marker } from "react-simple-maps";
import {connect} from 'react-redux'

const StateMarkers = (props) => {
  // console.log(props)


const validStates = []

const states = ['Washington' , 'Nevada' , 'Idaho' , 'Montana' , 'Wyoming' ,  'Colorado', 'Utah', 'New Mexico' , 'Arizona' , 'Texas' , 'Oklahoma' , 'North Dakota' , 'Minnesota' , 'Wisconsin' , 'Michigan' , 'Missouri',
 'Arkansas', 'Louisiana' , 'Mississippi' , 'Illinois' , 'Tennessee', 'Alabama', 'Georgia' , 'Florida', 'South Carolina' , 'North Carolina' , 'Indiana' , 'Kentucky',
'Virginia' , 'West Virginia', 'Maryland', 'Delaware', 'Connecticut' , 'New Jersey' , 'New York', 'Rhode Island' , 'Massachusetts', 'New Hampshire' , 'Vermont', 'Maine', 'Pennsylvania' , 'Ohio' , 'Iowa' , 'Kansas' , 'Oklahama',
 'Hawaii' , 'Oregon' , 'Nebraska', 'California', 'South Dakota']


props.covidData.forEach((item, i) => {
      if(item.coords.latitude !== null){
                if(states.includes(item.state) ){
                  validStates.push(item)
                }
      }
});



const renderMarkers=()=> {
      return validStates.map((location, i) => {
        if(location.county !== 'New York City'){

              return (
                <Marker
                    key={ location._id }
                    coordinates= {[ location.coords.longitude , location.coords.latitude]}
                    >
                  { props.covidFilter === 'cases' ?   <circle r={(location.cases/20000)} fill="rgba(179, 72, 80, 0.05)" pointerEvents= 'none' /> :
                                                      <circle r={(location.deaths/1000)} fill="rgba(184, 0, 0, 0.47)" pointerEvents= 'none' />  }

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
  return { covidData : state.state_covid_data ,
            covidFilter : state.cases_or_deaths.selection,
          }
}

export default connect(mapStateToProps)(StateMarkers)
