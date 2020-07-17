import React from 'react'
import {connect} from 'react-redux'

import {getIncomeLevel , getPopulationRate} from '../../actions'


class Filter extends React.Component{



renderOption(){
    if(  this.props.option === 'income'){
      return(
        <div className="">
            <h2> Please select a Income Class to filter on map </h2>
            <button className="ui red button" onClick={ () => this.props.getIncomeLevel('high')}>Upper Class</button>
            <button className="ui red button" onClick={ () => this.props.getIncomeLevel('medium')}>Middle Class</button>
            <button className="ui red button" onClick={ () => this.props.getIncomeLevel('low')} >Lower Class</button>
         </div>
      )
    }

    else if(this.props.option === 'population'){
        return(
          // <div className="ui grid centered" style={{padding: '5px'}}>
          <div >
            <h2> Please select range of Density </h2>
            <div className="ui three column grid">
             <div className="column">
                <button className="ui mini blue button" onClick={ () => this.props.getPopulationRate('100')}>Less then 100k </button>
              </div>

              <div className="column">
            <button className="ui mini blue button" onClick={ () => this.props.getPopulationRate('100-200')}> 100k-200k </button>
               </div>

               <div className="column">
              <button className="ui mini blue button" onClick={ () => this.props.getPopulationRate('200-300')}> 200k-300k </button>
                </div>

                <div className="column">
                <button className="ui mini blue button" onClick={ () => this.props.getPopulationRate('300-500')}> 300k-500k </button>
                 </div>

                 <div className="column">
                  <button className="ui mini blue button" onClick={ () => this.props.getPopulationRate('500-1m')}> 500k-1million </button>
                  </div>

                  <div className="column">
                     <button className="ui mini blue button" onClick={ () => this.props.getPopulationRate('1m-15')}> 1million+  </button>
                   </div>






              </div>
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
           return <div className="ui blue button"> UPPER </div>
         }
         else if (this.props.income_level === 'medium'){
           return <div className="ui yellow button"> MEDIUM </div>
         }
         else
           return <div className="ui red button"> LOW </div>
      }
}


renderPopulation(){
      if (this.props.population_rate){
       if (this.props.population_rate === '100'){
         console.log('trst')
         return <div className="ui red button"> Less then 100k </div>
       }
       else if (this.props.population_rate === '100-200'){
         return <div className="ui red button"> 10-49.9 </div>
       }
       else if (this.props.population_rate === '200-300'){
         return <div className="ui yellow button"> 200-300 </div>
       }
       else if (this.props.population_rate === '250plus'){
         return <div className="ui blue button"> 250 or more </div>
       }
       else if (this.props.population_rate === '250plus'){
         return <div className="ui blue button"> 250 or more </div>
       }
       else
         return <div> </div>
    }
}





  render(){
    // console.log(this.props)
    return(
      <div className="ui raised segment" style={{height: '300px'}} >
        {this.renderOption()}
        {this.renderIncome()}
        {this.renderPopulation()}

       </div>

    )
  }
}


const mapStateToProps = (state)=>{
  // console.log(state)
  return { option : state.option.selection ,
           income_level: state.income_level.income_level,
           population_rate : state.population_rate.population_rate
         }
}

export default connect(mapStateToProps, { getIncomeLevel , getPopulationRate  })(Filter)
