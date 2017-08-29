import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';


const AddCategory = props => (
  <form onSubmit={props.onCategorySubmit}>
    <FormGroup controlId="Category">
      <ControlLabel srOnly>New Category</ControlLabel>
      <FormControl type="text"
                   bsSize="sm"
                   disabled={props.addPending}
                   value={props.newCategory}
                   onChange={props.onCategoryChange}
                   placeholder="Add new category" />
    </FormGroup>
    <span className="pull-right">
      <Button disabled={props.addPending} type="submit" bsSize="sm" bsStyle="success">Submit</Button>
    </span>
  </form>
);

AddCategory.propTypes = {
  newCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onCategorySubmit: PropTypes.func.isRequired,
  addPending: PropTypes.bool.isRequired
};

export default AddCategory;
