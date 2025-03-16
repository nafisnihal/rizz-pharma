import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import "../styles/main.scss";
import { fetchData } from "../utils/dataFetcher";
import Loader from "./Loader";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  console.log("🚀 ~ Categories ~ categories:", categories);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchData("categories");
      setCategories(data);
      setLoading(false);
    };

    getCategories();
  }, []);

  return (
    <div className="container categories">
      <div className="searchbox">
        <RiSearchLine size={24} />
        <input type="text" placeholder="Search by product/treatment" />
      </div>
      <div>
        <h1 className="section-title">
          Shop by <span className="colored-text">Category</span>
        </h1>
        <div className="grid-container">
          {loading ? (
            <Loader />
          ) : (
            categories.map((category, index) => (
              <div
                key={index}
                className="grid-item"
                style={{
                  backgroundImage: `url(${category.image})`,
                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
