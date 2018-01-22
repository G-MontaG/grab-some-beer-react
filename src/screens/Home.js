import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { searchFoursquareCreator } from '../redux/actions/api.actions';
import { errorCreator } from '../redux/actions/error.actions';

const styles = () => ({
  root: {
    alignItems: 'center',
  },
});

class Home extends React.Component {
  handleStartSearch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.sendSearchAction,
        () => errorCreator("Without geolocation we doesn't know where to search. Sorry :("));
    } else {
      errorCreator("Your browser doesn't support geolocation. Sorry :(");
    }
  };

  sendSearchAction = (position) => {
    searchFoursquareCreator({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Button raised color="accent" onClick={this.handleStartSearch}>
            Grab some beer
          </Button>
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
