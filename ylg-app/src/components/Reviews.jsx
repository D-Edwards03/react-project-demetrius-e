import React from "react";
//import "../stylesheets/Reviews.css";

function Reviews() {
  const testimonials = [
    {
      name: "Jim",
      comment: "Professional and timely service. Lawn looks great!",
    },
    {
      name: "Trish",
      comment: "They went above and beyond. Highly recommend!",
    },
    {
      name: "Calvin",
      comment:
        "Took care of my commercial property, and now customers won't stop complementing me.",
    },
    {
      name: "Elizabeth",
      comment:
        "Your Lawn Guy transformed my yard! Best decision I made all season.",
    },
  ];

  return (
    <section className="review">
      <h3>Customer Testimonials</h3>
      <div className="reviewGrid">
        {testimonials.map((review, index) => (
          <div key={index} className="reviewCard">
            <h4>{review.name}</h4>
            <p>"{review.comment}"</p>
            <div className="stars">{"★".repeat(5)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;