import React from 'react';
import { withStyles } from 'material-ui/styles/index';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import FilterList from 'material-ui-icons/FilterList';
import ViewList from 'material-ui-icons/ViewList';

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

function AppBarContainer(props) {
  const { classes, handleToggleButton } = props;

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Grid container>
          <Grid item xs={2}>
            <Button color="inherit">
              <FilterList className={classes.leftIcon} /> Filters
            </Button>
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={2}>
            <IconButton
              color="inherit"
              className={classes.toggleButton}
              onClick={handleToggleButton}
            >
              <ViewList />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(AppBarContainer);
