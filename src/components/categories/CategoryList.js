import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const CategoryList = props => (
  <ListGroup>
    {props.categories && props.categories.map(category => (
      <ListGroupItem key={category.id}
                     onClick={() => props.history.push(`/${category.name}`)}>
        {category.name}
      </ListGroupItem>
    ))}
  </ListGroup>
);

CategoryList.propTypes = {
  categories: PropTypes.array,
  history: PropTypes.object.isRequired
};

export default CategoryList;
