/* global google */
import React from 'react';
import { Marker } from 'react-google-maps';

class MarkerItem extends React.Component {
  constructor(props) {
    super(props);
    const { item } = props;
    if (!Array.isArray(item)) {
      this.state = { currentItem: item, isArray: false, isActive: null };
    } else {
      this.state = { currentItem: item[0], isArray: true, isActive: null };
    }
  }

  onMarkerClick = () => {
    if (this.state.isActive) {
      this.setState({ isActive: null });
    } else {
      this.setState({ isActive: google.maps.Animation.BOUNCE });
    }
  };

  render() {
    const { classes, index } = this.props;
    const { currentItem, isActive } = this.state;

    return (
      <Marker
        animation={isActive}
        defaultPosition={{
          lat: currentItem.location.lat,
          lng: currentItem.location.lng,
        }}
        defaultTitle={currentItem.name}
        defaultZIndex={index}
        onClick={this.onMarkerClick}
      />
    );
  }
}

export default MarkerItem;
