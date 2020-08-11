import React from 'react';
import {connect} from 'react-redux'


const ToolTip = (props)=>{

      const handleLocation=()=>{
            if(props.county !== undefined){
                    return props.county
                }
                else
                    return  <div> Please hover a county </div>
      }


        return  <div style={{ paddingTop: '10px', paddingBottom: '10px', fontSize: '20px',  backgroundColor : "#C0E5F6" , fontWeight: '700' }}>
                        {handleLocation()}
                        </div>

}



const mapStateToProps = (state)=>{
  return { county: state.updateLocation.county}
}

 export default connect(mapStateToProps)(ToolTip)


//THIS CONTROLS AND DISPLAYS WHAT COUNTY IS BEING HOVERED OVER
