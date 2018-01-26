import React from 'react';
import Checkbox from 'material-ui/Checkbox';

export default ({ input }) => (
  <Checkbox
    checked={!!input.value}
    onChange={input.onChange}
  />
);
