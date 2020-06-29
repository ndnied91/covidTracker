import React, { useState, useEffect } from "react";

// import { Map: LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet
// import { LeafletMap , Marker, Popup, TileLayer } from 'react-leaflet';
// const { Map, TileLayer, Marker, Popup } = window.ReactLeaflet;
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {latLngBounds} from 'leaflet'

//
// var southWest = this.Map.latLng(40.712, -74.227),
//     northEast = this.Map.latLng(40.774, -74.125),
//     bounds = this.Map.latLngBounds(southWest, northEast);
//


class MapContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            lat: 40.66,
            lng: -74.218,
            zoom: 8,

            // maxBounds: Map.latLngBounds(southWest, northEast);
        }
    }


  render() {

    console.log(latLngBounds)


    const setBounds = (e)=>{
      console.log(e)
    }


    const onClick =(e)=>{
      console.log(e)
      let clickInfo = {lat: e.latlng.lat , lng :e.latlng.lng , zoom: e.sourceTarget._zoom}
      console.log(clickInfo)

    }

    const position = [this.state.lat, this.state.lng];



    // const southWest = latLng(37.713159, -122.527084);
    //     const northEast = this.latLng(37.814666, -122.365723);
        // const bounds = this.latLngBounds(37.713159, -122.527084, 37.814666, -122.365723)

    return(
      <div>
                 <Map
                  style={{ height: "550px" , width: '100%' }}

                  center={position}
                  zoom={this.state.zoom}
                  onClick={(e)=>onClick(e)}
                  >




                   <TileLayer
                       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                       url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                   />

               </Map>

           </div>
    )

  }
}


export default MapContainer;
