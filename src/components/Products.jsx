import React, { useEffect, useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { MdAddShoppingCart } from "react-icons/md";
import "../styles/main.scss";
import { fetchData } from "../utils/dataFetcher";

const Products = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
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

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle page change
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTab]);

  // Function to scroll tabs to the right
  const scrollRight = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="container products" id="products">
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

      <div className="products-list">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
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

      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={goToPreviousPage} disabled={currentPage === 1}>
            <BsArrowLeft size={24} />
          </button>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            <BsArrowRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
