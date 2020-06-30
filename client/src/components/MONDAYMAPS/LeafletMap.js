import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {latLngBounds} from 'leaflet'


class MapContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            lat: 40.66,
            lng: -74.218,
            zoom: 8,
        }
    }


  render() {

    const setBounds = (e)=>{
      console.log(e)
    }




    const onClick =(e)=>{
      console.log(e)
      let clickInfo = {lat: e.latlng.lat , lng :e.latlng.lng , zoom: e.sourceTarget._zoom}
      console.log(clickInfo)

    }

    const position = [this.state.lat, this.state.lng];

        const style = {
            fillColor: '#F28F3B',
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.5
        }

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
