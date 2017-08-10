import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Navbar from './common/Navbar';
import RouterOutput from './Routes';
import { getAllPosts } from '../actions/postActions';
import { getAllCategories } from '../actions/categoryActions';

class App extends Component {
  componentDidMount() {
    this.props.posts.length || this.props.getAllPosts();
    this.props.categories.length || this.props.getAllCategories();
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
  categories: PropTypes.array,
  getAllPosts: PropTypes.func.isRequired,
  getAllCategories: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    categories: state.categories.categories
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getAllPosts,
    getAllCategories
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
