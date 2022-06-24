import React from "react";
import "../App.css";
import { MdDateRange } from "react-icons/md";

function ExperienceCard({items}) {
  return (
    <>
      {items.map((item) => (
        <div className="exp-card">
          <span>
            <MdDateRange />
            {item.date}
          </span>
          <h2>{item.title}</h2>
          <p>
            {item.desc}
          </p>
          <h4>{item.place}</h4>
        </div>
      ))}
    </>
  );
}

export default ExperienceCard;
