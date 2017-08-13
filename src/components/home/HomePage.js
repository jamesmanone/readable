import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Posts from './Posts';
import { orderByDate, orderByVotes } from '../../actions/postActions';

class Home extends Component {
  componentDidMount() {
    this.props.orderBy.votes && this.props.orderByVotes();
    this.props.orderBy.date  && this.props.orderByDate();
  }

  render() {
    return (
      <Posts
        posts={ this.props.posts }
        orderByVotes={ this.props.orderByVotes }
        orderByDate={ this.props.orderByDate }
        orderBy={ this.props.orderBy } />
    );
  }
}

Home.propTypes = {
  posts: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  orderBy: PropTypes.object.isRequired,
  orderByDate: PropTypes.func.isRequired,
  orderByVotes: PropTypes.func.isRequired
};

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
    orderByDate
  }, dispatch);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
