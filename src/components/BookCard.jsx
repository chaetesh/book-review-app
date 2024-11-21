import { Link } from "react-router-dom";

const BookCard = ({ book }) => (
  <div className="max-w-sm w-full bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105">
    <img
      src={
        book.coverImage
          ? book.coverImage
          : "https://plus.unsplash.com/premium_vector-1715961962846-b3d272232abf?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
      alt={book.title}
      className="w-full h-64 object-cover rounded-lg mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105"
    />
    <h3 className="font-bold text-xl mb-2">{book.title}</h3>
    <p className="text-sm text-gray-200 mb-3">by {book.author}</p>
    <Link
      to={`/books/${book._id}`}
      className="text-yellow-400 hover:underline transform transition duration-300 ease-in-out hover:scale-110"
    >
      View Details
    </Link>
  </div>
);

export default BookCard;
