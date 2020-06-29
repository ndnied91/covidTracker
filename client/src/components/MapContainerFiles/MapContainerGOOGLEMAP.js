import React from 'react'
import {connect} from 'react-redux'
import {getStatView, getAddressView} from '../actions'
import {Map, GoogleApiWrapper} from 'google-maps-react';

import GoogleMapReact from 'google-map-react';

import Geocode from "react-geocode"

const KEY = 'AIzaSyBCY6c-v9nP7P1sFZMKm-yaSMTaGFWA6gw'

Geocode.setApiKey(KEY);
Geocode.setLanguage("en");

class MapContainer extends React.Component{

  static defaultProps = {
      center: {
      lat: 40.557171448551976, lng: -74.33444256656303
      },
      zoom: 10
    };


onClick(e) {
  console.log(e)

}



          render(){


            return (
              <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key:'AIzaSyBCY6c-v9nP7P1sFZMKm-yaSMTaGFWA6gw' }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                  onClick={this.onClick}
                  zoom={this.props.zoom}

                >

                </GoogleMapReact>
                </div>
            )

          }
}


// export default MapContainer
export default connect(null ,  {getStatView , getAddressView})(GoogleApiWrapper({
  apiKey: ('AIzaSyBCY6c-v9nP7P1sFZMKm-yaSMTaGFWA6gw')
})(MapContainer))
