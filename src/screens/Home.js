import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { searchCreator } from '../redux/actions/api.actions';
import { setUserLocationCreator } from '../redux/actions/user.actions';
import { connect } from 'react-redux';
import './Home.css';

const styles = () => ({
  root: {
    alignItems: 'center',
  },
});

class Home extends React.Component {
  handleStartSearch = () => {
    setUserLocationCreator();
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if(nextProps.user && nextProps.user.position) {
      let position = nextProps.user.position;
      searchCreator({
        latitude: position.latitude,
        longitude: position.longitude,
      });
      // nextProps.history.push('results');
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="HomeComponent">
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Button raised color="accent" onClick={this.handleStartSearch}>
              Grab some beer
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(withStyles(styles)(Home));
