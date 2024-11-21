import { useEffect, useState } from "react";
import { fetchBooks } from "../api.js";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const { data } = await fetchBooks();
      setBooks(data);
    };
    getBooks();
  }, []);

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 min-h-screen">
      <h1 className="text-4xl font-extrabold text-white text-center mb-8 animate__animated animate__fadeIn">
        Books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <div className="transform transition-all duration-300 ease-in-out hover:scale-105">
            <BookCard key={book._id} book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
