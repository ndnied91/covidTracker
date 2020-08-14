import React from 'react'
import {connect} from 'react-redux'

class TopTenCases extends React.Component{

      render(){

        const countiesCases = this.props.covidData
              countiesCases.push(...this.props.nycData)

        const toptenCases = countiesCases.sort((a,b) => ( Number(a.cases) < Number(b.cases)) ? 1 : ((Number(b.cases) < Number(a.cases)) ? -1 : 0)).slice(0, 11)
          //takes array, filteres it and gets the last 11 elements


        const topTenCases= ()=>{
          return toptenCases.map( (county, i)=>{
              if( county.county !== 'New York City'){
                return(
                      <div key={i}>
                        <div> {i}. {county.county} , {county.state} : {county.cases} </div>
                      </div>
                      )
              }
          })//end of map
        }

          return <div> {topTenCases()} </div>
      }
}

const mapStateToProps = (state)=>{
  return { covidData : state.covidData,
            nycData: state.nycCovidData}
}

export default connect(mapStateToProps)(TopTenCases)
