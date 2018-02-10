import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles/index';
import CloseIcon from 'material-ui-icons/Close';
import listItemStyle from './listItemStyles';
import showCardMedia from './ListItemMedia';
import showCardDistance from './ListItemDistance';
import showCardRating from './ListItemRating';
import showCardContacts from './ListItemContacts';
import showCardSourceType from './ListItemSourceType';
import capitalizeFirstLetter from '../../services/helper';
import { selectListItemCreator } from '../../redux/actions/app.actions';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    const { item } = props;
    if (!Array.isArray(item)) {
      this.state = { currentItem: item, isArray: false, anchorEl: null };
    } else {
      this.state = { currentItem: item[0], isArray: true, anchorEl: null };
    }
  }

  handleMenuOpen = (event) => {
    const { isArray } = this.state;
    if (isArray) {
      this.setState({ anchorEl: event.currentTarget });
    }
    return undefined;
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenuItemSelect = (e, selectedItemIndex) => {
    const { item } = this.props;
    this.setState({ anchorEl: null, currentItem: item[selectedItemIndex] });
  };

  handleClose = () => {
    selectListItemCreator(this.props.index);
  }

  showCloseButton() {
    return (<Button className={this.props.classes.cardCloseButton} onClick={this.handleClose}><CloseIcon /></Button>);
  }

  render() {
    const { classes, isOnMap } = this.props;
    const { currentItem } = this.state;

    return (
      <Card className={isOnMap ? classes.cardOnMap : classes.card}>
        {showCardSourceType(this)}
        {showCardMedia(currentItem, classes)}
        <CardContent>
          <div className={classes.cardTitleContainer}>
            <Typography type="title" component="h2" className={classes.cardTitle}>
              {capitalizeFirstLetter(currentItem.name)}
            </Typography>
            {showCardDistance(currentItem, classes)}
          </div>
          <div className={classes.cardRatingContainer}>
            {showCardRating(currentItem, classes)}
            {currentItem.rating &&
              <Typography type="body1" className={classes.cardCategories} style={currentItem.rating ? { float: 'right' } : {}}>
                {currentItem.categories.slice(0, 3).join(', ')}
              </Typography>}
          </div>
          <Typography className={classes.cardAbout}>{currentItem.about}</Typography>
          <Divider className={classes.cardDivider} />
          <Typography className={classes.cardAddress}>{currentItem.location.address}</Typography>
        </CardContent>
        {showCardContacts(currentItem, classes)}
        {isOnMap && this.showCloseButton()}
      </Card>
    );
  }
}

ListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  isOnMap: PropTypes.bool.isRequired,
  index: PropTypes.number,
};

export default withStyles(listItemStyle)(ListItem);
