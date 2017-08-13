import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from './home/HomePage';
import Categories from './categories/CategoriesPage';
import New from './new/NewPage';


class Routes extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={ Home } />
        <Route path="/categories" component={Categories} />
        <Route path="/new" component={ New } />
      </div>
    );
  }
}

export default Routes;
