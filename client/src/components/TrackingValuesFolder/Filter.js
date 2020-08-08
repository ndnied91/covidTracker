import React from 'react'
import {connect} from 'react-redux'

import {getIncomeLevel , getPopulationRate , selectedFilterCovid} from '../../actions'

import '../../srcStyles.css'

class Filter extends React.Component{



renderOption(){
    if(  this.props.option === 'income'){
      return(
        <div className="">
            <h2 style={{textAlign: 'center'}}> Select a Income Class to filter on map </h2>

            <div className="padded">
              <button className="incomeStyling ui fluid button"  onClick={ () => this.props.getIncomeLevel('high')}>Upper Class</button>
            </div>

            <div className="padded">
              <button className="incomeStyling ui fluid button" onClick={ () => this.props.getIncomeLevel('medium')}>Middle Class</button>
            </div>

            <div className="padded">
              <button className="incomeStyling ui fluid button" onClick={ () => this.props.getIncomeLevel('low')} >Lower Class</button>
            </div>






         </div>
      )
    }

    else if(this.props.option === 'population'){
        return(
          // <div className="ui grid centered" style={{padding: '5px'}}>
          <div>
            <h2 style={{paddingBottom : '15px' , textAlign: 'center'}}> Please select range of Population </h2>

                 <div className="ui two column grid">
                   <div className="row" style={{marginTop : '-10px'}}>
                        <div className="column">
                          <button className="populationStyling ui fluid button" onClick={ () => this.props.getPopulationRate('100')}>Less then 100k </button>
                        </div>

                        <div className="column">
                          <button className="populationStyling ui fluid button" onClick={ () => this.props.getPopulationRate('100-200')}> 100k-200k </button></div>
                        </div>
                   </div>

                   <div className="ui two column grid">
                     <div className="row" style={{marginTop : '-20px'}}>
                          <div className="column">
                                <button className="populationStyling ui fluid button" onClick={ () => this.props.getPopulationRate('200-300')}> 200k-300k </button>
                          </div>
                          <div className="column">
                                <button className="populationStyling ui fluid button" onClick={ () => this.props.getPopulationRate('300-500')}> 300k-500k </button>
                          </div>
                     </div>
                  </div>

                  <div className="ui two column grid">
                    <div className="row" style={{marginTop : '-20px'}}>
                         <div className="column">
                              <button className="populationStyling ui fluid button" onClick={ () => this.props.getPopulationRate('500-1m')}> 500k-1million </button>
                         </div>
                         <div className="column">
                                <button className="populationStyling ui fluid button" onClick={ () => this.props.getPopulationRate('1m-15')}> 1million+  </button>
                         </div>
                    </div>
                 </div>

          </div>


        )
      }
      return(
          <h2 style={{textAlign: 'center'}}> Please select an option to filter </h2>
      )
}


renderIncome(){
        if (this.props.income_level ){
         if (this.props.income_level === 'high'){
           return <div className="ui floating message centeredText" > Upper Class </div>
         }
         else if (this.props.income_level === 'medium'){
           return <div className="ui floating message centeredText"> Middle Class </div>
         }
         else
           return <div className="ui floating message centeredText"> Lower Class </div>
      }
}


renderPopulation(){
      if (this.props.population_rate){
       if (this.props.population_rate === '100'){
         return <div className="ui floating message centeredText"> Less then 100k </div>
       }
       else if (this.props.population_rate === '100-200'){
         return <div className="ui floating message centeredText"> 100k-200k </div>
       }
       else if (this.props.population_rate === '200-300'){
         return <div className="ui floating message centeredText"> 200k-300k </div>
       }
       else if (this.props.population_rate === '300-500'){
         return <div className="ui floating message centeredText" > 300k-500k </div>
       }
       else if (this.props.population_rate === '500-1m'){
         return <div className="ui floating message centeredText"> 500k-1m </div>
       }
       else if (this.props.population_rate === '1m-15'){
         return <div className="ui floating message centeredText" > 1million+ </div>
       }
       else
         return <div> </div>
    }
}



renderCovidOptions(){
  if(this.props.covid_densityDots === 'on'){
    return(
<div>
    <h3 style={{textAlign: 'center', paddingTop : '10px'}}> Covid Filter </h3>
       <div className="ui two column grid stackable" >
         <div className="row" >
              <div className="column">
                <div className="ui fluid  button covidStyling" onClick={ () => this.props.selectedFilterCovid('cases') } > Cases </div>
              </div>

              <div className="column">
                  <div className="ui fluid button covidStyling" onClick={ () => this.props.selectedFilterCovid('deaths') } > Deaths </div>
              </div>
         </div>
         </div>
         <p style={{ paddingTop : '1px' , paddingBottom: '5px'}} > *Filters Cases by Default </p>
  </div>

    )
  }
}


  render(){
    // console.log(this.props.covidFilter)
    return(
      <div className="ui raised segment" style={{height: 'auto', minHeight: '200px' , backgroundColor: 'rgba(247, 249, 251)'}} >
        {this.renderOption()}
        {this.renderIncome()}
        {this.renderPopulation()}

        <div style={{paddingTop: '5px'}}>
          {this.renderCovidOptions()}
          </div>


       </div>

    )
  }
}


const mapStateToProps = (state)=>{
  // console.log(state)
  return { option : state.option.selection ,
           income_level: state.income_level.income_level,
           population_rate : state.population_rate.population_rate,
           covid_densityDots: state.covid_densityDots.covid_dots,
           covidFilter : state.cases_or_deaths.selection
         }
}

export default connect(mapStateToProps, { getIncomeLevel , getPopulationRate , selectedFilterCovid })(Filter)
