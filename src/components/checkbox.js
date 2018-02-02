import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const CustomCheckbox = ({ input }) => (
  <Checkbox
    checked={!!input.value}
    onChange={input.onChange}
  />
);

export default CustomCheckbox;
