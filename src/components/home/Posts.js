import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { Button, ButtonGroup, ListGroup, Clearfix } from 'react-bootstrap';

const Posts = props => {
  return (
    <div>
      <h2 className="pull-left">Posts</h2>
      <ButtonGroup bsClass="btn-group pull-right">
        <Button active={props.orderBy.votes} onClick={props.orderByVotes}>Votes</Button>
        <Button active={props.orderBy.date} onClick={props.orderByDate}>Date</Button>
      </ButtonGroup>
      <Clearfix />
      <ListGroup componentClass="div">
        {props.posts.length && props.posts.map(post => post.title && (
          <Post post={post}
                key={post.id}
                onUpVote={props.onUpVote}
                onDownVote={props.onDownVote}
                onDeletePost={props.onDeletePost}
                navToPost={props.navToPost}
                categories={props.categories} />)
        )}
      </ListGroup>
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  orderByDate: PropTypes.func.isRequired,
  orderByVotes: PropTypes.func.isRequired,
  orderBy: PropTypes.object.isRequired,
  navToPost: PropTypes.func.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onDeletePost: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

export default Posts;
