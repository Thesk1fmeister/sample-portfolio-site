import React, { useState } from "react";


function Category({choice}) {
  const [category, setCategory] = useState([
    { id: "All", title: "All" },
    { id: "Packaging", title: "Packaging" },
    { id: "Mockup", title: "Mockup" },
    { id: "Typography", title: "Typography" },
    { id: "Photography", title: "Photography" },
  ]);
  return (
    <>
      {category.map((el) => (
        <li id={el.id} onClick={() => choice(el.id)}>
          {el.title}
        </li>
      ))}
    </>
  );
}

export default Category;
