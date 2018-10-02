import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import styled from 'styled-components';

class App extends Component {

  state = {
    active: true
  }

  removeForm = () => {
    this.setState({
      active: false
    })
  }

  persistUser = (username) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: username
      })
    }).then(function (response) { console.log(response); })
  }

  render() {
      if(this.state.active) {
          return < Form persistUser={this.persistUser} removeForm={this.removeForm}/>
      } else {
        return null
      }
  }
}

export default App;
