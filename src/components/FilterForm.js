import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles/index';
import { Field, reduxForm } from 'redux-form';
import Typography from 'material-ui/Typography/Typography';
import renderTextField from './CustomTextField';

const styles = () => ({
  queryField: {
    display: 'inline-block',
    maxWidth: 400,
    fontWeight: 500,
    '& > div > input': {
      color: '#fff',
      fontSize: 18,
      '@media (max-width: 768px)': {
        fontSize: 14,
      },
    },
    '& > div': {
      color: '#fff',
    },
    '& > div:before': {
      backgroundColor: 'rgba(255, 255, 255, 0.42) !important',
    },
  },
  queryFieldLabel: {
    display: 'inline-block',
    color: '#fff',
    fontSize: 18,
    fontWeight: 600,
    marginRight: 15,
    '@media (max-width: 768px)': {
      fontSize: 14,
    },
  },
});

function FilterForm({ classes, handleSubmit, handleFilterClose }) {
  return (
    <form noValidate onSubmit={handleSubmit}>
      <Typography className={classes.queryFieldLabel}>Search: </Typography>
      <Field
        className={classes.queryField}
        name="query"
        component={renderTextField}
        margin="dense"
        id="query"
        type="text"
        fullWidth
      />
    </form>
  );
}

FilterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const FilterFormWithStyles = withStyles(styles)(FilterForm);
FilterForm = reduxForm({
  form: 'filters',
})(FilterFormWithStyles);

export default FilterForm;
