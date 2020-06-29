import React from 'react'
import {connect} from 'react-redux'
import {getStatView, getAddressView} from '../actions'
// import {Map, GoogleApiWrapper} from 'google-maps-react';

import Geocode from "react-geocode"

const KEY = 'AIzaSyBCY6c-v9nP7P1sFZMKm-yaSMTaGFWA6gw'

Geocode.setApiKey(KEY);
Geocode.setLanguage("en");




class MapContainer extends React.Component {
//   constructor(props) {
//   // console.log(props.getStatView)
//   super(props)
//   // this.onClick = this.onClick.bind(this);
// }



componentDidMount(){
  this.renderMap()
}



  renderMap = () => {
     loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap")
     window.initMap = this.initMap


     // "https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&libraries=visualization"
   }



      initMap =()=> {

       var UNITED_STATES_BOUNDS = {
              north: 53.120405,  south : 20.289374,
              west: -133.954091, east : -60.936939
            };
            var US = {lat: 37.090240, lng: -95.712891};

            const map = new window.google.maps.Map(document.getElementById('map'), {
                  center: US,
                  zoom: 1,
                  restriction: { latLngBounds: UNITED_STATES_BOUNDS, strictBounds: true }
                })
                    //gets coords
                        map.addListener('click', (mapsMouseEvent)=>{
                          let zoom = map.getZoom()
                          // console.log(zoom)
                          // console.log(mapsMouseEvent.latLng.lat())
                           // console.log(mapsMouseEvent.ab.x , mapsMouseEvent.ab.y)
                           Geocode.fromLatLng(mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng()).then(
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

                        })


          }; //map init




      render(){

        return (
              <div id="map"  style={{height : '100%',  width : '100%'}}>  </div>

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


export default connect(null,  {getStatView , getAddressView} )(MapContainer)


//this export needs to be wrapped with connect function
//data needs to passed into redux store
