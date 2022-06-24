import React, { useState } from "react";
import "../App.css";
import TestimonialCard from "../components/TestimonialCard";

function Testimonial() {
  const [review, setReview] = useState([
    {
      id: 1,
      img: "client1.webp",
      desc: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separatedthey live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      author: "— Ethan McCown, CEO XYZ Inc.",
    },
    {
      id: 2,
      img: "client2.webp",
      desc: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separatedthey live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      author: "— Craig Gowen, CEO XYZ Inc.",
    },
    {
      id: 3,
      img: "client3.webp",
      desc: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separatedthey live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      author: "— Ethan McCown, CEO XYZ Inc.",
    },
    {
      id: 4,
      img: "client4.webp",
      desc: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separatedthey live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      author: "— Craig Gowen, CEO XYZ Inc.",
    },
  ]);
  return (
    <section>
      <div className="testimonial">
        <div className="testimonial-header">
          <h1>
            Client <strong>Testimonial</strong>
          </h1>
        </div>
        <div className="testimonial-block">
          <TestimonialCard items={review}/> 
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
