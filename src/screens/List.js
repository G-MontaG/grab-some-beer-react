import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import FilterList from 'material-ui-icons/FilterList';
import ViewList from 'material-ui-icons/ViewList';
import { withStyles } from 'material-ui/styles';
import { GoogleMapContainer } from '../containers/google-map.container';

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  toolbar: {
    'justify-content': 'space-between',
  },
  toggleButton: {
    float: 'right',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

class List extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Grid container>
              <Grid item xs={2}>
                <Button color="inherit">
                  <FilterList className={classes.leftIcon} /> Filters
                </Button>
              </Grid>
              <Grid item xs={8}></Grid>
              <Grid item xs={2} >
                <IconButton color="inherit" className={classes.toggleButton}>
                  <ViewList />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={12}>
            <GoogleMapContainer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);
