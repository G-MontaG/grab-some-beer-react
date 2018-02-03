import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles/index';
import ListItem from './ListItem';

const styles = () => ({});

class ListContainer extends React.Component {
  state = {};

  render() {
    const { app } = this.props;

    return (
      <Grid container>
        {app.list.map(item => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={item.id || item[0].id}>
            <ListItem item={item} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

ListContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ app }) => ({ app });

const ListContainerWithStyles = withStyles(styles)(ListContainer);

export default connect(mapStateToProps)(ListContainerWithStyles);
