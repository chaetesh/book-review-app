import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white p-5 shadow-lg flex justify-between items-center rounded-sm transition-all duration-500 ease-in-out transform">
      <div className="font-extrabold text-3xl animate__animated animate__fadeIn animate__delay-1s">
        Book Review App
      </div>
      <div className="space-x-6">
        <Link
          to="/"
          className="hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Home
        </Link>
        <Link
          to="/add-book"
          className="hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Add Book
        </Link>
        <button
          onClick={handleLogout}
          className="hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
