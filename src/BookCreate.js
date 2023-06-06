import { useState } from "react";

function BookCreate({ onBookCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onBookCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleFormSubmit}>
        <label className="label">Title</label>
        <input
          value={title}
          onChange={handleChange}
          type="text"
          className="input"
        />
        <button className="button"> Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
