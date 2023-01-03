import React, { useState, useEffect } from "react";
import Slider from "../../components/slider/Slider";
import "./Home.scss";
import { motion } from "framer-motion";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdLoyalty } from "react-icons/md";
import products from "../../products";
import ProductCard from "./ProductCard/ProductCard";
import ProductList from "./ProductList/ProductList";

const Home = () => {
  const [data, setData] = useState([]);
  const [bestSale, setBestSale] = useState([]);
  const [mbProduct, setMbProduct] = useState([]);
  const [wireless, setWireless] = useState([]);
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSale = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobile = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredPopular = products.filter(
      (item) => item.category === "watch"
    );
    setData(filteredProducts);
    setBestSale(filteredBestSale);
    setMbProduct(filteredMobile);

    setPopular(filteredPopular);
  }, []);

  //clock
  const [days, setDay] = useState();
  const [hours, setHours] = useState();
  const [mins, setMin] = useState();
  const [secs, setSec] = useState();
  let interval;
  const countDown = () => {
    const destination = new Date("Dec 23, 2022");
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((different % (1000 * 60)) / 1000);
    });
    if (destination < 0) clearInterval(interval.current);
    else {
      setDay(days);
      setHours(hours);
      setMin(mins);
      setSec(secs);
    }
  };
  useEffect(() => {
    countDown();
  });

  return (
    <div>
      <Slider />
      {/* //service */}
      <div className="container">
        <div className="service">
          <motion.div whileHover={{ scale: 1.1 }} className="service-item">
            <span>
              <FaShippingFast size={38} color="orange" />
            </span>
            <div>
              <h3> Free Shipping </h3>
              <p> Loren ipsum dolor sit amet</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="service-item">
            <span>
              <GiReturnArrow size={38} color="orange" />
            </span>
            <div>
              <h3> Easy return </h3>
              <p> Loren ipsum dolor sit amet</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="service-item">
            <span>
              <RiSecurePaymentLine size={38} color="orange" />
            </span>
            <div>
              <h3> Secure Payment </h3>
              <p> Loren ipsum dolor sit amet</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="service-item">
            <span>
              <MdLoyalty size={38} color="orange" />
            </span>
            <div>
              <h3> Loyalty Award </h3>
              <p> Loren ipsum dolor sit amet</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="product-section  ">
        <h2 className="title">Our Selection Products</h2>
        <ProductList data={data} />

        <h2 className="title">Our Trending Products</h2>
        <ProductList data={mbProduct} />

        <h2 className="title">Our Popular Products</h2>
        <ProductList data={popular} />
      </div>
    </div>
  );
};

export default Home;
