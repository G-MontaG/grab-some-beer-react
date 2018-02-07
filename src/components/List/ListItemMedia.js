import React from 'react';
import { CardMedia } from 'material-ui/Card';
import Beer from '../../assets/images/pexels-photo-260922.jpeg';

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

export default showCardMedia;
