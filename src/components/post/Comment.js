import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { makeDisplayDate } from '../../utils';

const Comment = props => {
  const { comment } = props;
  return (
    <ListGroupItem>
      {comment.body}
      <span className="pull-right">
        <FontAwesome name="pencil" onClick={() => props.onEdit(comment)} />
        <FontAwesome name="trash" onClick={() => props.onDeleteComment(comment)} />
        <br />
        <FontAwesome name="arrow-down" onClick={() => props.onDownVote(comment)} />
        <span className="slash">/</span>
        <FontAwesome name="arrow-up" onClick={() => props.onUpVote(comment)} />
        <span className={comment.voteScore < 0 ? "vote-score negative" : "vote-score positive"}>
          {comment.voteScore > 0 ? `+${comment.voteScore}` : comment.voteScore}
        </span>
      </span>
      <br />
      <small> by {comment.author} on {makeDisplayDate(comment.createdAt)}</small>
    </ListGroupItem>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default Comment;
