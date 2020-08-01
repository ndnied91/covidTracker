import React from 'react'
import {connect} from 'react-redux'

import {fetchHistoricCovidData} from '../../actions'

class CurveGraph extends React.Component{

  componentDidMount(){
    this.props.fetchHistoricCovidData()
  }



  render(){
    console.log(this.props)
    //props come in

    if(this.props.historiCovidData !== undefined){
          this.props.historiCovidData.forEach((item, i) => {
            if(item.county === 'Middlesex' && item.state === 'New Jersey'){
              console.log(item)
            }
          });
      }




    return(
      <div className="ui raised segment" style={{height: '210px'}}> CurveGraph </div>
    )
  }
}

const mapStateToProps= (state)=>{
  // console.log(state)
  return { historiCovidData : state.historicCovidData ,
            selected_County : state.selected_County.selected_county
            }
}

export default connect( mapStateToProps ,  {fetchHistoricCovidData} )(CurveGraph)
