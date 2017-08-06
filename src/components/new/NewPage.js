import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  changeBody,
  changeTitle,
  changeAuthor,
  changeCategory
} from '../../actions/postFormActions';
import PostForm from '../common/PostForm';

class NewPage extends Component {

  onTitleChange = evt => this.props.changeTitle(evt.target.value);

  onBodyChange = evt => this.props.changeBody(evt.target.value);

  onCategoryChange = evt => this.props.changeCategory(evt.target.value);

  onAuthorChange = evt => this.props.changeAuthor(evt.target.value);

  render() {
    const { title, body, author, category } = this.props;
    return (
      <div>
        <h2>New Post</h2>
        <PostForm
          onTitleChange={this.onTitleChange}
          onBodyChange={this.onBodyChange}
          onAuthorChange={this.onAuthorChange}
          onCategoryChange={this.onCategoryChange}
          title={title}
          body={body}
          author={author}
          category={category}
         />
      </div>
    );
  }
}

NewPage.propTypes = {
  changeBody: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  changeCategory: PropTypes.func.isRequired,
  changeAuthor: PropTypes.func.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string
};

const mapStateToProps = state => {
  const { title, body, author, category } = state.postForm;
  return {
    title,
    body,
    author,
    category
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    changeBody,
    changeTitle,
    changeAuthor,
    changeCategory
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewPage);
