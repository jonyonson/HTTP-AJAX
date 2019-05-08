import React from 'react';
import './ContactCard.css';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

const ContactCard = ({ contact }) => {
  return (
    <div className="ContactCard">
      <div className="ContactCard__name">{contact.name}</div>
      <div className="ContactCard__email">{contact.email}</div>
      <div className="ContactCard__phone">{contact.phone}</div>
      <div className="ContactCard__age">age: {contact.age}</div>
      <div className="ContactCard__icons">
        <MdEdit className="edit-icon" size="20" />
        <MdDeleteForever className="delete-icon" size="22" />
      </div>
    </div>
  );
};

export default ContactCard;
