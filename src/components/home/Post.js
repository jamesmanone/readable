import React from 'react';
import PropTypes from 'prop-types';
import { makeDisplayDate } from '../../utils';
import { ListGroupItem, DropdownButton, MenuItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const Post = props => {
  const { post } = props;
  const { voteScore, id, title, createdAt, author, comments } = post;
  return (
    <ListGroupItem header={title} onClick={(evt) => {
      // Kill nav on vote click
      if(evt.target.className.includes('fa') &&
        !evt.target.className.includes('comments')) return;
      props.history.push(`/post/${post.id}`);
    }}>
      <span className="pull-left">{author} on {makeDisplayDate(createdAt)}</span>
      <span className="pull-right">
        <FontAwesome name="trash" onClick={() => props.onDeletePost(id)} />
        <FontAwesome name="comments" /><span className="mr10 grey">{comments.length}</span>
        <FontAwesome name="arrow-down" onClick={() => props.onDownVote(id)} />
        <span className="slash">/</span>
        <FontAwesome name="arrow-up" onClick={() => props.onUpVote(id)} />
        <span className={voteScore<0?'vote-score negative':'vote-score positive'}>
          {voteScore < 0 ? voteScore : `+${voteScore}`}
        </span>
      </span>
    </ListGroupItem>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onDeletePost: PropTypes.func.isRequired
};

export default Post;
