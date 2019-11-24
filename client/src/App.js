import React, { Component } from "react";
import ApolloClient from 'apollo-boost'

import BookList from './Components/BookList'

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>Ninja's Reading List</h1>
        <BookList/>
      </div>
    );
  }
}

export default App;
