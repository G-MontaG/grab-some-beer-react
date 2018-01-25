import React, { Fragment } from 'react';
import TextField from 'material-ui/TextField';

export const renderTextField = ({
                                  input,
                                  label,
                                  meta: { touched, error },
                                  ...custom
                                }) => (
  <Fragment>
    <TextField
      label={label}
      error={touched && !!error}
      {...input}
      {...custom}
    />
    {touched && (error && <span>{error}</span>)}
  </Fragment>
);
