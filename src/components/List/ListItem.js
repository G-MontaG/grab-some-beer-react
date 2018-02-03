import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent, CardMedia, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import PlaceIcon from 'material-ui-icons/Place';
import StarIcon from 'material-ui-icons/Star';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import Rating from 'react-rating';
import { withStyles } from 'material-ui/styles/index';
import listItemStyle from './listItemStyles';
import Beer from '../../assets/images/beer.jpg';

const showCardMedia = (item, classes) => {
  if (item.sourceType === 'facebook' && item.cover && item.cover.source) {
    return (<CardMedia
      className={classes.cardMedia}
      image={item.cover.source}
      title={item.name}
    />);
  } else if (item.sourceType === 'google') {
    return (<CardMedia
      className={classes.cardMedia}
      image={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.cover.photo_reference}&key=AIzaSyDM0zOC8J5eV6iz2J_6pNIAYN7sTZ5pFvE`}
      title={item.name}
    />);
  }
  return (<CardMedia
    className={classes.cardMedia}
    image={Beer}
    title={item.name}
  />);
};

const showCardDistance = (item, classes) => {
  if (item.location.distance) {
    return (
      <div className={classes.cardDistance}>
        <PlaceIcon className={classes.cardDistanceIcon} />
        <Typography type="body1" className={classes.cardDistanceText}>{item.location.distance}m</Typography>
      </div>
    );
  }
  return undefined;
};

const showCardRating = (item, classes) => {
  if (item.rating) {
    return (
      <Fragment>
        <Rating
          emptySymbol={<StarBorderIcon className={classes.cardStarIcon} />}
          fullSymbol={<StarIcon className={classes.cardStarIcon} />}
          initialRating={item.rating}
          readonly={true}
        />
        <Typography type="body1" className={classes.cardStarText}>{item.rating}</Typography>
      </Fragment>
    );
  }
  return undefined;
};

const showCardContacts = (item, classes) => {
  const link = item.contact.website || item.contact.link || item.contact.facebook;
  if (item.contact.phone || link) {
    return (
      <CardActions>
        {item.contact.phone &&
          <Button
            href={`tel://${item.contact.phone}`}
            className={classes.cardButton}
          >
            {item.contact.phone}
          </Button>
        }
        {link &&
          <Button href={link} target="_blank" className={classes.cardButton}>
            website
          </Button>
        }
      </CardActions>
    );
  }
  return undefined;
};

const ListItem = (props) => {
  const { classes, item } = props;

  let currentItem = item;
  if (!Array.isArray(item)) {
    currentItem = item;
  } else {
    [currentItem] = item;
  }

  return (
    <Card className={classes.card}>
      {showCardMedia(currentItem, classes)}
      <CardContent>
        <div className={classes.cardTitleContainer}>
          <Typography type="title" component="h2" className={classes.cardTitle}>
            {currentItem.name}
          </Typography>
          {showCardDistance(currentItem, classes)}
        </div>
        {showCardRating(currentItem, classes)}
        <Typography className={classes.cardAbout}>{currentItem.about}</Typography>
        <Divider className={classes.cardDivider} />
        <Typography className={classes.cardAddress}>{currentItem.location.address}</Typography>
      </CardContent>
      {showCardContacts(currentItem, classes)}
    </Card>
  );
};

ListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(listItemStyle)(ListItem);
