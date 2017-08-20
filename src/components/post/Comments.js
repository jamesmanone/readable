import React from 'react';
import PropTypes from 'prop-types';


const Comments = props => {
  return (
    <div>
      {props.comments && props.comments.map(comment =>
        <p key={comment.id}>{comment.body}<small>by {comment.author}</small></p>
      )}
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array
};

export default Comments;
