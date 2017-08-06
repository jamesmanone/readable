import React from 'react';
import PropTypes from 'prop-types';
import { makeDisplayDate } from '../../utils';

const Post = props => {
  const { post } = props;
  const timestamp = makeDisplayDate(post.timestamp);
  return (
    <div>
      <h3>{ post.title }</h3>
      <p>{ post.body }</p>
      <p><small>
        Posted by { post.author } on { timestamp } in { post.category }.
      </small></p>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
