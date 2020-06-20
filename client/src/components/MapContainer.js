import React from 'react'

import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import Geocode from "react-geocode"

Geocode.setApiKey("AIzaSyBcWHZndb-Ui5SmuZIiJ2IpjO-U_Tgkavg");
Geocode.setLanguage("en");


class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(t, map, coord) {

    const { latLng } = coord;
    //WE CAN ALSO GET ZOOM LEVEL HERE TOO
    const lat = latLng.lat();
    const lng = latLng.lng();
    let coords = {lat , lng}
    console.log(coords)


  Geocode.fromLatLng(lat, lng).then(
        response => {
        const address = response.results[0].formatted_address;
        console.log(address);
        },
        error => {
          console.error(error);
        }
        );
  }

  render() {
    return (
          <div>
            <h1 className="text-center">My Maps</h1>
                  <Map
                    google={this.props.google}
                    style={{ width: "80%", margin: "auto" }}
                    className={"map"}
                    zoom={14}
                    onClick={this.onClick}
                  >
                  </Map>
          </div>
    );
  }
}


// export default Map
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBcWHZndb-Ui5SmuZIiJ2IpjO-U_Tgkavg')
})(MapContainer)
