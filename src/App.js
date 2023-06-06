import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

function App() {
  const [books, setBooks] = useState([]);

  // const fetchBooks = async () => {
  //   const response = await axios.get("http://localhost:3005/books");

  //   setBooks(response.data);
  // };

  // useEffect(() => {
  //   fetchBooks();
  // }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3005/books", {
      title: title
    });

    const updatedBooks = [...books, response.data];

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBooksById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookCreate onBookCreate={createBook} />
      <BookList
        books={books}
        onEdit={editBooksById}
        onDelete={deleteBookById}
      />
    </div>
  );
}

export default App;
