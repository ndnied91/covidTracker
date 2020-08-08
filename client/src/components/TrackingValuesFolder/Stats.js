import React from 'react'
import {connect} from 'react-redux'
import {getPopulationForStats} from '../../actions'

import '../../srcStyles.css'

class Stats extends React.Component{

  componentDidMount(){
    this.props.getPopulationForStats()
  }

  render(){
    // console.log(this.props.population)





        const newyork = [ '36047', '36061', '36081', '36005' ,  '36085' ]


const getnyccovidData = (id) =>{
      if (newyork.includes(id)) {
           return this.props.covidData.map((county)=>{
              if(county.county === 'New York City' ){
                  return(
                      <div key={county.fips}>
                        <h3> {county.county} , {county.state} </h3>
                        <div> Current Cases {county.cases} </div>
                        <div> Current Probable Cases {county.probable_cases} </div>
                        <div> Current Confirmed Deaths {Number(county.confirmed_deaths) } </div>
                        <div> Current Probable Deaths {Number(county.probable_deaths) } </div>
                        <div> Fatality Rate {(county.confirmed_deaths / county.cases) }   </div>
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
                          <div className="content">
                            <div className="header"> {county.county} , {county.state} </div>
                            <div className="meta"> {getPopulation(id)} </div>
                            <div className="description">
                            <div> Current Cases {county.cases} </div>
                              <div> Current Probable Cases {county.probable_cases} </div>
                              <div> Current Confirmed Deaths {Number(county.confirmed_deaths) } </div>
                              <div> Current Probable Deaths {Number(county.probable_deaths) } </div>
                              <div> Fatality Rate {(county.confirmed_deaths / county.cases) }   </div>
                            </div>
                          </div>
                        </div>



                      )
                  }
                })
               return ''
    }







const getPopulation = (id)=>{
  return this.props.population.map((county)=>{
    if(county.id === id){
      return <div key={county.id}> County Population:  {county.population}  </div>
    }
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
    }








    return(
      <div className="ui raised segment fontChange" style={{height: '210px' , backgroundColor: 'rgba(247, 249, 251)' , overflow: 'auto'}}>


                    <h2 style={{textAlign: 'center' , marginBottom: '5px'}} > Stats </h2>
                    <div className="ui left floated">  {renderContent()}
                    </div>




       </div>
    )
  }
}



const mapStateToProps = (state)=>{
  // console.log(state)
  return { selected : state.selected_County.selected_county,
       covidData : state.covidData,
        population: state.populationStat }
}

export default connect(mapStateToProps, {getPopulationForStats} )(Stats)
