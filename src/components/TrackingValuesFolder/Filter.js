import React from 'react'
import {connect} from 'react-redux'

import {getIncomeLevel , getDensityRate} from '../../actions'


class Filter extends React.Component{



renderOption(){
    if(  this.props.option === 'income'){
      return(
        <div className="">
            <h2> Please select a Income Class to filter on map </h2>
            <button className="ui blue button" onClick={ () => this.props.getIncomeLevel('high')}>High Class</button>
            <button className="ui yellow button" onClick={ () => this.props.getIncomeLevel('medium')}>Middle Class</button>
            <button className="ui red button" onClick={ () => this.props.getIncomeLevel('low')} >Lower Class</button>
         </div>
      )
    }

    else if(this.props.option === 'density'){
        return(
          <div>
            <h2> Please select range of Density </h2>
              <button className="ui green button" onClick={ () => this.props.getDensityRate('less10')}>  Less then 10 </button>
              <button className="ui red button" onClick={ () => this.props.getDensityRate('10-49.9')} >10 - 49.9</button>
              <button className="ui yellow button" onClick={ () => this.props.getDensityRate('50-249.9')} > 50-249.9</button>
              <button className="ui blue button" onClick={ () => this.props.getDensityRate('250plus')}> 250 or more</button>

        </div>
        )
      }
      return(
          <div> Please select an option to filter </div>
      )
}


renderIncome(){
        if (this.props.income_level ){
         if (this.props.income_level === 'high'){
           return <div className="ui blue button"> HIGH </div>
         }
         else if (this.props.income_level === 'medium'){
           return <div className="ui yellow button"> MEDIUM </div>
         }
         else
           return <div className="ui red button"> LOW </div>
      }
}


renderDensity(){
      if (this.props.density_rate){
       if (this.props.density_rate === 'less10'){
         return <div className="ui green button"> Less then 10  </div>
       }
       else if (this.props.density_rate === '10-49.9'){
         return <div className="ui red button"> 10-49.9 </div>
       }
       else if (this.props.density_rate === '50-249.9'){
         return <div className="ui yellow button"> 50-249.9 </div>
       }
       else if (this.props.density_rate === '250plus'){
         return <div className="ui blue button"> 250 or more </div>
       }
       else
         return <div>  </div>
    }
}





  render(){
    return(
      <div className="ui raised segment" style={{height: '200px'}} >
        {this.renderOption()}
        {this.renderIncome()}
        {this.renderDensity()}

       </div>

    )
  }
}


const mapStateToProps = (state)=>{
  // console.log(state)
  return { option : state.option.selection ,
           income_level: state.income_level.income_level,
           density_rate : state.density_rate.density_rate
         }
}

export default connect(mapStateToProps, { getIncomeLevel , getDensityRate })(Filter)
