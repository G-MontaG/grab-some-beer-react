import React from 'react';
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
    left: 25,
    bottom: 25,
    width: 400,
    zIndex: 2,
    '@media (max-width: 768px)': {
      left: '50%',
      bottom: 30,
      transform: 'translateX(-50%)',
      width: 300,
    },
  },
  mapFrame: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});

class GoogleMapContainer extends React.PureComponent {
  renderSelectedListItem() {
    const selectedItem = this.props.app.list.find((item) => {
      if (!Array.isArray(item)) {
        return item.selected;
      }
      return item[0].selected;
    });
    return selectedItem ? <ListItem key={selectedItem.id || selectedItem[0].id} item={selectedItem} isOnMap="true" /> : undefined;
  }

  render() {
    const { app, user, classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.listFrame}>
          {this.renderSelectedListItem()}
        </div>
        <GoogleMapComponent
          className={classes.mapFrame}
          user={user}
          list={app.list}
          googleMapURL="https://lit-headland-70957.herokuapp.com/api/google-places-map"
          loadingElement={<div className={classes.mapFrame} />}
          containerElement={<div className={classes.mapFrame} />}
          mapElement={<div className={classes.mapFrame} />}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ app, user }) => ({ app, user });

const GoogleMapContainerWithStyles = withStyles(styles)(GoogleMapContainer);

export default connect(mapStateToProps)(GoogleMapContainerWithStyles);
