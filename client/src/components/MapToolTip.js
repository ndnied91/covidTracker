import React from 'react';
import {connect} from 'react-redux'


const ToolTip = (props)=>{

      const handleLocation=()=>{
            if(props.county !== undefined){
                    return props.county
                }
                else return  <div> Please hover a county </div>
      }
        return  <div style={{ backgroundColor : "#C0E5F6"}}> {handleLocation()} </div>

}



const mapStateToProps = (state)=>{
  return { county: state.updateLocation.county}
}

 export default connect(mapStateToProps)(ToolTip)



// 
// style={{backgroundColor : "#C0E5F6" }
