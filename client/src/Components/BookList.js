import React, { Component } from "react";
import { getBooksQuery } from "../Queries/queries";
import { graphql } from "react-apollo";

class BookList extends Component {
  displayBooks = () => {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading books...</div>;
    } else {
      return data.books.map(book => <li key={book.id}>{book.name}</li>);
    }
  };

  render() {
    return (
      <div id="book-list">
        <ul>{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
