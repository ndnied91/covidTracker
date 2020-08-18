import React from 'react'
import {connect} from 'react-redux'

import {getIncomeLevel , getPopulationRate , selectedFilterCovid} from '../../actions'

import '../../srcStyles.css'

class Filter extends React.Component{


renderOption(){
    if(  this.props.option === 'income'){
      return(
        <div>
          <h2 style={{paddingBottom : '10px', textAlign: 'center'}}> Income Filter </h2>

          <div className="ui two column grid">
            <div className="row" style={{marginTop : '-10px'}}>
                 <div className="column">
                   <button className="incomeStyling ui fluid button" onClick={ () => this.props.getIncomeLevel('40')}> Below 40k </button>
                 </div>

                 <div className="column">
                   <button className="incomeStyling ui fluid button" onClick={ () => this.props.getIncomeLevel('40-50')}> 40k-50k </button></div>
                 </div>
            </div>

            <div className="ui two column grid">
              <div className="row" style={{marginTop : '-20px'}}>
                   <div className="column">
                     <button className="incomeStyling ui fluid button" onClick={ () => this.props.getIncomeLevel('50-60')}>50k-60k </button>
                   </div>

                   <div className="column">
                     <button className="incomeStyling ui fluid button" onClick={ () => this.props.getIncomeLevel('60-80')}> 60k-80k </button></div>
                   </div>
              </div>

              <div className="ui two column grid">
                <div className="row" style={{marginTop : '-20px'}}>
                     <div className="column">
                       <button className="incomeStyling ui fluid button" onClick={ () => this.props.getIncomeLevel('80-100')}>80-100k </button>
                     </div>

                     <div className="column">
                       <button className="incomeStyling ui fluid button" onClick={ () => this.props.getIncomeLevel('100')}> 100k </button></div>
                     </div>
                </div>

         </div>
      )
    }

    else if(this.props.option === 'population' && this.props.viewMode === 'county'){
        return(
          // <div className="ui grid centered" style={{padding: '5px'}}>
          <div>
            <h2 style={{paddingBottom : '10px' , textAlign: 'center'}}> Population County Filter </h2>

                 <div className="ui two column grid">
                   <div className="row" style={{marginTop : '-10px'}}>
                        <div className="column">
                          <button className="populationStyling ui fluid button" onClick={ () => this.props.getPopulationRate('50')}>Less then 50k </button>
                        </div>

                        <div className="column">
                          <button className="populationStyling ui fluid button" onClick={ () => this.props.getPopulationRate('50-100')}> 50k-100k </button></div>
                        </div>
                   </div>

                   <div className="ui two column grid">
                     <div className="row" style={{marginTop : '-20px'}}>
                          <div className="column">
                                <button className="populationStyling ui fluid button" onClick={ () => this.props.getPopulationRate('100-200')}> 100k-200k </button>
                          </div>
                          <div className="column">
                                <button className="populationStyling ui fluid button" onClick={ () => this.props.getPopulationRate('200-500')}> 200k-500k </button>
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





      else if(this.props.option === 'population' && this.props.viewMode === 'state'){
          return(
            // <div className="ui grid centered" style={{padding: '5px'}}>
            <div>
              <h2 style={{paddingBottom : '10px' , textAlign: 'center'}}> Population State Filter </h2>

                   <div className="ui two column grid">
                     <div className="row" style={{marginTop : '-10px'}}>
                          <div className="column">
                            <button className="populationStyling ui fluid button" onClick={ () => this.props.getPopulationRate('less1m')}>Less then 1m </button>
                          </div>

                          <div className="column">
                            <button className="populationStyling ui fluid button" onClick={ () => this.props.getPopulationRate('1-3m')}> 1-3million </button></div>
                          </div>
                     </div>

                     <div className="ui two column grid">
                       <div className="row" style={{marginTop : '-20px'}}>
                            <div className="column">
                                  <button className="populationStyling ui fluid button" onClick={ () => this.props.getPopulationRate('3-5m')}> 3-5 million </button>
                            </div>
                            <div className="column">
                                  <button className="populationStyling ui fluid button" onClick={ () => this.props.getPopulationRate('5-7m')}> 5-7million </button>
                            </div>
                       </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="row" style={{marginTop : '-20px'}}>
                           <div className="column">
                                <button className="populationStyling ui fluid button" onClick={ () => this.props.getPopulationRate('7-10m')}> 7-10 million </button>
                           </div>
                           <div className="column">
                                  <button className="populationStyling ui fluid button" onClick={ () => this.props.getPopulationRate('10m+')}> 10m+  </button>
                           </div>
                      </div>
                   </div>

            </div>


          )
        }











      return(
          <div style={{textAlign: 'center' }}>

              <h4 style={{ paddingTop: '20%'}}>Please select Income or Population</h4>
              <br/>
              Covid Data can be toggled on and off and can used as an overlay on Income or Population
           </div>
      )
}


renderIncome(){
        if (this.props.income_level ){
             if (this.props.income_level === '100'){
               return <div className="ui message centeredText" style={{fontSize: '12px'}} > <span style={{fontWeight: '700'}}> Income Level : </span> Greather than 100k </div>
             }
             if (this.props.income_level === '80-100'){
               return <div className="ui message centeredText" style={{fontSize: '12px'}}> <span style={{fontWeight: '700'}}> Income Level : </span> Between 80 and 100k </div>
             }
             if (this.props.income_level === '60-80'){
               return <div className="ui message centeredText" style={{fontSize: '12px'}}> <span style={{fontWeight: '700'}}> Income Level : </span> Between 60 and 80k </div>
             }
             if (this.props.income_level === '50-60'){
               return <div className="ui message centeredText" style={{fontSize: '12px'}}> <span style={{fontWeight: '700'}}> Income Level : </span> Between 50 and 60k </div>
             }
             if (this.props.income_level === '40-50'){
               return <div className="ui message centeredText" style={{fontSize: '12px'}}> <span style={{fontWeight: '700'}}> Income Level : </span> Between 40 and 50k </div>
             }
             else if (this.props.income_level === '40'){
               return <div className="ui message centeredText" style={{fontSize: '12px'}}> <span style={{fontWeight: '700'}}> Income Level : </span> Less than 40k </div>
             }
             else
               return null
          }
}


renderPopulation(){
      if (this.props.population_rate){
       if (this.props.population_rate === '50'){
         return <div className="ui message centeredText" style={{fontSize: '12px'}}> <span style={{fontWeight: '700'}}> Population Level : </span> Less than 50k </div>
       }
       else if (this.props.population_rate === '50-100'){
         return <div className="ui message centeredText" style={{fontSize: '12px'}}> <span style={{fontWeight: '700'}}> Population Level : </span> Between 50 and 100k </div>
       }
       else if (this.props.population_rate === '100-200'){
         return <div className="ui message centeredText" style={{fontSize: '12px'}}> <span style={{fontWeight: '700'}}> Population Level : </span> Between 100 and 200k </div>
       }
       else if (this.props.population_rate === '200-500'){
         return <div className="ui message centeredText" style={{fontSize: '12px'}} > <span style={{fontWeight: '700'}}> Population Level : </span> Between 200 and 500k </div>
       }
       else if (this.props.population_rate === '500-1m'){
         return <div className="ui message centeredText" style={{fontSize: '12px'}}> <span style={{fontWeight: '700'}}> Population Level : </span> Between 500k and 1m </div>
       }
       else if (this.props.population_rate === '1m-15'){
         return <div className="ui message centeredText" style={{fontSize: '12px'}} > <span style={{fontWeight: '700'}}> Population Level : </span> Greater than 1million </div>
       }

//state data

       else if (this.props.population_rate === 'less1m'){
         return <div className="ui message centeredText" style={{fontSize: '12px'}} > <span style={{fontWeight: '700'}}> Population Level : </span> Less than 1 million </div>
       }

       else if (this.props.population_rate === '1-3m'){
         return <div className="ui message centeredText" style={{fontSize: '12px'}} > <span style={{fontWeight: '700'}}> Population Level : </span> Between 1m and 3m </div>
       }

       else if (this.props.population_rate === '3-5m'){
         return <div className="ui message centeredText" style={{fontSize: '12px'}} > <span style={{fontWeight: '700'}}> Population Level : </span> Between 3m and 5m </div>
       }

       else if (this.props.population_rate === '5-7m'){
         return <div className="ui message centeredText" style={{fontSize: '12px'}} > <span style={{fontWeight: '700'}}> Population Level : </span> Between 5m and 7m </div>
       }

       else if (this.props.population_rate === '7-10m'){
         return <div className="ui message centeredText" style={{fontSize: '12px'}} > <span style={{fontWeight: '700'}}> Population Level : </span> Between 7m and 10m </div>
       }

       else if (this.props.population_rate === '10m+'){
         return <div className="ui message centeredText" style={{fontSize: '12px'}} > <span style={{fontWeight: '700'}}> Population Level : </span> Greater than 10 million </div>
       }

       else
         return <div> </div>
    }
}


  // <h3 style={{textAlign: 'center', marginTop : '-5px'}}> Covid Filter </h3>
renderCovidOptions(){
  if(this.props.covid_densityDots === 'on'){
    return(
<div>
      <div className="ui clearing divider" style={{paddingTop: '0'}}></div>
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
         <p style={{ paddingTop : '1px' , paddingBottom: '5px'}} > **Displays Cases by Default </p>
  </div>

    )
  }
}


  render(){
    // console.log(this.props.covidFilter)
    return(
      <div className="ui raised segment" style={{height: 'auto', minHeight: '290px' , backgroundColor: 'rgba(247, 249, 251)'}} >
        {this.renderOption()}
        {this.renderIncome()}
        {this.renderPopulation()}

        <div style={{paddingTop: '0px'}}>
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
           covidFilter : state.cases_or_deaths.selection,
           viewMode: state.viewMode.selection
         }
}

export default connect(mapStateToProps, { getIncomeLevel , getPopulationRate , selectedFilterCovid })(Filter)
