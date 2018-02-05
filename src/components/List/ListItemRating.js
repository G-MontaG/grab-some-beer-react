import React from 'react';
import Typography from 'material-ui/Typography';
import Rating from 'react-rating';
import StarIcon from 'material-ui-icons/Star';
import StarBorderIcon from 'material-ui-icons/StarBorder';

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

export default showCardRating;
