import React from 'react'

import {connect} from 'react-redux'
import { timeUpdated} from '../actions'


class TimeUpdated extends React.Component{
  //
  componentDidMount(){
     this.props.timeUpdated()
  }

  render(){
      return(

        <div
          style={{ fontSize: '18px' , margin: 'auto' , height: '50%' , fontWeight: '700'}}> {this.props.time ? `Covid Data last updated ${this.props.time}` : '' } </div>


      )

  }
}



const mapStateToProps = (state)=>{
  return { time : state.time_updated.time_updated }
}



export default connect(mapStateToProps , {timeUpdated} )(TimeUpdated)
