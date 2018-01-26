import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles/index';

const styles = () => ({});

function ListItemComponent(props) {
  const { item } = props;
  return (
    <Card>
      <CardContent>
        <Typography>{item.name}</Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(ListItemComponent);
