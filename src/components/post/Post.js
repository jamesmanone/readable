import React from 'react';
import PropTypes from 'prop-types';
import { makeDisplayDate } from '../../utils';
import Comments from './Comments';

const Post = props => {
  const {
    title,
    body,
    author,
    createdAt,
    comments,
    category
  } = props.post;

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <p><small>
        Written by {author} on {makeDisplayDate(createdAt)}
      </small></p>
      <hr />
      <Comments comments={comments} />
    </div>

  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
