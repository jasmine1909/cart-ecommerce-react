import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ data }) => {
  return (
    <div className="product-trending container">
      {data.map((item) => (
        <ProductCard item={item} />
      ))}
    </div>
  );
};

export default ProductList;
