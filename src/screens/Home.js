import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Snackbar from 'material-ui/Snackbar';
import { withStyles } from 'material-ui/styles';
import { searchFoursquareCreator } from '../redux/actions/api.actions';

const styles = () => ({
  root: {
    alignItems: 'center',
  },
});

class Home extends React.Component {
  state = {
    snackbarOpen: false,
  };

  handleStartSearch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.sendSearchAction, this.handleUserBlockGeolocationRequest);
    } else {
      this.handleUserBlockGeolocationRequest();
    }
  };

  sendSearchAction = (position) => {
    searchFoursquareCreator({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  handleUserBlockGeolocationRequest = () => {
    this.setState({ snackbarOpen: true });
  };

  handleSnackbarClose = () => {
    this.setState({ snackbarOpen: false });
  };


  render() {
    const { classes } = this.props;
    const { snackbarOpen } = this.state;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Button raised color="accent" onClick={this.handleStartSearch}>
            Grab some beer
          </Button>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            autoHideDuration={2000}
            open={snackbarOpen}
            onClose={this.handleSnackbarClose}
            SnackbarContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Without geolocation we doesn't know where to search. Sorry :(</span>}
          />
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
