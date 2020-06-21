import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {getStatView, getAddressView} from '../actions'


import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFubnk5MSIsImEiOiJja2JvZXZ6NHEwMjQ0Mnl0cHFibHZ1OTk4In0.lFoZqkWg_0GW8U4zMIdI3w';

class MapContainer extends React.Component {

  mapRef = React.createRef();

 constructor(props: Props) {
   super(props);
   this.state = {
     lng: -74.871826,
     lat: 39.833851,
     zoom: 6
   };
 }

 componentDidMount() {
    const { lng, lat, zoom  } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
  });
});
}


_onClickMap(e) {
        console.log(e.lngLat);
    }


// mapboxgl-canvas


    render(){
      return (
      <div >
        <div class="mapboxgl-canvas"  style={{width: "904px" ,  height: "550px"}} ref={this.mapRef} />

      </div>
    );

  }
}





export default connect(null , {getStatView , getAddressView})(MapContainer)
