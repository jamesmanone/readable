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


class Category extends Component {
  static propTypes = {
    posts: PropTypes.array,
    history: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    orderByVotes: PropTypes.func.isRequired,
    orderByDate: PropTypes.func.isRequired,
    upVote: PropTypes.func.isRequired,
    downVote: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    orderBy: PropTypes.object.isRequired
  }

  componentDidMount() {
    if(this.props.orderBy.votes) this.props.orderByVotes();
    else if(this.props.orderBy.date) this.props.orderByDate();
  }

  navToPost = (evt, postId) => {
    // Kill navToPost for vote clicks
    if(evt.target.className.includes('fa') &&
      !evt.target.className.includes('comments')) return;
    this.props.history.push(`/${this.props.category}/${postId}`);
  }

  render() {
    const category = this.props.categories.filter(category => category.name === this.props.category)[0];
    return (
      <Posts posts={this.props.posts.filter(post => post.category.id === category.id)}
             onUpVote={this.props.upVote}
             onDownVote={this.props.downVote}
             onDeletePost={this.props.deletePost}
             orderByVotes={this.props.orderByVotes}
             orderByDate={this.props.orderByDate}
             orderBy={this.props.orderBy}
             categories={this.props.categories}
             title={category.name}
             navToPost={this.navToPost} />
    );
  }

}

const mapStateToProps = ({posts, categories}, ownProps) => {
  return {
    posts: posts.posts,
    orderBy: posts.orderBy,
    history: ownProps.history,
    category: ownProps.match.params.category,
    categories: categories.categories
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    orderByDate,
    orderByVotes,
    upVote,
    downVote,
    deletePost
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Category);
