import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { getPost } from '../../actions/postPageActions';
import Post from './Post';

class PostPage extends Component {
  static propTypes = {
    post: PropTypes.object,
    match: PropTypes.object.isRequired,
    getPost: PropTypes.func.isRequired
  }

  componentDidMount() {
    const postId = this.props.match.params.postId;
    this.props.getPost(postId);
  }

  render() {
    return (
      <Post post={this.props.post.post} />
    );
  }

}

const mapStateToProps = state => {
  return {
    post: state.activePost,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getPost
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostPage));
