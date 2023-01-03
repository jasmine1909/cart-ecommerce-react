import React, { useEffect, useState } from "react";
import "./Slider.scss";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const sliderData = [
  {
    image: "https://i.ibb.co/CBGRLhG/bg-4.jpg",
    heading: "Shoes Villa",
    desc: "Up to 30% off on all onsale proucts.",
  },
  {
    image: "https://i.ibb.co/cDLBk5h/bg-1.jpg",
    heading: "Women Fashion",
    desc: "Up to 30% off on all onsale proucts.",
  },
  {
    image: "https://i.ibb.co/HXjD3V0/bg-2.jpg",
    heading: "Men Fashion",
    desc: "Up to 30% off on all onsale proucts.",
  },
  {
    image: "https://i.ibb.co/H2FRmtV/bg-3.jpg",
    heading: "Awesome Gadgets",
    desc: "Up to 30% off on all onsale proucts.",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  return (
    <div className="slider">
      <AiOutlineDoubleLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineDoubleRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((data, index) => (
        <div
          key={index}
          className={index === currentSlide ? "slide current" : "slide"}
        >
          {index === currentSlide && (
            <>
              <img src={data.image} />
              <div className="content">
                <h2>{data.heading}</h2>
                <p> {data.desc}</p>
                <a href="#product" className="--btn --btn-primary">
                  Shop Now
                </a>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
