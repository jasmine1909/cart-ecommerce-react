import React, { useState, useRef } from "react";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import products from "../../../products";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import ProductList from "../ProductList/ProductList";
import { cartActions } from "../../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState("");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  //submit review form
  const submitReview = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
    // console.log(reviewUserName, reviewUserMsg);
    const reviewObj = {
      author: reviewUser,
      text: reviewUserMsg,
      rating,
    };
    // console.log(reviewObj);
    toast.success("Thank you for your review");
  };
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );

    toast.success("Added to Cart");
  };

  ///products detail

  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    price,
    productName,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProduct = products.filter((item) => item.category === category);
  return (
    <div className="detail">
      <div className="top-detail">
        <div className="detail-card">
          <img src={imgUrl} width={350} />
          <div className="product-detail">
            <h2>{productName}</h2>
            <p className="detail-price">$ {price}</p>
            <div className="product-rating">
              <div>
                <span>
                  <AiFillStar color="orange" />
                </span>
                <span>
                  <AiFillStar color="orange" />
                </span>
                <span>
                  <AiFillStar color="orange" />
                </span>
                <span>
                  <AiFillStar color="orange" />
                </span>
                <span>
                  <AiFillStar color="orange" />
                </span>
              </div>
              <p>{avgRating}</p>

              <p>{shortDesc}</p>
              <button className="btn-add" onClick={addToCart}>
                {" "}
                Add To cart
              </button>
            </div>
          </div>
        </div>

        <div className="tab-section">
          <div className="tab-wrapper">
            <h4
              className={`${tab === "desc" ? "active-tab" : ""}`}
              onClick={() => setTab("desc")}
            >
              Description
            </h4>
            <h4
              id="review"
              className={`${tab === "rev" ? "active-tab" : ""}`}
              onClick={() => setTab("rev")}
            >
              Reviews ({reviews.length})
            </h4>
          </div>
          {tab === "desc" ? (
            <div className="tab-content">
              <p>{description}</p>
              <p></p>
            </div>
          ) : (
            <div className="product-review">
              <div className="review-wrapper">
                <ul>
                  {reviews.map((item, index) => (
                    <li>
                      <p className="review-rating">
                        {" "}
                        <AiFillStar color="orange" /> {item.rating}
                      </p>
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
                <div className="review-form">
                  <form onSubmit={submitReview}>
                    <h2> Leave your experience</h2>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        ref={reviewUser}
                      />
                    </div>
                    <div className="form-group ">
                      <motion.span
                        whileTap={{ scale: 1.2 }}
                        onClick={() => setRating(1)}
                      >
                        1<AiOutlineStar />
                      </motion.span>
                      <motion.span
                        whileTap={{ scale: 1.2 }}
                        onClick={() => setRating(2)}
                      >
                        2<AiOutlineStar />
                      </motion.span>
                      <motion.span
                        whileTap={{ scale: 1.2 }}
                        onClick={() => setRating(3)}
                      >
                        3 <AiOutlineStar />
                      </motion.span>
                      <motion.span
                        whileTap={{ scale: 1.2 }}
                        onClick={() => setRating(4)}
                      >
                        4<AiOutlineStar />
                      </motion.span>
                      <motion.span
                        whileTap={{ scale: 1.2 }}
                        onClick={() => setRating(5)}
                      >
                        5<AiOutlineStar />
                      </motion.span>
                    </div>

                    <div className="form-group">
                      <textarea
                        type="text"
                        placeholder="Your Name"
                        ref={reviewMsg}
                      />
                    </div>
                    <button className="submit-review" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="related-items">
        <h2> You might also like</h2>
        <ProductList data={relatedProduct} />
      </div>
    </div>
  );
};

export default ProductDetail;
