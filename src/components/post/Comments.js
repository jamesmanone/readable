import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { makeDisplayDate } from '../../utils';


const Comments = props => {
  return (
    <ListGroup>
      {props.comments && props.comments.map(comment =>
        <ListGroupItem key={comment.id}>
          {comment.body}
          <span className="pull-right">
            <FontAwesome name="trash" onClick={() => props.onDeleteComment(comment)} />
            <FontAwesome name="arrow-down" onClick={() => props.onCommentDownVote(comment)} />
            <span className="slash">/</span>
            <FontAwesome name="arrow-up" onClick={() => props.onCommentUpVote(comment)} />
            <span className={comment.voteScore < 0 ? "vote-score negative" : "vote-score positive"}>
              {comment.voteScore > 0 ? `+${comment.voteScore}` : comment.voteScore}
            </span>
          </span>
          <br />
          <small> by {comment.author} on {makeDisplayDate(comment.createdAt)}</small>
        </ListGroupItem>
      )}
    </ListGroup>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
  onCommentUpVote: PropTypes.func.isRequired,
  onCommentDownVote: PropTypes.func.isRequired,
  onDeleteComment: PropTypes.func.isRequired
};

export default Comments;
