import { useState } from "react";

const AuthForm = ({ onSubmit, title }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center">
        {title}
      </h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        className="block w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        className="block w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg w-full hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>
      <p className="text-center mt-4 text-sm">
        Don't have an account?{" "}
        <a href="/signup" className="text-indigo-600 hover:text-indigo-700">
          Sign Up
        </a>
      </p>
    </form>
  );
};

export default AuthForm;
