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
import { upVote, downVote } from '../../actions/postActions';
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
    downVote: PropTypes.func.isRequired
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

  onUpVote = () => {
    const postId = store.getState().activePost.post.id;
    this.props.upVote(postId);
  };

  onDownVote = () => {
    const postId = store.getState().activePost.post.id;
    this.props.downVote(postId);
  };

  render() {
    return (
      <Post post={this.props.post.post}
            onUpVote={this.onUpVote}
            onDownVote={this.onDownVote}
            comment={this.props.comment}
            onCommentChange={this.onCommentChange}
            onAuthorChange={this.onAuthorChange}
            onCommentSubmit={this.onCommentSubmit}/>
    );
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
  changeComment,
  submitComment,
  changeAuthor,
  pushAlert,
  upVote,
  downVote
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostPage));
