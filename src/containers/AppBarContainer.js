import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles/index';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography/Typography';
import ViewList from 'material-ui-icons/ViewList';
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../components/CustomTextField';
const styles = theme => ({
  appBar: {
    width: '100%',
    backgroundColor: '#D9663F',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  toggleButton: {
    float: 'right',
  },
  queryField: {
    display: 'inline-block',
    maxWidth: 400,
    '& > div > input': {
      color: '#fff',
      fontSize: 18,
      '@media (max-width: 768px)': {
        fontSize: 14,
      },
    },
    '& > div': {
      color: '#fff',
    },
    '& > div:before': {
      backgroundColor: 'rgba(255, 255, 255, 0.42) !important',
    },
  },
  queryFieldLabel: {
    display: 'inline-block',
    color: '#fff',
    fontSize: 18,
    fontWeight: 600,
    marginRight: 15,
    '@media (max-width: 768px)': {
      fontSize: 14,
    },
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
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container>
            <Grid item xs={10}>
              <Typography className={classes.queryFieldLabel}>Search: </Typography>
              <Field
                className={classes.queryField}
                name="query"
                component={renderTextField}
                autoFocus
                margin="dense"
                id="query"
                type="text"
                fullWidth
              />
            </Grid>
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
}

AppBarContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const AppBarContainerWithStyles = withStyles(styles)(AppBarContainer);
AppBarContainer = reduxForm({
  form: 'filters',
})(AppBarContainerWithStyles);

export default AppBarContainer;
