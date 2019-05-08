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

  addContact = () => {
    console.log('add contact');
  };

  searchContacts = searchTerm => {
    const friends = [...this.state.friends];
    const filteredFriends = friends.filter(friend => {
      return friend.name.toLowerCase().includes(searchTerm);
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

    let friends;
    if (this.state.filteredFriends.length > 0) {
      friends = this.state.filteredFriends;
    } else {
      friends = this.state.friends;
    }
    return (
      <div className="App">
        <SearchBar
          searchContacts={this.searchContacts}
          addContact={this.addContact}
        />
        <NewContact />
        <ContactsList contacts={friends} />
      </div>
    );
  }
}

export default App;
