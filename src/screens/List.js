import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import GoogleMapContainer from '../components/GoogleMap/GoogleMapContainer';
import ListContainer from '../components/List/ListContainer';
import AppBarContainer from '../containers/AppBarContainer';

const styles = theme => ({
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  listRoot: {
    boxSizing: 'border-box',
    padding: [[theme.spacing.unit, theme.spacing.unit * 2]],
    margin: [[0, 'auto']],
    minHeight: 'calc(100vh - 64px)',
    position: 'relative',
    paddingTop: 72,
  },
  mapRoot: {
    boxSizing: 'border-box',
    padding: 0,
    margin: [[0, 'auto']],
    minHeight: 'calc(100vh - 64px)',
    position: 'relative',
    paddingTop: 64,
  },
});

class List extends React.Component {
  state = {
    toggleButton: 'map',
  };

  componentWillMount() {
    const { user, searchResults } = this.props;
    if (!searchResults.isLoading && !user.position) {
      this.props.history.push('');
    }
  }

  handleToggleButton = () => {
    function toggleButton(prevState) {
      return prevState.toggleButton === 'map' ? 'list' : 'map';
    }

    this.setState(prevState => ({ toggleButton: toggleButton(prevState) }));
  };

  renderList() {
    const { classes, searchResults, app } = this.props;
    const { toggleButton } = this.state;

    if (searchResults.isLoading) {
      return <CircularProgress className={classes.progress} size={50} />;
    }

    if (app.list) {
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
        <div className={toggleButton === 'map' ? classes.mapRoot : classes.listRoot} >
          {this.renderList(classes, searchResults, toggleButton)}
        </div>
      </div>
    );
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user, searchResults, app }) => ({
  user,
  searchResults,
  app,
});

const ListWithStyles = withStyles(styles)(List);

export default connect(mapStateToProps)(ListWithStyles);
