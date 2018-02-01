import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles/index';
import ListItemComponent from '../components/list-item.component';

const styles = () => ({});

class ListContainer extends React.Component {
  state = {};

  render() {
    const { searchResults } = this.props;

    return (
      <Fragment>
        <div>
          Foursquare
          {searchResults.foursquareSearchResults.map(item => (
            <ListItemComponent item={item} key={item.id} />
          ))}
          <br />
        </div>
        <div>
          Google
          {searchResults.googleSearchResults.map(item => (
            <ListItemComponent item={item} key={item.id} />
          ))}
          <br />
        </div>
        <div>
          Facebook
          {searchResults.facebookSearchResults.map(item => (
            <ListItemComponent item={item} key={item.id} />
          ))}
        </div>
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
