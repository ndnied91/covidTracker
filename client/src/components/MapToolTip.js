import React from 'react';
import {connect} from 'react-redux'


const ToolTip = (props)=>{

      const handleLocation=()=>{
            if(props.county !== undefined)
                    return props.county
      }
        return  <div> {handleLocation()} </div>
        
}



const mapStateToProps = (state)=>{
  return { county: state.updateLocation.county}
}

 export default connect(mapStateToProps)(ToolTip)
