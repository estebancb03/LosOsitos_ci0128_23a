import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import backgroundImage from "../assets/images/playaDev.jpeg";

const TestimonialsAdmin = () => {
  const [reviews, setReviews] = useState([]);
  const [pendingReviews, setPendingReviews] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = { name, comment };
    setPendingReviews([...pendingReviews, newReview]);
    setName("");
    setComment("");
  };

  const handleApprove = (index) => {
    const review = pendingReviews[index];
    setReviews([...reviews, review]);
    setPendingReviews(pendingReviews.filter((_, i) => i !== index));
  };

  const handleDeny = (index) => {
    setPendingReviews(pendingReviews.filter((_, i) => i !== index));
  };

  return (
    <>
      <NavMenu />
      <div
        className="bg-cover h-screen flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="text-gray-500 text-4xl font-bold mb-8">Testimonials</h1>
        <div className="bg-white p-8 rounded-lg w-1/2 mt-8">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          {reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            reviews.map((review, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-bold">{review.name}</h3>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))
          )}
        </div>
        <div className="bg-white p-8 rounded-lg w-1/2 mt-8">
          <h2 className="text-2xl font-bold mb-4">Pending Reviews</h2>
          {pendingReviews.length === 0 ? (
            <p>No pending reviews.</p>
          ) : (
            pendingReviews.map((review, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-bold">{review.name}</h3>
                <p className="text-gray-700">{review.comment}</p>
                <div className="flex justify-end">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                    onClick={() => handleApprove(index)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleDeny(index)}
                  >
                    Deny
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TestimonialsAdmin;
