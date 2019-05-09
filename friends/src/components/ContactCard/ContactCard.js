import React from 'react';
import './ContactCard.css';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

const ContactCard = props => {
  // const {name,email,phone,ag}
  return (
    <div className="ContactCard">
      <div className="ContactCard__name">{props.contact.name}</div>
      <div className="ContactCard__email">{props.contact.email}</div>
      <div className="ContactCard__phone">{props.contact.phone}</div>
      <div className="ContactCard__age">age: {props.contact.age}</div>
      <div className="ContactCard__icons">
        <MdEdit className="edit-icon" size="20" />
        <MdDeleteForever
          className="delete-icon"
          size="22"
          onClick={() => props.deleteContact(props.contact.id)}
        />
      </div>
    </div>
  );
};

export default ContactCard;
