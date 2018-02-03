import React from 'react';
import { withStyles } from 'material-ui/styles/index';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import FilterList from 'material-ui-icons/FilterList';
import ViewList from 'material-ui-icons/ViewList';
import Dialog from 'material-ui/Dialog';
import FilterForm from '../components/FilterForm';

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

class AppBarContainer extends React.Component {
  state = {
    open: false,
  };

  handleFilterOpen = () => {
    this.setState({ open: true });
  };

  handleFilterClose = () => {
    this.setState({ open: false });
  };

  submit = (values) => {
    console.log(values);
    this.handleFilterClose();
  };

  render() {
    const { classes, handleToggleButton } = this.props;

    return (
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Grid container>
            <Grid item xs={2}>
              <Button color="inherit" onClick={this.handleFilterOpen}>
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
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <FilterForm
            onSubmit={this.submit}
            handleFilterClose={this.handleFilterClose}
          />
        </Dialog>
      </AppBar>

    );
  }
}

export default withStyles(styles)(AppBarContainer);
