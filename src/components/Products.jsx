import React, { useEffect, useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import "../styles/main.scss";
import { fetchData } from "../utils/dataFetcher";

const Products = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [categories, setCategories] = useState([]);
  const tabsRef = useRef(null);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchData("categories");
      setCategories(data);
    };

    getCategories();
  }, []);

  const tabs = [
    "All",
    "Best Selling Products",
    ...categories.map((category) => category.name),
  ];

  const scrollRight = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="container products">
      <h1 className="section-title">
        Solutions for Your <span className="colored-text">Unique</span> Health
        Goals
      </h1>
      <div className="tabs-wrapper">
        <div className="tabs" ref={tabsRef}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={selectedTab === tab ? "active tab" : "tab"}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="scroll-button" onClick={scrollRight}>
          <GoArrowRight size={20} className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Products;
