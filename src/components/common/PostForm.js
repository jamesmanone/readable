import React from 'react';
import PropTypes from 'prop-types';

const PostForm = props => {
  return (
    <form>
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label className="sr-only" htmlFor="title">Title</label>
            <input className="form-control"
                   type="text"
                   name="title"
                   id="title"
                   placeholder="Title"
                   onChange={props.onTitleChange} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label className="sr-only" htmlFor="author">Author</label>
            <input className="form-control"
                   type="text"
                   name="author"
                   id="author"
                   placeholder="Author"
                   onChange={props.onAuthorChange} />
          </div>
        </div>
      </div>
      <br />
      <textarea className="form-control"
                name="body"
                onChange={props.onBodyChange}
                rows="4" />
    </form>
  );
};

PostForm.propTypes = {
  onTitleChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onAuthorChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string
};

export default PostForm;
