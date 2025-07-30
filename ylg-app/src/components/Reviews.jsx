import React, { useState } from "react";
import "../stylesheets/Reviews.css";

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

  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: "", comment: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
      const updated = [...reviews];
      updated[editIndex] = formData;
      setReviews(updated);
      setEditIndex(null);
    } else {
      setReviews([...reviews, formData]);
    }
    setFormData({ name: "", comment: "" });
  };

  const handleEdit = (index) => {
    setFormData(reviews[index]); 
    setEditIndex(index);
  };

const handleDelete = (index) => {
  setReviews(reviews.filter((_, i) => i !== index));
};
  return (
    <section className="review">
      <h3>Customer Testimonials</h3>

      <div className="reviewGrid">
        {testimonials.map((review, index) => (
          <div key={index} className="reviewCard">
            <h4>{review.name}</h4>
            <p>"{review.comment}"</p>
          </div>
        ))}
        
        {reviews.map((review, index) => (
          <div key={index} className="reviewCard">
            <h4>{review.name}</h4>
            <p>"{review.comment}"</p>
            <div className="reviewActions">
              <button onClick={() => handleEdit(index)}> Edit</button>
              <button onClick={() => handleDelete(index)}> Delete</button>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="reviewForm">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="comment"
          placeholder="Your Review"
          value={formData.comment}
          onChange={handleInputChange}
          required
          rows={6}
          cols={55}
        />
        <button type="submit">{editIndex !== null ? "Update" : "Add"} Review</button>
      </form>
    </section>
  );
}

export default Reviews;