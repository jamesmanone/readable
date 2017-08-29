import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { Button, ButtonGroup, ListGroup, Clearfix } from 'react-bootstrap';

const Posts = props => {
  return (
    <div>
      <h2 className="pull-left">{props.title}</h2>
      <ButtonGroup bsClass="btn-group pull-right">
        <Button active={props.orderBy.votes} onClick={props.orderByVotes}>Votes</Button>
        <Button active={props.orderBy.date} onClick={props.orderByDate}>Date</Button>
      </ButtonGroup>
      <Clearfix />
      <ListGroup componentClass="div">
        {props.posts.map(post => {
          return (<Post post={post}
                        key={post.id}
                        onUpVote={props.onUpVote}
                        onDownVote={props.onDownVote}
                        onDeletePost={props.onDeletePost}
                        navToPost={props.navToPost}
                        categories={props.categories} />);
        })}
        {props.posts.length === 0 && <h3>No posts to show now.</h3>}
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
  categories: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default Posts;
