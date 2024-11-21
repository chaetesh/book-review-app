import React from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      await signup(formData);
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert("Signup failed. Please try again.");
    }
  };

  return <AuthForm onSubmit={handleSignup} title="Sign Up" />;
};

export default Signup;
