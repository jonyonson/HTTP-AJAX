import React from 'react';
import './ContactCard.css';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

class ContactCard extends React.Component {
  handleUpdate = e => {
    this.props.updateContact(this.props.contact);
  };

  render() {
    return (
      <div className="ContactCard">
        <div className="ContactCard__name">{this.props.contact.name}</div>
        <div className="ContactCard__email">{this.props.contact.email}</div>
        <div className="ContactCard__phone">{this.props.contact.phone}</div>
        <div className="ContactCard__age">age: {this.props.contact.age}</div>
        <div className="ContactCard__icons">
          <MdEdit className="edit-icon" size="20" onClick={this.handleUpdate} />
          <MdDeleteForever
            className="delete-icon"
            size="22"
            onClick={() => this.props.deleteContact(this.props.contact.id)}
          />
        </div>
      </div>
    );
  }
}

export default ContactCard;
