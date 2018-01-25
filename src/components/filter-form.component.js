import React from 'react';
import Button from 'material-ui/Button';
import { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles/index';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from './text-field';

const styles = () => ({});

class FilterForm extends React.Component {
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
})(FilterFormWithStyles);

export default FilterForm;
