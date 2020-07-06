import React from 'react'

import {connect} from 'react-redux'


const TimeUpdated = (props) =>{
    return <div> {props.timeUpdated ? `Covid Data last updated ${props.timeUpdated}` : '' } </div>
}

const mapStateToProps = (state)=>{
  return {timeUpdated : state.time_updated.time_updated}
}

export default connect(mapStateToProps )(TimeUpdated)
