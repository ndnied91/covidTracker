import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

class TopTenCases extends React.Component{

      render(){


        const countiesCases = _.uniq(this.props.covidData)
              countiesCases.push(...this.props.nycData)
                const filtered = _.uniq(countiesCases)
                //removed duplicates

        const toptenDeaths = filtered.sort((a,b) => ( Number(a.confirmed_deaths) < Number(b.confirmed_deaths)) ? 1 : ((Number(b.confirmed_deaths) < Number(a.confirmed_deaths)) ? -1 : 0)).slice(0, 11)
          //takes array, filteres it and gets the last 11 elements



        const topTenDeaths= ()=>{
          return toptenDeaths.map( (county, i)=>{
              if( county.county !== 'New York City'){
                return(
                      <div key={i}>
                        <div> {i}. {county.county} , {county.state} : {county.confirmed_deaths} </div>
                      </div>
                      )
              }
              else return null
          })//end of map
        }

          return(
            <div> {toptenDeaths.length >10  ?  topTenDeaths()   : ''}  </div>
        )
      }
}

const mapStateToProps = (state)=>{
  return { covidData : state.covidData,
            nycData: state.nycCovidData}
}

export default connect(mapStateToProps)(TopTenCases)
