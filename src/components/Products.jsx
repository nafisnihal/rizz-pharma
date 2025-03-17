import React, { useEffect, useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { MdAddShoppingCart } from "react-icons/md";
import "../styles/main.scss";
import { fetchData } from "../utils/dataFetcher";

const Products = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const tabsRef = useRef(null);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchData("categories");
      setCategories(data);
    };

    const getProducts = async () => {
      const data = await fetchData("products");
      setProducts(data);
    };

    getCategories();
    getProducts();
  }, []);

  const tabs = [
    "All",
    "Best Selling Products",
    ...categories.map((category) => category.name),
  ];

  // Filter products based on selected category
  const filteredProducts =
    selectedTab === "All"
      ? products
      : products.filter((product) => product.category.includes(selectedTab));

  // Function to scroll tabs to the right
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

      {/* 🔹 Render Filtered Products */}
      <div className="products-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-info">
                <img src={product.image} alt={product.name} />
                <h3 className="colored-text">{product.name}</h3>
              </div>
              {product.condition && (
                <p
                  className={
                    product.condition === "Research use only"
                      ? "product-condition research-gradient"
                      : "product-condition recurring-gradient"
                  }
                >
                  {product.condition}
                </p>
              )}

              <div className="card-bottom">
                <p className="product-charges">
                  {product.charges.map((charge, index) => (
                    <span key={index}>
                      {charge}
                      <br />
                    </span>
                  ))}
                </p>
                <button className="cart-btn">
                  <MdAddShoppingCart size={18} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
