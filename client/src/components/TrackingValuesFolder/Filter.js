import React from 'react'
import {connect} from 'react-redux'

import {getIncomeLevel , getPopulationRate , selectedFilterCovid } from '../../actions'

import '../../srcStyles.css'

let incomeFilter = []
let populationFilter = []
let click = false

class Filter extends React.Component{
constructor(props) {
  super(props);

  this.state = ({ btn40: false , btn4050: false, btn5060: false, btn6080: false, btn80100: false, btn100: false, btnless1m: false ,
                  btn13m:false , btn35m: false , btn57m: false , btn710m : false, btn10m: false,
                  btn50: false, btn50100: false, btn100200: false, btn200500: false, btn5001 :false, btn1m15: false

      })

}






componentDidUpdate(prevProps) {
  if ( (this.props.viewMode !== prevProps.viewMode) || (this.props.option !== prevProps.option)   ) {
    this.props.getIncomeLevel(null)
    incomeFilter = []
    this.setState({ btn40: false , btn4050: false, btn5060: false, btn6080: false, btn80100: false, btn100: false,
                    btnless1m: false , btn13m:false , btn35m: false , btn57m: false , btn710m : false, btn10m: false,
                    btn50: false, btn50100: false, btn100200: false, btn200500: false, btn5001 :false, btn1m15: false
        })
  }





}


clickedButton(atr){

console.log(atr)
    switch(atr){
      case '40':
          return this.state.btn40 === false ? this.setState({btn40: true }): this.setState({btn40: false })
    case '40-50':
          return this.state.btn4050 === false ? this.setState({btn4050: true }): this.setState({btn4050: false })
    case '50-60':
          return this.state.btn5060 === false ? this.setState({btn5060: true }): this.setState({btn5060: false })
    case '60-80':
          return this.state.btn6080 === false ? this.setState({btn6080: true }): this.setState({btn6080: false })
    case '80-100':
          return this.state.btn80100 === false ? this.setState({btn80100: true }): this.setState({btn80100: false })
    case '100':
          return this.state.btn100 === false ? this.setState({btn100: true }): this.setState({btn100: false })


    case 'less1m':
          return this.state.btnless1m === false ? this.setState({btnless1m: true }): this.setState({btnless1m: false })
    case '1-3m':
          return this.state.btn13m === false ? this.setState({btn13m: true }): this.setState({btn13m: false })
    case '3-5m':
          return this.state.btn35m === false ? this.setState({btn35m: true }): this.setState({btn35m: false })
    case '5-7m':
          return this.state.btn57m === false ? this.setState({btn57m: true }): this.setState({btn57m: false })
    case '7-10m':
          return this.state.btn710m === false ? this.setState({btn710m: true }): this.setState({btn710m: false })
    case '10m+':
          return this.state.btn10m === false ? this.setState({btn10m: true }): this.setState({btn10m: false })


    case '50':
          return this.state.btn50 === false ? this.setState({btn50: true }): this.setState({btn50: false })
    case '50-100':
          return this.state.btn50100 === false ? this.setState({btn50100: true }): this.setState({btn50100: false })
    case '100-200':
          return this.state.btn100200 === false ? this.setState({btn100200: true }): this.setState({btn100200: false })
    case '200-500':
          return this.state.btn200500 === false ? this.setState({btn200500: true }): this.setState({btn200500: false })
    case '500-1m':
          return this.state.btn5001 === false ? this.setState({btn5001: true }): this.setState({btn5001: false })
    case '1m-15':
          return this.state.btn1m15 === false ? this.setState({btn1m15: true }): this.setState({btn1m15: false })


      default :
      return ''
    }

}


