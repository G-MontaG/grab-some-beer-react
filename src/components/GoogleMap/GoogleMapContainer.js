import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles/index';
import GoogleMapComponent from './GoogleMapComponent';

const styles = () => ({});

class GoogleMapContainer extends React.PureComponent {
  render() {
    const { app, user } = this.props;

    return (
      <GoogleMapComponent
        user={user}
        list={app.list}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDM0zOC8J5eV6iz2J_6pNIAYN7sTZ5pFvE"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '95.2vh' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    );
  }
}

const mapStateToProps = ({ app, user }) => ({ app, user });

const GoogleMapContainerWithStyles = withStyles(styles)(GoogleMapContainer);

export default connect(mapStateToProps)(GoogleMapContainerWithStyles);
