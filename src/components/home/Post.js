import React from 'react';
import PropTypes from 'prop-types';
import { makeDisplayDate } from '../../utils';
import { ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const Post = props => {
  const { post } = props;
  const timestamp = makeDisplayDate(post.createdAt);
  return (
    <ListGroupItem header={post.title} onClick={function() {props.history.push(`/post/${post.id}`);}}>
      {post.author} on {timestamp} <span className="pull-right">{post.voteScore > 0 ? "+" : ""}{post.voteScore}</span>
    </ListGroupItem>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Post;
