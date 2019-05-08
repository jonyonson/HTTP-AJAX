import React, { Component } from 'react';
import ContactCard from '../ContactCard/ContactCard';
import axios from 'axios';
import './ContactsList.css';

class ContactsList extends Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.friends.length === 0) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="ContactsList">
        {this.state.friends.map(friend => (
          <ContactCard key={friend.id} contact={friend} />
        ))}
      </div>
    );
  }
}

export default ContactsList;
