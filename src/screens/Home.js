import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { searchFoursquare } from '../redux/actions/api.actions';

const styles = () => ({
  root: {
    alignItems: 'center',
  },
});

class Home extends React.Component {
  handleStartSearch = () => {
    let userPosition = {};
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        userPosition = position;
        searchFoursquare({
          latitude: userPosition.coords.latitude,
          longitude: userPosition.coords.longitude,
        });
      });
    } else {
      console.log(userPosition);
    }
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
