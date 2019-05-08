import React from 'react';
import './ContactCard.css';

const ContactCard = ({ contact }) => {
  return (
    <div className="ContactCard">
      <div className="ContactCard__name">{contact.name}</div>
      <div className="ContactCard__email">{contact.email}</div>
      <div className="ContactCard__phone">{contact.phone}</div>
      <div className="ContactCard__age">age: {contact.age}</div>
    </div>
  );
};

export default ContactCard;
