import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { makeDisplayDate } from '../../utils';
import Comments from './Comments';
import NewComment from './NewComment';
import { Col } from 'react-bootstrap';

const Post = props => {
  const {
    id,
    title,
    body,
    author,
    createdAt,
    comments,
    category,
    voteScore
  } = props.post;

  return (
    <div>
      <h1>{title}</h1>
      <div className="pull-right">
        <FontAwesome name="trash" onClick={() => props.onDeletePost(id)} />
        <FontAwesome name="arrow-down" onClick={() => props.onDownVote(id)} />
        <span className="slash">/</span>
        <FontAwesome name="arrow-up" onClick={() => props.onUpVote(id)} />
        <span className={voteScore < 0 ? 'vote-score negative' : 'vote-score positive'}>
          &nbsp;&nbsp;{voteScore < 0 ? voteScore : `+${voteScore}`}
        </span>
      </div>
      <p>{body}</p>
      <p><small>
        Written by {author} on {makeDisplayDate(createdAt)}
      </small></p>
      <hr />
      <Col md={5}>
        <Comments comments={comments}
                  onCommentUpVote={props.onCommentUpVote}
                  onCommentDownVote={props.onCommentDownVote}
                  onDeleteComment={props.onDeleteComment} />
        <hr />
        <NewComment comment={props.comment}
                    onCommentChange={props.onCommentChange}
                    onAuthorChange={props.onAuthorChange}
                    onCommentSubmit={props.onCommentSubmit} />
      </Col>

    </div>

  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired,
  onCommentSubmit: PropTypes.func.isRequired,
  onCommentChange: PropTypes.func.isRequired,
  onAuthorChange: PropTypes.func.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onDeletePost: PropTypes.func.isRequired,
  onCommentUpVote: PropTypes.func.isRequired,
  onCommentDownVote: PropTypes.func.isRequired,
  onDeleteComment: PropTypes.func.isRequired
};

export default Post;
