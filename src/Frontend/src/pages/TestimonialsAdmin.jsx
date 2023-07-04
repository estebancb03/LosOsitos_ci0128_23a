import { useState, useEffect } from "react";
import NavMenu from "../components/NavMenu/NavMenu";
import useTestimonials from "../hooks/useTestimonials";
import { formatDateDTDDMMYYYY } from "../helpers/formatDate";
import backgroundImage from "../assets/images/playaDev.jpeg";

const TestimonialsAdmin = () => {
  const [reviews, setReviews] = useState([]);
  const [pendingReviews, setPendingReviews] = useState([]);
  const { reviewsHook, fetchReviews, updateReviewState } = useTestimonials();

  const handleApprove = async (index) => {
    const review = pendingReviews[index];
    await updateReviewState(review.ID, 1);
    await fetchReviews();
  };

  const handleDeny = async (index) => {
    const review = pendingReviews[index];
    await updateReviewState(review.ID, 2);
    await fetchReviews();
  };

  const divideReviews = () => {
    let reviewsTemp = [];
    let pendingReviewsTemp = [];
    reviewsHook.map((review, index) => {
      if (review.State == 0) {
        pendingReviewsTemp.push(review);
      } else {
        reviewsTemp.push(review);
      }
    });
    setPendingReviews(pendingReviewsTemp);
    setReviews(reviewsTemp);
  };

  useEffect(() => {
    fetchReviews();
  },[]);

  useEffect(() => {
    console.log(reviewsHook);
    divideReviews();
  },[reviewsHook]);

  return (
    <>
      <NavMenu />
      <div
        className="bg-cover h-screen flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="text-gray-500 text-4xl font-bold mb-8">Testimonials</h1>
        <div className="bg-white p-8 rounded-lg w-1/2 mt-8">
          <h2 className="text-2xl font-bold mb-4">Pending Reviews</h2>
          {pendingReviews.length === 0 ? (
            <p>No pending reviews.</p>
          ) : (
            pendingReviews.map((review, index) => (
              <div data-cy={review.Name + "-pending-testimonial"} key={index} className="mb-4">
                <h3 className="text-lg font-bold">{review.Name + " " + review.LastName1}</h3>
                <h4 className="text-sm">{formatDateDTDDMMYYYY(review.Date)}</h4>
                <p className="text-gray-700">{review.Description}</p>
                <div className="flex justify-end">
                  <button
                    data-cy={review.Name + "-testimonial" + "-approve-button"}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                    onClick={() => handleApprove(index)}
                  >
                    Approve
                  </button>
                  <button
                    data-cy={review.Name + "-testimonial" + "-deny-button"}
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
                <div className="bg-white p-8 rounded-lg w-1/2 mt-8">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          {reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            reviews.map((review, index) => (
              <div data-cy={review.Name + "-approved-testimonial"} key={index} className="mb-4">
                <h3 className="text-lg font-bold">{review.Name + " " +review.LastName1}</h3>
                <h4 className="text-sm">{formatDateDTDDMMYYYY(review.Date)}</h4>
                <h4 className="text-sm">State: {review.State === 1 ? "Approved" : "Rejected"}</h4>
                <p className="text-gray-700">{review.Description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default TestimonialsAdmin;