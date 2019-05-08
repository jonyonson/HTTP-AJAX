import React, { Component } from 'react';
import './NewContact.css';

class NewContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    age: null,
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(
      this.state.name,
      this.state.email,
      this.state.phone,
      this.state.age
    );
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="NewContact ContactCard">
        <form onSubmit={this.onSubmit}>
          <input
            className="NewContact__name"
            name="name"
            type="text"
            placeholder="First and Last Name"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <input
            name="email"
            type="email"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            placeholder="Email Address"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <input
            name="phone"
            type="tel"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            placeholder="Phone Number"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <input
            name="age"
            type="number"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            placeholder="Age"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="NewContact__button-group">
            <button
              className="NewContact__cancel-btn"
              onClick={this.props.hideForm}
            >
              Cancel
            </button>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewContact;
