import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../Queries/queries";

class BookDetails extends Component {
  displayBookDetails = () => {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <div>Other books by this author:</div>
          <ul className="other-books">
            {book.author.books.map(item => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else return <div>No book selected...</div>;
  };

  render() {
    return (
      <div id="book-details">
        <p>Book Details</p>
        {this.displayBookDetails()}
      </div>
    );
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
