import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  root: {
    alignItems: 'center',
  },
});

class List extends React.Component {
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

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);
