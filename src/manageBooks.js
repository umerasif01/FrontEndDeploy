import React, { useState } from 'react';
import './manageBooks.css'
import axios from "axios"

const BookForm = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any additional validation or data processing here

    // Create the book object
    const book = {
      title: bookTitle,
      author,
      isbn
    };


    axios({
        url:"http://localhost:3001/manageBooks",
        method:"POST",
        data:book
      }).then(res=>{
        console.log(res.data)
      }).catch(err=>console.log(err))
    

    // Make the API call to add the book
    // You can use libraries like Axios or fetch for making the API request

    // Reset the form after submission
    setBookTitle('');
    setAuthor('');
    setIsbn('');
  };


  const handleUpdate = (e) => {
    e.preventDefault();

    // Perform any additional validation or data processing here

    // Create the book object
    const book = {
      title: bookTitle,
      author,
      isbn
    };

    // Make the API call to update the book
    // You can use libraries like Axios or fetch for making the API request

    // Reset the form after submission
    setBookTitle('');
    setAuthor('');
    setIsbn('');
  };

  const handleDelete = (e) => {
    e.preventDefault();

    // Perform any additional validation or data processing here

    // Make the API call to delete the book
    // You can use libraries like Axios or fetch for making the API request

    // Reset the form after submission
    setBookTitle('');
    setAuthor('');
    setIsbn('');
  };

  return (
    <div className='book-form'>
      <form onSubmit={handleSubmit}>
        <h2>Add Book</h2>
        <label htmlFor="bookTitle">Title:</label>
        <input
          type="text"
          id="bookTitle"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          required
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <label htmlFor="isbn">ISBN:</label>
        <input
          type="text"
          id="isbn"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
        />

        <button type="submit">Add Book</button>
      </form>

      <form onSubmit={handleUpdate}>
        <h2>Update Book</h2>
        {/* ... Update book fields similar to the add book form ... */}
        <button type="submit">Update Book</button>
      </form>

      <form onSubmit={handleDelete}>
        <h2>Delete Book</h2>
        {/* ... Delete book fields similar to the add book form ... */}
        <button type="submit">Delete Book</button>
      </form>

      <form onSubmit={handleUpdate}>
        <h2>Description</h2>
        {/* ... Update book fields similar to the add book form ... */}
        <button type="submit">Add Description</button>
      </form>
    </div>
  );
};

export default BookForm;
