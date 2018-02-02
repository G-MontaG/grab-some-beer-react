import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import PlaceIcon from 'material-ui-icons/Place';
import StarIcon from 'material-ui-icons/Star';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import amber from 'material-ui/colors/amber';
import grey from 'material-ui/colors/grey';
import Rating from 'react-rating';
import { withStyles } from 'material-ui/styles/index';

const styles = () => ({
  card: {
    textAlign: 'left',
    maxWidth: 400,
    margin: 20,
  },
  cardTitleContainer: {
    display: 'flex',
  },
  cardTitle: {
    flexGrow: 1,
    marginBottom: 10,
    fontSize: 19,
    fontWeight: 400,
  },
  cardDistance: {
    maxWidth: 70,
    minWidth: 45,
  },
  cardDistanceIcon: {
    verticalAlign: 'middle',
    height: 19,
    width: 19,
    color: grey[500],
  },
  cardDistanceText: {
    display: 'inline-block',
    verticalAlign: 'middle',
    fontSize: 14,
    fontWeight: 400,
    marginLeft: 2,
    color: grey[600],
  },
  cardStarIcon: {
    height: 16,
    width: 16,
    verticalAlign: 'middle',
    color: amber[500],
  },
  cardStarText: {
    display: 'inline-block',
    verticalAlign: 'middle',
    fontWeight: 400,
    marginLeft: 5,
  },
  cardAbout: {
    margin: [[10, 0, 10, 0]],
  },
  cardAddress: {
    margin: [[10, 0, 10, 0]],
  },
  media: {
    height: 194,
  },
});

const showCardMedia = (item, classes) => {
  if (item.sourceType === 'facebook' && item.cover && item.cover.source) {
    return (<CardMedia
      className={classes.media}
      image={item.cover.source}
      title={item.name}
    />);
  } else if (item.sourceType === 'google') {
    return (<CardMedia
      className={classes.media}
      image={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.cover.photo_reference}&key=AIzaSyDM0zOC8J5eV6iz2J_6pNIAYN7sTZ5pFvE`}
      title="Contemplative Reptile"
    />);
  }
  return undefined;
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
        <Rating emptySymbol={<StarBorderIcon className={classes.cardStarIcon} />} fullSymbol={<StarIcon className={classes.cardStarIcon} />} initialRating={item.rating} readonly="true" />
        <Typography type="body1" className={classes.cardStarText}>{item.rating}</Typography>
      </Fragment>
    );
  }
  return undefined;
};

const ListItemComponent = (props) => {
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
        <Divider />
        <Typography className={classes.cardAddress}>{currentItem.location.address}</Typography>
      </CardContent>
    </Card>
  );
};

ListItemComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemComponent);
