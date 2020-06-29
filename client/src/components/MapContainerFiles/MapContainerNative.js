import React from 'react'
import {connect} from 'react-redux'
import {getStatView, getAddressView} from '../actions'

import {Map, GoogleApiWrapper} from 'google-maps-react';


import Geocode from "react-geocode"



import keys from '../config/keys'

const KEY = 'AIzaSyBCY6c-v9nP7P1sFZMKm-yaSMTaGFWA6gw'

Geocode.setApiKey(KEY);
Geocode.setLanguage("en");




var NEW_ZEALAND_BOUNDS = {
       north: -34.36,
       south: -47.35,
       west: 166.28,
       east: -175.81,
     };




var AUCKLAND = {lat: -37.06, lng: 174.58};

class MapContainer extends React.Component {
    constructor(props) {
    // console.log(props.getStatView)
    super(props)
    // this.onClick = this.onClick.bind(this);
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


  // rebuildMarkers(markers) {
      // const newBounds = new this.google.maps.LatLngBounds();

      // if (markers.length) {
      //   const latLongMarkersArray = map(markers, m => pick(m, ['longitude', 'latitude']));
      //   each(latLongMarkersArray, (marker) => newBounds.extend(new google.maps.LatLng(marker.latitude, marker.longitude)));
      // }
      //
      // if (newBounds && this.refs.map && this.refs.map.fitBounds) {
      //   this.refs.map.fitBounds(newBounds);
      //   const newBoundsCenter = newBounds.getCenter();
      //   const newCenter = {
      //     lat: newBoundsCenter.lat(),
      //     lng: newBoundsCenter.lng()
      //   };
      //
      //   const newState = {
      //     center: newCenter,
      //     zoom: this.refs.map.getZoom(),
      //     bounds: newBounds
      //   };
      //
      //   this.setState(newState);
      // }
  // }


  render(){


    var UNITED_STATES_BOUNDS = {

           north: 53.120405,
           south : 20.289374,
           west: -133.954091,
           east : -60.936939
         };
         var US = {lat: 37.090240, lng: -95.712891};


    return (
          <div>
                  <Map
                    google= {this.props.google}
                    initialCenter={ AUCKLAND }
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
  apiKey: (KEY)
})(MapContainer))





//this export needs to be wrapped with connect function
//data needs to passed into redux store
