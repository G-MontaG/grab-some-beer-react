import React from 'react';
import TextField from 'material-ui/TextField';

export const renderTextField = ({
                                  input,
                                  label,
                                  meta: { touched, error },
                                  ...custom
                                }) => (
  <TextField
    label={label}
    error={touched && error}
    {...input}
    {...custom}
  />
);
