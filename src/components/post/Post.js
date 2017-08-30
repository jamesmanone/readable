import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    voteScore
  } = props.post;
  let category;
  if(props.post && props.post.category) {
    category = props.categories.filter(category => category.id === props.post.category.id)[0];
  }

  return (
    props.post.title && (
    <div>
      <h1>{title}</h1>
      <div className="pull-right">
        <Link to={`/post/${id}/edit`}><FontAwesome name="pencil" /></Link>
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
        Written by {author} on {makeDisplayDate(createdAt)} in {category && category.name}
      </small></p>
      <hr />
      <Col md={5}>
        <Comments />
        <hr />
        <NewComment comment={props.comment}
                    onCommentChange={props.onCommentChange}
                    onAuthorChange={props.onAuthorChange}
                    onCommentSubmit={props.onCommentSubmit} />
      </Col>

    </div>

  ) || <FontAwesome name="spinner" spin /> );
};

Post.propTypes = {
  post: PropTypes.object,
  comment: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  onCommentSubmit: PropTypes.func.isRequired,
  onCommentChange: PropTypes.func.isRequired,
  onAuthorChange: PropTypes.func.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onDeletePost: PropTypes.func.isRequired
};

export default Post;
