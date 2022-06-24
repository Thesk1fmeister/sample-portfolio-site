import React, { useState } from "react";
import Category from "../components/Category";
import PortfolioCard from "../components/PortfolioCard";

function Portfolio() {
  const [cardInfo, setCardInfo] = useState([
    {
      id: 1,
      title: "Square Box Mockup",
      category: "Mockup",
      img: "ptf1.webp",
    },
    {
      id: 2,
      title: "Product Box Package Mockup",
      category: "Mockup",
      img: "ptf2.webp",
    },
    {
      id: 3,
      title: "Creative Package Design",
      category: "Packaging",
      img: "ptf3.webp",
    },
    {
      id: 4,
      title: "Packaging Brand",
      category: "Packaging",
      img: "ptf4.webp",
    },
    {
      id: 5,
      title: "Isometric 3D Extrusion",
      category: "Typography",
      img: "ptf5.webp",
    },
    {
      id: 6,
      title: "White Space Photography",
      category: "Photography",
      img: "ptf6.webp",
    },
  ]);
  const [currentCard, setCurrentCard] = useState(cardInfo);

  const chooseCategory = (category) => {
    if (category === "All") {
      setCurrentCard(cardInfo);
      return;
    }
    setCurrentCard(cardInfo.filter((el) => el.category === category));
  };

  return (
    <section>
      <div className="portfolio" id="portfolio">
        <h1>
          Featured <strong>Portfolio</strong>
        </h1>
        <div className="portfolio-nav">
          <ul>
            <Category choice={chooseCategory}/>
          </ul>
        </div>
        <div className="portfolio-cards">
          <PortfolioCard items={currentCard} />
          {/* <div className="p-card">
            <img src="./img/pft-b1.webp" />
            <h3>Square Box Mockup</h3>
            <h5>MOCKUP</h5>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
