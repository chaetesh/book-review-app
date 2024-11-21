import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";
import AuthForm from "../components/AuthForm";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      // Call login API and extract token from the response
      const { data } = await login(formData);

      // Store the token in localStorage for session management
      localStorage.setItem("token", data.token);

      // Optional: Set user details if needed (e.g., username, email)
      // localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login successful!");

      // Navigate to the homepage after successful login
      navigate("/");

      // Reload the page after navigation
      window.location.reload();
    } catch (error) {
      // Handle any errors that occur during the login process
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
        <AuthForm onSubmit={handleLogin} title="Login" />
  );
};

export default Login;
