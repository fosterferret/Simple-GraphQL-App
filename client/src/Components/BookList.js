import React, { Component } from "react";
import { getBooksQuery } from "../Queries/queries";
import { graphql } from "react-apollo";
import BookDetails from "./BookDetails";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  displayBooks = () => {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading books...</div>;
    } else {
      return data.books.map(book => (
        <li
          key={book.id}
          onClick={() => this.setState({ selected: book.id })}
          style={{ cursor: "pointer" }}
          className="book-list-list"
        >
          {book.name}
        </li>
      ));
    }
  };

  render() {
    return (
      <div id="book-list">
        <ul>{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
