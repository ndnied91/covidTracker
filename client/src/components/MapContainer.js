import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {getStatView, getAddressView} from '../actions'


import mapboxgl from 'mapbox-gl'

import keys from '../config/keys'

import Geocode from "react-geocode"

Geocode.setApiKey(keys.googleApiKey);
Geocode.setLanguage("en");


mapboxgl.accessToken = 'pk.eyJ1IjoiZGFubnk5MSIsImEiOiJja2JvZXZ6NHEwMjQ0Mnl0cHFibHZ1OTk4In0.lFoZqkWg_0GW8U4zMIdI3w'

var bounds = [
     [-132.20714049463317 , 24.180932023716778], // Southwest coordinates
      [ -61.351383067012534 , 51.2747255463963 ] // Northeast coordinates,
   ];



class MapContainer extends React.Component {
  mapRef = React.createRef();
     constructor(props: Props) {
       super(props);
       this.state = {
         lng: -74.04728500751165,
         lat: 40.68392799015035,
         zoom: 1
       };
     }




 componentDidMount() {
    const { lng, lat, zoom  } = this.state;




    const map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom,
      maxBounds: bounds
    });

    map.on('click', (e) => {
      let zoom = Math.floor(map.getZoom()) //gets zoom level
            Geocode.fromLatLng(e.lngLat.lat, e.lngLat.lng).then(
              response => {
                  const address = response.results[0].formatted_address.replace(/,/g,"").split(' ').splice(-4) //ENTIRE ADDRESS to show

                    //depending on zoom level, different result will be shown to user
                      if(zoom >=8){
                        // City 9+ zoom
                        this.props.getAddressView(address.join(' '))
                        this.props.getStatView(response.results[0].formatted_address.replace(/,/g," ").split(' ').splice(-3)[0])
                      }
                      else if (zoom >=4 && zoom <=7){
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




    });
}






    render(){
      return (
      <div >
          <div className="mapboxgl-canvas"  style={{width: "100%" ,  height: "550px"}} ref={this.mapRef} />

      </div>
    );

  }
}





export default connect(null , {getStatView , getAddressView})(MapContainer)



// https://www.youtube.com/watch?v=JJatzkPcmoI
