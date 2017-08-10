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
import PostForm from '../common/PostForm';
import store from '../../store';

class NewPage extends Component {

  onTitleChange = evt => this.props.changeTitle(evt.target.value);

  onBodyChange = evt => this.props.changeBody(evt.target.value);

  onCategoryChange = evt => this.props.changeCategory(evt.target.value);

  onAuthorChange = evt => this.props.changeAuthor(evt.target.value);

  onSubmitForm = async e => {
    e.preventDefault();
    await this.props.submitPost(store.getState().postForm);
    this.props.history.push('/');
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

NewPage.propTypes = {
  changeBody: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  changeCategory: PropTypes.func.isRequired,
  changeAuthor: PropTypes.func.isRequired,
  submitPost: PropTypes.func.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  categories: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

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
    submitPost
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPage));
