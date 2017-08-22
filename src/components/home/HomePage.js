import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Posts from './Posts';
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
    deletePost: PropTypes.func.isRequired
  };

  componentDidMount() {
    if(this.props.orderBy.votes) this.props.orderByVotes();
    else if(this.props.orderBy.date) this.props.orderByDate();
  }

  render() {
    return (
      <Posts
        posts={this.props.posts}
        onUpVote={this.props.upVote}
        onDownVote={this.props.downVote}
        onDeletePost={this.props.deletePost}
        orderByVotes={this.props.orderByVotes}
        orderByDate={this.props.orderByDate}
        orderBy={this.props.orderBy}
        history={this.props.history} />
    );
  }
}

const mapStateToProps = ({posts}) => {
  return {
    posts: posts.posts,
    fetching: posts.fetching,
    orderBy: posts.orderBy
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
