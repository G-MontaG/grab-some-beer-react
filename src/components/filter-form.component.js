import React from 'react';
import Button from 'material-ui/Button';
import { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles/index';
import { Field, reduxForm } from 'redux-form';
import renderTextField from './text-field';
import renderCheckbox from './checkbox';

const styles = () => ({});

const validate = values => {
  const errors = {};
  if (!values.query) {
    errors.query = 'Required';
  } else if (values.query.length > 15) {
    errors.query = 'Must be 15 characters or less';
  }
  return errors;
};

class FilterForm extends React.Component {
  state = {
    selectedOption: '',
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  };

  render() {
    const { handleSubmit, handleFilterClose } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Change filters</DialogTitle>
        <DialogContent>
          <Field
            name="query"
            component={renderTextField}
            autoFocus
            margin="dense"
            id="query"
            label="Search query"
            type="text"
            fullWidth
          />
          <FormGroup row>
            <FormControlLabel
              control={
                <Field name="employed" component={renderCheckbox} />
              }
              label="Option A"
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFilterClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Apply
          </Button>
        </DialogActions>
      </form>
    );
  }
}

const FilterFormWithStyles = withStyles(styles)(FilterForm);
FilterForm = reduxForm({
  // a unique name for the form
  form: 'filters',
  validate,
})(FilterFormWithStyles);

export default FilterForm;
