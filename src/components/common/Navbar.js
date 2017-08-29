import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

class NavBar extends Component {

  static propTypes = {
    categories: PropTypes.array,
    history: PropTypes.object.isRequired
  };

  navigate = to => {
    this.props.history.push(to);
  };

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Readable</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem onSelect={() => this.navigate('/new')}>New Post</NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown title="Categories" id="categories">
              <MenuItem onSelect={() => this.navigate('/categories')}>All Categories</MenuItem>
              <MenuItem divider />
              {this.props.categories && this.props.categories.slice(0, 20).map(category => (
                <MenuItem key={category.id} onSelect={() => this.navigate(`/${category.name}`)}>{category.name}</MenuItem>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
