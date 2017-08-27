import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroupItem,
  FormControl,
  FormGroup,
  ControlLabel,
  Button
} from 'react-bootstrap';


const EditComment = props => {
  return (
    <ListGroupItem>
      <form onSubmit={props.onSubmitComment}>
        <FormGroup controlId="body">
          <ControlLabel srOnly>Comment Body</ControlLabel>
          <FormControl type="text"
                       value={props.comment.body}
                       bsSize="sm"
                       onChange={props.onChangeComment} />
        </FormGroup>
        <FormGroup controlId="author">
          <ControlLabel srOnly>Author</ControlLabel>
          <FormControl type="text"
            bsSize="sm"
                       value={props.comment.author}
                       onChange={props.onChangeAuthor} />
        </FormGroup>
        <span>
          <Button onClick={props.onCancelEdit} bsStyle="warning" bsSize="sm">
            Cancel
          </Button>
          <Button type="submit" bsStyle="success" bsSize="sm">
            Submit
          </Button>
        </span>
      </form>
    </ListGroupItem>
  );
};

EditComment.propTypes = {
  comment: PropTypes.object.isRequired,
  onChangeComment: PropTypes.func.isRequired,
  onChangeAuthor: PropTypes.func.isRequired,
  onCancelEdit: PropTypes.func.isRequired,
  onSubmitComment: PropTypes.func.isRequired
};

export default EditComment;
