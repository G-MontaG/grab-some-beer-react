import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import MarkerItem from './MarkerItem';

const GoogleMapComponent = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{
      lat: props.user.position.latitude,
      lng: props.user.position.longitude,
    }}
    defaultOptions={{
      zoomControl: true,
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      minZoom: 14,
      maxZoom: 20,
    }}
  >
    {props.list.map((item, index) => (
      <MarkerItem
        key={item.id || item[0].id}
        item={item}
        index={index}
      />
    ))}
  </GoogleMap>
)));

export default GoogleMapComponent;
