import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { GoogleMapContainer } from '../containers/google-map.container';
import AppBarContainer from '../containers/app-bar.container';

const styles = theme => ({

});

class List extends React.Component {
  state = {
    toggleButton: 'map'
  };

  handleToggleButton = () => {
    this.setState((prevState) => {
      return Object.assign(
        {},
        prevState,
        { toggleButton: (() => prevState.toggleButton === 'map' ? 'list' : 'map')() }
      );
    });
  };

  render() {
    const { classes } = this.props;
    const { toggleButton } = this.state;

    return (
      <div>
        <AppBarContainer handleToggleButton={this.handleToggleButton} />
        {toggleButton === 'map' && <Grid container>
          <Grid item xs={12}>
            <GoogleMapContainer />
          </Grid>
        </Grid>}
        {toggleButton === 'list' && <Grid container>
          <Grid item xs={12}>
            List
          </Grid>
        </Grid>}
      </div>
    );
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);
