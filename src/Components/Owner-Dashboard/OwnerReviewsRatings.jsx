import React, { useState } from "react";
import { Star } from "lucide-react";

function OwnerReviewsRatings() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      restaurant: "Spice Villa",
      item: "Cheese Pizza",
      customer: "Rahul Sharma",
      rating: 5,
      comment: "Amazing pizza! Loved the cheese and crust.",
      date: "2025-10-12",
    },
    {
      id: 2,
      restaurant: "Spice Villa",
      item: "Veg Burger",
      customer: "Anjali Mehta",
      rating: 4,
      comment: "Good taste, but a bit oily.",
      date: "2025-10-10",
    },
    {
      id: 3,
      restaurant: "Taste Hub",
      item: "Paneer Tikka",
      customer: "Rohan Verma",
      rating: 5,
      comment: "Perfectly spiced and tender. Highly recommend!",
      date: "2025-09-30",
    },
  ]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Customer Reviews & Ratings</h1>

      <div className="grid gap-6">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition cursor-pointer"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{review.restaurant}</h2>
                  <p className="text-gray-500">{review.item}</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0 space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                  <span className="ml-2 text-gray-500 text-sm">{review.date}</span>
                </div>
              </div>

              {/* Comment Bubble */}
              <div className="bg-orange-50 p-3 rounded-lg text-gray-700">
                <span className="font-medium">{review.customer}:</span> {review.comment}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 p-6">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default OwnerReviewsRatings;
