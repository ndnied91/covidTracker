import React from 'react'
import {connect} from 'react-redux'
import {getOption , getIncomeLevel , getDensityRate} from '../actions'

class Controller extends React.Component{




setOption(option){
  this.props.getOption(option) //sets main option or either density or income

        //this part checks which is chosen and then resets the other one to null so both wont be triggered
        if (option === 'density'){
          this.props.getIncomeLevel(null)
        } //this sets income level to null as density is chosen by user

        if( option === 'income'){
          this.props.getDensityRate(null)
        }
}


render(){
      return(
            <div className="ui buttons">
              <button className="ui negative button" onClick={ () => this.setOption('income')}>Income</button>
              <button className="ui primary button"  onClick={ () => this.setOption('density')}> Density </button>
            </div>

      )
    }
}


const mapStateToProps=(state)=>{

  return { selection: state.option.selection }
}

export default connect(mapStateToProps, {getOption , getIncomeLevel, getDensityRate})(Controller)
