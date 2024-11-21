import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBookReviews, addReview } from "../api";

const BookDetails = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: "", text: "" });
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data } = await fetchBookReviews(id);
        setReviews(data.reviews);
        calculateAverageRating(data.reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setReviews([]);
        setAverageRating(0);
      }
    };

    getReviews();
  }, [id]);

  const calculateAverageRating = (reviews) => {
    if (reviews.length > 0) {
      const total = reviews.reduce((sum, review) => sum + review.rating, 0);
      setAverageRating((total / reviews.length).toFixed(1)); // Average with 1 decimal point
    } else {
      setAverageRating(0);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: addedReview } = await addReview({
        bookId: id,
        ...newReview,
      });
      setReviews((prev) => [...prev, addedReview]); // Append new review
      calculateAverageRating([...reviews, addedReview]);
      setNewReview({ rating: "", text: "" });
      alert("Review added successfully!");
    } catch (error) {
      alert("Failed to add review.");
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center animate__animated animate__fadeIn">
        Book Reviews
      </h1>

      {/* Display Average Rating */}
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          Average Rating:{" "}
          <span className="text-indigo-600">{averageRating} / 5</span>
        </h2>
      </div>

      <div className="mb-8">
        {reviews && reviews.length > 0 ? (
          <ul className="space-y-4">
            {reviews.map((review, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-md shadow-lg transform transition duration-300 hover:scale-105"
              >
                <div className="flex justify-between items-center">
                  <strong className="text-lg text-indigo-600">
                    {review.rating} Stars
                  </strong>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <p className="mt-2 text-gray-700">{review.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">
            No reviews available for this book.
          </p>
        )}
      </div>

      <form
        onSubmit={handleReviewSubmit}
        className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Add a Review
        </h2>
        <div className="space-y-4">
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            value={newReview.rating}
            onChange={(e) =>
              setNewReview({ ...newReview, rating: parseFloat(e.target.value) })
            }
            className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 transition duration-200"
            min="1"
            max="5"
            required
          />
          <textarea
            name="text"
            placeholder="Write your review"
            value={newReview.text}
            onChange={(e) =>
              setNewReview({ ...newReview, text: e.target.value })
            }
            className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 transition duration-200"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookDetails;
