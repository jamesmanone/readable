import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const Posts = props => {
  return (
    <div>
      <h2>Posts</h2>
      { props.posts.map(post => <Post post={ post } key={ post.id } />) }
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
