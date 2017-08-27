import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
import store from '../../store';
import {
  titleChange,
  bodyChange,
  categoryChange,
  authorChange,
  submitForm,
  setPost,
  getPost
} from '../../actions/editPostActions';
import { pushAlert } from '../../actions/alertActions';
import PostForm from '../common/PostForm';

class Edit extends Component {
  static propTypes = {
    post: PropTypes.object,
    posts: PropTypes.array,
    categories: PropTypes.array,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    setPost: PropTypes.func.isRequired,
    pushAlert: PropTypes.func.isRequired,
    titleChange: PropTypes.func.isRequired,
    bodyChange: PropTypes.func.isRequired,
    categoryChange: PropTypes.func.isRequired,
    authorChange: PropTypes.func.isRequired,
    submitForm: PropTypes.func.isRequired,
    getPost: PropTypes.func.isRequired
  }

  componentDidMount() {
    const postId = this.props.match.params.postId;
    const post = this.props.posts.filter(post => post.id === postId)[0];
    if(!post) this.props.getPost(postId);
    else this.props.setPost(post);
  }

  onTitleChange = evt => this.props.titleChange(evt.target.value)

  onBodyChange = evt => this.props.bodyChange(evt.target.value)

  onCategoryChange = evt => this.props.categoryChange(evt.target.value)

  onAuthorChange = evt => this.props.authorChange(evt.target.value)

  onSubmitForm = evt => {
    evt.preventDefault();
    const { title, author, body, category, id } = store.getState().editPost.post;
    if(!(title && author && body && category)) return this.props.pushAlert('danger', 'All Fields are required');
    if(!id) return this.props.pushAlert('danger', 'Something\'s gone awry. Please reload the page');
    this.props.submitForm({title, author, body, category, id}, this.props.history);
  }

  render() {
    const { title, author, body, category } = this.props.post;
    return (
      <div>
        <h1>Edit Post</h1>
        {(title || author || category || body) &&
          <PostForm title={title}
                    body={body}
                    author={author}
                    category={category}
                    categories={this.props.categories}
                    onTitleChange={this.onTitleChange}
                    onBodyChange={this.onBodyChange}
                    onCategoryChange={this.onCategoryChange}
                    onAuthorChange={this.onAuthorChange}
                    onSubmitForm={this.onSubmitForm} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state, {history, match}) => {
  return {
    post: state.editPost.post,
    posts: state.posts.posts,
    categories: state.categories.categories,
    match,
    history
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    titleChange,
    bodyChange,
    categoryChange,
    authorChange,
    submitForm,
    setPost,
    pushAlert,
    getPost
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
