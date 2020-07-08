import React from 'react'
import {connect} from 'react-redux'

class Stats extends React.Component{



  render(){

    const renderContent=()=>{
      if(this.props.selected){
        return <div> {this.props.selected.county } { this.props.selected.state} </div>
      }
    }


    return(
      <div className="ui raised segment" style={{height: '210px'}}>

      <div className="ui equal width center aligned padded grid">
            <h2 className="ui header "> Stats </h2>
            <div className="ui right floated"> {renderContent()} </div>
      </div>


      <div className="covidStats">
          <div> {this.props.stats} </div>
      </div>




       </div>
    )
  }
}



const mapStateToProps = (state)=>{
  // console.log(st/ate.selected_County.selected_county)
  return { selected : state.selected_County.selected_county}
}

export default connect(mapStateToProps )(Stats)
