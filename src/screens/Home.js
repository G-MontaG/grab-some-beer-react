import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography/Typography';
import { searchCreator } from '../redux/actions/api.actions';
import { setUserLocationCreator } from '../redux/actions/user.actions';
import styles from './Home.style';

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
          <div className={classes.titleContainer}>
            <Typography className={classes.title}>GRAB<br />SOME<br />BEER</Typography>
            <Button raised color="accent" size="large" className={classes.button} onClick={this.handleStartSearch} disabled={isLoad}>
              Grab some beer
              {isLoad && <CircularProgress className={classes.buttonProgress} size={25} />}
            </Button>
          </div>
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
