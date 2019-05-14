import React, { Component } from 'react';
import './NewContact.css';

class NewContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    age: null,
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, phone, age } = this.state;
    const newContact = {
      name,
      email,
      age,
      phone,
    };
    this.props.addContact(newContact);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="NewContact ContactCard">
        <form className="NewContact__form" onSubmit={this.handleSubmit}>
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
            className="NewContact__email"
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
            className="NewContact__phone"
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
            className="NewContact__age"
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
            <div
              className="NewContact__cancel-btn"
              onClick={this.props.hideForm}
            >
              Cancel
            </div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewContact;
