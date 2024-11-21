import axios from "axios";

const API = axios.create({
  baseURL: "https://book-management-backend-x1qt.onrender.com/api",
});

// Attach the token to each request if present
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const login = (data) => API.post("/auth/login", data);
export const signup = (data) => API.post("/auth/signup", data);

export const fetchBooks = () => API.get("/books");
export const addBook = (data) => API.post("/books", data);

export const fetchBookReviews = (bookId) => API.get(`/reviews/${bookId}`);
export const addReview = (data) => API.post("/reviews", data);

export default API;
