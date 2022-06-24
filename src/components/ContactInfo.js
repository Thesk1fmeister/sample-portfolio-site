import React from "react";
import "../App.css";

function ContactInfo({items}) {
  return (
    <>
      {items.map((item) => (
        <li>
          {item.type}
          <br />
          <span>{item.info}</span>
        </li>
      ))}
    </>
  );
}

export default ContactInfo;
