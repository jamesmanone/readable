import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { getPost } from '../../actions/postPageActions';
import {
  changeComment,
  submitComment,
  changeAuthor
} from '../../actions/commentActions';
import { pushAlert } from '../../actions/alertActions';
import { upVote, downVote, deletePost } from '../../actions/postActions';
import Post from './Post';
import store from '../../store';

class PostPage extends Component {
  static propTypes = {
    post: PropTypes.object,
    match: PropTypes.object.isRequired,
    getPost: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
    changeComment: PropTypes.func.isRequired,
    changeAuthor: PropTypes.func.isRequired,
    submitComment: PropTypes.func.isRequired,
    pushAlert: PropTypes.func.isRequired,
    upVote: PropTypes.func.isRequired,
    downVote: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount() {
    const postId = this.props.match.params.postId;
    this.props.getPost(postId);
  }

  onCommentChange = evt => this.props.changeComment(evt.target.value);

  onAuthorChange = evt => this.props.changeAuthor(evt.target.value);

  onCommentSubmit = evt => {
    evt.preventDefault();
    const { comment, author } = store.getState().comment;
    const post = store.getState().activePost.post.id;
    if(!(comment && author)) {
      this.props.pushAlert('danger', 'Enter a comment and your name');
    } else {
      this.props.submitComment({body: comment, author, post});
    }
  };

  onDeletePost = postId => {
    this.props.deletePost(postId);
    this.props.history.push('/');
  }

  render() {
    return (this.props.post.post && (
      <Post post={this.props.post.post}
            onDeletePost={this.onDeletePost}
            onUpVote={this.props.upVote}
            onDownVote={this.props.downVote}
            comment={this.props.comment}
            onCommentChange={this.onCommentChange}
            onAuthorChange={this.onAuthorChange}
            onCommentSubmit={this.onCommentSubmit} />
    )) || null;
  }

}

const mapStateToProps = state => {
  return {
    post: state.activePost,
    comment: state.comment
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getPost,
  deletePost,
  changeComment,
  submitComment,
  changeAuthor,
  pushAlert,
  upVote,
  downVote
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostPage));
