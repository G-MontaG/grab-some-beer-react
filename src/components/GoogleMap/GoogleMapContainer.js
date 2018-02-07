import React from 'react';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles/index';
import GoogleMapComponent from './GoogleMapComponent';
import ListItem from '../List/ListItem';

const styles = () => ({
  root: {
    position: 'relative',
    height: '95.2vh',
  },
  listFrame: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 400,
    overflow: 'scroll',
    padding: 3,
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    zIndex: 2,
  },
  mapFrame: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 400,
    bottom: 0,
  },
});

class GoogleMapContainer extends React.PureComponent {
  render() {
    const { app, user, classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.listFrame}>
          {app.list.map(item => (
            <ListItem key={item.id || item[0].id} item={item} isOnMap="true" />
          ))}
        </div>
        <GoogleMapComponent
          className={classes.mapFrame}
          user={user}
          list={app.list}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDM0zOC8J5eV6iz2J_6pNIAYN7sTZ5pFvE"
          loadingElement={<div className={classes.mapFrame} />}
          containerElement={<div />}
          mapElement={<div className={classes.mapFrame} />}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ app, user }) => ({ app, user });

const GoogleMapContainerWithStyles = withStyles(styles)(GoogleMapContainer);

export default connect(mapStateToProps)(GoogleMapContainerWithStyles);
