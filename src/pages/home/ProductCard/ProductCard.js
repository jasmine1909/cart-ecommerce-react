import React, { useState } from "react";
import "./ProductCard.scss";
import { BsCartPlusFill } from "react-icons/bs";
import { motion } from "framer-motion";
import products from "../../.././products";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux/slice/cartSlice";
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("Product added");
  };
  return (
    <div>
      <Link to={`/shop/${item.id}`}>
        {" "}
        <div className="product-item">
          <div className="product-img">
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={item.imgUrl}
              width={200}
            />
          </div>

          <h3 className="product-name">
            <Link>{item.productName}</Link>
          </h3>
          <p className=""> Category: {item.category}</p>

          <div className="product-bottom">
            <div>
              <h4 className="price"> ${item.price}</h4>
            </div>
            <motion.div whileHover={{ scale: 1.3 }} onClick={addToCart}>
              <BsCartPlusFill size={23} color="orange" />
            </motion.div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
