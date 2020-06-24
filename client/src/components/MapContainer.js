import React from 'react'
import {connect} from 'react-redux'
import {getStatView, getAddressView} from '../actions'

import {Map, GoogleApiWrapper} from 'google-maps-react';


import Geocode from "react-geocode"

import keys from '../config/keys'



Geocode.setApiKey(keys.googleApiKey);
Geocode.setLanguage("en");




class MapContainer extends React.Component {
    constructor(props) {
    // console.log(props.getStatView)
    super(props)
    this.onClick = this.onClick.bind(this);
  }




  onClick(t,map,coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    let coords = {lat , lng}
    // console.log(coords)
    let zoom = map.zoom
    // console.log(`Zoom : ${zoom}`)

        Geocode.fromLatLng(lat, lng).then(
                  response => {
                      const address = response.results[0].formatted_address.replace(/,/g,"").split(' ').splice(-4) //ENTIRE ADDRESS to show
                      // console.log(address.join(' '))
                        //depending on zoom level, different result will be shown to user
                          if(zoom >=9){
                            // City 9+ zoom
                            this.props.getAddressView(address.join(' '))
                            this.props.getStatView(response.results[0].formatted_address.replace(/,/g," ").split(' ').splice(-3)[0])
                          }
                          else if (zoom >4 && zoom <=8){
                            // State 4-8 zoom
                            this.props.getAddressView(address.join(' '))
                            this.props.getStatView(response.results.slice(-2)[0].formatted_address)
                          }
                          else {
                             // Country 3 zoom
                            this.props.getAddressView(address.join(' '))
                            this.props.getStatView(response.results.slice(-1)[0].formatted_address)
                          }

                  },
                  error => console.error(error)
              );
  }

  render() {

    return (
          <div>
                  <Map
                    google={this.props.google}
                    initialCenter={{
                      lat: 40.557171448551976, lng: -74.33444256656303
                    }}

                    style={{ width: "100%", margin: "auto" }}
                    className={"map"}
                    zoom={10}
                    onClick={this.onClick}
                  >
                  </Map>
          </div>
    );
  }
}


// const mapStateToProps = (state) =>{
//   console.log(state)
//   return {}
// }

// export default Map
export default connect(null ,  {getStatView , getAddressView})(GoogleApiWrapper({
  apiKey: (keys.googleApiKey)
})(MapContainer))





//this export needs to be wrapped with connect function
//data needs to passed into redux store
