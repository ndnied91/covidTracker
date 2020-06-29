import React from 'react'
import {connect} from 'react-redux'
import {getStatView, getAddressView} from '../actions'
import {Map, GoogleApiWrapper} from 'google-maps-react';

import Geocode from "react-geocode"

const KEY = 'AIzaSyBCY6c-v9nP7P1sFZMKm-yaSMTaGFWA6gw'

Geocode.setApiKey(KEY);
Geocode.setLanguage("en");

class MapContainer extends React.Component {
  constructor(props) {
  // console.log(props.getStatView)
  super(props)
  // this.onClick = this.onClick.bind(this);
}


componentDidMount(){
  this.renderMap()
}






onClick(t,map,coord) {
  console.log('clicked')
  console.log(t)
  console.log(map)
  console.log(coord)
}












  renderMap = () => {
     loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap")
     window.initMap = this.initMap
   }

   initMap = () => {

     var UNITED_STATES_BOUNDS = {
            north: 53.120405,
            south : 20.289374,
            west: -133.954091,
            east : -60.936939
          };
          var US = {lat: 37.090240, lng: -95.712891};


       const map = new window.google.maps.Map(document.getElementById('map'), {
             center: US,
             zoom: 3,
             restriction: { latLngBounds: UNITED_STATES_BOUNDS, strictBounds: true }
           })
     }






      render(){
        // return (
        //     <div id="map"
        //     <Map
        //       google= {this.props.google}
        //       style={{height : '100%',  width : '100%'}}
        //
        //       >
        //
        //
        //
        //       </Map>
        // </div>
        // );
        return (
              <div id="map" style={{height : '100%',  width : '100%'}}>
                      <Map
                        google= {this.props.google}
                        className={"map"}
                        zoom={10}
                        onClick={this.onClick}
                      >


                      </Map>
              </div>
        );

    }

}





function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}


export default MapContainer


//this export needs to be wrapped with connect function
//data needs to passed into redux store
