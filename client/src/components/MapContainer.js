import React from "react";


import {connect} from 'react-redux'


import CountyView from './MapOverlays/CountyView'
import ToolTip from './MapToolTip'




class MapContainer extends React.Component{

    render(){

        console.log(this.props.zoom)


        return(
           <div>
                <ToolTip/>

                {this.props.zoom !== undefined && this.props.zoom < 1.5 ? <CountyView/> : <div> StateView </div>}

          </div>
        )
    }
}


const mapStateToProps = (state) =>{
  return { zoom : state.zoomLevel.zoom}
}

export default connect(mapStateToProps)(MapContainer)
