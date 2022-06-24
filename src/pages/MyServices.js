import React, { useState } from "react";
import "../App.css";
import { RiPagesLine } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";
import { TbMovie } from "react-icons/tb";
import ServiceCard from "../components/ServiceCard";

function MyServices() {
  const [services, setServices] = useState([
    {
      id: 1,
      img: <RiPagesLine />,
      title: "Web Designer",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      link: "http://google.com",
    },
    {
      id: 2,
      img: <VscGraphLine />,
      title: "Search Engine Optimization",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      link: "http://google.com",
    },
    {
      id: 3,
      img: <TbMovie />,
      title: "Web Designer",
      desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      link: "http://google.com",
    },
  ]);

  return (
    <section>
      <div className="services">
        <div className="services-header">
          <h1>
            My <strong>Services</strong>
          </h1>
        </div>
        <div className="services-block">
          <ServiceCard items={services}/>
        </div>
      </div>
    </section>
  );
}

export default MyServices;
