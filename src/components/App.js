import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Navbar from './common/Navbar';
import RouterOutput from './Routes';
import { getAllPosts } from '../actions/postActions';

class App extends Component {
  componentDidMount() {
    this.props.posts.length || this.props.getAllPosts();
  }

  render() {
    return (
        <div>
          <Navbar />
          <RouterOutput />
        </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.array,
  getAllPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {posts: state.posts.posts};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getAllPosts
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
