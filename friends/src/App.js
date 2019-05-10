import React, { Component } from 'react';
import axios from 'axios';
// import { Route } from 'react-router-dom';
import NewContact from './components/NewContact/NewContact';
import ContactsList from './components/ContactsList/ContactsList';
import SearchBar from './components/SearchBar/SearchBar';
import UpdateContact from './components/UpdateContact/UpdateContact';

import './App.css';

class App extends Component {
  state = {
    friends: [],
    updatedContact: null,
    filteredFriends: [],
    showNewContact: false,
    showUpdateContact: false,
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  addContact = contact => {
    axios
      .post('http://localhost:5000/friends', contact)
      .then(res => {
        this.setState({
          friends: res.data,
          showNewContact: false,
        });
      })
      .catch(err => console.log(err));
  };

  deleteContact = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  handleUpdate = contact => {
    // console.log(contact);
    this.setState({
      showUpdateContact: true,
      updatedContact: contact,
    });
  };

  updateContact = updatedContact => {
    axios
      .put(
        `http://localhost:5000/friends/${this.state.updatedContact.id}`,
        updatedContact
      )
      .then(res => {
        this.setState({
          friends: res.data,
          updatedContact: null,
          showUpdateContact: false,
        });
      })
      .catch(err => console.log(err));
  };

  showNewContactForm = () => {
    this.setState({ showNewContact: true });
  };

  hideNewContactForm = () => {
    this.setState({ showNewContact: false });
  };

  searchContacts = searchTerm => {
    const friends = [...this.state.friends];
    const filteredFriends = friends.filter(friend => {
      return friend.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (searchTerm.length > 0) {
      this.setState({ filteredFriends });
    } else {
      this.setState({ filteredFriends: [] });
    }
  };

  render() {
    const friends =
      this.state.filteredFriends.length > 0
        ? this.state.filteredFriends
        : this.state.friends;

    return (
      <div className="App">
        <SearchBar
          searchContacts={this.searchContacts}
          addContact={this.showNewContactForm}
        />
        {this.state.showNewContact && (
          <NewContact
            addContact={this.addContact}
            hideForm={this.hideNewContactForm}
          />
        )}
        {this.state.showUpdateContact && (
          <UpdateContact
            updateContact={this.updateContact}
            contact={this.state.updatedContact}
          />
        )}

        <ContactsList
          contacts={friends}
          handleUpdate={this.handleUpdate}
          deleteContact={this.deleteContact}
        />
        {/* <Route
          path="/contacts/:id"
          render={props => (
            <Contact
              {...props}
              contacts={friends}
              deleteContact={this.deleteContact}
            />
          )}
        /> */}
      </div>
    );
  }
}

export default App;
