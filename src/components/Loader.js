import React from "react";
import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src="" />

        <h1> Loading ....</h1>
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;
