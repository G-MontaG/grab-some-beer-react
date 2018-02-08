import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles/index';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ViewList from 'material-ui-icons/ViewList';
import FilterForm from '../components/FilterForm';
import { connect } from 'react-redux';
import { searchCreator } from '../redux/actions/api.actions';

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
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

class AppBarContainer extends React.Component {
  submit = (values) => {
    const { user } = this.props;
    searchCreator({
      query: values.query,
      latitude: user.position.latitude,
      longitude: user.position.longitude,
    });
  };

  render() {
    const { classes, handleToggleButton } = this.props;

    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container>
            <Grid item xs={10}>
              <FilterForm onSubmit={this.submit} />
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

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(withStyles(styles)(AppBarContainer));
