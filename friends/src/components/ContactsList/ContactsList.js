import React, { Component } from 'react';
import ContactCard from '../ContactCard/ContactCard';
import './ContactsList.css';

class ContactsList extends Component {
  render() {
    return (
      <div className="ContactsList">
        {this.props.contacts.map(friend => (
          <ContactCard
            key={friend.id}
            contact={friend}
            updateContact={this.props.updateContact}
            deleteContact={this.props.deleteContact}
          />
        ))}
      </div>
    );
  }
}

export default ContactsList;
