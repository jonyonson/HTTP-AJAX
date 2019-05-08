import React, { Component } from 'react';
import './SearchBar.css';
import { MdPersonAdd } from 'react-icons/md';

class SearchBar extends Component {
  state = {
    value: '',
  };

  onSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => this.props.searchContacts(this.state.value)
    );
  };

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__inner">
          <form onSubmit={this.onSubmit}>
            <input
              name="value"
              type="text"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              placeholder="Search"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
          <div
            className="SearchBar__add-contact"
            onClick={this.props.addContact}
          >
            <MdPersonAdd color="#FFF" size="32" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
