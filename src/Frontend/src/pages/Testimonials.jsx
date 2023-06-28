import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import backgroundImage from "../assets/images/playaDev.jpeg";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = { name, comment };
    setReviews([...reviews, newReview]);
    setName("");
    setComment("");
  };

  return (
    <>
      <NavMenu />
      <div
        className="bg-cover h-screen flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="text-gray-500 text-4xl font-bold mb-8">Testimonials</h1>
        <div className="bg-white  p-8 rounded-lg w-1/2">
          <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="comment"
                className="block text-gray-700 font-bold mb-2"
              >
                Comment:
              </label>
              <textarea
                id="comment"
                rows={5}
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
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
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
