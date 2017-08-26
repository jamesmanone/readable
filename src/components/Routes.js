import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from './home/HomePage';
import Categories from './categories/CategoriesPage';
import New from './new/NewPage';
import Post from './post/PostPage';
import Edit from './edit/EditPage';


class Routes extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/categories" component={Categories} />
        <Route path="/new" component={New} />
        <Route exact path="/post/:postId" component={Post} />
        <Route path="/post/:postId/edit" component={Edit} />
      </div>
    );
  }
}

export default Routes;
