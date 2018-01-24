import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles/index';
import ListItemComponent from '../components/list-item.component';

const styles = () => ({});

class ListContainer extends React.Component {
  render() {
    const { searchResults } = this.props;

    return (
      <div>
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
      </div>
    );
  }
}

ListContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ searchResults }) => ({ searchResults });

const ListContainerWithStyles = withStyles(styles)(ListContainer);

export default connect(mapStateToProps)(ListContainerWithStyles);
