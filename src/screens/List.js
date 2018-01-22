import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { GoogleMapContainer } from '../containers/google-map.container';

const styles = () => ({

});

class List extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <GoogleMapContainer />
        </Grid>
      </Grid>
    );
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);
