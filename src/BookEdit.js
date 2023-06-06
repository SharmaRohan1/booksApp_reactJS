import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, newTitle);
  };

  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label className="label">Title</label>
      <input
        className="input"
        type="text"
        onChange={handleChange}
        value={newTitle}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
