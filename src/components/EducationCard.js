import React from "react";
import "../App.css";
import { MdDateRange } from "react-icons/md";

function EducationCard({items}) {
  return (
    <>
      {items.map((item) => (
        <div className="education-card">
          <span>
            <MdDateRange />
           {item.date}
          </span>
          <h2>{item.title}</h2>
          <p>
            {item.desc}
          </p>
          <h4>{item.company}</h4>
        </div>
      ))}
    </>
  );
}

export default EducationCard;
