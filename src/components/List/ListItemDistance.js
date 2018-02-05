import React from 'react';
import PlaceIcon from 'material-ui-icons/Place';
import Typography from 'material-ui/Typography';

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

export default showCardDistance;
