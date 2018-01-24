import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles/index';
import ListItemComponent from '../components/list-item.component';

const styles = () => ({});

class ListContainer extends React.Component {
  render() {
    const { classes, searchResults } = this.props;

    return (
      <Fragment>
        Foursquare
        {searchResults.foursquareSearchResults.map(item => (
          <ListItemComponent item={item} key={item.id} />
        ))}
        <br />
        Google
        {searchResults.googleSearchResults.map(item => (
          <ListItemComponent item={item} key={item.id} />
        ))}
        <br />
        Facebook
        {searchResults.facebookSearchResults.map(item => (
          <ListItemComponent item={item} key={item.id} />
        ))}
      </Fragment>
    );
  }
}

ListContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ searchResults }) => ({ searchResults });

const ListContainerWithStyles = withStyles(styles)(ListContainer);

export default connect(mapStateToProps)(ListContainerWithStyles);
