import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home/HomePage';
import Categories from './categories/CategoriesPage';
import New from './new/NewPage';

const Routes = props => {
  return (
    <div className="container">
      <Route exact path="/" component={ Home } />
      <Route path="/categories" component={ Categories } />
      <Route path="/new" component={ New } />
    </div>
  );
};

export default Routes;
