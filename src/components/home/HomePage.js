import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Posts from './Posts';

class Home extends Component {
  render() {
    return (
      <Posts posts={ this.props.posts } />
    );
  }
}

Home.propTypes = {
  posts: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    fetching: state.posts.fetching
  };
};

// mapDispatchToProps = dispatch =>

export default connect(mapStateToProps)(Home);
