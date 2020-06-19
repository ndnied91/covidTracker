import React from 'react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



export class MapContainer extends React.Component {


  render(){
    return(
      <div >
              <Map google={this.props.google} zoom={14}>

             <Marker onClick={this.onMarkerClick}
                     name={'Current location'} />

           </Map>

      </div>

    )
  }
}


// export default Map
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBcWHZndb-Ui5SmuZIiJ2IpjO-U_Tgkavg')
})(MapContainer)