  checkIncomeStatus(atr){


    if(this.props.income_level === null){
      incomeFilter = []
      // this.setState({btn40 : false , btn4050 :false ,btn5060: false ,btn6080: false , btn80100: false , btn100: false })
    }

    if(incomeFilter.includes(atr)){
              incomeFilter = incomeFilter.filter(function(item) {
              return item !== atr
          })
    }
    else{
      incomeFilter.push(atr)
      console.log(incomeFilter)
    }

    this.props.getIncomeLevel([...incomeFilter])

    this.clickedButton(atr)

  }



checkPopulationStatus(atr){

  if(this.props.population_rate === null){
    populationFilter = [null]
  }

  if(populationFilter.includes(atr)){
            populationFilter = populationFilter.filter(function(item) {
            return item !== atr
        })
  }
  else{
    populationFilter.push(atr)

  }


  this.props.getPopulationRate([...populationFilter])

  this.clickedButton(atr)

}


renderOption(){

  // console.log(this.props.population_rate)

  // console.log(click)
  // console.log(this.props.income_level)



    if(  this.props.option === 'income'){
      return(
        <div>
          <h2 style={{paddingBottom : '10px', textAlign: 'center'}}> Income Filter </h2>

          <div className="ui two column grid">
            <div className="row" style={{marginTop : '-10px'}}>
                 <div className="column">
                   <button className={this.state.btn40 === true ? "ui fluid button" : "incomeStyling ui fluid button" }  onClick={ () => this.checkIncomeStatus('40') } > Below 40k </button>
                 </div>

                 <div className="column">
                   <button className={this.state.btn4050 === true ? "ui fluid button" : "incomeStyling ui fluid button" }  onClick={ () => this.checkIncomeStatus('40-50')}> 40k-50k </button></div>
                 </div>
            </div>

            <div className="ui two column grid">
              <div className="row" style={{marginTop : '-20px'}}>
                   <div className="column">
                     <button className={this.state.btn5060 === true ? "ui fluid button" : "incomeStyling ui fluid button" } onClick={ () => this.checkIncomeStatus('50-60')}>50k-60k </button>
                   </div>

                   <div className="column">
                     <button className={this.state.btn6080 === true ? "ui fluid button" : "incomeStyling ui fluid button" } onClick={ () => this.checkIncomeStatus('60-80')}> 60k-80k </button></div>
                   </div>
              </div>

              <div className="ui two column grid">
                <div className="row" style={{marginTop : '-20px'}}>
                     <div className="column">
                       <button className= {this.state.btn80100 === true ? "ui fluid button" : "incomeStyling ui fluid button" } onClick={ (e) => this.checkIncomeStatus('80-100')   }>80-100k </button>
                     </div>

                     <div className="column">
                       <button className={this.state.btn100 === true ? "ui fluid button" : "incomeStyling ui fluid button" } onClick={ () => this.checkIncomeStatus('100')}> 100k </button></div>
                     </div>
                </div>


<script>  </script>
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
                          <button className={this.state.btn50 === true ? "ui fluid button" : "populationStyling ui fluid button" } onClick={ () => this.checkPopulationStatus('50')}>Less then 50k </button>
                        </div>

                        <div className="column">
                          <button className={this.state.btn50100 === true ? "ui fluid button" : "populationStyling ui fluid button" } onClick={ () => this.checkPopulationStatus('50-100')}> 50k-100k </button></div>
                        </div>
                   </div>

                   <div className="ui two column grid">
                     <div className="row" style={{marginTop : '-20px'}}>
                          <div className="column">
                                <button className={this.state.btn100200 === true ? "ui fluid button" : "populationStyling ui fluid button" } onClick={ () => this.checkPopulationStatus('100-200')}> 100k-200k </button>
                          </div>
                          <div className="column">
                                <button className={this.state.btn200500 === true ? "ui fluid button" : "populationStyling ui fluid button" } onClick={ () => this.checkPopulationStatus('200-500')}> 200k-500k </button>
                          </div>
                     </div>
                  </div>

                  <div className="ui two column grid">
                    <div className="row" style={{marginTop : '-20px'}}>
                         <div className="column">
                              <button className={this.state.btn5001 === true ? "ui fluid button" : "populationStyling ui fluid button" } onClick={ () => this.checkPopulationStatus('500-1m')}> 500k-1million </button>
                         </div>
                         <div className="column">
                                <button className={this.state.btn1m15 === true ? "ui fluid button" : "populationStyling ui fluid button" } onClick={ () => this.checkPopulationStatus('1m-15')}> 1million+  </button>
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
                            <button className={this.state.btnless1m === true ? "ui fluid button" : "populationStyling ui fluid button" } onClick={ () => this.checkPopulationStatus('less1m')}>Less then 1m </button>
                          </div>

                          <div className="column">
                            <button className={this.state.btn13m === true ? "ui fluid button" : "populationStyling ui fluid button" } onClick={ () => this.checkPopulationStatus('1-3m')}> 1-3million </button></div>
                          </div>
                     </div>

                     <div className="ui two column grid">
                       <div className="row" style={{marginTop : '-20px'}}>
                            <div className="column">
                                  <button className={this.state.btn35m === true ? "ui fluid button" : "populationStyling ui fluid button" } onClick={ () => this.checkPopulationStatus('3-5m')}> 3-5 million </button>
                            </div>
                            <div className="column">
                                  <button className={this.state.btn57m === true ? "ui fluid button" : "populationStyling ui fluid button" } onClick={ () => this.checkPopulationStatus('5-7m')}> 5-7million </button>
                            </div>
                       </div>
                    </div>

                    <div className="ui two column grid">
                      <div className="row" style={{marginTop : '-20px'}}>
                           <div className="column">
                                <button className={this.state.btn710m === true ? "ui fluid button" : "populationStyling ui fluid button" } onClick={ () => this.checkPopulationStatus('7-10m')}> 7-10 million </button>
                           </div>
                           <div className="column">
                                  <button className={this.state.btn10m === true ? "ui fluid button" : "populationStyling ui fluid button" } onClick={ () => this.checkPopulationStatus('10m+')}> 10m+  </button>
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

  return { option : state.option.selection ,
           income_level: state.income_level.income_level,
           population_rate : state.population_rate.population_rate,
           covid_densityDots: state.covid_densityDots.covid_dots,
           covidFilter : state.cases_or_deaths.selection,
           viewMode: state.viewMode.selection
         }
}

export default connect(mapStateToProps, { getIncomeLevel , getPopulationRate , selectedFilterCovid   })(Filter)
