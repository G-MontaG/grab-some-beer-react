import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles/index';

const styles = () => ({
  card: {
    'text-align': 'left',
  },
});

function ListItemComponent(props) {
  const { classes, item } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography>{item.name}</Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(ListItemComponent);
