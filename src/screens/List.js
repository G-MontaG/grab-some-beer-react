import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import GoogleMapContainer from '../components/GoogleMap/GoogleMapContainer';
import ListContainer from '../components/List/ListContainer';
import AppBarContainer from '../containers/AppBarContainer';
import styles from './List.styles';

class List extends React.Component {
  state = {
    toggleButton: 'list',
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
