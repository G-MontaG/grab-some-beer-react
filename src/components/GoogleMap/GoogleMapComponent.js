import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

const GoogleMapComponent = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{
      lat: -34.397,
      lng: 150.644,
    }}
    options={{
      zoomControl: true,
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
    }}
  >
    {props.isMarkerShown &&
    <Marker
      position={{
        lat: -34.397,
        lng: 150.644,
      }}
      onClick={props.onMarkerClick}
    />}
  </GoogleMap>
)));

export default GoogleMapComponent;
