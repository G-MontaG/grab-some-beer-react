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
import beer from '../assets/images/pexels-photo-681847.jpg';

const styles = () => ({
  root: {
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '100vh',
    backgroundImage: `url(${beer})`,
    backgroundSize: 'cover',
    backgroundPositionX: 'left',
    backgroundPositionY: '65%',
    margin: [[0, -8]],
    '& > div': {
      width: '100%',
    },
  },
  title: {
    fontFamily: 'Holtwood One SC, serif',
    fontSize: 80,
    color: '#fff',
    lineHeight: '1.15',
    '@media (min-width: 1920px)': {
      fontSize: 200,
    },
    '@media (min-width: 1366px) and (max-width: 1919px)': {
      fontSize: 150,
    },
    '@media (min-width: 1025px) and (max-width: 1365px)': {
      fontSize: 130,
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      fontSize: 100,
    },
  },
  titleContainer: {
    '@media (min-width: 1025px)': {
      paddingRight: 50,
      float: 'right',
      textAlign: 'right',
    },
  },
  button: {
    marginTop: 20,
    minHeight: 40,
    '@media (min-width: 1920px)': {
      fontSize: 25,
      minHeight: 51,
    },
    '@media (min-width: 1366px) and (max-width: 1919px)': {
      fontSize: 23,
      minHeight: 49,
    },
    '@media (min-width: 1025px) and (max-width: 1365px)': {
      fontSize: 19,
      minHeight: 45,
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      fontSize: 18,
      minHeight: 43,
    },
  },
  buttonProgress: {
    color: '#fff',
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
