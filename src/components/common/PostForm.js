import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel, Col, Row } from 'react-bootstrap';

const PostForm = props => {
  return (
    <form onSubmit={props.onSubmitForm}>
      <Row>
        <Col md={4}>
          <FormGroup controlId="title">
            <ControlLabel srOnly>Title</ControlLabel>
            <FormControl type="text"
                         value={props.title}
                         name="title"
                         id="title"
                         placeholder="Title"
                         onChange={props.onTitleChange} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup controlId="author">
            <ControlLabel srOnly>Author</ControlLabel>
            <FormControl type="text"
                         value={props.author}
                         name="author"
                         id="author"
                         placeholder="Author"
                         onChange={props.onAuthorChange} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup controlId="category">
            <ControlLabel srOnly>Category</ControlLabel>
            <FormControl componentClass="select"
                         value={props.category.id}
                         onChange={props.onCategoryChange}>
              <option value="">Category</option>
              {props.categories.length &&
               props.categories.map(category =>
                 <option key={category.id} value={category.id}>{category.name}</option>
               )
              }
            </FormControl>
          </FormGroup>
        </Col>
      </Row>
      <br />
      <FormGroup controlId="body">
        <ControlLabel srOnly>Body</ControlLabel>
        <FormControl componentClass="textarea"
                     bsSize="lg"
                     value={props.body}
                     onChange={props.onBodyChange} />
      </FormGroup>
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
  category: PropTypes.object,
  categories: PropTypes.array.isRequired
};

export default PostForm;
