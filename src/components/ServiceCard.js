import React from 'react'
import '../App.css'

function ServiceCard({items}) {
  return (
    <>
    {items.map((item) => (
       <div className="services-card">
       {item.img}
       <h2>{item.title}</h2>
       <p>
         {item.desc}
       </p>
       <a href={item.link}>Learn More </a>
     </div>
    ))}
    </>
  )
}

export default ServiceCard