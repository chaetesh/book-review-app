import { useState } from "react";
import { addBook } from "../api.js";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    genre: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBook(formData);
      alert("Book added successfully");
    } catch (err) {
      alert("Error adding book");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 max-w-lg mx-auto mt-12 bg-white shadow-xl rounded-lg border border-gray-300 transform transition-all duration-300 ease-in-out hover:scale-105"
    >
      <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6 animate__animated animate__fadeIn">
        Add a New Book
      </h2>

      <div className="space-y-4">
        <input
          name="title"
          type="text"
          placeholder="Book Title"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
        />

        <input
          name="author"
          type="text"
          placeholder="Author Name"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
        />

        <input
          name="isbn"
          type="text"
          placeholder="ISBN Number"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
        />

        <input
          name="genre"
          type="text"
          placeholder="Genre"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
        />

        <input
          name="coverImage"
          type="text"
          placeholder="Cover Image URL"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
        />
      </div>

      <button
        type="submit"
        className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md w-full hover:bg-indigo-700 transition duration-300 ease-in-out"
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
