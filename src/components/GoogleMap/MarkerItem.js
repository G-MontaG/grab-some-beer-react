/* global google */
import React from 'react';
import { Marker } from 'react-google-maps';
import { selectListItemCreator } from '../../redux/actions/app.actions';

class MarkerItem extends React.Component {
  constructor(props) {
    super(props);
    const { item } = props;
    if (!Array.isArray(item)) {
      this.state = { currentItem: item, isArray: false };
    } else {
      this.state = { currentItem: item[0], isArray: true };
    }
  }

  componentWillReceiveProps(nextProps) {
    const { item } = nextProps;
    if (!Array.isArray(item)) {
      this.setState({ currentItem: item, isArray: false });
    } else {
      this.setState({ currentItem: item[0], isArray: true });
    }
  }

  onMarkerClick = () => {
    selectListItemCreator(this.props.index);
    setTimeout(() => {
      selectListItemCreator(this.props.index);
    }, 3500);
  };

  render() {
    const { classes, index } = this.props;
    const { currentItem } = this.state;

    return (
      <Marker
        animation={currentItem.selected ? google.maps.Animation.BOUNCE : null}
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
