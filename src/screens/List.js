import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { CircularProgress }  from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import { GoogleMapContainer } from '../containers/google-map.container';
import AppBarContainer from '../containers/app-bar.container';
import { connect } from 'react-redux';

const styles = theme => ({
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
});

class List extends React.Component {
  state = {
    toggleButton: 'list'
  };

  handleToggleButton = () => {
    this.setState((prevState) => {
      return Object.assign(
        {},
        this.state,
        { toggleButton: (() => prevState.toggleButton === 'map' ? 'list' : 'map')() }
      );
    });
  };

  renderList(classes, searchResults, toggleButton) {
    if (searchResults.isLoading) {
      return <CircularProgress className={classes.progress} size={50} />;
    } else {
      if (toggleButton === 'map') {
        return <GoogleMapContainer />;
      } else {
        return 'List';
      }
    }
  }

  render() {
    const { classes, searchResults } = this.props;
    const { toggleButton } = this.state;

    return (
      <div>
        <AppBarContainer handleToggleButton={this.handleToggleButton} />
        <Grid container>
          <Grid item xs={12}>
            {this.renderList(classes, searchResults, toggleButton)}
          </Grid>
        </Grid>
      </div>
    );
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user, searchResults }) => ({
  user,
  searchResults
});

const ListWithStyles = withStyles(styles)(List);

export default connect(mapStateToProps)(ListWithStyles);
