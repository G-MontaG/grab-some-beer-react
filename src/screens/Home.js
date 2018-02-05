import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import { connect } from 'react-redux';
import { searchCreator } from '../redux/actions/api.actions';
import { setUserLocationCreator } from '../redux/actions/user.actions';
import food from '../assets/images/food.png';

const styles = () => ({
  root: {
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '100vh',
    backgroundImage: `url(${food})`,
    margin: [[0, -8]],
  },
  buttonProgress: {
    color: red[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

class Home extends React.Component {
  state = {
    isLoad: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user && nextProps.user.position) {
      this.setState(Object.assign({}, this.state, { isLoad: false }));
      const { position } = nextProps.user;
      searchCreator({
        latitude: position.latitude,
        longitude: position.longitude,
      });
      nextProps.history.push('results');
    }
  }

  handleStartSearch = () => {
    this.setState(Object.assign({}, this.state, { isLoad: true }));
    setUserLocationCreator();
  };

  render() {
    const { classes } = this.props;
    const { isLoad } = this.state;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Button raised color="accent" onClick={this.handleStartSearch} disabled={isLoad}>
            Grab some beer
              {isLoad && <CircularProgress className={classes.buttonProgress} size={24} />}
          </Button>
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user }) => ({ user });

const HomeWithStyles = withStyles(styles)(Home);

export default connect(mapStateToProps)(HomeWithStyles);
