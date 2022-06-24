import React from "react";
import "../App.css";

function PortfolioCard({ items }) {
  return (
    <>
      {items.map((item) => (
        <div className="p-card">
          <img src={'./img/' + item.img} />
          <h3>{item.title}</h3>
          <h5>{item.category}</h5>
        </div>
      ))}
    </>
  );
}

export default PortfolioCard;
