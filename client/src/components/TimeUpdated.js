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
        // <div class="ui segment">
        <div
          style={{ fontSize: '16px' , margin: 'auto' , height: '50%' }}> {this.props.time ? `Covid Data last updated ${this.props.time}` : '' } </div>

          // </div>
      )

  }
}



const mapStateToProps = (state)=>{
  return { time : state.time_updated.time_updated }
}



export default connect(mapStateToProps , {timeUpdated} )(TimeUpdated)
