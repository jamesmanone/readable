import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Posts from '../common/postList/Posts';
import {
  orderByDate,
  orderByVotes,
  upVote,
  downVote,
  deletePost
} from '../../actions/postActions';

class Home extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    orderBy: PropTypes.object.isRequired,
    orderByDate: PropTypes.func.isRequired,
    orderByVotes: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    upVote: PropTypes.func.isRequired,
    downVote: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    categories: PropTypes.array
  };

  componentDidMount() {
    if(this.props.orderBy.votes) this.props.orderByVotes();
    else if(this.props.orderBy.date) this.props.orderByDate();
  }

  navToPost = (evt, postId, category) => {
    // Kill navToPost for vote clicks
    if(evt.target.className.includes('fa') &&
      !evt.target.className.includes('comments')) return;
    this.props.history.push(`/${category}/${postId}`);
  }

  render() {
    return (
      <Posts posts={this.props.posts}
             onUpVote={this.props.upVote}
             onDownVote={this.props.downVote}
             onDeletePost={this.props.deletePost}
             orderByVotes={this.props.orderByVotes}
             orderByDate={this.props.orderByDate}
             orderBy={this.props.orderBy}
             categories={this.props.categories}
             title="Posts"
             navToPost={this.navToPost} />
    );
  }
}

const mapStateToProps = ({posts, categories}, {history}) => {
  return {
    posts: posts.posts,
    fetching: posts.fetching,
    orderBy: posts.orderBy,
    categories: categories.categories,
    history
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    orderByVotes,
    orderByDate,
    upVote,
    downVote,
    deletePost
  }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Home);
