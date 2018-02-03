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
      image={`https://lit-headland-70957.herokuapp.com/api/google-places-photo?photoreference=${item.cover.photo_reference}`}
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
      <div className={classes.cardRating}>
        <Rating
          emptySymbol={<StarBorderIcon className={classes.cardStarIcon} />}
          fullSymbol={<StarIcon className={classes.cardStarIcon} />}
          initialRating={item.rating}
          readonly={true}
        />
        <Typography type="body1" className={classes.cardStarText}>{item.rating}</Typography>
      </div>
    );
  }
  return undefined;
};

const showCardContacts = (item, classes) => {
  let link = item.url || item.contact.website || item.contact.link;
  link = !link && item.contact.facebook ? `https://www.facebook.com/${item.contact.facebook}` : link;
  link = !link && item.contact.instagram ? `https://www.instagram.com/${item.contact.instagram}` : link;

  if (link && !link.includes('http') && !link.includes('https')) {
    link = `http://${link}`;
  }

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
          <Button
            href={link}
            target="_blank"
            className={classes.cardButton}
            style={{ marginLeft: 'auto' }}
          >
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
    </Card>
  );
};

ListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(listItemStyle)(ListItem);
