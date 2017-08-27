import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CategoryList from './CategoryList';
import AddCategory from './AddCategory';
import { addCategory, changeCategory } from '../../actions/categoryActions';

class Categories extends Component {

  static propTypes = {
    categories: PropTypes.array,
    newCategory: PropTypes.string.isRequired,
    addPending: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
    addCategory: PropTypes.func.isRequired,
    changeCategory: PropTypes.func.isRequired
  }

  onCategoryChange = evt => this.props.changeCategory(evt.target.value)

  onCategorySubmit = evt => {
    evt.preventDefault();
    this.props.addCategory();
  }

  render() {
    return (
      <div>
        <h2>Categories</h2>
        <CategoryList categories={this.props.categories}
                      history={this.props.history} />
        <AddCategory newCategory={this.props.newCategory}
                     addPending={this.props.addPending}
                     onCategoryChange={this.onCategoryChange}
                     onCategorySubmit={this.onCategorySubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories.categories,
    newCategory: state.addCategory.category.name,
    addPending: state.addCategory.pending,
    history: ownProps.history
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addCategory,
    changeCategory
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
