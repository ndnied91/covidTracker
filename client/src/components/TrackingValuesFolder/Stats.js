import React from 'react'
import {connect} from 'react-redux'

class Stats extends React.Component{


  render(){
    return(
      <div className="ui raised segment" style={{height: '210px'}}>

      <div className="ui equal width center aligned padded grid">
            <span className="ui header "> Stats </span>
            <span className="ui right floated"> {this.props.address} </span>
      </div>


      <div className="">
          <div> {this.props.stats} </div>
      </div>




       </div>
    )
  }
}



const mapStateToProps = (state)=>{
  return { stats: state.stat_view.view , address : state.show_address.address}
}

export default connect(mapStateToProps )(Stats)
