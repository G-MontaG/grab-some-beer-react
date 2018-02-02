import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import PlaceIcon from 'material-ui-icons/Place';
import StarIcon from 'material-ui-icons/Star';
import StarBorderIcon from 'material-ui-icons/StarBorder';
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
  },
  cardDistance: {
    maxWidth: 70,
    minWidth: 45,
  },
  cardDistanceIcon: {
    verticalAlign: 'middle',
    height: 20,
    width: 20,
  },
  cardDistanceText: {
    display: 'inline-block',
    verticalAlign: 'middle',
    fontWeight: 500,
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
      image="/static/images/cards/paella.jpg"
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
        <Typography
          type="body1"
          className={classes.cardDistanceText}
        >{item.location.distance}
        </Typography>
      </div>
    );
  }
  return undefined;
};

const showCardRating = (item, classes) => {
  if (item.rating) {
    return (
      <Rating emptySymbol={<StarBorderIcon />} fullSymbol={<StarIcon />} initialRating={item.rating} readonly="true" />
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
      </CardContent>
    </Card>
  );
};

ListItemComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemComponent);
