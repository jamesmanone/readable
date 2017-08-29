import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import {
  changeBody,
  changeTitle,
  changeAuthor,
  changeCategory,
  submitPost
} from '../../actions/postFormActions';
import { pushAlert } from '../../actions/alertActions';
import PostForm from '../common/PostForm';

class NewPage extends Component {
  static propTypes = {
    changeBody: PropTypes.func.isRequired,
    changeTitle: PropTypes.func.isRequired,
    changeCategory: PropTypes.func.isRequired,
    changeAuthor: PropTypes.func.isRequired,
    submitPost: PropTypes.func.isRequired,
    pushAlert: PropTypes.func.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.object,
    categories: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired
  }

  onTitleChange = evt => this.props.changeTitle(evt.target.value);

  onBodyChange = evt => this.props.changeBody(evt.target.value);

  onCategoryChange = evt => this.props.changeCategory(evt.target.value);

  onAuthorChange = evt => this.props.changeAuthor(evt.target.value);

  onSubmitForm = evt => {
    evt.preventDefault();
    this.props.submitPost(this.props.history);
  }

  render() {
    const { title, body, author, category, categories } = this.props;
    return (
      <div>
        <h2>New Post</h2>
        <PostForm
          onTitleChange={this.onTitleChange}
          onBodyChange={this.onBodyChange}
          onAuthorChange={this.onAuthorChange}
          onCategoryChange={this.onCategoryChange}
          onSubmitForm={this.onSubmitForm}
          title={title}
          body={body}
          author={author}
          category={category}
          categories={categories}
         />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { title, body, author, category } = state.postForm;
  const { categories } = state.categories;
  return {
    title,
    body,
    author,
    category,
    categories
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    changeBody,
    changeTitle,
    changeAuthor,
    changeCategory,
    submitPost,
    pushAlert
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPage));
