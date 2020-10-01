import React from 'react'
import {connect} from 'react-redux'
import {getOption , getIncomeLevel , getPopulationRate, showOrHideCovidDensity, selectedCounty , updateLocation , selectedFilterCovid , selectedViewMode , selectedState } from '../actions'
import '../srcStyles.css'


class Controller extends React.Component{
  constructor(props) {
    super(props);
    // console.log(this.props.population_rate)
    this.state = {   style_state: 'ui grey button' , style_county: 'ui button'};
  }



setOption(option){
  this.props.getOption(option) //sets main option or either population or income

        //this part checks which is chosen and then resets the other one to null so both wont be triggered
        if (option === 'population'){
          this.props.getIncomeLevel(null)
        } //this sets income level to null as population is chosen by user

        if( option === 'income'){
          this.props.getPopulationRate(null)
        }
}




showCovidData(){
    if( this.props.covid_densityDots === 'on' ){
      this.props.showOrHideCovidDensity('off')
    }

    else if(this.props.showOrHideCovidDensity('off')){
          this.props.showOrHideCovidDensity('on')
      }
}




resetOptions(){
    this.props.getIncomeLevel(null)
    this.props.getPopulationRate(null)
    this.props.getOption(null)
    this.props.showOrHideCovidDensity('off')
    this.props.selectedCounty(null)
    this.props.selectedState(null)
    this.props.updateLocation(undefined)
    this.props.selectedFilterCovid('cases')


}

selectViewMode(option){
  this.resetOptions()
  this.props.selectedViewMode(option)

}

render(){

  const stateView= ()=>{ this.selectViewMode('state')
                          this.setState({style_state: 'ui grey button' , style_county: 'ui button' })
                        }
  const countyView= ()=>{ this.selectViewMode('county')
                          this.setState({style_state: 'ui button' , style_county: 'ui grey button' }) }



      return(
            <div className="ui grid stackable">

            <div className="eight wide column" >
              <button className={this.state.style_county +  'ui basic fluid button'}  onClick={ () => countyView()}>County</button>
             </div>

             <div className="eight wide column" >
               <button className={this.state.style_state + "ui basic fluid button"}  onClick={ () => stateView()}> State</button>
              </div>



              <div className="four wide column" >
                <button className="covidStyling ui fluid button"  onClick={ () => this.showCovidData()}>Covid Data</button>
               </div>

               <div className="four wide column" >
                 <button className="incomeStyling ui fluid button" onClick={ () => this.setOption('income')}>Income</button>
                </div>

                <div className="four wide column" >
                  <button className="populationStyling ui fluid button" style={{textAlign:'center'}}onClick={ () => this.setOption('population')}>Population</button>
                 </div>


                 <div className="four wide column" >
                   <button className=" ui negative basic fluid button"  onClick={ () => this.resetOptions()}>Reset</button>
                  </div>




            </div>

      )
    }
}


const mapStateToProps=(state)=>{
    // console.log(state)
  return { selection: state.option.selection ,
      population_rate : state.population_rate.population_rate,
        covid_densityDots : state.covid_densityDots.covid_dots }
}

export default connect(mapStateToProps, {getOption , getIncomeLevel, getPopulationRate , showOrHideCovidDensity, selectedCounty  , updateLocation, selectedFilterCovid , selectedViewMode , selectedState })(Controller)
