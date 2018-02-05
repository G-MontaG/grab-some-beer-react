import React, { Fragment } from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import capitalizeFirstLetter from '../../services/helper';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import foursquare from '../../assets/images/Powered-by-Foursquare-one-color-300.png';
import google from '../../assets/images/powered_by_google_on_white_hdpi.png';
import facebook from '../../assets/images/FB-f-Logo__blue_58.png';

const showCardSourceType = (context) => {
  const { classes, item } = context.props;
  const { currentItem, isArray, anchorEl } = context.state;

  return (
    <Fragment>

      <div className={classes.cardSourceType}>
        {currentItem.sourceType === 'foursquare' &&
          <img
            src={foursquare}
            title="Powered by Foursquare"
            alt="Powered by Foursquare"
            className={classes.cardSourceTypeFoursquare}
          />}
        {currentItem.sourceType === 'google' &&
          <img
            src={google}
            title="Powered by Google"
            alt="Powered by Google"
            className={classes.cardSourceTypeGoogle}
          />}
        {currentItem.sourceType === 'facebook' &&
          <img
            src={facebook}
            title="Powered by Facebook"
            alt="Powered by Facebook"
            className={classes.cardSourceTypeFacebook}
          />}
        {isArray &&
          <Button
            size="small"
            aria-owns={anchorEl ? 'source-type-menu' : null}
            aria-haspopup="true"
            onClick={context.handleMenuOpen}
            className={classes.cardSourceTypeButton}
          >
            <MoreVertIcon />
          </Button>
        }
      </div>
      {isArray &&
        <Menu
          id="source-type-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={context.handleMenuClose}
        >
          {item.map((sourceItem, index) => <MenuItem key={sourceItem.id} onClick={e => context.handleMenuItemSelect(e, index)}>{capitalizeFirstLetter(sourceItem.sourceType)}</MenuItem>)}
        </Menu>
      }
    </Fragment>
  );
};

export default showCardSourceType;
