import React from "react";
import "../App.css";

function TestimonialCard({items}) {
  return (
    <>
      {items.map((item) => (
        <div className="testimonial-card">
          <img src={"./img/" + item.img} />
          <div className="blockquote-card">
            <blockquote>{item.desc}</blockquote>
            <cite>{item.author}</cite>
          </div>
        </div>
      ))}
    </>
  );
}

export default TestimonialCard;
