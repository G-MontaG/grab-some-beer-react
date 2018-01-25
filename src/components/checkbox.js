import React from 'react';
import Checkbox from 'material-ui/Checkbox';

export const renderCheckbox = ({ input }) => (
  <Checkbox
    checked={input.value ? true : false}
    onChange={input.onChange}
  />
);
