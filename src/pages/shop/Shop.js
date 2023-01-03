import React, { useState } from "react";
import "./Shop.scss";
import { VscSearch } from "react-icons/vsc";
import products from "../../products";
import ProductList from "../home/ProductList/ProductList";

const Shop = () => {
  const [productData, setProductData] = useState([]);

  //filter dropdown
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductData(filteredProducts);
    }
  };

  //search
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchProduct = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductData(searchProduct);
  };
  return (
    <div>
      <div className="filter-section container">
        <div className="filter-widget">
          <select onChange={handleFilter}>
            <option>Filter By category</option>
            <option value="sofa">Sofa</option>
            <option value="mobile">Mobile</option>
            <option value="chair">Chair</option>
            <option value="watch">Watch</option>
            <option value="wireless">Wireless</option>
          </select>
        </div>

        <div className="filter-widget">
          <select>
            <option>Sort By</option>
            <option value="ascending ">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>

        <div className="search-box">
          <input onChange={handleSearch} type="text" placeholder="Search" />
          <span>
            <VscSearch color="purple" size={19} />
          </span>
        </div>
      </div>

      <div className="product-list">
        {productData.length === 0 ? (
          <h1> No product found </h1>
        ) : (
          <ProductList data={productData} />
        )}
      </div>
    </div>
  );
};

export default Shop;
