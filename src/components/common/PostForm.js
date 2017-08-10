import React from 'react';
import PropTypes from 'prop-types';

const PostForm = props => {
  return (
    <form onSubmit={props.onSubmitForm}>
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
                   defaultValue={props.author}
                   type="text"
                   name="author"
                   id="author"
                   placeholder="Author"
                   onChange={props.onAuthorChange} />
          </div>
        </div>
        <div className="col-md-4">
          <select defaultValue={props.category}
                  className="form-control"
                  onChange={props.onCategoryChange}>
            <option value="" disabled>Category</option>
            { props.categories.length &&
              props.categories.map(category =>
              <option key={category} value={category}>{category}</option>) }
          </select>
        </div>
      </div>
      <br />
      <textarea className="form-control"
                name="body"
                onChange={props.onBodyChange}
                rows="4" />
      <br />
      <button className="btn btn-success pull-right" type="submit">Post</button>
    </form>
  );
};

PostForm.propTypes = {
  onTitleChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onAuthorChange: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  categories: PropTypes.array.isRequired
};

export default PostForm;
