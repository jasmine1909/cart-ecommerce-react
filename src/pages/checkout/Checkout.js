import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.scss";

const Checkout = () => {
  const total = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="checkout-container container">
      <div>
        <div>
          <h2> Billing Information</h2>
          <form>
            <input className="" type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter your email" />
            <input type="text" placeholder="Enter your phone number" />
            <input type="text" placeholder="Street Address" />
            <input type="text" placeholder="city" />
            <input type="text" placeholder="Postal code" />
            <input type="text" placeholder="Country" />
          </form>
        </div>
      </div>
      <div className="right-checkout">
        <h4> Total Quantity: {totalQuantity}</h4>
        <h4> Subtotal: $ {total}</h4>
        <h4> Shipping: $ 20</h4>

        <h4> Total Cost: $ {total + 20}</h4>
        <button className="--btn --btn-1"> Place an order</button>
      </div>
    </div>
  );
};

export default Checkout;
