import React from "react";
import "../App.css";

function FooterLinks({ items }) {
  return (
    <>
      {items.map((item) => (
        <a href={item.link}>{item.img}</a>
      ))}
    </>
  );
}

export default FooterLinks;
