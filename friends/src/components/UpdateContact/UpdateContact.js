import React from 'react';

class UpdateContact extends React.Component {
  state = {
    name: this.props.contact.name,
    age: this.props.contact.age,
    email: this.props.contact.email,
    phone: this.props.contact.phone,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const updatedContact = this.state;
    // console.log(updatedContact);
    this.props.updateContact(updatedContact);
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
            // defaultValue={this.props.contact.name}
            value={this.state.name}
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
            // defaultValue={this.props.contact.email}
            value={this.state.email}
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
            // defaultValue={this.props.contact.phone}
            value={this.state.phone}
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
            // defaultValue={this.props.contact.age}
            value={this.state.age}
            onChange={this.handleChange}
          />
          <div className="NewContact__button-group">
            {/* <div
              className="NewContact__cancel-btn"
              onClick={this.props.hideForm}
            >
              Cancel
            </div> */}
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateContact;
