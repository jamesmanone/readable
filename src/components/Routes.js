import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/HomePage';
import Categories from './categories/CategoriesPage';
import Category from './category/CategoryPage';
import New from './new/NewPage';
import Post from './post/PostPage';
import Edit from './edit/EditPage';


class Routes extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/new" component={New} />
          <Route path="/categories" component={Categories} />
          <Route path="/post/:postId/edit" component={Edit} />
          <Route path="/:category/:postId" component={Post} />
          <Route path="/:category" component={Category} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
