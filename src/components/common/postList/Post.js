import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeDisplayDate } from '../../../utils';
import { ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const Post = props => {
  const { post } = props;
  const { voteScore, id, title, createdAt, author, comments } = post;
  const category = props.categories.filter(cat => cat.id === post.category.id)[0];
  return (
    <ListGroupItem header={title} onClick={(evt) => props.navToPost(evt, post.id)}>
      <span className="pull-left">
        By {author} on {makeDisplayDate(createdAt)} {(category && `in ${category.name}`)  || ''}
      </span>
      <span className="pull-right">
        <Link to={`/post/${id}/edit`}><FontAwesome name="pencil" /></Link>
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
  categories: PropTypes.array.isRequired,
  navToPost: PropTypes.func.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onDeletePost: PropTypes.func.isRequired
};

export default Post;
