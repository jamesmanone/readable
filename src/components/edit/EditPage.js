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
  setPost
} from '../../actions/editPostActions';
import { pushAlert } from '../../actions/alertActions';
import PostForm from '../common/PostForm';

class Edit extends Component {
  static propTypes = {
    post: PropTypes.object,
    categories: PropTypes.array,
    match: PropTypes.object.isRequired,
    setPost: PropTypes.func.isRequired,
    pushAlert: PropTypes.func.isRequired,
    titleChange: PropTypes.func.isRequired,
    bodyChange: PropTypes.func.isRequired,
    categoryChange: PropTypes.func.isRequired,
    authorChange: PropTypes.func.isRequired,
    submitForm: PropTypes.func.isRequired
  }

  componentDidMount() {
    const postId = this.props.match.params.postId;
    const post = store.getState().posts.posts.filter(post => post.id = postId)[0];
    if(post) this.props.setPost({...post});
    else this.props.pushAlert('danger', 'Post not found');
  }

  onTitleChange = evt => this.props.titleChange(evt.target.value)

  onBodyChange = evt => this.props.bodyChange(evt.target.value)

  onCategoryChange = evt => this.props.categoryChange(evt.target.value)

  onAuthorChange = evt => this.props.authorChange(evt.target.value)

  onSubmitForm = evt => {
    evt.preventDefaut();
    const { title, author, body, category, id } = store.getState().editPost.post;
    if(!(title && author && body && category)) return this.props.pushAlert('danger', 'All Fields are required');
    if(!id) return this.props.pushAlert('danger', 'Something\'s gone awry. Please reload the page');
    this.props.submitForm({title, author, body, category, id});
  }

  render() {
    const { title, author, body, category } = this.props.post;
    return (
      <div>
        <h1>Edit Post</h1>
        {title && <PostForm title={title}
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

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.editPost.post,
    categories: state.categories.categories,
    match: ownProps.match
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
    pushAlert
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
