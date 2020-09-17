import React from 'react'
import {connect} from 'react-redux'
import {getPopulationForStats, fetchNYCCovidData, fetchStateData , getStatePopulationForStats , getCountyIncomeForStats , getStateIncomeForStats} from '../../actions'

import '../../srcStyles.css'

class Stats extends React.Component{

  componentDidMount(){
    this.props.getPopulationForStats()
    this.props.fetchNYCCovidData()
    this.props.fetchStateData()
    this.props.getStatePopulationForStats()
    this.props.getCountyIncomeForStats()
    this.props.getStateIncomeForStats()
  }

  render(){

    console.log(this.props.incomeCountyStat) //gets county income stats
    console.log(this.props.incomeStateStat) //gets state income stats


        const newyork = [ '36047', '36061', '36081', '36005' ,  '36085' ]

        const getnyccovidData = (id) =>{
              if (newyork.includes(id)) {
                   return this.props.covidData.map((county)=>{
                      if(county.county === 'New York City' ){
                          return(
                              <div key={county.fips}>
                                <div className="statTitle"> {county.county} , {county.state} </div>
                                <div> Total NYC Current Cases : {county.cases} </div>
                                <div> Total NYC Current Deaths : {Number(county.confirmed_deaths) } </div>

                                {this.props.nyc_data.map((item, i) => {
                                  if(id === item.fips){
                                    return(

                                      <div key={item.fips} className="ui  container ">
                                          <div className="ui clearing divider"></div>
                                          <div className="statTitle" >County:  {item.county} </div>
                                          <div className="meta"> {getPopulation(id)} </div>
                                          <div className="meta"> {getIncome(id)} </div>
                                          <div> County Cases : {item.cases}</div>
                                          <div> County Deaths : {item.confirmed_deaths}</div>
                                      </div>
                                    )
                                  }
                                  else return null
                                })}
                           </div>
                          )
                      }
                      return null
                   })

           }
           else return null
        }



    const getCountyData = (id)=>{
      // console.log(id)
              return this.props.covidData.map((county)=>{

                if(newyork.includes(county.fips)){
                  return ''
                }
                 if(county.fips === id ){
                   // console.log(county.fips)
                      return(
                        <div key={county.fips} >
                            <div className="statTitle"> {county.county} , {county.state} </div>
                            <div className="meta"> {getPopulation(id)} </div>
                            <div className="meta"> {getIncome(id)} </div>
                            <div> Current Cases : {county.cases} </div>
                              <div> Current Probable Cases : {county.probable_cases} </div>
                              <div> Current Confirmed Deaths : {Number(county.confirmed_deaths) } </div>
                              <div> Current Probable Deaths : {Number(county.probable_deaths) } </div>
                        </div>

                      )
                  }
                   return null
                })
    }


const getPopulation = (id)=>{
  return this.props.countyPopulation.map((county)=>{
    if(county.id === id){
      return <div key={county.id}> County Population:  {county.population}  </div>
    }
    else return null
  })
}



const getIncome = (id)=>{
  return this.props.incomeCountyStat.map((county)=>{
    if(county.id === id){
      console.log(county)
      return <div key={county.id}> County Income:  {county.income}  </div>
    }
    else return null
  })
}


    const renderCountyContent=()=>{
          if(this.props.selected){
            // console.log(this.props.selected.id)
            return(
              <div>
                {getCountyData(this.props.selected.id)}
                {getnyccovidData(this.props.selected.id)}
              </div>
            )
          }
          else{
            return(
              <div style={{paddingTop: '10%', textAlign:'center' , fontSize: '16px'}} >
                    {this.props.viewMode === 'county' ?  'Please click on a county' : 'Please click on a state'  }
               </div>

              )
          }
    }




//state population
const getStatePopulation = (id)=>{
  return this.props.statePopulation.map((state)=>{
    if(state.state === id){
        return <div key={state.id}> State Population:  {state.population}  </div>
    }
    return null
  })
}


const getStateIncome = (id)=>{
  return this.props.incomeStateStat.map((state)=>{
    if(state.state === id){
        return <div key={state.id}> State Population:  {state.income}  </div>
    }
    return null
  })
}




const renderStateContent =()=>{

  if(this.props.selectedState !== null){

    return this.props.state_CovidData.map( (state)=>{
      if(this.props.selectedState === state.state){
        // console.log(state)
        return(
          <div key={state._id}>
                  <div className="statTitle"> {state.state} </div>
                  <div className="meta"> {getStatePopulation(state.state)} </div>
                  <div className="meta"> {getStateIncome(state.state)} </div>
                  <div> State Cases:  {state.cases} </div>
                  <div> Recovered:  {state.recovered} </div>
                  <div> Number of People Tested:  {state.people_tested } </div>
                  <div> State Deaths:  {state.deaths} </div>
                  <div> Incident Rate:  {state.incident_rate } </div>
                  <div> Mortality Rate:  {state.mortality_rate} </div>


          </div>




        )
      }
      else return null
    })


  }
  return(
    <div style={{paddingTop: '10%', textAlign:'center' , fontSize: '16px'}} >
        Please click on a state
     </div>
  )

}


const heightChange=()=>{
  if(this.props.selected && newyork.includes(this.props.selected.id)){
    return '240px'
  }
  else if(this.props.selectedState && this.props.viewMode === 'state'){
    return '240px'
  }
  else
    return '180px'
}





  // console.log(this.props.viewMode)
    return(
      <div className="ui raised segment fontChange" style={{height: heightChange() , backgroundColor: 'rgba(247, 249, 251)' , overflow: 'auto'}}>

          <h2 style={{textAlign: 'center' , marginBottom: '5px'}} > {this.props.viewMode === 'county' ?  'County Stats' : 'State Stats'  } </h2>


                    <div className="ui left floated">
                    {this.props.viewMode=== 'county' ? renderCountyContent() : renderStateContent()}

                    </div>





       </div>
    )
  }
}




const mapStateToProps = (state)=>{

  return { selected : state.selected_County.selected_county,
           covidData : state.covidData,
           countyPopulation: state.populationStat ,
           nyc_data : state.nycCovidData,
           viewMode: state.viewMode.selection,
           selectedState: state.selectedState.selected_state,
           state_CovidData : state.state_covid_data,
           statePopulation: state.statePopulation.population_rate,
           incomeCountyStat: state.incomeCountyStat,
           incomeStateStat : state.incomeStateStat
      }
}

export default connect(mapStateToProps, {getPopulationForStats, fetchNYCCovidData, fetchStateData , getStatePopulationForStats , getCountyIncomeForStats, getStateIncomeForStats} )(Stats)
