import React, { Component } from 'react';
import axios from 'axios';

import NewContact from './components/NewContact/NewContact';
import ContactsList from './components/ContactsList/ContactsList';
import SearchBar from './components/SearchBar/SearchBar';

import './App.css';

class App extends Component {
  state = {
    friends: [],
    filteredFriends: [],
    showNewContact: false,
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({
          friends: response.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addContact = contact => {
    axios
      .post('http://localhost:5000/friends', contact)
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data,
          showNewContact: false,
        });
      })
      .catch(err => console.log(err));
  };

  deleteItem = id => {
    axios
      .delete(`http://localhost:3333/items/${id}`)
      .then(res => {
        this.setState({ items: res.data });
        this.props.history.push('/item-list');
      })
      .catch(err => console.log(err));
  };

  deleteContact = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
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
    // if (this.state.friends.length === 0) {
    //   return <h1>Loading...</h1>;
    // }

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
        <ContactsList contacts={friends} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
