import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Col, Button } from 'react-bootstrap';

const NewComment = props => {

  return (
    <Col md={4}>
      <h4>New Comment</h4>
      <form onSubmit={props.onCommentSubmit}>
        <FormControl type="text"
                     placeholder="comment"
                     onChange={props.onCommentChange}
                     value={props.comment.comment} />
        <br />
        <FormControl type="text"
                     placeholder="author"
                     onChange={props.onAuthorChange}
                     value={props.comment.author} />
        <br />
        <Button bsStyle="success"
                type="submit"
                disabled={!(props.comment.comment && props.comment.author)}>
          Submit
        </Button>
      </form>
    </Col>
  );
};

NewComment.propTypes = {
  comment: PropTypes.object.isRequired,
  onCommentChange: PropTypes.func.isRequired,
  onAuthorChange: PropTypes.func.isRequired,
  onCommentSubmit: PropTypes.func.isRequired
};

export default NewComment;
