import React from 'react';
import { CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';

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

export default showCardContacts;
