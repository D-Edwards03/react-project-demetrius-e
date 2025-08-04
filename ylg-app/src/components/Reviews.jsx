import React, { useState } from "react";
import "../stylesheets/Reviews.css";

function Reviews() {
  //Static testimonials data
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

  //State to manage dynamic reviews
  const [reviews, setReviews] = useState([]);
  //State to manage form inputs and editing
  const [formData, setFormData] = useState({ name: "", comment: "" });
  const [editIndex, setEditIndex] = useState(null);

  //
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  //Function to handle form submission for adding/editing reviews
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
      //If editing, update the specific review
      const updated = [...reviews];
      updated[editIndex] = formData;
      setReviews(updated);
      setEditIndex(null);
    } else {
      //If adding new, append to reviews array
      setReviews([...reviews, formData]);
    }
    //Reset form data after submission
    setFormData({ name: "", comment: "" });
  };

  //Load existing review data into form for editing
  const handleEdit = (index) => {
    setFormData(reviews[index]); 
    setEditIndex(index);
  };

//Remove review from the array
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