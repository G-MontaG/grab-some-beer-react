import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import GoogleMapContainer from '../containers/google-map.container';
import ListContainer from '../containers/list.container';
import AppBarContainer from '../containers/app-bar.container';

const styles = theme => ({
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
  root: {
    boxSizing: 'border-box',
    padding: [[theme.spacing.unit, theme.spacing.unit * 2]],
    margin: [[0, 'auto']],
  },
});

class List extends React.Component {
  state = {
    toggleButton: 'list',
  };

  handleToggleButton = () => {
    function toggleButton(prevState) {
      return prevState.toggleButton === 'map' ? 'list' : 'map';
    }

    this.setState((prevState) => {
      Object.assign(
        {},
        this.state,
        { toggleButton: toggleButton(prevState) },
      );
    });
  };

  renderList() {
    const { classes, searchResults } = this.props;
    const { toggleButton } = this.state;

    if (searchResults.isLoading) {
      return <CircularProgress className={classes.progress} size={50} />;
    }

    if (searchResults.foursquareSearchResults) {
      if (toggleButton === 'map') {
        return <GoogleMapContainer />;
      }
      return <ListContainer />;
    }
  }

  render() {
    const { classes, searchResults } = this.props;
    const { toggleButton } = this.state;

    return (
      <div>
        <AppBarContainer handleToggleButton={this.handleToggleButton} />
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              {this.renderList(classes, searchResults, toggleButton)}
            </Grid>
          </Grid>
        </div>
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
