import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles/index';
import ListItemComponent from '../components/list-item.component';

const styles = () => ({});

class ListContainer extends React.Component {
  state = {};

  render() {
    const { app } = this.props;

    return (
      <Fragment>
        {app.list.map(item => (
          <ListItemComponent item={item} key={item.id} />
        ))}
      </Fragment>
    );
  }
}

ListContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ app }) => ({ app });

const ListContainerWithStyles = withStyles(styles)(ListContainer);

export default connect(mapStateToProps)(ListContainerWithStyles);
