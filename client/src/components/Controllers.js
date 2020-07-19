import React from 'react'
import {connect} from 'react-redux'
import {getOption , getIncomeLevel , getPopulationRate } from '../actions'

class Controller extends React.Component{




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


resetOptions(){
    this.props.getIncomeLevel(null)
    this.props.getPopulationRate(null)
    this.props.getOption(null)
}

render(){
      return(
            <div className="ui buttons">
              <button className="ui negative button" onClick={ () => this.setOption('income')}>Income</button>
              <button className="ui primary button"  onClick={ () => this.setOption('population')}> Population </button>
              <button className="ui green button"  onClick={ () => this.resetOptions()}> Reset </button>

            </div>

      )
    }
}


const mapStateToProps=(state)=>{
  // console.log(state)

  return { selection: state.option.selection }
}

export default connect(mapStateToProps, {getOption , getIncomeLevel, getPopulationRate })(Controller)
