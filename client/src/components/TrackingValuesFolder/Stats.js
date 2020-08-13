import React from 'react'
import {connect} from 'react-redux'
import {getPopulationForStats, fetchNYCCovidData} from '../../actions'

import '../../srcStyles.css'

class Stats extends React.Component{

  componentDidMount(){
    this.props.getPopulationForStats()
    this.props.fetchNYCCovidData()
  }

  render(){


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
                                    // console.log(item)
                                    return(

                                      <div key={item.fips} className="ui  container ">
                                          <div className="ui clearing divider"></div>
                                          <div className="statTitle" >County:  {item.county} </div>
                                          <div className="meta"> {getPopulation(id)} </div>
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
              return this.props.covidData.map((county)=>{
                 if(county.fips === id ){
                   // console.log(county)
                      return(
                        <div key={county.fips} >


                            <div className="statTitle"> {county.county} , {county.state} </div>
                            <div className="meta"> {getPopulation(id)} </div>

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


  // <div> Fatality Rate : {(county.confirmed_deaths / county.cases) }   </div>




const getPopulation = (id)=>{
  return this.props.population.map((county)=>{
    if(county.id === id){
      return <div key={county.id}> County Population:  {county.population}  </div>
    }
    else return null
  })
}


    const renderContent=()=>{
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
                    Please click on a county
               </div>

              )
          }
    }




const heightChange=()=>{
  if(this.props.selected && newyork.includes(this.props.selected.id))
      return '240px'
  else
    return '180px'
}


    return(
      <div className="ui raised segment fontChange" style={{height: heightChange() , backgroundColor: 'rgba(247, 249, 251)' , overflow: 'auto'}}>
                    <h2 style={{textAlign: 'center' , marginBottom: '5px'}} > Stats </h2>
                    <div className="ui left floated">  {renderContent()}
                    </div>





       </div>
    )
  }
}



const mapStateToProps = (state)=>{
  return { selected : state.selected_County.selected_county,
       covidData : state.covidData,
        population: state.populationStat ,
        nyc_data : state.nycCovidData
      }
}

export default connect(mapStateToProps, {getPopulationForStats, fetchNYCCovidData} )(Stats)
