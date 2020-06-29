import React from 'react'
import {connect} from 'react-redux'
import {getStatView, getAddressView} from '../actions'

import {Map, GoogleApiWrapper, HeatMap, Marker} from 'google-maps-react';

import Geocode from "react-geocode"

import keys from '../config/keys'

console.log(keys)

Geocode.setApiKey('AIzaSyBCY6c-v9nP7P1sFZMKm-yaSMTaGFWA6gw');
console.log(keys.googleApiKey)

Geocode.setLanguage("en");


const gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ];

  const positions = [
    { lat: 37.782551, lng: -122.445368 },
    { lat: 37.782745, lng: -122.444586 },
    { lat: 37.782842, lng: -122.443688 },
    { lat: 37.782919, lng: -122.442815 },
    { lat: 37.782992, lng: -122.442112 },
    { lat: 37.7831, lng: -122.441461 },
    { lat: 37.783206, lng: -122.440829 },
    { lat: 37.783273, lng: -122.440324 },
    { lat: 37.783316, lng: -122.440023 },
    { lat: 37.783357, lng: -122.439794 },
    { lat: 37.783371, lng: -122.439687 },
    { lat: 37.783368, lng: -122.439666 },
    { lat: 37.783383, lng: -122.439594 },
    { lat: 37.783508, lng: -122.439525 },
    { lat: 37.783842, lng: -122.439591 },
    { lat: 37.784147, lng: -122.439668 }
  ];




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


    // var mapOptions = {
    //   zoom: 13,
    //   center: new this.props.google.maps.LatLng(51.5,-0.11)
    // }
    // console.log(mapOptions)



    return (
          <div>
          <Map
            google={this.props.google}
            initialCenter={{ lat: 40.557171448551976, lng: -74.33444256656303 }}
            style={{ width: "100%", margin: "auto" }}
            className={"map"}
            zoom={10}
            onClick={this.onClick}
            mapOptions
          >

          <Marker
   title={'The marker`s title will appear as a tooltip.'}
   name={'SOMA'}
   position={{lat: 37.778519, lng: -122.405640}}

   />


          <HeatMap
          gradient={gradient}
          opacity={0.3}
          positions={positions}
          radius={20}
     />

          </Map>
          </div>
    );
  }
}




export default connect(null ,  {getStatView , getAddressView})(GoogleApiWrapper({
  apiKey: ('AIzaSyBCY6c-v9nP7P1sFZMKm-yaSMTaGFWA6gw'),
  libraries: ['visualization']
})(MapContainer))
